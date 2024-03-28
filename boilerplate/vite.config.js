import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "../base": path.resolve(__dirname, "../base"),
    },
  },
});
