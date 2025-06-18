<template>
    <div class="loading-container" :class="{ 'full-screen': fullScreen }">
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p v-if="text" class="loading-text">{{ text }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoadingSpinner',
    props: {
        text: {
            type: String,
            default: '加载中...'
        },
        fullScreen: {
            type: Boolean,
            default: false
        }
    }
});
</script>

<style scoped>
.loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}

.loading-container.full-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 9999;
}

.loading-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #646cff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

.loading-text {
    color: #fff;
    font-size: 16px;
    margin: 0;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .spinner {
        width: 30px;
        height: 30px;
        border-width: 3px;
    }

    .loading-text {
        font-size: 14px;
    }
}
</style>
