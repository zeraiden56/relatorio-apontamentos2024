# 📑 Portal da Diretoria Jurídica – Relatório de Apontamentos 2024

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)  
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![Recharts](https://img.shields.io/badge/Recharts-FF0000?style=for-the-badge&logoColor=white)](https://recharts.org/)  
[![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query)  
[![Google Apps Script](https://img.shields.io/badge/Google_Apps_Script-DD0031?style=for-the-badge&logo=google-apps-script&logoColor=white)](https://developers.google.com/apps-script)  
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)  
[![clasp](https://img.shields.io/badge/clasp-4A7EFC?style=for-the-badge&logo=npm&logoColor=white)](https://github.com/google/clasp)  

---

## 📋 Sobre o Projeto

Este repositório contém o **Portal da Diretoria Jurídica**, uma aplicação em **React + Vite** que oferece **dashboards** e **relatórios** sobre os apontamentos jurídicos de **2023 e 2024**. O projeto foi desenvolvido como continuidade das inovações implantadas pela Diretoria Jurídica – DPE-MT, permitindo maior **transparência** e **acompanhamento** de recomendações e ajustes apontados nos pareceres.

No arquivo `src/pages/Inicio.tsx`, a página inicial introduz o objetivo do portal e convida o usuário a navegar pelas demais seções do site, dando sequência ao trabalho iniciado em 2023 e ampliado em 2024.

---

## 🛠 Ferramentas e Tecnologias

- **React + Vite**  
  Projeto base que utiliza Vite para empacotamento rápido e React para construção de interfaces modernas.

- **Tailwind CSS**  
  Estilização utilitária configurada em `tailwind.config.js` para gerar classes de CSS leves e responsivas.

- **Recharts**  
  Biblioteca para renderização de gráficos interativos e customizáveis.

- **React Query**  
  Gerenciamento de chamadas assíncronas ao backend e cache de dados de forma eficiente.

- **Google Apps Script**  
  Backend que fornece dados diretamente de uma **Planilha Google**. A função `getSheetData` (em `gas/api.js`) retorna JSON a partir da aba **“RELATÓRIO DE APONTAMENTOS 2024”**.

- **clasp**  
  Ferramenta de linha de comando para interagir com o Google Apps Script. Permite deploy automático dos arquivos compilados.

---

## 📂 Estrutura do Código

```
relatorio-apontamentos2024/
├── gas/                     # Código que roda no Google Apps Script
│   └── api.js               # Função doGet retorna JSON ou serve o bundle React
│
├── public/                  # Arquivos estáticos (ícones, imagens, etc.)
│
├── src/                     # Código-fonte React + TypeScript
│   ├── pages/               # Páginas da aplicação (Inicio, Metodologia, etc.)
│   ├── components/          # Componentes visuais reutilizáveis (Layout, Navbar, Header)
│   ├── server/              # Funções para comunicação com o Apps Script
│   └── routes.js            # Rotas que registram cada página
│
├── .gitignore               # Arquivos e pastas ignorados pelo Git
├── package.json             # Dependências e scripts (build, deploy, dev, etc.)
├── tailwind.config.js       # Configuração do Tailwind CSS
├── tsconfig.json            # Configuração do TypeScript
└── vite.config.ts           # Configuração do Vite (plugins, alias, etc.)
```

---

## 📖 Descrição das Páginas

### 1. Início
- Apresentação geral do portal.
- Cartões com links para:
  - **Metodologia**  
  - **Conceito de Apontamento**  
  - **Levantamento de Dados**  
  - **Relatório de Apontamentos 2023** (embed de PDF)  
  - **Relatório de Apontamentos 2024** (dashboard interativo)

### 2. Metodologia
- Explica o processo adotado na análise de pareceres em 2023.
- Ajustes realizados para 2024.
- Importância da padronização e consistência nos apontamentos.

### 3. Conceito de Apontamento
- Definição do que é considerado **apontamento** pela equipe jurídica.
- Esclarecimento sobre exclusões (diligências que não comprometem a conformidade).

### 4. Levantamento de Dados
- Detalhes sobre a coleta e categorização dos pareceres.
- Comparação de indicadores entre **2023** e **2024**.
- Uso de dashboards para priorização de ações.

### 5. Relatório de Apontamentos 2024
- Página principal do **dashboard interativo**.
- Dados obtidos via Apps Script e exibidos em:
  - Cartões de métricas (total de apontamentos, status, etc.)
  - Gráficos (barras, linhas, pizza)
  - Lista paginada de pareceres
- Clique em um parecer para visualizar apontamentos detalhados.

### 6. Relatório de Apontamentos 2023
- Embed de um **PDF** hospedado no Google Drive.
- Contém o relatório consolidado do ano anterior (2023).

### 7. Pontos de Controle
- Página reservada para indicadores e métricas adicionais.
- Atualmente contém texto informativo e um **TODO** para inclusão de novos conteúdos.

---

## 🚀 Como Executar

1. **Instale as dependências**  
   ```bash
   npm install
   ```

2. **Executar em modo de desenvolvimento**  
   ```bash
   npm run dev
   ```
   - O Vite iniciará em `http://localhost:5173` (ou porta disponível).
   - Hot Module Replacement (HMR) para atualizações instantâneas.

3. **Compilar para produção**  
   ```bash
   npm run build
   ```
   - Gera os arquivos prontos em `dist/` (ou conforme configuração).

4. **Deploy para Google Apps Script**  
   ```bash
   npm run deploy
   ```
   - Executa o build, gera o bundle em `gas/` e envia via `clasp` para o Apps Script.
   - Verifique que o seu **`.env`** (ou configuração interna) aponta para a URL correta do Apps Script.

---

## 🎯 Objetivo

O portal foi elaborado com a finalidade de **aprimorar o acompanhamento** dos processos administrativos e **permitir a análise de tendências** nos pareceres jurídicos. A Diretoria Jurídica – DPE-MT busca, por meio desta plataforma, **consolidar boas práticas** e manter um ciclo contínuo de aperfeiçoamento na gestão pública.

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](./LICENSE). Sinta-se à vontade para clonar, adaptar e contribuir, desde que mantenha os devidos créditos à Diretoria Jurídica – DPE-MT.
