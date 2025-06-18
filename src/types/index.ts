// 技能接口定义
export interface Skill {
  name: string;
  icon: string;
  description: string;
}

// 音乐接口定义
export interface Song {
  name: string;
  cover: string;
  url: string;
  description?: string;
}
