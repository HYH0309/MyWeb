<template>
  <div class="card-container">
    <div class="wrap">
      <div class="box-top">
        <div class="image"></div>
      </div>
      <div class="box-bottom">
        <h2>GuLuGuLu</h2>
        <span>算法随心记</span>
      </div>
      <div class="box-bottom2">
        <ul>
          <li>华南农业大学</li>
          <li>数信学院</li>
          <li>23信管2</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这里可以添加必要的脚本逻辑
</script>

<style scoped>
.card-container {
  display: flex; 
  justify-content: center; /* 居中对齐卡片 */
  margin-top: 20px; /* 顶部间距 */
}

/* 容器 */
.wrap {
  position: relative; 
  width: 80%; /* 保持稍小 */
  max-width: 350px; /* 设置最大宽度 */
  height: 180px; /* 增加高度以容纳更大弹出内容 */
  background-color: rgba(135, 126, 113, 0.3); /* 使用rgba增加透明度 */
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border-radius: 20px; /* 圆角 */
  transition: all 0.3s ease; /* 改进整体过渡 */
}

/* 上层 */
.box-top {
  position: relative;
  width: 100%;
  height: 100px; /* 适当减小高度 */
  background-color: rgba(234, 223, 210, 0.3); 
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直居中内容 */
  transition: height 0.5s ease;
}

/* 动画 */
.box-top::after {
  content: '';
  width: 40px;
  height: 40px;
  clip-path: polygon(50% 40%, 0 0, 100% 0);
  background-color: rgba(234, 223, 210, 0.8);
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: -38px;
  z-index: 999;
}

/* 头像 */
.image {
  position: absolute;
  top: 10px; /* 适当减小顶部距离 */
  width: 70px; /* 减少头像宽度 */
  height: 70px; /* 减少头像高度 */
  background-image: url("/home.gif"); /* 头像图像路径 */
  background-size: cover;
  border: 5px solid rgb(110, 148, 178);
  border-radius: 30%; /* 头像圆角 */
  transition: width 0.6s, height 0.6s, border-width 0.6s, transform 0.6s; /* 更好的过渡效果 */
}

/* 底层 */
.box-bottom,
.box-bottom2 {
  position: absolute;
  top: 110px; /* 调整顶部位置 */
  width: 100%;
  text-align: center;
  transition: top 0.5s ease;
}

.box-bottom {
  height: 60px; /* 增加底部内容可见高度 */
}

.box-bottom h2 {
  display: block;
  margin: 10px 0 5px 0; /* 缩小上下margin */
  font: 700 20px 'STHupo', sans-serif;
}

.box-bottom span {
  font: 400 14px 'STZhongsong', serif;
}

.box-bottom h2::after {
  content: '';
  display: block;
  width: 180px; /* 调整线条宽度 */
  height: 2px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  left: 50%;
  transform: translate(-50%, 4px);
}

.box-bottom2 {
  top: 1000px; /* 调整顶部位置以适应更高内容 */
  height: 10px; /* 增加弹出区域的高度 */
}

.box-bottom2 li {
  margin: 10px; /* 调整底部margin */
  font: 700 16px 'OCR A Std', monospace;
  transition: color 0.2s;
}

/* 悬停效果 */
.wrap:hover .box-top {
  height: 45px; /* 改变卡片收起时的高度 */
}

.wrap:hover .image {
  width: 30px; /* 修改为更小的尺寸 */
  height: 30px; /* 修改为更小的尺寸 */
  border-width: 3px;
  transform: translate(-70px, -5px);
}

.wrap:hover .box-bottom {
  top: 1000px; /* 调整位置，确保底部内容可见 */
}

.wrap:hover .box-bottom2 {
  top: 60px; /* 调整位置，使底部内容向下移动 */
}

li:hover {
  color: aqua; /* 悬停时更改颜色 */
}

/* 响应式设计 */
@media (max-width: 600px) {
  .wrap {
    width: 95%; /* 小屏幕时增加宽度 */
  }
  .box-bottom h2 {
    font-size: 18px; /* 小屏幕时减小字号 */
  }
}
</style>
