import Remarkable from 'remarkable';

import pdfjs from 'pdfjs-dist'; // eslint-disable-line no-unused-vars
import { Line } from 'rc-progress';

import Metadata from '../models/Metadata.jsx';
import Page from '../models/Page.jsx';
import TextItem from '../models/TextItem.jsx';

class Parser {

    constructor(fileBuffer) {
        this.fileBuffer = fileBuffer;

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
            pages.push(new Page({
                index: i
            }));
        }

        this.pages = pages;
        this.document = document;
    }

    pageParsed(index, textItems) {
        const pageStage = this.progress.pageStage();

        pageStage.stepsDone = pageStage.stepsDone + 1;
        this.pages[index].items = textItems; // eslint-disable-line react/no-direct-mutation-state

        //console.log("pageStage stepsDone: " + pageStage.stepsDone);
    }

    fontParsed(fontId, font) {
        const fontStage = this.progress.fontStage();

        this.fontMap.set(fontId, font); // eslint-disable-line react/no-direct-mutation-state
        console.log(this.fontMap);
        fontStage.stepsDone++;
        //console.log("fontStage stepsDone: " + fontStage.stepsDone);
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

    parseFonts(textContent, viewport) {
        console.log("parseFonts ");
        const self = this;
        return new Promise(function(resolve, reject) {

            const textItems = textContent.items.map(function(item) {
                console.log("resolving of fonts");

                //trigger resolving of fonts
                const fontId = item.fontName;

                if (!self.fontIds.has(fontId) && fontId.startsWith('g_d0')) {
                    self.document.transport.commonObjs.get(fontId, function(font) {
                        self.fontParsed(fontId, font);
                    });
                    self.fontIds.add(fontId);
                }

                const tx = PDFJS.Util.transform( // eslint-disable-line no-undef
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

            console.log("resolve textItems");
            resolve(textItems);
            //promise 
        });
    }

    getPage(pdfDocument, iterador) {
        //console.log("iterador "+iterador);
        const self = this;
        return new Promise(function(resolve, reject) {  


            return new Promise(function(resolve, reject) {  
                pdfDocument.getPage(iterador).then(function(page) {
                    // console.debug(page);
                    const scale = 1.0;
                    const viewport = page.getViewport(scale);

                    resolve({
                        page: page,
                        viewport: viewport
                    });
                });
            );
            


            
              
            const page = result.page;
            const viewport = result.viewport;

                page.getTextContent().then(function(textContent) {

                    self.parseFonts(textContent, viewport).then(function(textItems) {

                        return textItems;
                    });

                });



                .then(function(textItems) {


                    //set pages
                    self.pages[page.pageIndex] = textItems;

                    //console.log("page.pageIndex " + page.pageIndex);

                    resolve(self.pages[page.pageIndex]);
                });

            });

        });

    }


    pagesParsed(pdfDocument) {
        const self = this;
        let promises = [];
        //operations
        for (var j = 1; j <= pdfDocument.numPages; j++) {
            promises.push(self.getPage(pdfDocument, j));
        }
        return promises;
    }

    parsePages() {
        const self = this;

        return new Promise(function(resolve, reject) {  

            PDFJS.getDocument(self.fileBuffer).then(function(pdfDocument) {

                self.documentParsed(pdfDocument);

                return Promise.all(self.pagesParsed(pdfDocument, self.pages));

            }).then(function(pages) {

                console.log(self.fontMap);
                resolve({
                    document: self.document,
                    pages: pages,
                    fontMap: self.fontMap
                });

            });
        });

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