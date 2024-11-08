// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://github.com/mechero16/hod/settings/pages", // Replace 'your-repo-name' with your actual GitHub repository name
});