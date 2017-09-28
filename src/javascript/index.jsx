import App from './components/App.jsx';
import AppState from './models/AppState.jsx';

export default class PdfConverter {

	constructor() {
		const appState = new AppState();
		this.app = new App(appState);
	}

	uploadFile(fileBuffer){
		this.app.uploadFile(fileBuffer);
	}

	convert(){
		const text = this.app.convert();
		return text;
	}

}


