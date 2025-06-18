import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "es2015",
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.warn", "console.info"],
        passes: 2, // 多次压缩以获得更好的效果
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false, // 移除所有注释
      },
    },
    rollupOptions: {
      output: {
        // 完全合并所有代码为一个文件（最清洁的输出）
        manualChunks: () => "app",

        // 其他分包策略选项（注释掉）:

        // 选项1: 按依赖类型分包
        /*
        manualChunks: {
          'vue-vendor': ['vue'],
          'ui-vendor': ['element-plus'],
          'http-vendor': ['axios'],
        },
        */

        // 选项2: 智能分包
        /*
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) return 'vue-vendor';
            if (id.includes('element-plus')) return 'ui-vendor';
            return 'vendor';
          }
          if (id.includes('src/components')) return 'components';
          if (id.includes('src/composables')) return 'composables';
          return 'app';
        },
        */

        // 选项3: 完全不分包（Vite默认行为）
        /*
        manualChunks: undefined,
        */

        // 简化的文件命名（单文件版本）
        chunkFileNames: "js/app.js",
        entryFileNames: "js/app.js",
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || "asset";
          const extType = name.split(".").pop()?.toLowerCase();

          // CSS 文件 - 单个文件
          if (extType === "css") {
            return "css/app.css";
          }

          // 静态资源 - 去掉hash，更清洁
          if (/^(png|jpe?g|gif|svg|webp|ico|bmp|tiff?)$/i.test(extType || "")) {
            return "images/[name][extname]";
          }

          if (/^(woff2?|eot|ttf|otf)$/i.test(extType || "")) {
            return "fonts/[name][extname]";
          }

          if (/^(mp3|wav|ogg|flac|aac)$/i.test(extType || "")) {
            return "audio/[name][extname]";
          }

          if (/^(mp4|webm|ogg|avi|mov)$/i.test(extType || "")) {
            return "video/[name][extname]";
          }

          return "assets/[name][extname]";
        },
      },
      // 外部依赖（如果需要CDN加载）
      // external: ['vue'],
    },

    // 清理输出目录
    emptyOutDir: true,

    // 将所有CSS打包到一个文件
    cssCodeSplit: false,

    // 禁用构建报告（提高构建速度）
    reportCompressedSize: false,
    // chunk 大小警告限制 (KB) - 单文件可以设置更大
    chunkSizeWarningLimit: 2000,

    // 启用source map（可选，生产环境建议关闭）
    sourcemap: false,
  },

  server: {
    hmr: true,
    port: 3000,
    open: true, // 自动打开浏览器
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },

  // 预构建优化
  optimizeDeps: {
    include: ["vue", "element-plus", "axios"],
  },
});
