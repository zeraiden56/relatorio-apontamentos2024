import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Create an alias '@' for the src directory
    },
  },
  // build: {
  //   rollupOptions: {
  //     external: ["react", "react-dom", "react-router-dom"],
  //     output: {
  //       format: "iife",
  //       name: "App",
  //       globals: {
  //         react: "React",
  //         "react-dom": "ReactDOM",
  //         "react-router-dom": "ReactRouterDOM", // Add this line to specify the global name
  //       },
  //     },
  //   },
  // },
});
