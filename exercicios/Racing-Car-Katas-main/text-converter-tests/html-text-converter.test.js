const HtmlTextConverter = require('../text-converter/html-text-converter.js');

	describe('HtmlTextConverter', function() {

		it('foo', function() {
			const converter = new HtmlTextConverter('foo');
			expect(converter.getFilename()).toBe('foo')	
			
		});

	});


