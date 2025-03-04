<template>
  <header>
    <!-- 头部内容 -->
  </header>
  <div class="app">
    <aside>
      <Sidebar>
        <template #expanded>
          <Top />
          <Card>
            <p>天天开心</p>
          </Card>
          <div class="icon-container">
            <el-icon :size="50" @mouseover="onHover" @mouseleave="onLeave">
              <Star class="star-icon" />
            </el-icon>
          </div>
          <SkillsDisplay />
        </template>
        <template #collapsed>
          <SkillsDisplay />
        </template>
      </Sidebar>
    </aside>
    <main class="main-content">
      <Card>
        <MusicPlayer />
      </Card>
      <Card>
        <Hylink url="http://47.92.90.228:3090/" text="Java开发作业(SpringBoot+Vue)" />
        <Hylink url="http://47.92.90.228:4399/" text="Web开发作业(原生HTML+SpringBoot)" />
        <Hylink url="http://47.92.90.228:8090/" text="个人博客(Vue+Gin)" />
      </Card>
      <Card>
        <Aichat />
      </Card>
    </main>
  </div>
  <footer>
    <Copyright />
  </footer>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import Sidebar from './components/Sidebar.vue';
import SkillsDisplay from './components/SkillsDisplay.vue';
import Top from './components/Top.vue';
import Copyright from './components/Copyright.vue';
import MusicPlayer from './components/MusicPlayer.vue';
import Card from './components/Card.vue';
import Hylink from './components/Hylink.vue';
import { Star } from '@element-plus/icons-vue'; // 确保引入图标
import Aichat from './components/Aichat.vue';

export default defineComponent({
  name: 'App',
  components: {
    Aichat,
    Card,
    MusicPlayer,
    Top,
    Copyright,
    Sidebar,
    SkillsDisplay,
    Hylink,
    Star, // 注册图标组件
  },
  setup() {

    // 鼠标滑动特效函数
    const createMouseEffect = (event: MouseEvent) => {
      const effectElement = document.createElement('div');
      effectElement.className = 'mouse-effect';
      effectElement.style.left = `${event.pageX}px`;
      effectElement.style.top = `${event.pageY}px`;
      document.body.appendChild(effectElement);

      // 动画结束后移除特效元素
      setTimeout(() => {
        effectElement.remove();
      }, 1000); // 持续时间与动画时长一致
    };

    // 添加事件监听
    onMounted(() => {
      window.addEventListener('mousemove', createMouseEffect);
    });

    // 移除事件监听
    onUnmounted(() => {
      window.removeEventListener('mousemove', createMouseEffect);
    });

    const dialogVisible = ref(false); // 控制对话框的可见性
    const htmlContent = ref(''); // 存放要展示的 HTML 内容

    // 显示 HTML 内容的函数
    const showHtmlContent = (content: string) => {
      htmlContent.value = content; // 设置要显示的 HTML 内容
      dialogVisible.value = true; // 显示对话框
    };

    // 关闭对话框并重置内容
    const resetSelection = () => {
      htmlContent.value = '';
      dialogVisible.value = false; // 关闭对话框
    };

    return {
      dialogVisible,
      htmlContent,
      showHtmlContent,
      resetSelection,
      createMouseEffect,
    };
  },
  methods: {
    onHover(event: MouseEvent) {
      const target = event.currentTarget as HTMLElement;
      target.style.transform = 'scale(1.1)';
      target.style.transition = 'transform 0.2s';
    },
    onLeave(event: MouseEvent) {
      const target = event.currentTarget as HTMLElement;
      target.style.transform = 'scale(1)';
    },
  },
});
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: row;
  height: 100vh;
  /* 修正这里 */
}

aside {
  z-index: 10;
}

.main-content {
  width: 80vw;
  /* 修正这里 */
  height: 80vh;
  /* 否则会出现纵向滚动条 */
}

.mouse-effect {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(0, 150, 255, 0.3));
  pointer-events: none;
  /* 防止鼠标事件干扰 */
  animation: mouseEffectAnimation 1s ease-out;
  /* 动画持续时间为1秒 */
  z-index: 9999;
  /* 确保特效在最上层显示 */
}

@keyframes mouseEffectAnimation {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(5);
    opacity: 0;
  }
}

@media (max-width: 600px) {

  #waifu,
  aside {
    display: none;
  }

  .app {
    flex-direction: column;
  }

  aside {
    margin-right: 0;
    /* 小屏幕下取消间距 */
    margin-bottom: 1rem;
    /* 小屏幕下给 Sidebar 和内容之间添加垂直间距 */
  }

  footer {
    font-size: 12px;
    padding: 12px 0;
  }
}
</style>
