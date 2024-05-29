import { sveltekit } from "@sveltejs/kit/vite";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import { dirname, resolve } from "path";
import basicSsl from "@vitejs/plugin-basic-ssl";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    proxy: {},
  },
  plugins: [sveltekit()],
  // server: {
  //   https: {
  //     key: resolve(__dirname, "localhost+1-key.pem"),
  //     cert: resolve(__dirname, "localhost+1.pem"),
  //   },
  // },
});
// basicSsl(),
