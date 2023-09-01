const HtmlTextConverterRefactored = require('../text-converter/HtmlTextConverterRefactored');

describe('Html Converter', function() {
	describe('HtmlTextConverterRefactored', function() {
		it('should convert for fixme', function() {
			let converter = new HtmlTextConverterRefactored('fixme');
        	expect(converter.getFilename()).toBe('fixme');
		});

		it('foo', () => {
			const converter = new HtmlTextConverterRefactored('Thayssa');
			converter.text = 'Thayssa';
			const result = converter.stashNextCharacterAndAdvanceThePointer();
			
			expect(result).toEqual('T');
		});
	});
});
