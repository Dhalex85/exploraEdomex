
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/exploraEdomex/",
  plugins: [react()],
  build: {
    target: "es2020",
  },
});
