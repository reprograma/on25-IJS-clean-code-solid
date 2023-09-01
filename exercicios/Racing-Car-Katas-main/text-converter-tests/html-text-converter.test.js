var chai = require('chai');
chai.should();

var HtmlTextConverter = require('../text-converter/html-text-converter.js');

describe('Html Converter', () => {

	describe('HtmlTextConverter', () => {

		it('foo', () => {
			var converter = new HtmlTextConverter('foo');
			converter.getFilename().should.equal('fixme');
		});

	});

});
