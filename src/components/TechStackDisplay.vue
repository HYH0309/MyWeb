<template>
    <div class="tech-stack-display">
        <div class="header">
            <h2>
                <el-icon class="header-icon">
                    <TrendCharts />
                </el-icon>
                技术发展路线图
            </h2>
            <p class="subtitle">从"能跑就行"到"优雅架构"的进化之路 😅</p>
        </div>

        <!-- 当前技术掌握度 -->
        <div class="overview-section">
            <h3 class="section-title">📊 当前技术掌握度</h3>
            <div class="skill-overview">
                <div v-for="skill in currentSkills" :key="skill.name" class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">{{ skill.name }}</span>
                        <span class="skill-level">{{ skill.level }}</span>
                    </div>
                    <el-progress :percentage="skill.progress" :color="getProgressColor(skill.progress)"
                        :stroke-width="6" />
                    <div class="skill-desc">{{ skill.description }}</div>
                </div>
            </div>
        </div>

        <!-- 未来发展方向 -->
        <div class="future-section">
            <h3 class="section-title">🔮 未来发展方向</h3>
            <p class="section-desc">技术探索的星辰大海，每一步都算数</p>
            <div class="future-paths">
                <div v-for="path in futureStacks" :key="path.name" class="future-path">
                    <div class="path-header">
                        <span class="path-name">{{ path.name }}</span>
                        <el-tag :type="path.priority" size="small">{{ path.status }}</el-tag>
                    </div>
                    <div class="path-flow">
                        <span v-for="(tech, index) in path.techs" :key="tech" class="tech-step">
                            {{ tech }}
                            <el-icon v-if="index < path.techs.length - 1" class="arrow">
                                <ArrowRight />
                            </el-icon>
                        </span>
                    </div>
                    <div class="path-timeline">{{ path.timeline }}</div>
                </div>
            </div>
        </div>

        <!-- 学习感悟 -->
        <div class="reflection-section">
            <h3 class="section-title">💭 学习感悟</h3>
            <div class="reflection-cards">
                <div v-for="reflection in reflections" :key="reflection.title" class="reflection-card">
                    <h4>{{ reflection.title }}</h4>
                    <p>{{ reflection.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElTag, ElIcon, ElProgress } from 'element-plus';
import { TrendCharts, ArrowRight } from '@element-plus/icons-vue';

interface CurrentSkill {
    name: string;
    level: string;
    progress: number;
    description: string;
}

interface TechPath {
    name: string;
    techs: string[];
    status: string;
    priority: 'primary' | 'success' | 'warning' | 'danger' | 'info';
    timeline: string;
}

interface Reflection {
    title: string;
    content: string;
}

const currentSkills = ref<CurrentSkill[]>([
    {
        name: 'Vue3 + TypeScript',
        level: '熟练',
        progress: 85,
        description: '主力前端技术栈，从Options API进化到Composition API，组件化开发已成肌肉记忆'
    },
    {
        name: 'GoLang',
        level: '进阶',
        progress: 72,
        description: '后端新宠，goroutine和channel让并发编程变得优雅，微服务架构探索进行中'
    }, {
        name: 'Python + MATLAB',
        level: '熟练',
        progress: 78,
        description: '科学计算双子星：Python负责数据处理和Web开发，MATLAB专攻工程计算和仿真建模'
    },
    {
        name: 'MySQL + Redis',
        level: '进阶',
        progress: 68,
        description: '关系型和缓存数据库双修，索引优化和缓存策略正在深入学习'
    }, {
        name: 'Docker + K8s',
        level: '学习',
        progress: 55,
        description: '容器化和云原生技术栈，DevOps转型路上的重要一环'
    }, {
        name: 'CI/CD流水线',
        level: '进阶',
        progress: 62,
        description: 'GitHub Actions、GitLab CI持续集成部署，自动化测试和发布流程优化'
    },
    {
        name: '软件测试',
        level: '进阶',
        progress: 58,
        description: '单元测试、集成测试、E2E测试，Jest、Cypress等测试框架实践'
    },
    {
        name: 'R',
        level: '进阶',
        progress: 65,
        description: '统计分析和数据科学的利器，ggplot2可视化和tidyverse数据处理生态'
    },
    {
        name: 'Rust',
        level: '学习',
        progress: 45,
        description: '系统级编程语言，内存安全和零成本抽象的理念很吸引人，正在啃所有权概念'
    }
]);

const futureStacks = ref<TechPath[]>([
    {
        name: '架构设计核心',
        techs: ['分布式系统设计', '微服务架构', '高可用设计', '性能调优'],
        status: '架构师必修',
        priority: 'primary',
        timeline: '6个月内形成系统性架构思维，能设计中大型系统'
    },
    {
        name: '全栈技术融合',
        techs: ['前端工程化', '后端服务治理', '数据库调优', 'API设计'],
        status: '技术栈整合',
        priority: 'success',
        timeline: '3个月内打通前后端技术壁垒，形成全栈视野'
    },
    {
        name: 'DevOps运维体系',
        techs: ['Infrastructure as Code', '监控告警体系', '自动化测试', '灰度发布'],
        status: '工程化探索',
        priority: 'warning',
        timeline: '4个月构建完整DevOps流水线，掌握运维自动化'
    },
    {
        name: '强化学习AI',
        techs: ['深度Q网络', '策略梯度', '多智能体', '模型部署'],
        status: 'AI技能储备',
        priority: 'info',
        timeline: '结合数学基础，半年内掌握强化学习核心算法'
    }, {
        name: '团队技术领导',
        techs: ['技术方案评审', '代码质量管控', '团队培养', '技术债务管理'],
        status: '软技能提升',
        priority: 'danger',
        timeline: '长期修炼，从技术专家向技术管理者转型'
    },
    {
        name: '系统安全与性能',
        techs: ['安全架构设计', '性能监控调优', '并发编程', '缓存策略'],
        status: '深度优化',
        priority: 'warning',
        timeline: '5个月内掌握高性能系统设计和安全防护'
    }
]);


const reflections = ref<Reflection[]>([
    {
        title: '🏗️ 架构师思维的培养',
        content: '从写代码到设计系统，思维方式需要转变。不只关注功能实现，更要考虑可扩展性、可维护性、性能瓶颈。架构师要有全局视野，既要深入技术细节，又要理解业务需求。技术服务于业务，架构决定系统的生死。'
    },
    {
        title: '🔄 全栈能力的价值',
        content: '前端、后端、数据库、运维，每个环节都要懂一些。不是要成为每个领域的专家，而是要理解整个系统的运作机制。只有了解全链路，才能设计出合理的架构。全栈不是万金油，而是系统性思维的体现。'
    },
    {
        title: '🧪 测试驱动的质量保障',
        content: '好的架构需要好的质量保障体系。单元测试、集成测试、E2E测试，每一层都有其价值。自动化测试不是负担，而是重构和演进的保障。没有测试的代码就像没有安全带的赛车，跑得再快也不安全。'
    },
    {
        title: '🤖 强化学习的工程应用',
        content: 'AI不是魔法，强化学习更不是。理解数学原理很重要，但工程实现更关键。从实验室到生产环境，要考虑数据质量、模型稳定性、推理延迟。Python和MATLAB的数学基础让我更容易理解算法本质，工程经验让我知道如何落地。'
    }, {
        title: '👥 技术领导力的修炼',
        content: '技术架构师不只是技术专家，还要是团队的技术领袖。代码审查、技术分享、方案评审，这些都是技术影响力的体现。好的架构师能让团队的技术水平整体提升，而不是自己一个人牛。技术传承比技术创新更重要。'
    },
    {
        title: '🔐 安全意识的重要性',
        content: '架构师必须具备安全思维，从设计阶段就要考虑安全防护。数据加密、身份认证、权限控制、防注入攻击，这些都是基本功。安全不是事后补救，而是系统设计的核心考量。一个小的安全漏洞可能毁掉整个系统。'
    }
]);

const getProgressColor = (percentage: number): string => {
    if (percentage < 50) return '#f56c6c';
    if (percentage < 70) return '#e6a23c';
    return '#67c23a';
};
</script>

<style scoped lang="scss">
.tech-stack-display {
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    color: white;

    .header {
        text-align: center;
        margin-bottom: 3rem;

        h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .header-icon {
            color: #ffd700;
        }

        .subtitle {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1rem;
            margin-bottom: 0;
            font-style: italic;
        }
    }

    .overview-section {
        margin-bottom: 3rem;

        .section-title {
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
            text-align: center;
            border-bottom: 2px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 0.5rem;
        }

        .skill-overview {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }

        .skill-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
            }

            .skill-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.8rem;

                .skill-name {
                    font-weight: bold;
                    color: #ffd700;
                    font-size: 1rem;
                }

                .skill-level {
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.8);
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.2rem 0.6rem;
                    border-radius: 8px;
                }
            }

            .skill-desc {
                margin-top: 0.8rem;
                font-size: 0.9rem;
                color: rgba(255, 255, 255, 0.7);
                line-height: 1.5;
            }
        }
    }

    .future-section {
        margin-bottom: 3rem;

        .section-title {
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
            text-align: center;
            border-bottom: 2px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 0.5rem;
        }

        .section-desc {
            text-align: center;
            color: rgba(255, 255, 255, 0.7);
            font-size: 1rem;
            margin-bottom: 2rem;
            font-style: italic;
        }

        .future-paths {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        .future-path {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
            }

            .path-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;

                .path-name {
                    font-size: 1.1rem;
                    font-weight: bold;
                    color: #ffd700;
                }
            }

            .path-flow {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                flex-wrap: wrap;
                margin-bottom: 1rem;

                .tech-step {
                    background: rgba(255, 255, 255, 0.2);
                    padding: 0.4rem 0.8rem;
                    border-radius: 15px;
                    font-size: 0.85rem;
                    white-space: nowrap;
                }

                .arrow {
                    color: #ffd700;
                    font-size: 1rem;
                }
            }

            .path-timeline {
                font-size: 0.9rem;
                color: rgba(255, 255, 255, 0.7);
                font-style: italic;
                line-height: 1.4;
            }
        }
    }

    .reflection-section {
        margin-bottom: 1rem;

        .section-title {
            font-size: 1.4rem;
            margin-bottom: 2rem;
            text-align: center;
            border-bottom: 2px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 0.5rem;
        }

        .reflection-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        .reflection-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
            }

            h4 {
                color: #ffd700;
                margin: 0 0 1rem 0;
                font-size: 1.1rem;
            }

            p {
                margin: 0;
                font-size: 0.9rem;
                color: rgba(255, 255, 255, 0.8);
                line-height: 1.6;
            }
        }
    }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .tech-stack-display {
        padding: 1.5rem;

        .header h2 {
            font-size: 1.5rem;
        }

        .section-title {
            font-size: 1.2rem !important;
        }

        .skill-overview,
        .future-paths,
        .reflection-cards {
            grid-template-columns: 1fr;
        }

        .future-path .path-flow {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;

            .arrow {
                transform: rotate(90deg);
            }
        }
    }
}
</style>
