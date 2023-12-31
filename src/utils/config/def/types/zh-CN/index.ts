import { ICommitType } from '@/interface';

const conf: ICommitType[] = [
  { emoji: '🍻 ', name: '初始', description: '初始提交' },
  { emoji: '🆕 ', name: '新增', description: '新建文件' },
  { emoji: '✨ ', name: '特性', description: '新的特性' },
  { emoji: '🐛 ', name: '修复', description: '修复Bug' },
  { emoji: '📚 ', name: '文档', description: '变更的只有文档' },
  { emoji: '💅 ', name: '格式', description: '空格、分号等格式修复' },
  { emoji: '♻️ ', name: '重构', description: '代码重构，注意和特性、修复区分开' },
  { emoji: '⚡️ ', name: '性能', description: '提升性能' },
  { emoji: '💩 ', name: '优化', description: '代码优化' },
  { emoji: '⚰️ ', name: '删除', description: '废弃代码' },
  { emoji: '🔒 ', name: '安全', description: '安全性修复或更新' },
  { emoji: '🔗 ', name: '依赖', description: '更新依赖库或包' },
  { emoji: '⚙️ ', name: '配置', description: '配置文件的更改' },
  { emoji: '📡 ', name: '部署', description: '与项目部署相关的更改' },
  { emoji: '📦️ ', name: '发布', description: '发布新版本' },
  { emoji: '🗄️ ', name: '迁移', description: '数据库或数据相关的更改' },
  { emoji: '🖌️ ', name: '界面', description: '调整和更改' },
  { emoji: '🏷️ ', name: '国际化', description: '多语言国际化相关更改' },
  { emoji: '♿ ', name: '无障碍', description: '提升产品的可访问性' },
  { emoji: '✅ ', name: '测试', description: '添加或更新测试' },
  { emoji: '🚧 ', name: '开发中', description: '尚未完成' },
  { emoji: '🚀 ', name: '工具', description: '开发工具变动 (构建、脚手架工具等)' },
  { emoji: '🔄 ', name: '工作流', description: 'CI 配置、脚本，等工作流相关文件更改' },
  { emoji: '💻 ', name: '开发环境', description: '开发工具、环境配置更改' },
  { emoji: '🏭 ', name: '生产环境', description: '生产环境配置更改' },
  { emoji: '⏪ ', name: '回滚', description: '代码回退' },
  { emoji: '⌛ ', name: '合并', description: '合并代码' },
  { emoji: '📝 ', name: '更新日志', description: '更新 changelog' },
  { emoji: '⚗️ ', name: '实验性', description: '实验性功能，可能存在错误等未知问题' },
  { emoji: '📜 ', name: '许可', description: '添加或更新许可证' },
  { emoji: '👀 ', name: '审查', description: '修改代码审查建议' },
  { emoji: '🥚 ', name: '彩蛋', description: '小惊喜' },
  { emoji: '🌐 ', name: '网络', description: '网络请求、通信相关的更改' },
  { emoji: '📂 ', name: '文件操作', description: '添加、删除、移动文件' }
];

export default conf;
