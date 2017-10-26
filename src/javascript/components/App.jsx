import fetch from 'node-fetch';
import fileType from 'file-type';

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

    uploadFile(buffer) {
        console.log("uploadFile");
        const appState = this.appState;

        const resultConvert = new Result();

        const parser = new Parser(buffer);
        parser.parsePages().then(function(result) {
           
            //console.log("document: " + result.document);
            console.log(result.pages);
            //console.log("fontMap: " + result.fontMap);

            return Promise.all([result, parser.metadataParsed(result.document)])

        }).then(function(results){

            let pages = results[0].pages;
            let fontMap = results[0].fontMap;
            console.log(fontMap)
            let metadata = results[1];


            appState.storePdfPages(metadata, fontMap, pages);
            var text = resultConvert.convertToMarkdown(appState.pages, appState.transformations);
            console.log("text: "+text);
        });

    }

    convert() {

        //const appState = this.props.appState;

        /*var mainView;
        switch (this.props.appState.mainView) {
            case View.UPLOAD:
                mainView = <UploadView uploadPdfFunction={ appState.storeFileBuffer } />
                break;
            case View.LOADING:
                const loading = new Loading(this.appState.fileBuffer);
                this.appState.storePdfPagesFunction = appState.storePdfPages;
                break;
            case View.RESULT:
                const pages = appState.pages;
                const transformations = appState.transformations;
                
                var result = new Result(pages, transformations);
                mainView = <ResultView pages={ appState.pages } 
                transformations={ appState.transformations } />
                return .convertToMarkdown();
            case View.DEBUG:
                mainView = <DebugView pages={ appState.pages } 
                transformations={ appState.transformations } />
                break;
            default:
                throw `View ${this.appState.mainView} not supported!`;
        }*/

    }

}