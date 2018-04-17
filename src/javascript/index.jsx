import App from './components/App.jsx';
import AppState from './models/AppState.jsx';

export function convertToMarkdownBuffer(buffer) {
	this.app = new App(new AppState());
	this.app.convertToMarkdownBuffer(buffer);
} 

export function convertToMarkdownUrl(url){
	this.app = new App(new AppState());
	return this.app.convertToMarkdownUrl(url);
}