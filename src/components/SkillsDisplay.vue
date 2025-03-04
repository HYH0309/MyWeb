<template>
  <div class="skills-display">
    <div class="skills-list">
      <div class="skill" v-for="skill in skills" :key="skill.name" @mouseover="showTooltip(skill)" @mouseleave="hideTooltip">
        <div class="skill-box">
          <img :src="getIconPath(skill.icon)" :alt="skill.name" class="skill-icon" />
          <div v-if="tooltipSkill === skill" class="tooltip">{{ skill.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// 定义技能对象的类型
interface Skill {
  name: string;
  icon: string;
  description: string;
}

export default defineComponent({
  name: 'SkillsDisplay',
  data() {
    return {
      // 确保为 skills 添加类型注解
      skills: <Skill[]>[
        { name: 'C++', icon: 'C++.svg', description: '一种强大的通用编程语言，用于系统编程和高性能应用。' },
        { name: 'Docker', icon: 'Docker2.svg', description: '用于开发和部署应用程序的容器化工具，支持轻量化和高效分发。' },
        { name: 'Java', icon: 'Java.svg', description: '一种面向对象的通用编程语言，广泛用于企业级应用开发。' },
        { name: 'MySQL', icon: 'Mysql.svg', description: '一种流行的开源关系数据库管理系统，适合结构化数据存储。' },
        { name: 'Node.js', icon: 'Node.js.svg', description: '一个基于 Chrome V8 引擎，适合构建高性能后端服务。' },
        { name: 'Redis', icon: 'Redis.svg', description: '一种内存数据结构存储，常用作数据库、缓存和消息代理。' },
        { name: 'Spring Boot', icon: 'Springboot.svg', description: '一个用于快速构建基于 Java 的微服务和应用程序的框架。' },
        { name: 'Vue.js', icon: 'Vue.svg', description: '一个用于构建用户界面的渐进式 JavaScript 框架，适合单页面应用开发。' },
        { name: 'Python', icon: 'Python.svg', description: '一种简单易学的通用编程语言，广泛用于数据分析、人工智能和 Web 开发。' },
        { name: 'R', icon: 'R.svg', description: '一种专为统计计算和数据可视化设计的编程语言。' },
        { name: 'JavaScript', icon: 'JavaScript.svg', description: '一种前端开发的核心语言，也用于后端开发和跨平台应用构建。' },
        { name: 'TypeScript', icon: 'Typescript.svg', description: 'JavaScript 的超集，增加了静态类型检查，适合大规模应用开发。' },
        { name: 'Element-plus', icon: 'Element-plus.svg', description: '一个基于 Vue.js 的组件库，提供丰富的 UI 组件和功能。' },
        { name: 'Linux', icon: 'Linux.svg', description: '一个开源的操作系统内核，广泛用于服务器、开发和嵌入式系统。' },
        { name: 'Ubuntu', icon: 'Ubuntu.svg', description: '一个基于 Linux 的流行操作系统，易于使用，适合开发和生产环境。' },
        { name: 'Markdown', icon: 'Markdown.svg', description: '一种轻量级标记语言，用于快速编写格式化文档和内容。' },
      ],
      tooltipSkill: null as Skill | null,  // 明确tooltipSkill的类型为Skill或null
    };
  },
  methods: {
    getIconPath(iconName: string) {
      return new URL(`../assets/icons/${iconName}`, import.meta.url).href;
    },
    showTooltip(skill: Skill) {
      this.tooltipSkill = skill;
    },
    hideTooltip() {
      this.tooltipSkill = null;
    },
  },
});
</script>

<style scoped>
.skills-display {
  text-align: center;
  padding: 1rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px; /* 间隔更小 */
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.2s; /* 添加整体变换效果 */
}

.skill:hover {
  transform: translateY(-5px); /* 悬停时向上移动 */
}

.skill-box {
  border: 1px solid #ccc; /* 边框颜色 */
  border-radius: 8px; /* 边框圆角 */
  width: 40px; /* 更小的固定宽度 */
  height: 40px; /* 更小的固定高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffffb0; /* 背景颜色 */
  transition: box-shadow 0.3s, background-color 0.3s; /* 添加动画效果 */
  box-shadow: 0 1px 3px rgb(100, 79, 139); /* 添加轻微的阴影 */
}

.skill:hover .skill-box {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 悬停时的阴影效果 */
  background-color: #e0f7fa; /* 悬停时的背景色变化 */
}

.skill img {
  width: 90%; /* 图标宽度适应盒子 */
  height: 90%; /* 图标高度适应盒子 */
  transition: transform 0.5s; /* 动画缩放 */
}

.skill:hover img {
  transform: scale(1.2); /* 鼠标悬停时放大 */
}

.tooltip {
  position: absolute;
  bottom: 100%; /* 提示信息显示在技能图标上方 */
  left: 500%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0.4rem; /* 较小的内边距 */
  border-radius: 4px; /* 更小的圆角 */
  white-space: nowrap;
}

/* 添加淡入效果的动画 */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
