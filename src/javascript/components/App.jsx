import fetch from 'node-fetch';
import fileType from 'file-type';

import Loading from './Loading.jsx';
import Result from './Result.jsx'

export default class App {

	constructor(appState) {
		this.appState = appState;
	}

	uploadFile(url){


        fetch(url)
            .then(res => res.text())
            .then(body => console.log(body));

		/*fetch(url)
			.then(res => res.buffer())
			.then(buffer => fileType(buffer))
			.then(type => { 

				console.log( fileType(buffer) );
				
			});*/
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