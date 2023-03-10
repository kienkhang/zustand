import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// vite.config.ts
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: [
        "react",
        "react-router-dom",
        {
        },
      ],
      dts: "./src/auto-imports.d.ts",
    }),
  ],
  esbuild: {},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
