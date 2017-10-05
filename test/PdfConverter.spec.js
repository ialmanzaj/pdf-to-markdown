/* global describe, it, before */

import { expect } from 'chai';
import Converter  from '../lib/pdfconverter.js';


let converter;

describe('Given an instance of my PdfConverterlibrary', () => {
  before(() => {
    converter = new PdfConverterLibrary.Converter();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
     converter.upload('http://res.cloudinary.com/dcq6ukcve/raw/upload/v1507138524/principles.pdf');
    });
  });
});



