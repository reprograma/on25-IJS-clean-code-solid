/* globals describe, it */
let jest = require('jest');
jest.should();

let HtmlTextConverter = require('../text-converter/html-text-converter.js');

describe('Html Converter', function() {

	describe('HtmlTextConverter', function() {

		it('foo', function() {
			let converter = new HtmlTextConverter('foo');
			converter.getFilename().should.equal('fixme');
		});

	});

});
