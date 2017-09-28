import Remarkable from 'remarkable';

export default class App {

	constructor(appState) {
		this.appState = appState;
	}

	uploadFile(fileBuffer){
		this.appState.storeFileBuffer = fileBuffer;
	}

	convert() {
		const loading = new Loading(appState.fileBuffer);

		//parse pdf
		loading.parsePdf();

		//store pages 
		appState.storePdfPagesFunction = loading.getPages();

		//convert pages to markdown
		var text = new Result(appState.pages,appState.transformations).convertToMarkdown();
		return text;
	}

}
 

  


