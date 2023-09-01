const fs = require('fs');

class HtmlTextConverterRefactored {
    _fullFilenameWithPath;
    html = [];
    convertedLine = [];
    text = '';
    i = 0;

    constructor(fullFilenameWithPath) {
        this._fullFilenameWithPath = fullFilenameWithPath;
    }

    stashNextCharacterAndAdvanceThePointer() {
        var c = this.text.charAt(this.i);
        this.i += 1;
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

    convertCharacter() {
        const specialCharacters = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;'
        };

        // let i = 0;
        let characterToConvert = this.stashNextCharacterAndAdvanceThePointer(this.i);
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
        this.text = fs.readFileSync(this._fullFilenameWithPath).toString();
        this.stashNextCharacterAndAdvanceThePointer(0);
        this.addANewLine();
        this.pushACharacterToTheOutput();

        this.convertCharacter();
        this.addANewLine();
        return this.html.join('<br />');
    }

    getFilename() {
        return this._fullFilenameWithPath;
    }
}

module.exports = HtmlTextConverterRefactored;