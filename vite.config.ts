import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // 🛠️ Performans için eklenen yapı
  build: {
    minify: "esbuild",       // JS'i küçült
    target: "es2017",         // Modern tarayıcılar için
    cssCodeSplit: true,       // CSS'i parçalara ayır
    sourcemap: false,         // Prod'da source map gerekmez
    rollupOptions: {
      treeshake: true,       // Kullanılmayan kodları at
      output: {
        manualChunks: {
          // Ortak kütüphaneleri ayrı dosyaya al
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
}));
