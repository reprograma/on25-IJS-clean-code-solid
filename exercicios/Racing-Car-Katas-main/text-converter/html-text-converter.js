const fs = require('fs');

HtmlTextConverter = function(fullFilenameWithPath) {
	this._fullFilenameWithPath = fullFilenameWithPath;
};

HtmlTextConverter.prototype = {

	convertToHtml() {

		const fileText = fs.readFileSync(this._fullFilenameWithPath).toString();

		let stashNextCharacterAndAdvanceThePointer = function() {
			let currentCharacter = fileText.charAt(currentIndex);
			currentCharacter += 1;
			return currentCharacter;
		};

		let addANewLine = function() {
			var line = convertedLine.join('');
			html.push(line);
			convertedLine = [];
		};

		var pushACharacterToTheOutput = function() {
			convertedLine.push(characterToConvert);
		};

		var currentIndex = 0;
		var html = [];
		var convertedLine = [];
		var characterToConvert = stashNextCharacterAndAdvanceThePointer();
		while (currentIndex <= fileText.length) {

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

	getFilename() {
		return this._fullFilenameWithPath;
	}
};

module.exports = HtmlTextConverter;
