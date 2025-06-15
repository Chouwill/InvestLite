import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // rewrite:function(path){
        //   console.log(path);

        //   return path
        // }

        rewrite: (path) => path.replace(/^\/api/, ""),

        // http://localhost:5173/api/users
        // http://localhost:3000/users
      },
    },
  },
});
