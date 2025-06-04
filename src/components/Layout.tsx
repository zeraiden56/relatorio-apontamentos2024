// src/components/Layout.tsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Navbar responsiva */}
      <Navbar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* contêiner principal */}
      <div className="flex-1 flex flex-col overflow-auto">
        <Header onOpenSidebar={() => setSidebarOpen(true)} />
        <main className="flex-1 bg-off-white p-6 overflow-auto">{children}</main>
        <WhatsAppButton />
      </div>
    </div>
  );
}
