var fs = require('fs');

class HtmlTextConverterRefactored {
    constructor(fullFilenameWithPath) {
        this.fullFilenameWithPath = fullFilenameWithPath;
        this.html = [];
        this.convertedLine = [];
    }

    stashNextCharacterAndAdvanceThePointer(i) {
        var c = this.text.charAt(i);
        i += 1;
        return c;
    }

    addANewLine() {
        var line = this.convertedLine.join('');
        this.html.push(line);
        this.convertedLine = [];
    }

    pushACharacterToTheOutput(characterToConvert) {
        this.convertedLine.push(characterToConvert);
    }

	convertCharacter(){
		const specialCharacters = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;'
        };

        let i = 0;
        let characterToConvert = this.stashNextCharacterAndAdvanceThePointer(i);
        while (i < this.text.length) {
            if (characterToConvert === '\n') {
                this.addANewLine();
            } else {
                const convertedCharacter = specialCharacters[characterToConvert] || characterToConvert;
                this.convertedLine.push(convertedCharacter);
            }

            characterToConvert = this.stashNextCharacterAndAdvanceThePointer(i);
            i++;
        }
	}

    convertToHtml() {
        this.text = fs.readFileSync(this.fullFilenameWithPath).toString();
        this.stashNextCharacterAndAdvanceThePointer(0);
        this.addANewLine();
        this.pushACharacterToTheOutput();

        convertCharacter();
        this.addANewLine();
        return this.html.join('<br />');
    }

    getFilename() {
        return this.fullFilenameWithPath;
	}
}

module.exports = HtmlTextConverterRefactored;
