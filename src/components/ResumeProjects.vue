<script setup>
import { onMounted } from 'vue'

const projects = [
  {
    name: '企业数据可视化平台',
    nameEn: 'Enterprise Data Visualization Platform',
    tech: ['Vue 3', 'ECharts', 'TypeScript', 'Tailwind CSS'],
    period: '2023.06 — 2023.12',
    desc: '负责前端整体架构设计与开发，实现多维度数据图表展示、实时数据推送及权限管理模块。',
    descEn: 'Led frontend architecture design and development, implementing multi-dimensional data charts, real-time data push, and permission management modules.',
    link: 'github.com/alex/data-viz',
  },
  {
    name: '移动端电商 H5',
    nameEn: 'Mobile E-commerce H5',
    tech: ['Vue 3', 'Vant', 'Pinia', 'Vite'],
    period: '2022.09 — 2023.02',
    desc: '独立开发移动端电商页面，包含商品列表、购物车、订单流程等核心功能，日活用户超 10 万。',
    descEn: 'Independently developed mobile e-commerce pages including product listing, cart, and order flow. Reached 100k+ daily active users.',
    link: '',
  },
  {
    name: '低代码表单引擎',
    nameEn: 'Low-code Form Engine',
    tech: ['Vue 3', 'TypeScript', 'JSON Schema'],
    period: '2022.03 — 2022.08',
    desc: '设计并实现基于 JSON Schema 的动态表单引擎，支持拖拽配置，减少重复开发工作量约 60%。',
    descEn: 'Designed and implemented a JSON Schema-based dynamic form engine with drag-and-drop configuration, reducing repetitive development by ~60%.',
    link: 'github.com/alex/form-engine',
  },
]

onMounted(() => {
  const section = document.querySelector('.projects-section')
  if (!section) return
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      observer.disconnect()
      section.querySelectorAll('.project-card').forEach((el, i) => {
        el.style.animationDelay = `${i * 0.12}s`
        el.classList.add('project-card-visible')
      })
    }
  }, { threshold: 0.1 })
  observer.observe(section)
})
</script>

<template>
  <div class="resume-card projects-section">
    <h2 class="section-title">项目经历 / Projects</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="project in projects"
        :key="project.name"
        class="project-card"
      >
        <!-- 项目名 + 外链 -->
        <div class="flex items-start justify-between gap-2 mb-1">
          <div>
            <h3 class="text-sm font-semibold" style="color: var(--text-primary);">{{ project.name }}</h3>
            <p class="text-xs mt-0.5" style="color: var(--text-dim);">{{ project.nameEn }}</p>
          </div>
          <a
            v-if="project.link"
            :href="`https://${project.link}`"
            target="_blank"
            class="link-icon shrink-0 mt-0.5"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>

        <!-- 时间 -->
        <p class="text-xs mb-2" style="color: var(--text-dim);">{{ project.period }}</p>

        <!-- 描述 -->
        <p class="text-xs leading-relaxed mb-1" style="color: var(--text-muted);">{{ project.desc }}</p>
        <p class="text-xs leading-relaxed mb-3" style="color: var(--text-dim);">{{ project.descEn }}</p>

        <!-- 技术栈 -->
        <div class="flex flex-wrap gap-1.5">
          <span v-for="tech in project.tech" :key="tech" class="tag">{{ tech }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  border: 1px solid var(--border-dim);
  border-radius: 8px;
  padding: 1rem 1.1rem;
  background: var(--bg-primary);
  opacity: 0;
  transform: translateY(14px);
  transition: border-color 0.2s, box-shadow 0.2s;
}
.project-card:hover {
  border-color: var(--border-bright);
  box-shadow: var(--shadow-md);
}
.project-card.project-card-visible {
  animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.link-icon {
  color: var(--text-dim);
  transition: color 0.2s;
}
.link-icon:hover {
  color: var(--accent);
}
</style>
