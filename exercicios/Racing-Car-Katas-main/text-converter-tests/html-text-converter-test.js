let HtmlTextConverter = require('../text-converter/html-text-converter.js');

describe('check class HtmlTextConverter', () => {

	let converter;

	beforeEach(() => {
		converter = new HtmlTextConverter('foo');
	})

	it('should verify the function getFilename', () => {
		expect(converter.getFilename()).toBe('foo');
	});

	it('should verify the function stashNextCharacterAndAdvanceThePointer', () => {
		converter.text = 'foo';
		converter.i = 1;
		expect(converter.stashNextCharacterAndAdvanceThePointer()).toBe('o');
	});
});