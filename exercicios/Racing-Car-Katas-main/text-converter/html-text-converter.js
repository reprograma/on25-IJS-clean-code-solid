class HtmlTextConverter {
	fullFilenameWithPath

	constructor(fullFilenameWithPath){
		this.fullFilenameWithPath = fullFilenameWithPath.toString()	}


	convertToHtml(){
		
		let stashNextCharacterAndAdvanceThePointer = function() {
			let nextCharacter = this.fullFilenameWithPat.charAt(i);
			i += 1;
			return nextCharacter;
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
	}


	getFilename(){
		return this._fullFilenameWithPath;
	}
}
module.exports = HtmlTextConverter;
