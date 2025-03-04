<template>
    <div class="frosted-card">
        <div class="content">
        <slot>这是默认的插入内容，可以自定义替换。</slot>
        </div>
    </div>
</template>


<script>
export default {
    name: "Card",
};
</script>


<style scoped>
.frosted-card {
    max-width: 80%; /* 限制最大宽度为视口宽度的 90% */
    max-height: 90%; /* 限制最大高度为视口高度的 80% */
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
    backdrop-filter: blur(10px); /* 毛玻璃模糊效果 */
    -webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
    border-radius: 15px; /* 圆角 */
    border: 1px solid rgba(255, 255, 255, 0.2); /* 边框增强效果 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
    padding: 5%;
    margin: 10px; /* 增加与周围的间距 */
    color: #fff;
    font-family: Arial, sans-serif;
}

.content {
    font-size: calc(0.8rem + 0.5vw); /* 根据屏幕动态调整字体大小 */
    line-height: 1.5;
}
</style>


