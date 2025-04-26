import path from "path";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: "./",
  resolve: {
    alias: {
      "@": `${path.resolve(path.resolve(), "./src")}`,
    },
    extensions: [".ts", ".js", ".vue", ".png", ".json"],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "VUI",
      fileName: (format) => `vue-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 1234,
    proxy: {},
    watch: {
      usePolling: true,
    },
  },
});
