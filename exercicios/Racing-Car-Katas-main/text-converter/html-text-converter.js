let fs = require('fs');
class HtmlTextConverter {
    #fullFilenameWithPath;
	html = [];
    convertedLine = [];
	i = 0;
	text = '';

    constructor(fullFilenameWithPath) {
        this.#fullFilenameWithPath = fullFilenameWithPath;
    }

	stashNextCharacterAndAdvanceThePointer(){
		let c = this.text.charAt(this.i);
		this.i += 1;
		return c;
	};

	addANewLine(){
		let line = this.convertedLine.join('');
		this.html.push(line);
		this.convertedLine = [];
	};

	pushACharacterToTheOutput(){
		let characterToConvert = this.stashNextCharacterAndAdvanceThePointer();
		this.convertedLine.push(characterToConvert);
	};

	convertToHtml(){
		let text = fs.readFileSync(this.#fullFilenameWithPath).toString();
		let characterToConvert = this.stashNextCharacterAndAdvanceThePointer();

		this.stashNextCharacterAndAdvanceThePointer();
		this.addANewLine();
		this.pushACharacterToTheOutput();

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

			addANewLine();
			return html.join('<br />');
		}
	}

	getFilename() {
        return this.#fullFilenameWithPath;
    }
}

module.exports = HtmlTextConverter;
