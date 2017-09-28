import Remarkable from 'remarkable';

import ParseResult from '../models/ParseResult.jsx';


export default class Result {

    constructor(pages, transformations) {
        this.pages = pages;
        this.transformations = transformations;
    }

    convertToMarkdown() {
        var pages = this.pages;
        var transformations = this.transformations;

        var parseResult = new ParseResult({
            pages: pages
        });

        var lastTransformation;
        transformations.forEach(transformation => {
            if (lastTransformation) {
                parseResult = lastTransformation.completeTransform(parseResult);
            }
            parseResult = transformation.transform(parseResult);
            lastTransformation = transformation;
        });

        var text = '';
        parseResult.pages.forEach(page => {
            page.items.forEach(item => {
                text += item + '\n';
            });
        });

        return text
    }
  
}


