/**
 * Recebe page e, se for "relatorio-apontamentos-2024",
 * lê a aba exata "RELATÓRIO DE APONTAMENTOS 2024" e retorna
 * JSON.stringify(rows) onde rows é um array de objetos.
 */
function getSheetData(page) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (page === 'relatorio-apontamentos-2024') {
    const sh = ss.getSheetByName('RELATÓRIO DE APONTAMENTOS 2024');
    if (!sh) return JSON.stringify([]);
    const [headers, ...data] = sh.getDataRange().getValues();
    const rows = data.map(r =>
      headers.reduce((o, h, i) => {
        o[h] = r[i];
        return o;
      }, {})
    );
    return JSON.stringify(rows);
  }
  // se desejar, pode adicionar outros pages estáticos aqui
  return JSON.stringify([]);
}

function doGet(e) {
  const p = e.parameter;
  if (p.exec === 'json' && p.page) {
    const payload = getSheetData(p.page);
    return ContentService.createTextOutput(payload)
      .setMimeType(ContentService.MimeType.JSON);
  }
  // senão, serve seu bundle React + html
  return HtmlService
    .createTemplateFromFile('index')
    .evaluate()
    .setTitle('Relatório de Apontamentos 2024 | Diretoria Jurídica | DPEMT')
    .setFaviconUrl('https://i.imgur.com/e5XSyZu.png')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    
}

function includes(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
