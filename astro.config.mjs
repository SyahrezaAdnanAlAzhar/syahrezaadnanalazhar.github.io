// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from "url";
import path from "path";

import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://syahrezaadnanalazhar.github.io",
  base: "/",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
  output: "static",
  build: {
    assets: "_assets",
  },
});
