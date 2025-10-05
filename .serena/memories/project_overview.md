# 水质样品采样与保存教学网站项目概览

## 项目目的
基于React和TypeScript开发的环保教育网站，专门用于《水质样品的采样与保存》课程教学。该网站为大专院校环保专业学生提供现代化的学习体验，采用玻璃风格UI设计。

## 技术栈
- **前端框架**: React 18.2.0 + TypeScript 4.9.5
- **样式系统**: Tailwind CSS 3.3.6 + 自定义玻璃效果
- **动画库**: Framer Motion 12.19.2 (流畅交互动画)
- **路由管理**: React Router DOM 6.20.1
- **拖拽功能**: @dnd-kit/core, React Beautiful DND
- **构建工具**: Create React App (React Scripts 5.0.1)
- **部署**: GitHub Pages

## 代码风格和约定
- 使用TypeScript进行类型检查
- 函数组件 + Hooks模式
- CSS类名使用Tailwind CSS实用类
- 组件使用PascalCase命名
- 文件使用kebab-case命名
- 代码格式遵循ESLint配置 (react-app, react-app/jest)

## 文件结构
```
src/
├── components/        # 通用组件
├── pages/            # 页面组件
├── pages/course/     # 课程页面
├── assets/images/    # 图片资源
└── index.tsx         # 应用入口
```

## 设计特色
- 现代玻璃拟态设计风格
- 响应式布局适配各种设备
- 流畅的页面转场动画
- 自定义玻璃效果阴影和模糊
- 支持暗色背景的玻璃效果