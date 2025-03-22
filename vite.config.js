import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Make sure this is set correctly
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  assetsInclude: ["**/*.glb"],
});
