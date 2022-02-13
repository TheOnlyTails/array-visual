import path from "path"
import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssMediaMinmax from "postcss-media-minmax";
import { svelteShiki } from "svelte-shiki"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: {
        plugins: [autoprefixer(), cssnano(), postcssMediaMinmax()],
      }
    }),
    svelteShiki()
  ],

  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $layout: path.resolve("./src/layout")
        }
      }
    }
  }
};

export default config;
