import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",  // Replace with your GitHub repo name
  plugins: [react()],
  assetsInclude: ["**/*.glb"]  // <-- Add this line
});
