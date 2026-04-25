import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // User/Org GitHub Pages repository: https://<user>.github.io
  base: "/",
  plugins: [react()],
});

