import Transformation from './Transformation.jsx';
import ParseResult from '../ParseResult.jsx';

export default class ToMarkdown extends Transformation {

    constructor() {
        super("To Markdown", "String");
    }

    transform(parseResult:ParseResult) {
        parseResult.pages.forEach(page => {
            var text = '';
            page.items.forEach(block => {
                text += block.text + '\n';
            });
            page.items = [text];
        });
        return new ParseResult({
            ...parseResult,
        });
    }

}
