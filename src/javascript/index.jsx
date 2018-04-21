import App from './components/App.jsx';
import AppState from './models/AppState.jsx';


export function convertToMarkdownBuffer(buffer) {
	return new App(new AppState()).convertToMarkdownBuffer(buffer);
}

export function convertToMarkdownUrl(url: String){
	return new App(new AppState()).convertToMarkdownUrl(url);
}
