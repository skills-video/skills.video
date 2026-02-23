# Skills.Video - 视频技能库

🎬 一个专注于视频处理与创作技能的开源静态网站

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Static Site](https://img.shields.io/badge/type-static-green.svg)

## 🌐 在线访问

- **主站**: https://skills.video
- **GitHub Pages**: https://skills-video.github.io/skills.video

## 📁 项目结构

```
skills.video/
├── index.html              # 主页
├── skills/                 # 技能详情页面
│   ├── video-frames.html   # 视频帧提取
│   ├── video-editing.html  # 视频剪辑（待添加）
│   ├── ai-video.html       # AI 视频生成（待添加）
│   └── ...
├── assets/                 # 静态资源
│   ├── css/
│   │   └── style.css       # 主样式表
│   ├── js/
│   │   └── main.js         # 主脚本
│   └── images/             # 图片资源
├── .github/
│   └── workflows/          # GitHub Actions
├── .gitignore
├── package.json
├── README.md
└── deploy.sh               # 部署脚本
```

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/skills-video/skills.video.git
cd skills.video

# 安装依赖（可选，仅用于构建工具）
npm install

# 启动本地服务器
npm run dev

# 或使用 Python
python3 -m http.server 8000

# 访问 http://localhost:8000
```

### 构建

这是一个纯静态网站，无需构建步骤：

```bash
npm run build
```

## 📦 部署

### GitHub Pages

```bash
# 推送到 GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 在 GitHub 仓库设置中启用 GitHub Pages
# Settings > Pages > Source > main branch > / (root)
```

### Cloudflare Pages

```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署
wrangler pages deploy .
```

### 手动部署

```bash
# 运行部署脚本
./deploy.sh
```

## 🎯 技能列表

### 已上线

| 技能 | 描述 | 链接 |
|------|------|------|
| 🎞️ 视频帧提取 | 使用 FFmpeg 提取视频帧和片段 | [查看详情](skills/video-frames.html) |

### 计划中

- ✂️ 视频剪辑 - 裁剪、合并、转场、字幕
- 🤖 AI 视频生成 - 文本转视频、数字人
- 🎨 视频特效 - 滤镜、调色、抠图
- 🔊 音频处理 - 降噪、配乐、TTS
- 📦 格式转换 - 转码、压缩、优化

## 🛠️ 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 现代样式和动画（无框架）
- **JavaScript** - 原生交互功能（无依赖）
- **响应式设计** - 支持所有设备

## 📝 添加新技能

1. 在 `skills/` 目录创建新的 HTML 文件
2. 复制 `skills/video-frames.html` 作为模板
3. 在 `index.html` 中添加技能卡片
4. 提交 Pull Request

### 技能页面模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>技能名称 - Skills.Video</title>
  <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
  <!-- 参考 video-frames.html -->
</body>
</html>
```

## 🤝 贡献

欢迎贡献！请查看 [贡献指南](CONTRIBUTING.md)。

### 开发流程

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件

## 📞 联系

- 网站：https://skills.video
- 邮箱：hello@skills.video
- GitHub：https://github.com/skills-video

---

**Skills.Video** - 让视频创作更简单 🎬
