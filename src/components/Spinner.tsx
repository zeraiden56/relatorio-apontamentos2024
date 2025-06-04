// src/components/Spinner.tsx
import React from "react"

export default function Spinner() {
  return (
    <div
      role="status"
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-white/75 backdrop-blur-sm
      "
    >
      <div className="flex flex-col items-center">
        {/* Spinner em ring com cor do tema */}
        <div
          className="
            h-16 w-16 border-4 border-t-4
            border-blue-600 border-t-transparent
            rounded-full animate-spin
          "
        />
        {/* Texto auxiliar para acessibilidade e contexto */}
        <span className="mt-3 text-blue-900 font-medium">
          Carregando…
        </span>
      </div>
    </div>
  )
}
