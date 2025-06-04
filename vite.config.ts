// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [ react() ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: "esnext",       // não transpila const / arrow / destructuring
    cssCodeSplit: false,    // gera um único CSS
    rollupOptions: {
      output: {
        format: "iife",            // bundle como IIFE único
        inlineDynamicImports: true // põe tudo num único JS
      },
    },
    // opcional, só pra não ficar warning:
    chunkSizeWarningLimit: 1500,
  }
});
