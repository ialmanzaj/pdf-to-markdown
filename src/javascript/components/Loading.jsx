import Remarkable from 'remarkable';

import pdfjs from 'pdfjs-dist'; // eslint-disable-line no-unused-vars
import { Line } from 'rc-progress';

import Metadata from '../models/Metadata.jsx';
import Page from '../models/Page.jsx';
import TextItem from '../models/TextItem.jsx';


export default class Loading {

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
    }

    getPages(){
        return this.pages;
    }

     getMetadata(){
        return this.metadata;
    }

    pageParsed(index, textItems) {
        const pageStage = this.state.progress.pageStage();

        pageStage.stepsDone = pageStage.stepsDone + 1;
        this.state.pages[index].items = textItems; // eslint-disable-line react/no-direct-mutation-state
        this.setState({
            progress: this.state.progress
        });
    }

    fontParsed(fontId, font) {
        const fontStage = this.state.progress.fontStage();
        this.state.fontMap.set(fontId, font); // eslint-disable-line react/no-direct-mutation-state
        fontStage.stepsDone++;

        if (this.state.progress.activeStage() === fontStage) {
            this.setState({ //force rendering
                fontMap: this.state.fontMap,
            });
        }
    }

    metadataParsed(metadata) {
        const metadataStage = this.state.progress.metadataStage();
        metadataStage.stepsDone++;
        // console.debug(new Metadata(metadata));
        this.setState({
            metadata: new Metadata(metadata),
        });
    }

    parsePdf(){
        const self = this;
        const fontStage = this.state.progress.fontStage();

        // eslint-disable-line no-undef
        PDFJS.getDocument(self.fileBuffer).then(function(pdfDocument) { 
                // console.debug(pdfDocument);
                pdfDocument.getMetadata().then(function(metadata) {
                    // console.debug(metadata);
                    self.metadataParsed(metadata);
                });
                self.documentParsed(pdfDocument);
                for (var j = 1; j <= pdfDocument.numPages; j++) {
                    pdfDocument.getPage(j).then(function(page) {
                        // console.debug(page);
                        var scale = 1.0;
                        var viewport = page.getViewport(scale);

                        page.getTextContent().then(function(textContent) {
                            // console.debug(textContent);
                            const textItems = textContent.items.map(function(item) {
                                //trigger resolving of fonts
                                const fontId = item.fontName;
                                if (!self.state.fontIds.has(fontId) && fontId.startsWith('g_d0')) {
                                    self.state.document.transport.commonObjs.get(fontId, 
                                        function(font) {
                                        self.fontParsed(fontId, font);
                                    });
                                    self.state.fontIds.add(fontId);
                                    fontStage.steps = self.state.fontIds.size;
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
                            self.pageParsed(page.pageIndex, textItems);
                        });
                        page.getOperatorList().then(function() {
                            // do nothing... this is only for triggering the font retrieval
                        });
                    });
                }
            });
    }

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
        this.steps = steps ;
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


