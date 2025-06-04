import type { ApontamentoRow } from '../types';
declare const google: any;

/**
 * Busca uma página específica do GAS.
 * No nosso caso, só usamos "relatorio-apontamentos-2024".
 */
export function getSheetData(
  page: 'relatorio-apontamentos-2024'
): Promise<ApontamentoRow[]> {
  return new Promise((resolve, reject) => {
    google.script
      .run
      .withSuccessHandler((raw: string) => {
        try {
          resolve(JSON.parse(raw) as ApontamentoRow[]);
        } catch (e) {
          reject(e);
        }
      })
      .withFailureHandler(reject)
      .getSheetData(page);
  });
}
