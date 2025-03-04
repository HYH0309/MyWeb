<template>
  <div class="music-player">
    <div class="card">
      <img :src="song.cover" alt="song.name" class="cover">
      <div class="info">
        <h2>{{ song.name }}</h2>
        <audio :src="song.url" controls class="audio-control"></audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      song: {
        name: 'SKY',
        cover: '/music/musics.png',
        url: '/music/sky.mp3'
      }
    };
  }
};
</script>

<style>
.music-player {
  display: flex;
  justify-content: center;
  width: 100%; /* 宽度设为100% */
}

.card {
  display: flex; /* 使用 Flexbox 使内容横向排列 */
  background: rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px; /* 最大宽度限制 */
  width: 100%; /* 让卡片宽度为100% */
  align-items: center; /* 垂直居中对齐内容 */
}

.cover {
  width: 120px; /* 封面图片大小 */
  height: auto;
  border-radius: 10px;
  margin-right: 20px; /* 增加封面与内容之间的间距 */
}

.info {
  display: flex;
  flex-direction: column; /* 垂直排列歌曲内容和控制条 */
  flex: 1; /* 占据剩余空间 */
  text-align: left; /* 左对齐文本内容 */
}

.audio-control {
  width: 100%; /* 控制条宽度为100%以匹配父容器 */
  margin-top: 10px; /* 增加控制条与歌曲名称之间的空间 */
  box-sizing: border-box; /* 确保包含边框和外边距 */
}
</style>
