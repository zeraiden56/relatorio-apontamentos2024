function doGet() {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setFaviconUrl("https://heartstchr.github.io/img/borl.png")
    .setTitle("Aquaservice")
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

function includes(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getSheetData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = sheet.getDataRange().getValues();
  return data;
}
