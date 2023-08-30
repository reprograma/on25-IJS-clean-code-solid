var HtmlTextConverter = require('../text-converter/html-text-converter.js');
const fs = require('fs');

jest.mock('fs');

describe('Html Converter', function() {

	describe('HtmlTextConverter', function() {

		it('foo', function() {
			var converter = new HtmlTextConverter('foo');
			expect(converter.getFilename()).toEqual('foo');
		});

		it('should convert text to HTML', () => {
			const mockText = 'This is <test> & example.\nNew line.';
			const expectedHtml = 'This is &lt;test&gt; &amp; example.<br />New line.';
			fs.readFileSync.mockReturnValue(mockText);

			const converter = new HtmlTextConverter('test.txt');
			const html = converter.convertToHtml();

			expect(html).toBe(expectedHtml);
  	});

	});

});