const fs = require("fs");
const HtmlTextConverter = require("../text-converter/html-text-converter.js");

describe("HtmlTextConverter", () => {
  const testFilename = "test.txt";
  const testText = "This is a <test> & text.\nAnother line.";

  // Mock fs.readFileSync to return testText
  jest.spyOn(fs, "readFileSync").mockReturnValue(testText);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create an instance with the correct filename", () => {
    const converter = new HtmlTextConverter(testFilename);
    expect(converter.getFilename()).toBe(testFilename);
  });

  it("should convert text to HTML", () => {
    const converter = new HtmlTextConverter(testFilename);
    const expectedHtml =
      "This is a &amp;lt;test&amp;gt; &amp; text.<br />Another line.";
    const html = converter.convertToHtml();
    expect(html).toBe(expectedHtml);
  });

  it("should handle an empty file", () => {
    jest.spyOn(fs, "readFileSync").mockReturnValue("");
    const converter = new HtmlTextConverter(testFilename);
    const html = converter.convertToHtml();
    expect(html).toBe("");
  });
});
