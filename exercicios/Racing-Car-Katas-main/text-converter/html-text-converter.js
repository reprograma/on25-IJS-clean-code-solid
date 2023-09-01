var fileSync = require('fs');

class HtmlTextConverter {
	#fullFilenameWithPath;

	constructor(fullFilenameWithPath){
		this.#fullFilenameWithPath = fullFilenameWithPath;
	}

	convertToHtml() {

		var text = fileSync.readFileSync(this.#fullFilenameWithPath).toString();

		var stashNextCharacterAndAdvanceThePointer = function() {
			var c = text.charAt(i);
			i += 1;
			return c;
		};

		var addANewLine = function() {
			var line = convertedLine.join('');
			html.push(line);
			convertedLine = [];
		};

		var pushACharacterToTheOutput = function() {
			convertedLine.push(characterToConvert);
		};

		var i = 0;
		var html = [];
		var convertedLine = [];
		var characterToConvert = stashNextCharacterAndAdvanceThePointer();
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
	}

	getFilename() {
		return this.#fullFilenameWithPath;
	}

}
module.exports = HtmlTextConverter;

const converter = new HtmlTextConverter('C:\Users\Nicole\OneDrive\Área de Trabalho\Nicole\titulo de eleitor.txt');
console.log(converter)
console.log(converter.convertToHtml())
console.log(converter);