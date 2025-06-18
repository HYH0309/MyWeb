<template>
    <div class="tech-roast">
        <div class="roast-header">
            <h2>🤦‍♂️ 技术吐槽大会</h2>
            <p class="subtitle">记录那些年踩过的奇葩坑和沙雕瞬间</p>
        </div>

        <div class="roast-categories">
            <el-tabs v-model="activeTab" type="border-card">
                <el-tab-pane label="🐛 Bug奇遇记" name="bugs">
                    <div class="roast-list">
                        <div v-for="item in bugStories" :key="item.title" class="roast-item">
                            <div class="roast-emoji">{{ item.emoji }}</div>
                            <div class="roast-content">
                                <h4>{{ item.title }}</h4>
                                <p>{{ item.description }}</p>
                                <div class="roast-tags">
                                    <el-tag v-for="tag in item.tags" :key="tag" size="small">{{ tag }}</el-tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="💡 学习血泪史" name="learning">
                    <div class="roast-list">
                        <div v-for="item in learningStories" :key="item.title" class="roast-item">
                            <div class="roast-emoji">{{ item.emoji }}</div>
                            <div class="roast-content">
                                <h4>{{ item.title }}</h4>
                                <p>{{ item.description }}</p>
                                <div class="roast-tags">
                                    <el-tag v-for="tag in item.tags" :key="tag" size="small">{{ tag }}</el-tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="🎭 开发日常" name="daily">
                    <div class="roast-list">
                        <div v-for="item in dailyStories" :key="item.title" class="roast-item">
                            <div class="roast-emoji">{{ item.emoji }}</div>
                            <div class="roast-content">
                                <h4>{{ item.title }}</h4>
                                <p>{{ item.description }}</p>
                                <div class="roast-tags">
                                    <el-tag v-for="tag in item.tags" :key="tag" size="small">{{ tag }}</el-tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

        <div class="roast-footer">
            <el-quote class="roast-quote">
                "程序员的三大错觉：这个bug很简单、这个需求很简单、这个项目下周就能完成"
            </el-quote>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElTabs, ElTabPane, ElTag } from 'element-plus';

interface RoastItem {
    emoji: string;
    title: string;
    description: string;
    tags: string[];
}

const activeTab = ref('bugs');

const bugStories = ref<RoastItem[]>([
    {
        emoji: '😱',
        title: '神秘的"空指针"传说',
        description: '花了3小时找一个undefined错误，最后发现是因为变量名打错了一个字母。那一刻我怀疑人生，也怀疑我的眼睛。',
        tags: ['JavaScript', '低级错误', '眼瞎']
    },
    {
        emoji: '🔥',
        title: '样式调试的无间地狱',
        description: '为了让一个div居中显示，尝试了flexbox、grid、absolute定位，最后发现父元素设了display:none... 我当时想直接删库跑路。',
        tags: ['CSS', '居中问题', '心态爆炸']
    },
    {
        emoji: '💀',
        title: 'Git合并冲突大作战',
        description: '第一次遇到merge conflict，以为是Git坏了，重装了三次Git，最后才知道这是正常现象。现在想起来还觉得自己很蠢。',
        tags: ['Git', '新手', '天真']
    },
    {
        emoji: '🤡',
        title: 'API接口的甩锅大赛',
        description: '前端报错说后端接口有问题，后端说数据库有问题，数据库说是网络问题，网络说是前端代码有问题。最后发现是我把url写错了...',
        tags: ['API', '甩锅', '乌龙']
    }
]);

const learningStories = ref<RoastItem[]>([
    {
        emoji: '📚',
        title: '教程地狱综合症',
        description: '看了100个Vue教程，每个都说自己是"最佳实践"。结果学完还是不会做项目，典型的"教程废人"。',
        tags: ['Vue', '教程党', '纸上谈兵']
    },
    {
        emoji: '🏔️',
        title: 'TypeScript的学习曲线',
        description: '刚开始觉得TypeScript就是JavaScript加了类型，简单得很。结果遇到泛型、联合类型、条件类型... 我怀疑这还是前端吗？',
        tags: ['TypeScript', '泛型', '怀疑人生']
    },
    {
        emoji: '🐍',
        title: 'Rust所有权的降维打击',
        description: '以为自己JavaScript玩得很6，去学Rust结果被借用检查器教做人。什么是所有权？什么是生命周期？我只想写个Hello World啊！',
        tags: ['Rust', '所有权', '被虐']
    },
    {
        emoji: '🤯',
        title: '框架选择恐惧症',
        description: 'React还是Vue？Angular要不要学？Svelte听起来很酷？每天都在纠结技术栈，学了一个又觉得另一个更香。',
        tags: ['框架', '选择困难', '草很绿']
    }
]);

const dailyStories = ref<RoastItem[]>([
    {
        emoji: '☕',
        title: '咖啡驱动开发',
        description: '没喝咖啡写不出代码，喝了咖啡代码质量直线上升。我怀疑我的血管里流的不是血，是咖啡因。',
        tags: ['咖啡', '续命', '生理需求']
    },
    {
        emoji: '🌙',
        title: '深夜Debug狂魔',
        description: '白天写的bug，晚上来解决。熬夜调试时思路特别清晰，第二天看代码却完全不知道昨晚在想什么。',
        tags: ['熬夜', 'Debug', '夜猫子']
    },
    {
        emoji: '🎵',
        title: '码代码时的音乐选择',
        description: '写业务逻辑听流行歌，debug时听摇滚，重构代码听古典音乐。音乐选择直接影响代码质量，这很科学。',
        tags: ['音乐', '效率', '仪式感']
    },
    {
        emoji: '💬',
        title: '橡皮鸭调试法实践者',
        description: '当bug找不到原因时，我会跟我的橡皮鸭解释代码逻辑。说着说着就发现问题了。橡皮鸭：我承受了不该承受的技术讨论。',
        tags: ['调试', '橡皮鸭', '自言自语']
    },
    {
        emoji: '📱',
        title: '手机上的Stack Overflow',
        description: '上厕所、吃饭、睡前都在刷技术文章。朋友问我最常用的APP是什么，我说是Stack Overflow和GitHub。',
        tags: ['学习', '碎片时间', '技术瘾']
    }
]);
</script>

<style scoped lang="scss">
.tech-roast {
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    color: white;
    margin: 1rem 0;

    .roast-header {
        text-align: center;
        margin-bottom: 2rem;

        h2 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .subtitle {
            font-size: 1.1rem;
            opacity: 0.9;
            margin: 0;
        }
    }

    .roast-categories {
        :deep(.el-tabs) {
            background: rgba(255, 255, 255, 0.1);
            border: none;
            border-radius: 15px;
            overflow: hidden;

            .el-tabs__header {
                margin: 0;
                background: rgba(255, 255, 255, 0.1);
                border: none;

                .el-tabs__nav {
                    border: none;
                }

                .el-tabs__item {
                    border: none;
                    color: rgba(255, 255, 255, 0.8);
                    background: transparent;

                    &.is-active {
                        color: white;
                        background: rgba(255, 255, 255, 0.2);
                    }

                    &:hover {
                        color: white;
                    }
                }
            }

            .el-tabs__content {
                padding: 1.5rem;
            }
        }
    }

    .roast-list {
        display: grid;
        gap: 1.5rem;
    }

    .roast-item {
        display: flex;
        align-items: flex-start;
        background: rgba(255, 255, 255, 0.1);
        padding: 1.5rem;
        border-radius: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;

        &:hover {
            transform: translateX(10px);
            background: rgba(255, 255, 255, 0.15);
        }

        .roast-emoji {
            font-size: 2.5rem;
            margin-right: 1rem;
            flex-shrink: 0;
        }

        .roast-content {
            flex: 1;

            h4 {
                margin: 0 0 0.8rem 0;
                color: #fff;
                font-size: 1.2rem;
            }

            p {
                margin: 0 0 1rem 0;
                line-height: 1.6;
                opacity: 0.9;
            }

            .roast-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;

                :deep(.el-tag) {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                }
            }
        }
    }

    .roast-footer {
        margin-top: 2rem;
        text-align: center;

        .roast-quote {
            background: rgba(255, 255, 255, 0.1);
            border-left: 4px solid #f39c12;
            padding: 1rem;
            border-radius: 8px;
            font-style: italic;
            font-size: 1.1rem;
            line-height: 1.6;
        }
    }

    @media (max-width: 768px) {
        padding: 1rem;

        .roast-item {
            flex-direction: column;
            text-align: center;

            .roast-emoji {
                margin: 0 0 1rem 0;
            }
        }
    }
}
</style>
