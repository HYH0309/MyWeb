<template>
    <div class="frosted-card">
        <div class="content">
            <slot>这是默认的插入内容，可以自定义替换。</slot>
        </div>
    </div>
</template>

<script setup lang="ts">
// Card组件，简洁的组合式API
</script>

<style scoped>
.frosted-card {
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    color: #fff;
    font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
    margin-bottom: 1rem;
}

.frosted-card:hover {
    background: rgba(255, 255, 255, 0.15);
}

.content {
    font-size: 1rem;
    line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .frosted-card {
        padding: 1.5rem;
        border-radius: 12px;
    }
}

@media (max-width: 576px) {
    .frosted-card {
        padding: 1rem;
    }
}
</style>