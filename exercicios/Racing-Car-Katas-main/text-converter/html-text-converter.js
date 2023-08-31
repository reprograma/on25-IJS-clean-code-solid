const fs = require("fs");

class HtmlTextConverter {
  constructor(fullFilenameWithPath) {
    this.fullFilenameWithPath = fullFilenameWithPath;
  }

  convertToHtml() {
    const text = fs.readFileSync(this.fullFilenameWithPath, "utf-8");
    const lines = text.split("\n");

    const htmlLines = lines.map((line) => {
      return line
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/&/g, "&amp;");
    });

    return htmlLines.join("<br />");
  }

  getFilename() {
    return this.fullFilenameWithPath;
  }
}

module.exports = HtmlTextConverter;
