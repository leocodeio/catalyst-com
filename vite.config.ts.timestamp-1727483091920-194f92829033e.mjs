// vite.config.ts
import { vitePlugin as remix } from "file:///C:/Users/saiha/OneDrive/Desktop/Leo-new/self/leocodeio/catalyst-com/node_modules/.pnpm/@remix-run+dev@2.11.2_@remix-run+react@2.11.2_react-dom@18.3.1_react@18.3.1__react@18.3.1_typ_2djrmwymkintckx3vfkwp4yxxy/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///C:/Users/saiha/OneDrive/Desktop/Leo-new/self/leocodeio/catalyst-com/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.1/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///C:/Users/saiha/OneDrive/Desktop/Leo-new/self/leocodeio/catalyst-com/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.5.4_vite@5.4.2_@types+node@22.5.1_/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { vercelPreset } from "file:///C:/Users/saiha/OneDrive/Desktop/Leo-new/self/leocodeio/catalyst-com/node_modules/.pnpm/@vercel+remix@2.11.2_@remix-run+dev@2.11.2_@remix-run+react@2.11.2_react-dom@18.3.1_react@18._wvkvyi5avmxv5oo6nj2fzcel6y/node_modules/@vercel/remix/vite.js";
var vite_config_default = defineConfig({
  plugins: [
    remix({
      presets: [vercelPreset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzYWloYVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXExlby1uZXdcXFxcc2VsZlxcXFxsZW9jb2RlaW9cXFxcY2F0YWx5c3QtY29tXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzYWloYVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXExlby1uZXdcXFxcc2VsZlxcXFxsZW9jb2RlaW9cXFxcY2F0YWx5c3QtY29tXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9zYWloYS9PbmVEcml2ZS9EZXNrdG9wL0xlby1uZXcvc2VsZi9sZW9jb2RlaW8vY2F0YWx5c3QtY29tL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gXCJAcmVtaXgtcnVuL2RldlwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xyXG5pbXBvcnQgeyB2ZXJjZWxQcmVzZXQgfSBmcm9tIFwiQHZlcmNlbC9yZW1peC92aXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlbWl4KHtcclxuICAgICAgcHJlc2V0czogW3ZlcmNlbFByZXNldCgpXSxcclxuICAgICAgZnV0dXJlOiB7XHJcbiAgICAgICAgdjNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXHJcbiAgICAgICAgdjNfcmVsYXRpdmVTcGxhdFBhdGg6IHRydWUsXHJcbiAgICAgICAgdjNfdGhyb3dBYm9ydFJlYXNvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgdHNjb25maWdQYXRocygpLFxyXG4gIF0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZZLFNBQVMsY0FBYyxhQUFhO0FBQ2piLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBQzFCLFNBQVMsb0JBQW9CO0FBRTdCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFNBQVMsQ0FBQyxhQUFhLENBQUM7QUFBQSxNQUN4QixRQUFRO0FBQUEsUUFDTixtQkFBbUI7QUFBQSxRQUNuQixzQkFBc0I7QUFBQSxRQUN0QixxQkFBcUI7QUFBQSxNQUN2QjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
