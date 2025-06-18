<template>
  <div class="music-player">
    <div class="player-header">
      <h2>🎵 程序员专属BGM</h2>
      <p class="subtitle">{{ currentMood }} - 适合{{ currentActivity }}时播放</p>
    </div>
    <div class="card">
      <img :src="song.cover" alt="song.name" class="cover">
      <div class="info">
        <h3>{{ song.name }}</h3>
        <p class="description">{{ song.description }}</p>
        <audio :src="song.url" controls class="audio-control" @play="updateActivity" @pause="resetActivity"></audio>
        <div class="music-stats">
          <span class="stat">🎧 播放次数: {{ playCount }}</span>
          <span class="stat">⏰ 专注时长: {{ focusTime }}小时</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Song } from '../types';

const song = ref<Song>({
  name: 'SKY',
  cover: '/music/musics.png',
  url: '/music/sky.mp3',
  description: '适合写代码时放空思维'
});

const currentMood = ref('平静专注');
const currentActivity = ref('编码');
const playCount = ref(Math.floor(Math.random() * 200) + 50);
const focusTime = ref((Math.random() * 20 + 10).toFixed(1));

const activities = ['编码', 'Debug', '重构', '学习', '摸鱼'];
const moods = ['平静专注', '激情澎湃', '深度思考', '轻松愉快', '微微焦虑'];

const updateActivity = () => {
  currentActivity.value = activities[Math.floor(Math.random() * activities.length)];
  currentMood.value = moods[Math.floor(Math.random() * moods.length)];
  playCount.value++;
};

const resetActivity = () => {
  currentActivity.value = '休息';
  currentMood.value = '放松状态';
};
</script>

<style scoped>
.music-player {
  text-align: center;
  color: white;
  padding: 1.5rem;
}

.player-header {
  margin-bottom: 1.5rem;
}

.player-header h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.player-header .subtitle {
  color: #bdc3c7;
  font-size: 0.9rem;
}

.card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cover {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
}

.info {
  flex: 1;
  text-align: left;
}

.info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.info .description {
  color: #bdc3c7;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
}

.audio-control {
  width: 100%;
  margin-bottom: 1rem;
}

.music-stats {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: #95a5a6;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .music-player {
    padding: 1rem;
  }

  .card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .info {
    text-align: center;
  }

  .music-stats {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
