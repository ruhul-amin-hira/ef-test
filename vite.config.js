import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer';

export default defineConfig({
    plugins:[],
    css: {
      postcss: {
        plugins: [
            autoprefixer
        ],
      }
    },
  });