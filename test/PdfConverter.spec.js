/* global describe, it, before */

import  from 'chai';
import { Converter } from '../lib/pdfconverter.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my PdfConverterlibrary', () => {
  before(() => {
    lib = new PdfConverterLibrary.Converter();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Cat');
    });
  });
});



