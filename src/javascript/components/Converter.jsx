import AppState from '../models/AppState.jsx';

export default class Converter {

	constructor() {
		this.appState = new AppState();
		this._txt = "";
	}

	uploadFile(url){

		
		this.appState.storeFileBuffer = fileBuffer;
	}

	convert() {
		const loading = new Loading(appState.fileBuffer);

		//parse pdf
		loading.parsePdf();

		//store pages 
		appState.storePdfPagesFunction = loading.getPages();

		//convert pages to markdown
		this._txt = new Result(appState.pages,appState.transformations).convertToMarkdown();
	}

	result(){
		return this._txt;
	}

}
 

  


