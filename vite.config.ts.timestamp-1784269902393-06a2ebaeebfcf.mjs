// vite.config.ts
import { defineConfig } from "file:///D:/python%20project/portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///D:/python%20project/portfolio/node_modules/@vitejs/plugin-react/dist/index.js";
import tailwindcss from "file:///D:/python%20project/portfolio/node_modules/@tailwindcss/vite/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\python project\\portfolio";
var rawPort = process.env.PORT ?? "4173";
var port = Number(rawPort);
if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}
var basePath = process.env.BASE_PATH ?? "/";
var vite_config_default = defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "@assets": path.resolve(__vite_injected_original_dirname, "..", "..", "attached_assets")
    },
    dedupe: ["react", "react-dom"]
  },
  root: path.resolve(__vite_injected_original_dirname),
  build: {
    outDir: path.resolve(__vite_injected_original_dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true
    }
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxweXRob24gcHJvamVjdFxcXFxwb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHB5dGhvbiBwcm9qZWN0XFxcXHBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHl0aG9uJTIwcHJvamVjdC9wb3J0Zm9saW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJAdGFpbHdpbmRjc3Mvdml0ZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuY29uc3QgcmF3UG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgPz8gXCI0MTczXCI7XG5jb25zdCBwb3J0ID0gTnVtYmVyKHJhd1BvcnQpO1xuXG5pZiAoTnVtYmVyLmlzTmFOKHBvcnQpIHx8IHBvcnQgPD0gMCkge1xuICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgUE9SVCB2YWx1ZTogXCIke3Jhd1BvcnR9XCJgKTtcbn1cblxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5CQVNFX1BBVEggPz8gXCIvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IGJhc2VQYXRoLFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB0YWlsd2luZGNzcygpLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoaW1wb3J0Lm1ldGEuZGlybmFtZSwgXCJzcmNcIiksXG4gICAgICBcIkBhc3NldHNcIjogcGF0aC5yZXNvbHZlKGltcG9ydC5tZXRhLmRpcm5hbWUsIFwiLi5cIiwgXCIuLlwiLCBcImF0dGFjaGVkX2Fzc2V0c1wiKSxcbiAgICB9LFxuICAgIGRlZHVwZTogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG4gIH0sXG4gIHJvb3Q6IHBhdGgucmVzb2x2ZShpbXBvcnQubWV0YS5kaXJuYW1lKSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IHBhdGgucmVzb2x2ZShpbXBvcnQubWV0YS5kaXJuYW1lLCBcImRpc3QvcHVibGljXCIpLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0LFxuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgYWxsb3dlZEhvc3RzOiB0cnVlLFxuICAgIGZzOiB7XG4gICAgICBzdHJpY3Q6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQsXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgYWxsb3dlZEhvc3RzOiB0cnVlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJRLFNBQVMsb0JBQW9CO0FBQ3hTLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxVQUFVLFFBQVEsSUFBSSxRQUFRO0FBQ3BDLElBQU0sT0FBTyxPQUFPLE9BQU87QUFFM0IsSUFBSSxPQUFPLE1BQU0sSUFBSSxLQUFLLFFBQVEsR0FBRztBQUNuQyxRQUFNLElBQUksTUFBTSx3QkFBd0IsT0FBTyxHQUFHO0FBQ3BEO0FBRUEsSUFBTSxXQUFXLFFBQVEsSUFBSSxhQUFhO0FBRTFDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBcUIsS0FBSztBQUFBLE1BQzVDLFdBQVcsS0FBSyxRQUFRLGtDQUFxQixNQUFNLE1BQU0saUJBQWlCO0FBQUEsSUFDNUU7QUFBQSxJQUNBLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxFQUMvQjtBQUFBLEVBQ0EsTUFBTSxLQUFLLFFBQVEsZ0NBQW1CO0FBQUEsRUFDdEMsT0FBTztBQUFBLElBQ0wsUUFBUSxLQUFLLFFBQVEsa0NBQXFCLGFBQWE7QUFBQSxJQUN2RCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ047QUFBQSxJQUNBLFlBQVk7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLElBQUk7QUFBQSxNQUNGLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1A7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
