# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个使用 Vue 3 + Vite + Tailwind CSS 4 构建的静态简历网站项目。

## 技术栈

- **框架**: Vue 3 (Composition API with `<script setup>`)
- **构建工具**: Vite 5
- **样式**: Tailwind CSS 4 (使用 `@tailwindcss/vite` 插件)
- **语言**: JavaScript (ES modules)

## 常用命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 安装依赖
npm install
```

## 项目架构

### 目录结构

```
src/
├── main.js              # 应用入口文件
├── App.vue              # 根组件，组装所有简历模块
├── style.css            # 全局样式（Tailwind CSS 导入和基础样式）
└── components/          # 简历各个模块组件
    ├── ResumeHeader.vue      # 个人基本信息（姓名、联系方式等）
    ├── ResumeAbout.vue       # 个人简介
    ├── ResumeSkills.vue      # 技能列表
    ├── ResumeExperience.vue  # 工作经历
    ├── ResumeProjects.vue    # 项目经验
    └── ResumeEducation.vue   # 教育背景
```

### 组件设计模式

- 所有组件使用 Vue 3 Composition API 的 `<script setup>` 语法
- 数据直接在组件内部定义为常量对象
- 组件采用卡片式设计，使用 Tailwind CSS 的 `bg-white rounded-2xl shadow-sm` 等样式
- 响应式布局使用 Tailwind 的响应式前缀（如 `md:flex-row`）

### 样式系统

- 使用 Tailwind CSS 4 的新语法：`@import "tailwindcss"`
- 全局样式定义在 `src/style.css` 的 `@layer base` 中
- 配色方案：
  - 主色调：蓝色系（`blue-500`, `blue-600`, `indigo-600`）
  - 背景色：灰色系（`gray-100`, `gray-50`）
  - 文字色：深灰色（`gray-900`, `gray-700`, `gray-600`）

## 开发注意事项

- 个人信息数据在各组件的 `<script setup>` 中以常量形式定义
- 修改简历内容时，直接编辑对应组件中的数据对象
- 所有组件都是独立的，可以单独修改而不影响其他模块
- 图标使用内联 SVG，保持简洁和可定制性
