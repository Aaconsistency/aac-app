import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work on any static host or subfolder
export default defineConfig({
  plugins: [react()],
  base: "./",
});
