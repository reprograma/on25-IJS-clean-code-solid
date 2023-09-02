const fs = require('fs');

class HtmlTextConverter {
	constructor(fullFilenameWithPath) {
		this._fullFilenameWithPath = fullFilenameWithPath;
	}

	convertToHtml() {
		const text = fs.readFileSync(this._fullFilenameWithPath, 'utf-8');
		let html = '';

		for (let i = 0; i < text.length; i++) {
			const character = text.charAt(i);
			html += this.convertCharacter(character);
		}

		return html.replace(/\n/g, '<br />');
	}

	convertCharacter(character) {
		const conversions = {
			'<': '&lt;',
			'>': '&gt;',
			'&': '&amp;'
		};

		return conversions[character] || character;
	}

	getFilename() {
		return this._fullFilenameWithPath;
	}
}

module.exports = HtmlTextConverter;
