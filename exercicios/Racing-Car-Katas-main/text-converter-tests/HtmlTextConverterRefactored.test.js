const HtmlTextConverterRefactored = require('../text-converter/HtmlTextConverterRefactored');

describe('Html Converter', function() {
	describe('HtmlTextConverterRefactored', function() {
		it('foo', function() {
			const converter = new HtmlTextConverterRefactored('fixme');
        	expect(converter.getFilename()).toBe('fixme');
		});
	});
});
