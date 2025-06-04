// src/pages/LevantamentoDados.tsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function LevantamentoDados() {
  return (
    <div className="p-6 bg-off-white min-h-screen">
      <Card className="max-w-3xl mx-auto space-y-6">
        <CardHeader>
          <CardTitle>Levantamento de Dados</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <section>
            <h2 className="font-semibold text-lg">Ano 2023</h2>
            <p>
              A coleta de dados seguiu o Regimento Interno da Defensoria Pública, com cada
              parecer jurídico revisado em seu processo administrativo correspondente. Foram
              identificados temas recorrentes e categorizados conforme a natureza do apontamento,
              permitindo uma análise quantitativa da frequência de cada tipo de irregularidade.
            </p>
          </section>
          <section>
            <h2 className="font-semibold text-lg">Ano 2024</h2>
            <p>
              Mantivemos a análise individual, mas simplificamos a classificação em quatro
              categorias principais: <em>Sugestão</em>, <em>Obrigação</em>, <em>Advertência</em> e{" "}
              <em>Orientação</em>. Essa mudança agilizou o tratamento dos dados sem perder o
              rigor metodológico, reforçando ainda mais a clareza na tomada de decisões.
            </p>
          </section>
          <p>
            Em ambos os anos, dashboards interativos e relatórios visuais apoiaram a identificação
            rápida dos pontos críticos, facilitando ações corretivas e a definição de prioridades
            administrativas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
