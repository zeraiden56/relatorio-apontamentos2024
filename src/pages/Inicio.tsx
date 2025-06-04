// src/pages/Inicio.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  DocumentTextIcon,
  ChartPieIcon,
  InformationCircleIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';

export default function Inicio() {
  return (
    <div className="p-6 space-y-8 bg-off-white min-h-screen">
      {/* Título principal */}
      <h1 className="text-3xl font-bold text-green-900">
        Bem-vindo ao Portal da Diretoria Jurídica
      </h1>

      {/* Resumo de apresentação */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Apresentação</h2>
        <p className="text-gray-700">
          Este relatório dá sequência ao projeto iniciado em 2023, mantendo a mesma
          metodologia de classificação de apontamentos e ampliando a pesquisa de dados
          para 2024. Com base em conceitos já consolidados, coletamos e analisamos um
          volume maior de pareceres para obter resultados mais assertivos, identificar
          vulnerabilidades nos processos administrativos e guiar ações de melhoria
          contínua na Defensoria Pública.
        </p>
      </section>


       {/* Descrição breve (callout) */}
      <div className="flex max-w-prose items-start space-x-3 rounded-lg border-l-4 border-green-700 bg-white p-4 shadow-sm">
         <InformationCircleIcon className="h-6 w-6 flex-shrink-0 text-green-700" />
         <p className="text-gray-700">
           Navegue pelas seções abaixo para conhecer em detalhes a Metodologia, o Conceito de Apontamento, 
           o Levantamento de Dados e os Relatórios de Apontamentos de 2023 e 2024.
         </p>
      </div>

      {/* Cards de navegação */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link
          to="/metodologia"
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center"
        >
          <BookOpenIcon className="h-12 w-12 text-green-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Metodologia</h2>
          <p className="text-gray-600">
            Entenda o processo e os critérios adotados para elaboração dos pareceres.
          </p>
        </Link>

        <Link
          to="/conceito-apontamento"
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center"
        >
          <InformationCircleIcon className="h-12 w-12 text-green-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Conceito de Apontamento</h2>
          <p className="text-gray-600">
            Saiba como definimos o que é um apontamento e os critérios adotados.
          </p>
        </Link>

        <Link
          to="/levantamento-dados"
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center"
        >
          <ChartBarIcon className="h-12 w-12 text-green-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Levantamento de Dados</h2>
          <p className="text-gray-600">
            Veja como coletamos e categorizamos os dados em 2023 e 2024.
          </p>
        </Link>

        <Link
          to="/relatorio-apontamentos-2024"
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center"
        >
          <ChartPieIcon className="h-12 w-12 text-green-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Relatório 2024</h2>
          <p className="text-gray-600">
            Dashboard interativo com todos os apontamentos de 2024.
          </p>
        </Link>

        <Link
          to="/relatorio-apontamentos-2023"
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center"
        >
          <DocumentTextIcon className="h-12 w-12 text-green-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Relatório 2023</h2>
          <p className="text-gray-600">
            Acesse o PDF do relatório de apontamentos de 2023.
          </p>
        </Link>

        <Link
          to="/pontos-controle"
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center"
        >
          <ClipboardDocumentListIcon className="h-12 w-12 text-green-700 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Pontos de Controle</h2>
          <p className="text-gray-600">
            Confira os indicadores e métricas de pontos de controle.
          </p>
        </Link>
      </div>
    </div>
  );
}
