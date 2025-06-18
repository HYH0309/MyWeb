<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import SkillsDisplay from './components/SkillsDisplay.vue';
import Copyright from './components/Copyright.vue';
import MusicPlayer from './components/MusicPlayer.vue';
import Card from './components/Card.vue';
import ErrorBoundary from './components/ErrorBoundary.vue';
import TechStackDisplay from './components/TechStackDisplay.vue';
import ProjectShowcase from './components/ProjectShowcase.vue';

// 简单的响应式判断
const isMobile = () => window.innerWidth < 768;
const isTablet = () => window.innerWidth >= 768 && window.innerWidth < 1024;
const isDesktop = () => window.innerWidth >= 1024;

// 对话框相关状态
const dialogVisible = ref(false);
const htmlContent = ref('');

// 显示 HTML 内容的函数
const showHtmlContent = (content: string) => {
  htmlContent.value = content;
  dialogVisible.value = true;
};

// 关闭对话框并重置内容
const resetSelection = () => {
  htmlContent.value = '';
  dialogVisible.value = false;
};

// 错误重试处理
const handleRetry = () => {
  window.location.reload();
};

const handleMusicRetry = () => {
  console.log('Retrying music player...');
};

const handleChatRetry = () => {
  console.log('Retrying chat component...');
};
</script>
<template>
  <ErrorBoundary @retry="handleRetry">
    <header>
      <!-- 头部内容 -->
    </header>
    <div class="app" :class="{ 'mobile-layout': isMobile() }">
      <aside v-if="!isMobile()">
        <Sidebar />
      </aside>
      <main class="main-content" :class="{ 'full-width': isMobile() }">
        <!-- 音乐播放器 -->
        <Card class="music-card">
          <ErrorBoundary @retry="handleMusicRetry">
            <MusicPlayer />
          </ErrorBoundary>
        </Card>

        <!-- 技术栈展示 -->
        <Card class="tech-stack-card">
          <TechStackDisplay />
        </Card>

        <!-- 项目展示 -->
        <Card class="project-card">
          <ProjectShowcase />
        </Card>

        <!-- 移动端显示技能 -->
        <Card v-if="isMobile()" class="mobile-skills">
          <SkillsDisplay />
        </Card>
      </main>
    </div>
    <footer>
      <Copyright />
    </footer>
  </ErrorBoundary>
</template>




<style scoped>
.app {
  display: flex;
  min-height: 100vh;
}

.app.mobile-layout {
  flex-direction: column;
}

.main-content {
  width: 80vw;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
}

.main-content.full-width {
  width: 100vw;
  max-width: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .app {
    flex-direction: column;
  }

  aside {
    display: none;
  }

  .main-content {
    width: 100%;
    padding: 1rem;
    gap: 1.5rem;
  }
}
</style>
