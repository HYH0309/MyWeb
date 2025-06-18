<template>
  <div class="skills-display">
    <div class="skills-list">
      <div class="skill" v-for="skill in skills" :key="skill.name">
        <div class="skill-box">
          <img :src="getIconPath(skill.icon)" :alt="skill.name" class="skill-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Vue.js', icon: 'Vue.svg', description: 'Vue.js框架' },
  { name: 'TypeScript', icon: 'Typescript.svg', description: 'TypeScript语言' },
  { name: 'JavaScript', icon: 'JavaScript.svg', description: 'JavaScript语言' },
  { name: 'Python', icon: 'Python.svg', description: 'Python语言' },
  { name: 'Node.js', icon: 'Node.js.svg', description: 'Node.js运行时' },
  { name: 'Java', icon: 'Java.svg', description: 'Java语言' },
  { name: 'C++', icon: 'C++.svg', description: 'C++语言' },
  { name: 'MySQL', icon: 'Mysql.svg', description: 'MySQL数据库' },
  { name: 'Redis', icon: 'Redis.svg', description: 'Redis缓存' },
  { name: 'Docker', icon: 'Docker2.svg', description: 'Docker容器' },
  { name: 'Linux', icon: 'Linux.svg', description: 'Linux系统' },
  { name: 'Element-plus', icon: 'Element-plus.svg', description: 'Element Plus组件库' },
  { name: 'Spring Boot', icon: 'Springboot.svg', description: 'Spring Boot框架' },
  { name: 'R', icon: 'R.svg', description: 'R语言' },
  { name: 'Markdown', icon: 'Markdown.svg', description: 'Markdown标记语言' },
];

const getIconPath = (iconName: string): string => {
  return new URL(`../assets/icons/${iconName}`, import.meta.url).href;
};
</script>

<style scoped>
.skills-display {
  text-align: center;
  padding: 2rem 1.5rem;
  /* 增加上下边距，减少左右边距 */
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  /* 减少内部图标间距 */
  margin: 1.5rem 0;
  /* 增加上下外边距 */
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.2s;
  margin: 0.25rem;
  /* 减少单个技能的外边距 */
}

.skill:hover {
  transform: translateY(-2px);
  /* 减少悬停移动距离 */
}

.skill-box {
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffffb0;
  transition: box-shadow 0.3s, background-color 0.3s;
  box-shadow: 0 1px 3px rgb(100, 79, 139);
  margin: 0;
  /* 移除skill-box的margin */
}

.skill:hover .skill-box {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  background-color: #e0f7fa;
}

.skill img {
  width: 90%;
  height: 90%;
  transition: transform 0.5s;
}

.skill:hover img {
  transform: scale(1.2);
}
</style>
