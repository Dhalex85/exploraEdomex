
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vercel sirve en la raíz ("/"); GitHub Pages necesita "/exploraEdomex/".
// Para publicar en Pages: `npm run build:pages` (usa vite build --base=/exploraEdomex/).
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    target: "es2020",
  },
});
