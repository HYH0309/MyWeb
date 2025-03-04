<template>
    <div class="link-container">
      <a 
        class="link" 
        :href="url" 
        target="_blank" 
        rel="noopener noreferrer"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        @click="handleClick"
      >
        {{ text }}
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HYLink',
    props: {
      url: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        hover: false
      };
    },
    methods: {
      handleClick() {
        console.log(`Navigating to: ${this.url}`);
      }
    }
  };
  </script>
  
  <style>
  .link-container {
    display: flex;
    justify-content: center; /* 居中 */
    align-items: center;
    margin: 20px; /* 增加边距 */
    background-color: #f9f9f9d7; /* 淡白色背景 */
    padding: 15px; /* 增加内边距 */
    border-radius: 8px; /* 圆角边框 */
  }
  
  .link {
    text-decoration: none; /* 去掉下划线 */
    color: #2c415c; /* 调整后变淡的蓝色 */
    font-size: 15px; /* 字体大小 */
    padding: 0px; /* 内边距 */
    border: 2px solid transparent; /* 边框设置为透明，避免跳动 */
    border-radius: 5px; /* 圆角边框 */
    transition: all 0.5s ease; /* 动效过渡 */
  }
  
  .link:hover {
    color: #000000; /* 悬停时，字体颜色 */
    background-color: #ffffff; /* 调整后变淡的蓝色 */
    border: 2px solid #396ba8c7; /* 悬停边框颜色 */
  }
  
  .link:active {
    transform: scale(0.95); /* 点击时缩小效果 */
  }
  </style>
  