var fs = require('fs');

class HtmlTextConverter {
	constructor(fileName){
		this._fileName = fileName;
	}

	convertToHtml(){
		var text = fs.readFileSync(this._fileName).toString(),
		stashNextCharacterAndAdvanceThePointer = () => {
			var c = text.charAt(i);
			i += 1;
			return c;
		},
		addANewLine = () =>  {
			var line = convertedLine.join('');
			html.push(line);
			convertedLine = [];
		},
		pushACharacterToTheOutput = () =>  {
			convertedLine.push(characterToConvert);
		},
		i = 0,
		html = [],
		convertedLine = [],
		characterToConvert = stashNextCharacterAndAdvanceThePointer();

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
	};

	getFilename(){
		return this._fileName;
	};
}

module.exports = HtmlTextConverter

