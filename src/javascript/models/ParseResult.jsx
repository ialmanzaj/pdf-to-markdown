// The result of a PDF parse respectively a Transformation
export default class ParseResult {

    constructor(options) {
    	// like Page[]
        this.pages = options.pages;
        // properties accasable for all the following transformations in debug mode
        this.globals = options.globals; 
        // something to show only for the transformation in debug mode
        this.messages = options.messages;
    }

}
