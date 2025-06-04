// src/pages/RMA.tsx
import React, { useEffect, useState } from 'react';
import Spinner         from "../src/components/Spinner";
declare global {
  interface Window { gapi: any; }
}

const CLIENT_ID = 'SEU_CLIENT_ID_GOOGLE.apps.googleusercontent.com';
const API_KEY   = 'SUA_API_KEY_GOOGLE';
const SCOPES    = 'https://www.googleapis.com/auth/spreadsheets.readonly';

export default function RMA() {
  const [gapiReady,   setGapiReady]   = useState(false);
  const [signedIn,    setSignedIn]    = useState(false);
  const [sheetUrl,    setSheetUrl]    = useState('');
  const [sheetId,     setSheetId]     = useState('');
  const [sheetsList,  setSheetsList]  = useState<string[]>([]);
  const [activeSheet, setActiveSheet] = useState<string>('');
  const [data,        setData]        = useState<string[][]>([]);
  const [loading,     setLoading]     = useState(false);

  // 1) Inicializa o gapi.client
  useEffect(() => {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        scope: SCOPES
      });
      const auth = window.gapi.auth2.getAuthInstance();
      setGapiReady(true);
      setSignedIn(auth.isSignedIn.get());
      auth.isSignedIn.listen(setSignedIn);
    });
  }, []);

  // 2) Sign in / Sign out handlers
  const signIn  = () => window.gapi.auth2.getAuthInstance().signIn();
  const signOut = () => window.gapi.auth2.getAuthInstance().signOut();

  // 3) Extrai ID da URL e lista abas
  const loadSheetsMeta = async () => {
    const m = sheetUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (!m) return alert('URL inválida');
    const id = m[1];
    setSheetId(id);
    setLoading(true);
    try {
      const resp = await window.gapi.client.sheets.spreadsheets.get({ spreadsheetId: id });
      const titles = resp.result.sheets.map((s: any) => s.properties.title);
      setSheetsList(titles);
      setActiveSheet(titles[0]);
    } catch (e: any) {
      console.error(e);
      alert('Erro ao listar abas: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  // 4) Carrega dados da aba selecionada
  useEffect(() => {
    if (!sheetId || !activeSheet) return;
    (async () => {
      setLoading(true);
      try {
        const resp = await window.gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: sheetId,
          range: `'${activeSheet}'`
        });
        setData(resp.result.values || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [sheetId, activeSheet]);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Relatório Mensal de Atividades</h1>

      {!gapiReady && <p>Carregando Google API…</p>}
      {gapiReady && !signedIn && (
        <button
          onClick={signIn}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Entrar com Google
        </button>
      )}
      {signedIn && (
        <button
          onClick={signOut}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Sair
        </button>
      )}

      {signedIn && (
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Cole a URL da sua planilha"
            value={sheetUrl}
            onChange={e => setSheetUrl(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          <button
            onClick={loadSheetsMeta}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Listar abas
          </button>
        </div>
      )}

      {sheetsList.length > 0 && (
        <select
          value={activeSheet}
          onChange={e => setActiveSheet(e.target.value)}
          className="px-3 py-2 border rounded"
        >
          {sheetsList.map(name => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      )}

      {loading && <p>Carregando dados…</p>}

      {!loading && data.length > 0 && (
        <div className="overflow-auto border rounded shadow">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                {data[0].map((h, i) => (
                  <th key={i} className="px-2 py-1 text-left">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(1).map((row, ri) => (
                <tr key={ri} className="hover:bg-gray-100">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-2 py-1">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
