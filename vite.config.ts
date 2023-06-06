import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import banner from "vite-plugin-banner";
import path from "path";
import "dotenv/config";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

const BANNER_TEXT = `/**
* name: qu_challange_bottino
* version: 0.0.1
*/`;

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    banner(BANNER_TEXT),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: process.env.VITE_HOST,
    port: process.env.VITE_PORT as unknown as number,
    // proxy: {
    //   "^/api/": {
    //     target: "https://swapi.dev",
    //   },
    // },
  },
});
