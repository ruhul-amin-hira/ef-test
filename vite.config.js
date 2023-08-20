import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer';

export default defineConfig({
    base:"/ef-test/",
    plugins:[],
    css: {
      postcss: {
        plugins: [
            autoprefixer
        ],
      }
    },
  });