import fetch from 'node-fetch';

import AppState from '../models/AppState.jsx';

export default class Converter {

	constructor() {
		this.appState = new AppState();
		this.result = "";
	}

	uploadFile(url){

		fetch(url)
		 .then(res => res.buffer())
		 .then(buffer =>  {
		 	return buffer;
		});

	}

	saveBuffer(buffer){
		this.appState.storeFileBuffer = buffer;
	}
	
	convert() {
		const loading = new Loading(appState.fileBuffer);

		//parse pdf
		loading.parsePdf();

		//store pages 
		appState.storePdfPagesFunction = loading.getPages();

		//convert pages to markdown
		this.result = new Result(appState.pages,appState.transformations).convertToMarkdown();
	}

	result(){
		return this.result;
	}

}
