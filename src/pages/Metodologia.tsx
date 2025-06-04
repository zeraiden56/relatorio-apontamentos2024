// src/pages/Metodologia.tsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Layers, Tag, AlertTriangle, Info } from "lucide-react";

export default function Metodologia() {
  return (
    <div className="p-6 bg-off-white min-h-screen space-y-8">
      <Card className="max-w-3xl mx-auto space-y-6">
        <CardHeader>
          <CardTitle>Metodologia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <section>
            <h2 className="font-semibold text-lg">Processo 2023</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Revisão completa de todos os pareceres jurídicos por processo administrativo.
              </li>
              <li>
                Classificação em cinco temas principais: Contratos Administrativos, Convênios,
                Gestão Administrativa, Gestão de Pessoas e Licitações.
              </li>
              <li>
                Identificação de 23 tipos de apontamentos (ex.: Ajuste de Documento,
                Ausência de Autorização etc.).
              </li>
              <li>
                Visualização dos resultados em dashboards para facilitar o acompanhamento e
                priorização.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-semibold text-lg">Ajustes 2024</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Simplificação da classificação em quatro categorias: Sugestão, Obrigação,
                Advertência e Orientação.
              </li>
              <li>
                Ênfase na atualização contínua de documentos e justificativas detalhadas.
              </li>
              <li>
                Melhoria do layout dos relatórios para maior objetividade e fácil compreensão
                pelos gestores.
              </li>
            </ul>
          </section>
          <p>
            Essa metodologia garante robustez na coleta de informações e agilidade na
            aplicação das recomendações, promovendo transparência e eficiência na atuação
            da Diretoria Jurídica.
          </p>
        </CardContent>
      </Card>

      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle>Entenda os Conceitos Utilizados</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow">
            <BookOpen className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Tipo de Parecer</h3>
              <p className="text-sm">
                Define se a manifestação é obrigatória (por norma) ou consultiva (por solicitação da gestão).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow">
            <Layers className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Tema do Parecer</h3>
              <p className="text-sm">
                Abrange grandes áreas do Direito analisadas: Licitação, Convênios, Contratos,
                Gestão Administrativa e Gestão de Pessoas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow">
            <Tag className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Subtema</h3>
              <p className="text-sm">
                Detalha o foco do parecer dentro do tema. Exemplos: “Aditivo de valor”,
                “Dispensa de Licitação”, “Homologação”, “Reajuste”, “Cessão”.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow">
            <AlertTriangle className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Espécie</h3>
              <p className="text-sm">
                Refere-se ao tipo do apontamento encontrado: <em>Ajuste de Documento</em>,
                <em> Ausência de Justificativa</em>, <em>Fundamento Legal</em>, <em>Erro Material</em>, etc.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow col-span-1 sm:col-span-2">
            <Info className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold">Natureza do Apontamento</h3>
              <p className="text-sm mb-1">
                Representa a gravidade e obrigatoriedade do apontamento jurídico:
              </p>
              <ul className="list-disc pl-4 text-sm space-y-1">
                <li><strong>Sugestão</strong>: Indica ajustes desejáveis, mas não obrigatórios. Ex.: melhorias de redação, inclusão de justificativa.</li>
                <li><strong>Orientação</strong>: Interpretações jurídicas ou esclarecimentos normativos. Ex.: como aplicar determinado artigo da lei.</li>
                <li><strong>Obrigação</strong>: Exigências legais formais. Ex.: necessidade de documentos obrigatórios ou cumprimento de prazos legais.</li>
                <li><strong>Advertência</strong>: Aponta risco jurídico ou irregularidade grave. Ex.: possível nulidade, afronta direta à norma.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
