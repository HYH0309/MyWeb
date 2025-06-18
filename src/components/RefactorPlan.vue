<template>
    <div class="refactor-plan">
        <div class="plan-header">
            <h2>
                <el-icon class="header-icon">
                    <Trophy />
                </el-icon>
                "从入坑到躺平"的开发史
            </h2>
            <p class="subtitle">记录一个菜鸟程序员的奇幻漂流</p>
            <div class="plan-stats">
                <div class="stat-item">
                    <span class="stat-number">{{ totalProjects }}</span>
                    <span class="stat-label">挖坑项目</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">{{ completedProjects }}</span>
                    <span class="stat-label">勉强能看</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">{{ bugFixed }}</span>
                    <span class="stat-label">Bug制造数</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">{{ improvementRate }}%</span>
                    <span class="stat-label">自我感觉良好度</span>
                </div>
            </div>
        </div>
        <div class="timeline">
            <div class="timeline-title">
                <h3>
                    <el-icon class="section-icon">
                        <Star />
                    </el-icon>
                    技能点歪楼史
                </h3>
                <p class="timeline-desc">看起来什么都会，实际上什么都不精</p>
            </div>

            <div class="timeline-items">
                <div v-for="(item, index) in currentSkills" :key="index" class="timeline-item"
                    :class="{ active: item.status === 'active' }">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-tech">{{ item.tech }}</div>
                        <div class="timeline-desc">{{ item.description }}</div>
                        <div class="timeline-result">{{ item.result }}</div>
                        <el-progress :percentage="item.progress" :color="getProgressColor(item.progress)"
                            :stroke-width="4" :show-text="false" />
                    </div>
                </div>
            </div>
        </div>

        <div class="blueprint">
            <div class="blueprint-title">
                <h3>
                    <el-icon class="section-icon">
                        <Tools />
                    </el-icon>
                    "下个版本一定优化"计划书
                </h3>
                <p class="blueprint-subtitle">又名：永远不会实现的技术理想</p>
            </div>

            <div class="blueprint-grid">
                <div v-for="direction in learningDirections" :key="direction.category" class="blueprint-card">
                    <div class="blueprint-header">
                        <el-icon class="blueprint-icon">
                            <DataBoard v-if="direction.category === '数据驱动开发'" />
                            <Cloudy v-else-if="direction.category === '云原生体验'" />
                            <Connection v-else-if="direction.category === '分布式架构'" />
                            <Setting v-else-if="direction.category === '系统设计'" />
                            <User v-else />
                        </el-icon>
                        <h4>{{ direction.category }}</h4>
                    </div>
                    <div class="blueprint-items">
                        <div v-for="item in direction.items" :key="item" class="blueprint-item">
                            {{ item }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="motto">
            <div class="motto-text">
                "从复制粘贴到原创bug，从能跑就行到能看就好，这就是我的技术成长路径。
                虽然踩了无数坑，但每个坑都让我成长一点点。"
            </div>
            <div class="motto-author">—— 一个在技术路上摸爬滚打的快乐程序猿</div>
            <div class="motto-ps">PS: 下次一定好好写注释！</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElProgress, ElIcon } from 'element-plus';
import { Trophy, Star, Tools, DataBoard, Cloudy, Connection, Setting, User } from '@element-plus/icons-vue';

interface SkillItem {
    tech: string;
    description: string;
    result: string;
    progress: number;
    status: string;
}

interface LearningDirection {
    category: string;
    icon: string;
    items: string[];
}

const currentSkills = ref<SkillItem[]>([
    {
        tech: 'Vue3+TS',
        description: '看教程造轮子，结果造了个方的',
        result: '组件套组件，套到怀疑人生',
        progress: 75,
        status: 'active'
    },
    {
        tech: 'SpringBoot',
        description: '复制粘贴大法，CRUD一把梭',
        result: '祖传代码传千代，bug修到天荒地老',
        progress: 60,
        status: 'completed'
    },
    {
        tech: 'Gin',
        description: '听说Go很快，硬着头皮上',
        result: '接口404满天飞，心态也404了',
        progress: 45,
        status: 'in-progress'
    },
    {
        tech: 'Redis',
        description: '缓存？就当内存数据库用呗',
        result: '缓存穿透、雪崩、击穿全家桶',
        progress: 35,
        status: 'planning'
    },
    {
        tech: 'Docker',
        description: '能跑就行，配置啥的以后再说',
        result: '容器镜像100GB+，硬盘在哭泣',
        progress: 50,
        status: 'learning'
    }
]);

const learningDirections = ref<LearningDirection[]>([
    {
        category: '数据驱动开发',
        icon: '📊',
        items: ['终于学会看监控图表了', '数据库不再只会SELECT *', '性能调优从删数据开始']
    },
    {
        category: '云原生体验',
        icon: '☁️',
        items: ['K8s配置不再全靠百度', 'Docker镜像缩小到10GB以下', '服务不再"偶尔"宕机']
    },
    {
        category: '分布式架构',
        icon: '🌐',
        items: ['微服务拆分有了章法', '分布式事务不再是玄学', '缓存击穿不再半夜报警']
    },
    {
        category: '系统设计',
        icon: '🏗️',
        items: ['设计模式不只知道单例', '高并发不靠加服务器解决', '代码重构有勇气动手了']
    },
    {
        category: '软技能进化',
        icon: '🧠',
        items: ['写文档不再是痛苦', '需求变更能淡定处理', '技术债务敢于正视']
    }
]);

const totalProjects = computed(() => 8);
const completedProjects = computed(() => 5);
const bugFixed = computed(() => 147);
const improvementRate = computed(() => 85);

const getProgressColor = (percentage: number): string => {
    if (percentage < 40) return '#f56c6c';
    if (percentage < 70) return '#e6a23c';
    return '#67c23a';
};
</script>

<style scoped lang="scss">
.refactor-plan {
    padding: 2.5rem;
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    border-radius: 20px;
    color: white;
    margin: 1rem 0;

    .plan-header {
        text-align: center;
        margin-bottom: 2.5rem;

        h2 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .header-icon {
            font-size: 1.8rem;
            color: #f39c12;
        }

        .subtitle {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 2rem;
            font-style: italic;
        }

        .plan-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;

            .stat-item {
                background: rgba(255, 255, 255, 0.1);
                padding: 1.5rem;
                border-radius: 10px;
                text-align: center;

                .stat-number {
                    display: block;
                    font-size: 1.8rem;
                    font-weight: bold;
                    color: #3498db;
                }

                .stat-label {
                    font-size: 0.9rem;
                    opacity: 0.8;
                    margin-top: 0.5rem;
                }
            }
        }
    }

    .timeline {
        margin-bottom: 2.5rem;

        .timeline-title {
            text-align: center;
            margin-bottom: 2rem;

            h3 {
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
                color: #3498db;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }

            .section-icon {
                font-size: 1.3rem;
                color: #3498db;
            }

            .timeline-desc {
                color: rgba(255, 255, 255, 0.8);
                font-style: italic;
                margin: 0;
            }
        }

        .timeline-items {
            position: relative;
            padding-left: 2.5rem;

            &::before {
                content: '';
                position: absolute;
                left: 1rem;
                top: 0;
                bottom: 0;
                width: 2px;
                background: #3498db;
            }

            .timeline-item {
                position: relative;
                margin-bottom: 2.5rem;
                padding-left: 2.5rem;

                .timeline-dot {
                    position: absolute;
                    left: -2rem;
                    top: 0.5rem;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #95a5a6;
                    border: 3px solid #2c3e50;
                }

                &.active .timeline-dot {
                    background: #e74c3c;
                    box-shadow: 0 0 20px rgba(231, 76, 60, 0.5);
                }

                .timeline-content {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 1rem;
                    border-radius: 10px;
                    border-left: 4px solid #3498db;

                    .timeline-tech {
                        font-weight: bold;
                        color: #3498db;
                        margin-bottom: 0.5rem;
                    }

                    .timeline-desc {
                        color: #f39c12;
                        margin-bottom: 0.5rem;
                    }

                    .timeline-result {
                        color: #e74c3c;
                        font-style: italic;
                        margin-bottom: 1rem;
                    }
                }
            }
        }
    }

    .blueprint {
        margin-bottom: 2rem;

        .blueprint-title {
            text-align: center;
            margin-bottom: 2rem;

            h3 {
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
                color: #e67e22;
            }

            .blueprint-subtitle {
                color: rgba(255, 255, 255, 0.8);
                font-style: italic;
                margin: 0;
            }
        }

        .blueprint-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;

            .blueprint-card {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                padding: 1.5rem;
                border: 1px solid rgba(255, 255, 255, 0.2);
                transition: all 0.3s ease;

                &:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
                }

                .blueprint-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;

                    .blueprint-icon {
                        font-size: 1.5rem;
                        margin-right: 0.8rem;
                        color: #27ae60;
                    }

                    h4 {
                        color: #27ae60;
                        margin: 0;
                    }
                }

                .blueprint-items {
                    .blueprint-item {
                        background: rgba(39, 174, 96, 0.2);
                        padding: 0.5rem;
                        margin-bottom: 0.5rem;
                        border-radius: 5px;
                        font-size: 0.9rem;
                        border-left: 3px solid #27ae60;
                    }
                }
            }
        }
    }

    .motto {
        text-align: center;
        background: rgba(255, 255, 255, 0.1);
        padding: 2rem;
        border-radius: 15px;
        border-left: 4px solid #f39c12;

        .motto-text {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 1rem;
            font-style: italic;
        }

        .motto-author {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-bottom: 0.5rem;
        }

        .motto-ps {
            font-size: 0.8rem;
            color: #f39c12;
            font-weight: bold;
        }
    }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .refactor-plan {
        padding: 1.5rem;
        margin: 0.5rem 0;
    }

    .plan-header {
        margin-bottom: 1.5rem;

        h2 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .subtitle {
            font-size: 1rem;
            margin-bottom: 1.5rem;
        }

        .plan-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-top: 1rem;

            .stat-item {
                padding: 1rem;
            }
        }
    }

    .timeline {
        margin-bottom: 1.5rem;

        .timeline-items {
            padding-left: 1.5rem;

            .timeline-item {
                margin-bottom: 1.5rem;
                padding-left: 1.5rem;
            }
        }
    }

    .learning-section {
        .learning-grid {
            grid-template-columns: 1fr;
            gap: 1rem;

            .learning-card {
                padding: 1rem;
            }
        }
    }
}

@media (max-width: 480px) {
    .refactor-plan {
        padding: 1rem;
    }

    .plan-header {
        .plan-stats {
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }
    }

    .timeline {
        .timeline-items {
            padding-left: 1rem;

            .timeline-item {
                padding-left: 1rem;
            }
        }
    }
}
</style>
