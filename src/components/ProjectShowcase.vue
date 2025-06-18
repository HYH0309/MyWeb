<template>
    <div class="project-showcase">
        <div class="showcase-header">
            <h2>
                <el-icon class="header-icon">
                    <Briefcase />
                </el-icon>
                我的"杰作"展示区
            </h2>
            <div class="disclaimer"> <el-tag type="primary" size="small">
                    <el-icon>
                        <Promotion />
                    </el-icon>
                    真实踩坑经验分享
                </el-tag>
                <el-tag type="success" size="small">
                    <el-icon>
                        <TrendCharts />
                    </el-icon>
                    从入门到"放弃"再到坚持
                </el-tag>
                <el-tag type="warning" size="small">
                    <el-icon>
                        <SemiSelect />
                    </el-icon>
                    代码质量持续进化中
                </el-tag>
            </div>
        </div>
        <div class="projects-grid">
            <div v-for="project in projects" :key="project.name" class="project-card"
                :class="{ featured: project.featured }" @click="showProjectDetail(project)">
                <div class="project-header">
                    <div class="project-icon">{{ project.icon }}</div>
                    <div class="project-title">
                        <h3>{{ project.name }}</h3>
                        <div class="project-tags">
                            <el-tag v-for="tag in project.tags" :key="tag" :type="getTagType(tag)" size="small">
                                {{ tag }}
                            </el-tag>
                        </div>
                    </div>
                    <div class="project-status">
                        <el-progress type="circle" :percentage="project.progress" :width="50"
                            :color="getProgressColor(project.progress)" />
                    </div>
                </div>

                <div class="project-content">
                    <div class="project-description">{{ project.description }}</div>

                    <div class="project-tech">
                        <h4>
                            <el-icon>
                                <Tools />
                            </el-icon>
                            技术栈
                        </h4>
                        <div class="tech-list">
                            <span v-for="tech in project.techStack" :key="tech" class="tech-item"
                                @click.stop="showTechInfo(tech)" :title="`了解 ${tech} 技术`">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="project-footer">
                    <div class="project-metrics">
                        <span class="metric">
                            <el-icon>
                                <Lightning />
                            </el-icon>
                            {{ project.duration }}
                        </span>
                        <span class="metric">
                            <el-icon>
                                <Aim />
                            </el-icon>
                            {{ project.difficulty }}
                        </span>
                    </div>
                    <el-button v-if="project.github" type="primary" size="small"
                        @click.stop="openGithub(project.github)">
                        查看源码
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElTag, ElProgress, ElButton, ElMessage, ElIcon } from 'element-plus';
import {
    Briefcase,
    Promotion,
    TrendCharts,
    SemiSelect,
    ChatDotRound,
    Tools,
    Reading,
    Lightning,
    Aim,
    CircleCheck,
    Trophy
} from '@element-plus/icons-vue';

interface Project {
    name: string;
    icon: string;
    description: string;
    techStack: string[];
    progress: number;
    tags: string[];
    duration: string;
    difficulty: string;
    github?: string;
    featured?: boolean;
}

const projects = ref<Project[]>([
    {
        name: 'Vue个人网站',
        icon: '🌐',
        description: '就是你现在看到的这个网站！一个展示前端技能和个人成长的响应式个人主页',
        techStack: ['Vue3', 'TypeScript', 'Vite', 'Element Plus', 'SCSS'],
        progress: 95,
        tags: ['前端', '个人项目'],
        duration: '2周',
        difficulty: '中等',
        github: 'https://github.com/HYH0309/MyWeb',
        featured: true
    },
    {
        name: 'IMISLab学习平台',
        icon: '🚀',
        description: '集成文章发布、在线判题(OJ)、标签管理等功能的现代化学习管理平台，支持多语言代码提交和实时判题',
        techStack: ['Vue3', 'Go', 'MySQL', 'TypeScript', 'Gin', 'Docker'],
        progress: 85,
        tags: ['全栈', '平台项目'],
        duration: '3个月',
        difficulty: '高',
        github: 'https://github.com/HYH0309/IMISLab',
        featured: true
    },
    {
        name: '学生管理系统',
        icon: '🎓',
        description: '基于SpringBoot+Vue的前后端分离学生信息管理系统，实现完整的CRUD操作和权限管理',
        techStack: ['SpringBoot', 'Vue3', 'MySQL', 'Element UI'],
        progress: 80,
        tags: ['全栈', '学习项目'],
        duration: '1个月',
        difficulty: '中等',
        github: 'https://github.com/HYH0309/student-manage-system'
    },
    {
        name: 'cvue脚手架',
        icon: '⚡',
        description: '使用Rust构建的高性能Vue项目脚手架工具，支持多种模板和自动化配置',
        techStack: ['Rust', 'Clap', 'Tokio', 'Serde'],
        progress: 75,
        tags: ['系统工具', 'Rust'],
        duration: '2个月',
        difficulty: '高',
        github: 'https://github.com/HYH0309/cvue'
    }
]);

const getTagType = (tag: string): 'success' | 'warning' | 'danger' | 'primary' | 'info' => {
    const typeMap: Record<string, 'success' | 'warning' | 'danger' | 'primary' | 'info'> = {
        '前端': 'primary',
        '全栈': 'info',
        '个人项目': 'success',
        '学习项目': 'warning',
        '平台项目': 'primary',
        '系统工具': 'success',
        'Rust': 'danger'
    };
    return typeMap[tag] || 'info';
};

const getProgressColor = (percentage: number): string => {
    if (percentage < 50) return '#f56c6c';
    if (percentage < 80) return '#e6a23c';
    return '#67c23a';
};

const showProjectDetail = (project: Project): void => {
    ElMessage.info(`查看项目详情: ${project.name}`);
};

const openGithub = (url: string): void => {
    window.open(url, '_blank');
};

const showTechInfo = (tech: string): void => {
    const techInfo: Record<string, string> = {
        'Vue3': '现代化前端框架 - 响应式数据绑定',
        'TypeScript': 'JavaScript超集 - 强类型检查',
        'Vite': '下一代构建工具 - 极速热更新',
        'Element Plus': 'Vue3组件库 - 开箱即用',
        'SCSS': 'CSS预处理器 - 样式编程',
        'Go': '高性能编程语言 - 并发能力强',
        'MySQL': '关系型数据库 - 数据存储',
        'Gin': 'Go轻量级框架 - 快速开发',
        'Docker': '容器化平台 - 简化部署',
        'SpringBoot': 'Java开发框架 - 企业级应用',
        'Vue2': '经典前端框架 - 渐进式设计',
        'Element UI': 'Vue2组件库 - 桌面端UI',
        'Rust': '系统编程语言 - 内存安全',
        'Clap': 'Rust CLI解析 - 命令行工具',
        'Tokio': 'Rust异步运行时 - 高性能',
        'Serde': 'Rust序列化 - 数据转换'
    };

    const info = techInfo[tech] || `${tech} - 优秀的技术选择`;
    ElMessage({
        message: info,
        type: 'success',
        duration: 2000,
        showClose: false
    });
};
</script>

<style scoped lang="scss">
.project-showcase {
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    color: white;

    .showcase-header {
        text-align: center;
        margin-bottom: 2rem;

        h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            color: #ecf0f1;
        }

        .disclaimer {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        gap: 1.5rem;
    }

    .project-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        padding: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        cursor: pointer;

        &.featured {
            border-color: #ffd700;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
        }

        .project-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;

            .project-icon {
                font-size: 2rem;
                min-width: 40px;
            }

            .project-title {
                flex: 1;

                h3 {
                    margin: 0 0 0.5rem 0;
                    font-size: 1.1rem;
                    color: #ffd700;
                }

                .project-tags {
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }
            }

            .project-status {
                min-width: 50px;
            }
        }

        .project-content {
            margin-bottom: 1rem;

            .project-description {
                color: rgba(255, 255, 255, 0.8);
                font-size: 0.9rem;
                margin-bottom: 1rem;
                line-height: 1.5;
            }

            .project-tech {
                h4 {
                    font-size: 0.9rem;
                    margin-bottom: 0.5rem;
                    color: #ffd700;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .tech-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;

                    .tech-item {
                        background: rgba(255, 255, 255, 0.2);
                        padding: 0.3rem 0.6rem;
                        border-radius: 6px;
                        font-size: 0.8rem;
                        color: rgba(255, 255, 255, 0.9);
                        cursor: pointer;
                        transition: all 0.2s ease;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        user-select: none;

                        &:active {
                            transform: scale(0.95);
                            background: rgba(255, 215, 0, 0.4);
                            border-color: rgba(255, 215, 0, 0.6);
                            color: #fff;
                        }
                    }
                }
            }
        }

        .project-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .project-metrics {
                display: flex;
                gap: 1rem;

                .metric {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-size: 0.8rem;
                    color: #95a5a6;
                }
            }
        }
    }
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .project-showcase {
        .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem;
        }

        .project-card {
            padding: 1.2rem;
        }
    }
}

@media (max-width: 768px) {
    .project-showcase {
        padding: 1.5rem;

        .showcase-header {
            margin-bottom: 1.5rem;

            h2 {
                font-size: 1.5rem;
            }

            .disclaimer {
                gap: 0.5rem;
            }
        }

        .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .project-card {
            padding: 1rem;

            .project-header {
                gap: 0.5rem;

                .project-title h3 {
                    font-size: 1rem;
                }
            }

            .project-footer {
                flex-direction: column;
                gap: 1rem;
                align-items: flex-start;
            }
        }
    }
}

// 技术栈标签动画
@keyframes techItemSlideIn {
    0% {
        opacity: 0;
        transform: translateY(20px) scale(0.8);
    }

    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

// 为tech-item添加延迟动画类
.tech-item {
    animation: techItemSlideIn 0.6s ease-out;
    animation-fill-mode: both;

    &:nth-child(1) {
        animation-delay: 0.1s;
    }

    &:nth-child(2) {
        animation-delay: 0.2s;
    }

    &:nth-child(3) {
        animation-delay: 0.3s;
    }

    &:nth-child(4) {
        animation-delay: 0.4s;
    }

    &:nth-child(5) {
        animation-delay: 0.5s;
    }

    &:nth-child(6) {
        animation-delay: 0.6s;
    }

    &:nth-child(7) {
        animation-delay: 0.7s;
    }

    &:nth-child(8) {
        animation-delay: 0.8s;
    }
}
</style>
