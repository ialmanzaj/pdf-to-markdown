import pdfjs from 'pdfjs-dist'; // eslint-disable-line no-unused-vars

import Page from '../models/Page.jsx';
import TextItem from '../models/TextItem.jsx';

class Parser {

    constructor() {
        const progress = new Progress({
            stages: [
                new ProgressStage('Parsing Metadata', 2),
                new ProgressStage('Parsing Pages'),
                new ProgressStage('Parsing Fonts', 0)
            ]
        });

        Progress.prototype.metadataStage = () => {
            return progress.stages[0]
        };

        Progress.prototype.pageStage = () => {
            return progress.stages[1]
        };

        Progress.prototype.fontStage = () => {
            return progress.stages[2]
        };

        this.progress = progress;

        //parse document vars
        this.document = null;
        this.metadata = null;
        this.pages = [];
        this.fonts = new Set();
        this.fontIds = new Set();
        this.fontMap = new Map();
    }

    documentParsed(document) {
        const metadataStage = this.progress.metadataStage();
        const pageStage = this.progress.pageStage();
        metadataStage.stepsDone++;

        const numPages = document.numPages;
        pageStage.steps = numPages;
        pageStage.stepsDone;

        //console.log("pageStage stepsDone: " + pageStage.stepsDone)

        var pages = [];
        for (var i = 0; i < numPages; i++) {
            pages.push(new Page({ index: i }));
        }

        this.pages = pages;
        this.document = document;
    }

    pageParsed(index, textItems) {
        const pageStage = this.progress.pageStage();

        pageStage.stepsDone = pageStage.stepsDone + 1;
        this.pages[index].items = textItems;
    }

    fontParsed(fontId, font) {

        const fontStage = this.progress.fontStage();

        this.fontMap.set(fontId, font); // eslint-disable-line react/no-direct-mutation-state
        fontStage.stepsDone++;

        //console.log("fontParsed ------------> " + this.fontMap.size);
        //console.log(this.fontMap);
    }

    metadataParsed(pdfDocument) {
        return new Promise(function(resolve, reject) {  
            //operation
            pdfDocument.getMetadata().then(function(metadata) {
                //return metadata
                resolve(metadata);
            });
        });
    }

    getPage(pdfDocument, iterador) {
        return new Promise(function(resolve, reject) {  
            pdfDocument.getPage(iterador).then(function(page) {
                // console.debug(page);
                const scale = 1.0;
                const viewport = page.getViewport(scale);

                page.getTextContent().then(function(textContent) {

                    resolve({
                        page: page,
                        viewport: viewport,
                        textContent: textContent
                    });

                });

            });
        });
    }


    getPageParsed(pdfDocument, iterador) {
        //console.log("iterador "+iterador);
        const self = this;

        return new Promise(function(resolve, reject) {  

            self.getPage(pdfDocument, iterador).then(function(result) {

                const viewport = result.viewport;
                const page = result.page;
                const textContent = result.textContent;
                const pageIndex = result.page.pageIndex;

                const textItems = textContent.items.map(function(item) {

                    //trigger resolving of fonts
                    const fontId = item.fontName;

                    if (!self.fontIds.has(fontId) && fontId.startsWith('g_d0')) {
                        self.fontIds.add(fontId);
                    }

                    const tx = PDFJS.Util.transform(
                        viewport.transform,
                        item.transform
                    );

                    const fontHeight = Math.sqrt((tx[2] * tx[2]) + (tx[3] * tx[3]));
                    const dividedHeight = item.height / fontHeight;
                    return new TextItem({
                        x: Math.round(item.transform[4]),
                        y: Math.round(item.transform[5]),
                        width: Math.round(item.width),
                        height: Math.round(dividedHeight <= 1 ? item.height : dividedHeight),
                        text: item.str,
                        font: item.fontName
                    });
                });

                page.getOperatorList().then(function() {
                    // do nothing... this is only for triggering the font retrieval
                });

                self.pages[pageIndex].items = textItems;
                resolve(self.pages[pageIndex]);
            });


        });

    }


    pagesParsed(pdfDocument) {
        const self = this;
        let promises = [];
        //operations
        for (var j = 1; j <= pdfDocument.numPages; j++) {
            promises.push(self.getPageParsed(pdfDocument, j));
        }
        return promises;
    }


    parseFontMaps(fontIds) {
        const self = this;
        let promises = [];

        fontIds.forEach((fontId) => {
            promises.push(self.parseFont(fontId));
        });

        return promises;
    }

    getFontMap() {
        const self = this;
        //console.log(self.fontIds);
        return Promise.all(self.parseFontMaps(self.fontIds)).then(fonts => {
            return fonts;
        });
    }

    parseFont(fontId) {
        const self = this;

        return new Promise(function(resolve, reject) {  
            self.document.transport.commonObjs.get(fontId, function(font) {

                self.fontParsed(fontId, font);

                resolve({
                    fontId: fontId,
                    font: font
                });
            });

        });

    }


    parseDocumentUrl(url) {
        const self = this;
        var loadingTask = PDFJS.getDocument(url);
        return loadingTask.promise.then(function(pdfDocument) {
            self.documentParsed(pdfDocument);
            return pdfDocument;
        });
    }

    parseDocumentBuffer(fileBuffer) {
        const self = this;
        return PDFJS.getDocument(fileBuffer).then(function(pdfDocument) {
            self.documentParsed(pdfDocument);
            return pdfDocument;
        });
    }

    parsePages(pdfDocument) {
        const self = this;
        return Promise.all(self.pagesParsed(pdfDocument, self.pages));
    }

}

function getPercentDone(progress) {
    const activeStage = progress.activeStage();
    const percentDone = activeStage.percentDone();

    if (percentDone == 100) {
        progress.completeStage();
        if (!progress.isComplete()) {
            return getPercentDone(progress, 0);
        }
    }

    return percentDone;
}

class Progress {

    constructor(options) {
        this.stages = options.stages;
        this.currentStage = 0;
    }

    completeStage() {
        this.currentStage++;
    }

    isComplete() {
        return this.currentStage == this.stages.length;
    }

    activeStage() {
        return this.stages[this.currentStage];
    }

}

class ProgressStage {

    constructor(name, steps) {
        this.name = name;
        this.steps = steps;
        this.stepsDone = 0;
    }

    isComplete() {
        return this.stepsDone == this.steps;
    }

    percentDone() {
        if (typeof this.steps === 'undefined') {
            // if (!this.steps) {
            return 0;
        }
        if (this.steps == 0) {
            return 100;
        }

        return this.stepsDone / this.steps * 100;
    }
}

export default Parser;