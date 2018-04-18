import Parser from './Parser.jsx';
import Result from './Result.jsx'

export default class App {

    constructor(appState) {
        this.appState = appState;
    }

    /*uploadFile(url){


         fetch(url)
             .then(res => res.text())
             .then(body => console.log(body));

         fetch(url)
             .then(res => res.buffer())
             .then(buffer => fileType(buffer)).then(type => {

                console.log( fileType(buffer) );

            });
    }*/

    convertToMarkdownUrl(url) {
        const appState = this.appState;
        const resultConvert = new Result();

        const parser = new Parser();

        return parser.parseDocumentUrl(url)
            .then(function(pdfDocument) {
                return Promise.all([
                    pdfDocument,
                    parser.parsePages(pdfDocument)
                ]);
            })
            .then(function(array) {
                return Promise.all([
                    array[0],
                    array[1],
                    parser.getFontMap()
                ]);
            })
            .then(function(array) {
                return Promise.all([
                    array[1],
                    array[2],
                    parser.metadataParsed(array[0])
                ]);

            })
            .then(function(array) {
                const pages = array[0];
                const metadata = array[2];
                var fontMap = new Map();

                array[1].forEach((font) => {
                    fontMap.set(font.fontId, font.font);
                });

                //console.log(pages);
                //console.log(fontMap);
                //console.log(metadata);

                appState.storePdfPages(metadata, fontMap, pages);
                var text = resultConvert.convertToMarkdown(
                    appState.pages, appState.transformations
                );

                return text;
            });

    }

    convertToMarkdownBuffer(buffer) {
        const appState = this.appState;
        const resultConvert = new Result();

        const parser = new Parser();


        return parser.parseDocumentBuffer(buffer)
            .then(function(pdfDocument) {
                return Promise.all([
                    pdfDocument,
                    parser.parsePages(pdfDocument)
                ]);
            })
            .then(function(array) {
                return Promise.all([
                    array[0],
                    array[1],
                    parser.getFontMap()
                ]);
            })
            .then(function(array) {
                return Promise.all([
                    array[1],
                    array[2],
                    parser.metadataParsed(array[0])
                ]);

            })
            .then(function(array) {
                const pages = array[0];
                const metadata = array[2];
                var fontMap = new Map();

                array[1].forEach((font) => {
                    fontMap.set(font.fontId, font.font);
                });

                //console.log(pages);
                //console.log(fontMap);
                //console.log(metadata);

                appState.storePdfPages(metadata, fontMap, pages);
                var text = resultConvert.convertToMarkdown(
                    appState.pages, appState.transformations
                );

                return text;
            });

    }


}
