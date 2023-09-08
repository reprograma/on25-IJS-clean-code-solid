let fs = require('fs');

HtmlTextConverter = function(fullFilenameWithPath) {
	this._fullFilenameWithPath = fullFilenameWithPath;
};

HtmlTextConverter.prototype = {

	convertToHtml: function() {

		let text = fs.readFileSync(this._fullFilenameWithPath).toString();

		let stashNextCharacterAndAdvanceThePointer = function() {
			let c = text.charAt(i);
			i += 1;
			return c;
		};

		let addANewLine = function() {
			let line = convertedLine.join('');
			html.push(line);
			convertedLine = [];
		};

		let pushACharacterToTheOutput = function() {
			convertedLine.push(characterToConvert);
		};

		let i = 0;
		let html = [];
		let convertedLine = [];
		let characterToConvert = stashNextCharacterAndAdvanceThePointer();
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
