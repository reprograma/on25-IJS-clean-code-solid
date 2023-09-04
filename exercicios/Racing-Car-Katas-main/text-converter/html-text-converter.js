const fs = require('fs');

HtmlTextConverter = function(fullFilenameWithPath) {
	this._fullFilenameWithPath = fullFilenameWithPath;
};

HtmlTextConverter.prototype = {

	convertToHtml: function() {

		const text = fs.readFileSync(this._fullFilenameWithPath).toString();

		const stashNextCharacterAndAdvanceThePointer = function() {
			const c = text.charAt(i);
			i += 1;
			return c;
		};

		const addANewLine = function() {
			const line = convertedLine.join('');
			html.push(line);
			convertedLine = [];
		};

		const pushACharacterToTheOutput = function() {
			convertedLine.push(characterToConvert);
		};

	let i = 0;
		const html = [];
		const convertedLine = [];
		const characterToConvert = stashNextCharacterAndAdvanceThePointer();
		while (i <= text.length) {

			switch (characterToConvert) {
				case '<':
					convertedLine.push('&lt;');
					break;
				case '>':
					convertedLine.push('&gt;');
					break;
				case '&':
					convertedLine.push('&amp;');
					break;
				case '\n':
					addANewLine();
					break;
				default:
					pushACharacterToTheOutput();
			}

			characterToConvert = stashNextCharacterAndAdvanceThePointer();
		}

		addANewLine();
		return html.join('<br />');
	},

	getFilename: function() {
		return this._fullFilenameWithPath;
	}
};

module.exports = HtmlTextConverter;
