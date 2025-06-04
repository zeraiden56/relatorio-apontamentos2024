// src/components/Header.tsx
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

type HeaderProps = {
  onOpenSidebar: () => void;
};

export default function Header({ onOpenSidebar }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-green-800 text-white px-4 md:px-6 py-4 shadow">
      {/* Botão hambúrguer aparece só no mobile */}
      <button className="md:hidden mr-4" onClick={onOpenSidebar}>
        <Bars3Icon className="h-6 w-6 text-white" />
      </button>

      {/* Espaço reservado à direita (opcional) */}
      <div className="hidden md:block w-6" />
    </header>
  );
}
