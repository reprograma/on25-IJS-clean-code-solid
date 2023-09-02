const fs = require('fs');

class FileReader {
    constructor(fullFilenameWithPath) {
        this._fullFilenameWithPath = fullFilenameWithPath;
    }

    readTextFile() {
        return fs.readFileSync(this._fullFilenameWithPath, 'utf-8');
    }
}

class TextConverter {
    constructor(text) {
        this.text = text;
    }

    convertToHtml() {
        const htmlLines = this.text
            .split('\n')
            .map(line => this.escapeHtml(line))
            .join('<br />');

        return htmlLines;
    }

    escapeHtml(text) {
        return text.replace(/[<>&]/g, match => {
            switch (match) {
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '&':
                    return '&amp;';
                default:
                    return match;
            }
        });
    }
}

class HtmlTextConverter {
    constructor(fullFilenameWithPath) {
        this.fileReader = new FileReader(fullFilenameWithPath);
    }

    convertToHtml() {
        const text = this.fileReader.readTextFile();
        const textConverter = new TextConverter(text);
        return textConverter.convertToHtml();
    }

    getFilename() {
        return this.fileReader.getFullFilenameWithPath();
    }
}

module.exports = HtmlTextConverter;
