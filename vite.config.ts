import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // 优化 Vue 编译选项
      template: {
        compilerOptions: {
          // 移除开发时的注释
          comments: false,
        },
      },
    }),
  ],
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
        // 完全禁用代码分割，所有JS代码合并为一个文件
        manualChunks: () => "app",

        // 简化文件命名，只有一个主文件
        chunkFileNames: "js/app.js",
        entryFileNames: "js/app.js",
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || "asset";
          const extType = name.split(".").pop()?.toLowerCase();

          // CSS 文件 - 合并为单个文件
          if (extType === "css") {
            return "css/app.css";
          }

          // 图片文件
          if (/^(png|jpe?g|gif|svg|webp|ico|bmp|tiff?)$/i.test(extType || "")) {
            return "images/[name][extname]";
          }

          // 字体文件
          if (/^(woff2?|eot|ttf|otf)$/i.test(extType || "")) {
            return "fonts/[name][extname]";
          }

          // 音频文件
          if (/^(mp3|wav|ogg|flac|aac)$/i.test(extType || "")) {
            return "audio/[name][extname]";
          }

          // 视频文件
          if (/^(mp4|webm|ogg|avi|mov)$/i.test(extType || "")) {
            return "video/[name][extname]";
          }

          // 其他资源
          return "assets/[name][extname]";
        },
      },
    }, // 清理输出目录
    emptyOutDir: true,

    // 将所有CSS打包到一个文件
    cssCodeSplit: false,

    // 禁用构建报告（提高构建速度）
    reportCompressedSize: false,

    // chunk 大小警告限制 (KB)
    chunkSizeWarningLimit: 2000,

    // 生产环境关闭source map
    sourcemap: false,

    // 清理构建缓存
    write: true,

    // 资源内联限制
    assetsInlineLimit: 4096,
  },
  // CSS 预处理器选项
  css: {
    preprocessorOptions: {
      scss: {
        // 移除自动导入，避免重复导入
        // additionalData: `@import "@/style.scss";`,
      },
    },
    // CSS 模块化
    modules: false,
    // 后处理器选项
    postcss: {},
  },

  // Esbuild 优化
  esbuild: {
    // 移除 console 和 debugger
    drop: ["console", "debugger"],
    // 压缩标识符
    minifyIdentifiers: true,
    // 压缩语法
    minifySyntax: true,
    // 压缩空白
    minifyWhitespace: true,
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
