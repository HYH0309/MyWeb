<template>
  <div class="sidebar" :class="{ 'collapsed': isCollapsed }">
    <!-- 侧边栏头部 -->
    <div class="sidebar-header">
      <div class="avatar" v-if="!isCollapsed">
        <img src="/favicon.ico" alt="Avatar" />
      </div>
      <div class="logo" v-if="!isCollapsed">
        <h3>HYH0309</h3>
        <span class="subtitle">IMIS/SCAU</span>
      </div>
      <div class="toggle-btn" @click="toggleSidebar">
        <el-icon>
          <Menu />
        </el-icon>
      </div>
    </div>

    <!-- 导航菜单 -->
    <nav class="sidebar-nav">
      <div v-for="item in navItems" :key="item.id" class="nav-item" :class="{ active: activeNav === item.id }"
        @click="scrollToSection(item.id)">
        <el-icon class="nav-icon">
          <component :is="item.icon" />
        </el-icon>
        <span class="nav-text" v-if="!isCollapsed">{{ item.label }}</span>
        <div class="nav-tooltip" v-if="isCollapsed">{{ item.label }}</div>
      </div>
    </nav> <!-- 展开状态的详细内容 -->
    <div class="sidebar-content" v-if="!isCollapsed">
      <div class="info-section">
        <div class="profile-info">
          <h4>💻 技术路线</h4>
          <p class="profile-desc">Vue3 + Rust + Go</p>
        </div>
        <div class="quick-stats">
          <div class="stat-item">
            <span class="stat-label">主力</span>
            <span class="stat-value">前端+后端</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">状态</span>
            <span class="stat-value">学习中 🚀</span>
          </div>
        </div>
      </div>
      <div class="skills-section">
        <div class="skills-header">
          <span class="skills-title">常用技术</span>
        </div>
        <div class="skills-compact">
          <SkillsDisplay />
        </div>
      </div>
    </div>

    <!-- 侧边栏底部 -->
    <div class="sidebar-footer" v-if="!isCollapsed">
      <div class="social-links">
        <a href="mailto:Y2433936387@163.com" class="social-link">
          <el-icon>
            <Message />
          </el-icon>
        </a>
        <a href="http://www.hyh0209.cn" target="_blank" class="social-link">
          <el-icon>
            <Link />
          </el-icon>
        </a>
        <a href="#" class="social-link">
          <el-icon>
            <Star />
          </el-icon>
        </a>
      </div>
      <div class="footer-text">
        <p>© 2025 HYH0309</p>
        <p class="status">🚀 代码质量持续优化中...</p>
        <p class="mood">😅 今日Bug修复: {{ todayBugCount }}个</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import {
  Menu,
  Star,
  Message,
  Link,
  Monitor,
  Tools,
  Files
} from '@element-plus/icons-vue';
import SkillsDisplay from './SkillsDisplay.vue';

const emit = defineEmits(['collapse-change']);

const isCollapsed = ref(true);
const activeNav = ref('music');
const todayBugCount = ref(Math.floor(Math.random() * 10) + 1); // 随机生成今日修复的Bug数量

const navItems = ref([
  { id: 'music', label: '音乐播放', icon: Monitor },
  { id: 'tech-stack', label: '技术路线', icon: Tools },
  { id: 'project', label: '项目展示', icon: Files }
]);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
  emit('collapse-change', isCollapsed.value);
};

const scrollToSection = (sectionId: string) => {
  activeNav.value = sectionId;
  const element = document.querySelector(`.${sectionId}-card`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const handleScroll = () => {
  const sections = navItems.value.map(item => item.id);
  let currentSection = sections[0];

  for (const sectionId of sections) {
    const element = document.querySelector(`.${sectionId}-card`);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = sectionId;
        break;
      }
    }
  }

  activeNav.value = currentSection;
}; onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background: linear-gradient(135deg, rgba(16, 31, 51, 0.95), rgba(28, 40, 51, 0.95));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sidebar.collapsed {
  width: 70px;
  overflow-x: hidden;
}

.collapsed * {
  overflow: hidden;
  white-space: nowrap;
}

/* 侧边栏头部 */
.sidebar-header {
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 80px;
  overflow: hidden;
}

.collapsed .sidebar-header {
  padding: 1.5rem 0.5rem;
  justify-content: center;
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  border: 2px solid rgba(52, 152, 219, 0.5);
  transition: all 0.3s ease;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo h3 {
  color: #fff;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  display: block;
  margin-top: 2px;
}

.toggle-btn {
  margin-left: auto;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.8);
}

.toggle-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

/* 导航菜单 */
.sidebar-nav {
  padding: 1rem 0;
  flex: 1;
  overflow-y: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.25rem 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  color: rgba(255, 255, 255, 0.8);
  overflow: hidden;
}

.collapsed .nav-item {
  justify-content: center;
  padding: 1rem 0.5rem;
  margin: 0.25rem 0.25rem;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transform: translateX(4px);
}

.nav-item.active {
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.2), rgba(41, 128, 185, 0.2));
  color: #3498db;
  border-left: 3px solid #3498db;
}

.collapsed .nav-item.active {
  border-left: none;
  border-bottom: 2px solid #3498db;
}

.nav-icon {
  font-size: 1.3rem;
  min-width: 1.3rem;
  margin-right: 1rem;
  transition: all 0.3s ease;
}

.collapsed .nav-icon {
  margin-right: 0;
}

.nav-text {
  font-weight: 500;
  font-size: 0.95rem;
  white-space: nowrap;
  opacity: 1;
  transition: all 0.3s ease;
  overflow: hidden;
}

.collapsed .nav-text {
  opacity: 0;
  width: 0;
  margin: 0;
}

/* 工具提示 */
.nav-tooltip {
  position: absolute;
  left: 70px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 1001;
}

.collapsed .nav-item:hover .nav-tooltip {
  opacity: 1;
}

/* 内容区域 */
.sidebar-content {
  padding: 0.75rem;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.info-section {
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.profile-info {
  margin-bottom: 0.75rem;
}

.profile-info h4 {
  color: #3498db;
  font-size: 0.9rem;
  margin: 0 0 0.3rem 0;
  font-weight: 600;
}

.profile-desc {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  margin: 0;
  line-height: 1.2;
  font-weight: 500;
}

.quick-stats {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  border-left: 2px solid #3498db;
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.7rem;
  font-weight: 500;
}

.stat-value {
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
}

.skills-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.skills-header {
  margin-bottom: 0.5rem;
}

.skills-title {
  color: #3498db;
  font-size: 0.85rem;
  font-weight: 600;
}

.skills-compact {
  flex: 1;
  overflow: hidden;
  padding: 0.75rem 0.5rem;
  /* 增加外边距 */
}

.skills-compact :deep(.skills-display) {
  padding: 0.5rem 0;
  /* 保持少量外边距 */
}

.skills-compact :deep(.skills-list) {
  gap: 2px;
  /* 进一步减少内部间距 */
  max-height: 200px;
  overflow: hidden;
  margin: 0.5rem 0;
  /* 增加上下外边距 */
}

.skills-compact :deep(.skill-box) {
  width: 32px;
  height: 32px;
  padding: 4px;
}

.skills-compact :deep(.skill-icon) {
  width: 24px;
  height: 24px;
}

/* 侧边栏底部 */
.sidebar-footer {
  padding: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.social-links {
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(52, 152, 219, 0.3);
  color: #3498db;
  transform: translateY(-2px);
}

.footer-text {
  text-align: center;
  font-size: 0.7rem;
}

.footer-text p {
  margin: 0.2rem 0;
  color: rgba(255, 255, 255, 0.6);
}

.status {
  color: #e74c3c !important;
  font-weight: 500;
}

/* 滚动条样式 */
.sidebar-nav::-webkit-scrollbar,
.sidebar-content::-webkit-scrollbar {
  width: 4px;
}

.sidebar-nav::-webkit-scrollbar-track,
.sidebar-content::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-nav::-webkit-scrollbar-thumb,
.sidebar-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}

.sidebar-nav::-webkit-scrollbar-thumb:hover,
.sidebar-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .sidebar {
    width: 250px;
  }

  .sidebar.collapsed {
    width: 60px;
  }
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}

/* 动画增强 */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.nav-item {
  animation: slideIn 0.3s ease forwards;
}

.nav-item:nth-child(1) {
  animation-delay: 0.1s;
}

.nav-item:nth-child(2) {
  animation-delay: 0.2s;
}

.nav-item:nth-child(3) {
  animation-delay: 0.3s;
}

.nav-item:nth-child(4) {
  animation-delay: 0.4s;
}

.nav-item:nth-child(5) {
  animation-delay: 0.5s;
}

.nav-item:nth-child(6) {
  animation-delay: 0.6s;
}
</style>
