import App from './components/App.jsx';
import AppState from './models/AppState.jsx';

export class Converter {

   constructor() {
		this.app = new App(new AppState());
		this.result = "";
	}

	uploadFile(url){
		this.app.uploadFile(url);
	}
	
	convert() {
		this.result = this.app.convert();
	}

	result(){
		return this.result;
	}

}