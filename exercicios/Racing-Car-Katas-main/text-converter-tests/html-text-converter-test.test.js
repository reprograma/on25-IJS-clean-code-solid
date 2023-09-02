const chai = require('chai');
const HtmlTextConverter = require('../text-converter/html-text-converter.js');

chai.should();

describe('Html Converter', () => {
  it('should return the correct filename', () => {
    const converter = new HtmlTextConverter('foo');
    const filename = converter.getFilename();
    filename.should.equal('foo');
  });
});