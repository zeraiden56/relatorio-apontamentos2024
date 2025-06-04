// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  BookOpenIcon,
  ChartPieIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const items = [
  { title: "Início", to: "/", icon: <HomeIcon className="h-6 w-6" /> },
  { title: "Metodologia", to: "/metodologia", icon: <BookOpenIcon className="h-6 w-6" /> },
  { title: "Conceito Apontamento", to: "/conceito-apontamento", icon: <DocumentTextIcon className="h-6 w-6" /> },
  { title: "Levantamento Dados", to: "/levantamento-dados", icon: <DocumentTextIcon className="h-6 w-6" /> },
  { title: "Relatório 2024", to: "/relatorio-apontamentos-2024", icon: <ChartPieIcon className="h-6 w-6" /> },
  { title: "Relatório 2023", to: "/relatorio-apontamentos-2023", icon: <DocumentTextIcon className="h-6 w-6" /> },
  { title: "Pontos de Controle", to: "/pontos-controle", icon: <ClipboardDocumentListIcon className="h-6 w-6" /> },
];

type NavbarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Navbar({ open, onClose }: NavbarProps) {
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-blue-900 text-white
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-200 ease-in-out
        md:relative md:translate-x-0
      `}
    >
      {/* === CABEÇALHO COM LOGO === */}
      <div className="relative px-6 py-8 flex flex-col items-center border-b border-blue-800 text-center">
        {/* Botão pra fechar no mobile */}
        <button
          className="absolute top-4 right-4 md:hidden text-white"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Logo da Defensoria */}
        <img
          src="https://www.defensoria.mt.def.br/dpmt/assets/images/Logo-branco.png"
          alt="Defensoria Pública MT"
          className="h-12 w-auto mb-3"
        />

        {/* Título e subtítulo */}
        <h1 className="text-lg  text-white font-bold">Relatório de Apontamentos 2024</h1>
        <p className="text-sm  text-white opacity-75">Diretoria Jurídica</p>
      </div>

      {/* === ITENS DE MENU === */}
      <nav className="mt-6">
        {items.map(({ title, to, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 hover:bg-blue-800 transition-colors ${
                isActive ? "bg-blue-800 font-semibold" : "opacity-90"
              }`
            }
          >
            {icon}
            <span className="ml-3">{title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
