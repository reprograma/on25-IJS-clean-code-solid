/* globals describe, it */
var jest = require('chai');
jest.should();

var HtmlTextConverter = require('../text-converter/html-text-converter.js');

describe('Html Converter', function() {

	describe('HtmlTextConverter', function() {

		it('foo', function() {
			var converter = new HtmlTextConverter('foo');
			converter.getFilename().should.equal('foo');
		});

		

	});

});
