const fs = require("fs");

class HtmlTextConverter {
  constructor(fullFilenameWithPath) {
    this.#fullFilenameWithPath = fullFilenameWithPath;
  }

  convertToHtml() {
    const text = fs.readFileSync(this.#fullFilenameWithPath).toString();
    let i = 0;
    const html = [];
    let convertedLine = [];
    let characterToConvert = text.charAt(i);

    const stashNextCharacterAndAdvanceThePointer = () => {
      const c = text.charAt(i);
      i += 1;
      return c;
    };

    const addANewLine = () => {
      const line = convertedLine.join("");
      html.push(line);
      convertedLine = [];
    };

    const pushACharacterToTheOutput = () => {
      convertedLine.push(characterToConvert);
    };

    while (i <= text.length) {
      switch (characterToConvert) {
        case "<":
          convertedLine.push("&lt;");
          break;
        case ">":
          convertedLine.push("&gt;");
          break;
        case "&":
          convertedLine.push("&amp;");
          break;
        case "\n":
          addANewLine();
          break;
        default:
          pushACharacterToTheOutput();
      }
      characterToConvert = stashNextCharacterAndAdvanceThePointer();
    }

    addANewLine();
    return html.join("<br />");
  }

  getFilename() {
    return this.#fullFilenameWithPath;
  }
}

module.exports = HtmlTextConverter;
