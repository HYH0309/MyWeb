
<template>
  <div 
    class="sidebar" 
    :class="{ 'collapsed': isCollapsed }" 
    @mouseenter="expandSidebar" 
    @mouseleave="collapseSidebar"
  >
    <!-- 展开状态内容 -->
    <div class="sidebar-content" v-if="!isCollapsed">
      <slot name="expanded">
        <!-- 默认内容（展开时显示） -->
        <slot />
      </slot>
    </div>

    <!-- 收起状态内容 -->
    <div class="collapsed-content" v-else>
      <slot name="collapsed">
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  emits: ['collapse-change'],
  setup(_, { emit }) {
    const isCollapsed = ref(true);

    const expandSidebar = () => {
      isCollapsed.value = false;
      emit('collapse-change', isCollapsed.value);
    };

    const collapseSidebar = () => {
      isCollapsed.value = true;
      emit('collapse-change', isCollapsed.value);
    };

    const toggleSidebar = () => {
      isCollapsed.value = !isCollapsed.value;
      emit('collapse-change', isCollapsed.value);
    };

    return { isCollapsed, expandSidebar, collapseSidebar, toggleSidebar };
  },
});
</script>

<style scoped>
.sidebar {
  position: fixed;
  top:10%;
  left:1%;
  width: 25vh;                                   /* 展开状态下的宽度 */
  height: 80vh;                                   /* 高度为视口的 80% */
  padding: 1rem;                                  /* 内边距 */
  background: linear-gradient(to bottom, #6873a7, #4353cf); /* 渐变背景 */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);        /* 阴影 */
  transition: width 0.5s ease, background-color 0.8s; /* 动画时间延长至 0.8 秒 */
  cursor: pointer;                                /* 鼠标悬停为指针 */
  z-index: 100;                                   /* 层级设置 */
  border-radius: 20px;                            /* 圆角边框 */
}

.sidebar.collapsed {
  width: 40px;                                    /* 收起状态宽度 */
  overflow: hidden;                               /* 隐藏溢出的内容 */
  display: flex;
  flex-direction: column;
  justify-content: center;                        /* 内容垂直居中 */
}

.collapsed-content {
  display: flex;
  justify-content: center;                        /* 内容水平居中 */
  align-items: center;                            /* 内容垂直居中 */
}

.collapsed-icon {
  width: 24px;                                    /* 图标宽度 */
  height: 24px;                                   /* 图标高度 */
  opacity: 0.8;                                   /* 初始透明度 */
  transition: opacity 0.5s;                       /* 动画效果 */
}

.collapsed-icon:hover {
  opacity: 1;                                     /* 鼠标悬停时完全不透明 */
}
</style>
