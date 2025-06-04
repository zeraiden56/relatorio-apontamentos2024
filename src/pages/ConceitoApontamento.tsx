// src/pages/ConceitoApontamento.tsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ConceitoApontamento() {
  return (
    <div className="p-6 bg-off-white min-h-screen">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Conceito de Apontamento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            Um <strong>apontamento</strong> é qualquer recomendação emitida pela equipe jurídica que
            destaque irregularidades ou inconsistências identificadas durante a análise de um parecer,
            e que poderiam ter sido corrigidas antes da emissão final.  
          </p>
          <p>
            Para manter foco na melhoria contínua, excluímos das análises:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Diligências que não poderiam ser realizadas anteriormente ao parecer.</li>
            <li>Ações pontuais sem impacto direto na conformidade administrativa.</li>
          </ul>
          <p>
            Esse conceito garante que as recomendações sejam objetivas e
            imediatamente aplicáveis, auxiliando a Diretoria Jurídica na
            correção rápida de processos internos e na prevenção de reincidências.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
