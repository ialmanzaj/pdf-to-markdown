import ParseResult from '../models/ParseResult.jsx';

export default class Result {

    constructor() {}

    convertToMarkdown(pages, transformations) {
        //console.log(transformations);

        let parseResult = new ParseResult({ pages: pages });

        var lastTransformation;
        transformations.forEach(transformation => {
            if (lastTransformation) {
                parseResult = lastTransformation.completeTransform(parseResult);
            }
            parseResult = transformation.transform(parseResult);
            lastTransformation = transformation;
        });

        let text = '';
        parseResult.pages.forEach(page => {
            page.items.forEach(item => {
                text += item + '\n';
            });
        });

        return text
    }
}
