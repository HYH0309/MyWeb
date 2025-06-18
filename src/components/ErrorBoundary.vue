<template>
    <div class="error-boundary" v-if="hasError">
        <div class="error-content">
            <div class="error-icon">⚠️</div>
            <h2 class="error-title">{{ title }}</h2>
            <p class="error-message">{{ message }}</p>
            <button @click="retry" class="retry-button">重试</button>
        </div>
    </div>
    <slot v-else />
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';

interface Props {
    title?: string;
    message?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: '出错了',
    message: '页面加载出现问题，请重试。'
});

const emit = defineEmits<{
    retry: []
}>();

const hasError = ref(false);

onErrorCaptured((error) => {
    console.error('ErrorBoundary caught an error:', error);
    hasError.value = true;
    return false;
});

const retry = () => {
    hasError.value = false;
    emit('retry');
};
</script>

<style scoped>
.error-boundary {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    padding: 2rem;
}

.error-content {
    text-align: center;
    max-width: 400px;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.error-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.error-title {
    color: #ff6b6b;
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
}

.error-message {
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 1.5rem 0;
    line-height: 1.5;
}

.retry-button {
    background: #646cff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

.retry-button:hover {
    background: #535bf2;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .error-content {
        padding: 1.5rem;
        margin: 1rem;
    }

    .error-icon {
        font-size: 2.5rem;
    }

    .error-title {
        font-size: 1.25rem;
    }
}
</style>
