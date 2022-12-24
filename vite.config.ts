import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // proxy 설정
  server: {
    proxy: {
      "/api": "http://15.164.190.48:8082",
      // "/api": {
      // target: "http://15.164.190.48:8082",
      // changeOrigin: true,
      // secure: false,
      // ws: true,
      // rewrite: (path) => path.replace(/^\/v1/, ""),
      // },
    },
  },
});
