# 🌟 技术爱好者 · 个人网站

> 学生的技术成长与项目展示站点


[![技术成长](https://img.shields.io/badge/技术成长-持续进行中-brightgreen)]()
[![项目优化](https://img.shields.io/badge/项目优化-经验丰富-blue)]()
[![访问统计](https://visitor-badge.laobi.icu/badge?page_id=HYH0309.HYH0309)]()

## 🚀 项目特性

### 核心技术栈

- ✨ **Vue 3 + TypeScript**: 现代化组件开发与类型安全
- 🎨 **Element Plus**: 专业UI组件库，提升开发效率
- ⚡ **Vite**: 高效构建工具，开发体验极佳
- 📱 **响应式设计**: 移动端 + 桌面端完美适配
- 🎵 **音乐播放器**: 内置背景音乐功能
- 💬 **AI 聊天功能**: 集成智能对话系统
- 🔧 **单文件打包**: 优化构建输出结构

### 技术展示模块

- 🧪 **技术栈展示**: 展示各种技术的学习进度和应用经验
- 🚧 **项目重构经验**: 分享代码优化进度和技术提升历程
- 💼 **实战项目展示**: 真实项目开发经验与解决方案分享
- 🏗️ **技术成长轨迹**: 从基础开发到架构设计的学习路径

### 项目优化成果

- 🏗️ **架构优化**: 从多文件分散到单文件合并（app.js 仅 218KB）
- 🧹 **代码清理**: 自动清理临时文件，保持项目整洁
- 📦 **构建优化**: CSS合并、资源分类、压缩优化
- 🛠️ **开发体验**: TypeScript类型安全 + 热重载开发
- 🎨 **组件化设计**: 高度可复用的功能展示组件

## 🛠️ 开发

```bash
# 安装依赖
npm install

# 开发服务器
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview
```

## 🧹 维护命令

```bash
# 清理构建文件和缓存
npm run clean

# 清理后构建
npm run build:clean

# 分析构建结果
npm run analyze
```

## 📦 构建优化

本项目经过深度优化：

- **单文件打包**: 所有 JS 代码合并为 `app.js` (143KB)
- **样式合并**: 所有 CSS 合并为 `app.css` (342KB)
- **资源分类**: 图片、音频等资源整齐分类
- **自动清理**: 清理脚本处理所有临时文件

详细优化信息请查看 [README_OPTIMIZATION.md](./README_OPTIMIZATION.md)

## 📁 项目结构

```text
src/
├── components/        # Vue 组件
│   ├── TechStackDisplay.vue    # 技术毒物表
│   ├── RefactorPlan.vue        # 屎山改造计划
│   ├── ProjectShowcase.vue     # 真实项目展示
│   └── ...                     # 其他组件
├── composables/       # 组合式函数
├── types/            # TypeScript 类型定义
├── assets/           # 静态资源
├── App.vue           # 主应用组件
├── main.ts           # 入口文件
└── style.scss        # 全局样式

public/               # 公共资源
├── images/           # 图片
├── music/            # 音频文件
└── ...

dist/                 # 构建输出
├── js/app.js        # 主应用文件
├── css/app.css      # 样式文件
└── ...
```

## 📄 许可证

MIT License
