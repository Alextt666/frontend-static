<script setup>
// 项目经历
const projects = [
  {
    name: '企业数据可视化平台 / Enterprise Data Visualization Platform',
    tech: ['Vue 3', 'ECharts', 'TypeScript', 'Tailwind CSS'],
    period: '2023.06 — 2023.12',
    desc: '负责前端整体架构设计与开发，实现多维度数据图表展示、实时数据推送及权限管理模块。',
    descEn: 'Led frontend architecture design and development, implementing multi-dimensional data charts, real-time data push, and permission management modules.',
    link: 'github.com/zhangsan/data-viz',
  },
  {
    name: '移动端电商 H5 / Mobile E-commerce H5',
    tech: ['Vue 3', 'Vant', 'Pinia', 'Vite'],
    period: '2022.09 — 2023.02',
    desc: '独立开发移动端电商页面，包含商品列表、购物车、订单流程等核心功能，日活用户超 10 万。',
    descEn: 'Independently developed mobile e-commerce pages including product listing, cart, and order flow. Reached 100k+ daily active users.',
    link: '',
  },
  {
    name: '低代码表单引擎 / Low-code Form Engine',
    tech: ['Vue 3', 'TypeScript', 'JSON Schema'],
    period: '2022.03 — 2022.08',
    desc: '设计并实现基于 JSON Schema 的动态表单引擎，支持拖拽配置，减少重复开发工作量约 60%。',
    descEn: 'Designed and implemented a JSON Schema-based dynamic form engine with drag-and-drop configuration, reducing repetitive development by ~60%.',
    link: 'github.com/zhangsan/form-engine',
  },
]
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm p-8">
    <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
      <span class="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
      项目经历 / Projects
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div
        v-for="project in projects"
        :key="project.name"
        class="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow"
      >
        <div class="flex items-start justify-between gap-2 mb-3">
          <h3 class="text-sm font-bold text-gray-900 leading-snug">{{ project.name }}</h3>
          <a
            v-if="project.link"
            :href="`https://${project.link}`"
            target="_blank"
            class="shrink-0 text-gray-400 hover:text-blue-500 transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>

        <p class="text-xs text-gray-500 mb-2">{{ project.period }}</p>
        <p class="text-sm text-gray-700 leading-relaxed mb-1">{{ project.desc }}</p>
        <p class="text-xs text-gray-400 leading-relaxed mb-4">{{ project.descEn }}</p>

        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs font-medium"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
