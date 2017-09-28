import { Enum } from 'enumify';

// The format of a word element
export default class WordFormat extends Enum {

}

WordFormat.initEnum({
    BOLD: {
        startSymbol: '**',
        endSymbol: '**',
    },
    OBLIQUE: {
        startSymbol: '*',
        endSymbol: '*',
    },
    BOLD_OBLIQUE: {
        startSymbol: '**_',
        endSymbol: '_**',
    }
});
