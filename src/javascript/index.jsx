import App from './components/App.jsx';
import AppState from './models/AppState.jsx';

export class Converter {

   constructor() {
		this.app = new App(new AppState());
	}

	convertToMarkdownBuffer(buffer){
		return this.app.convertToMarkdownBuffer(buffer);
	}

	convertToMarkdownUrl(url){
		return this.app.convertToMarkdownUrl(url);
	}

}