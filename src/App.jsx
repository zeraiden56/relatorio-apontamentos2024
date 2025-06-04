// src/App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { routes } from "./routes";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map(({ url, component: Page }) => (
            <Route key={url} path={url} element={<Page />} />
          ))}
          {/* opcional: redireciona rotas desconhecidas de volta ao início */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
