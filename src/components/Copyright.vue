<template>
  <footer class="copyright">
    © {{ currentYear }} GuLuGuLu |
    <a href="https://beian.miit.gov.cn/" target="_blank" class="beian">粤ICP备2024342052号-1</a>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.copyright {
  position: fixed; /* 固定在页面底部 */
  bottom: 0;
  left: 0;
  width: 100%; /* 宽度占满页面 */
  background-color: rgba(51, 51, 51, 0.4); /* 深色半透明背景 */
  color: #fff; /* 白色文字 */
  text-align: center; /* 内容居中对齐 */
  padding: 10px 0; /* 上下内边距 */
  font-size: 10px; /* 文字大小 */
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2); /* 顶部阴影 */
}

.beian {
  color: #ffffff; /* 备案号颜色 */
  text-decoration: none; /* 去掉下划线 */
}

.beian:hover {
  text-decoration: underline; /* 鼠标悬停时加下划线 */
}

@media (max-width: 600px) {
  .copyright {
    font-size: 12px; /* 小屏幕下的字体调整 */
    padding: 8px 0;
  }
}
</style>
