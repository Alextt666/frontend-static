<script setup>
import { onMounted } from 'vue'

// 项目经历
const projects = [
  {
    name: '企业数据可视化平台 / Enterprise Data Visualization Platform',
    tech: ['Vue 3', 'ECharts', 'TypeScript', 'Tailwind CSS'],
    period: '2023.06 → 2023.12',
    desc: '负责前端整体架构设计与开发，实现多维度数据图表展示、实时数据推送及权限管理模块。',
    descEn: 'Led frontend architecture design and development, implementing multi-dimensional data charts, real-time data push, and permission management modules.',
    link: 'github.com/zhangsan/data-viz',
  },
  {
    name: '移动端电商 H5 / Mobile E-commerce H5',
    tech: ['Vue 3', 'Vant', 'Pinia', 'Vite'],
    period: '2022.09 → 2023.02',
    desc: '独立开发移动端电商页面，包含商品列表、购物车、订单流程等核心功能，日活用户超 10 万。',
    descEn: 'Independently developed mobile e-commerce pages including product listing, cart, and order flow. Reached 100k+ daily active users.',
    link: '',
  },
  {
    name: '低代码表单引擎 / Low-code Form Engine',
    tech: ['Vue 3', 'TypeScript', 'JSON Schema'],
    period: '2022.03 → 2022.08',
    desc: '设计并实现基于 JSON Schema 的动态表单引擎，支持拖拽配置，减少重复开发工作量约 60%。',
    descEn: 'Designed and implemented a JSON Schema-based dynamic form engine with drag-and-drop configuration, reducing repetitive development by ~60%.',
    link: 'github.com/zhangsan/form-engine',
  },
]

onMounted(() => {
  const section = document.querySelector('.projects-section')
  if (!section) return

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      observer.disconnect()
      section.querySelectorAll('.project-card').forEach((el, i) => {
        el.style.animationDelay = `${i * 0.15}s`
        el.classList.add('project-card-visible')
      })
    }
  }, { threshold: 0.1 })

  observer.observe(section)
})
</script>

<template>
  <div class="cyber-card projects-section">
    <h2 class="cyber-section-title">项目经历 / Projects</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div
        v-for="(project, idx) in projects"
        :key="project.name"
        class="project-card"
      >
        <!-- 顶部标签 -->
        <p class="font-terminal text-xs mb-3" style="color: var(--cyber-purple); letter-spacing: 0.1em;">
          PROC_{{ String(idx + 1).padStart(3, '0') }} :: PROJECT
        </p>

        <!-- 项目名 + 外链 -->
        <div class="flex items-start justify-between gap-2 mb-2">
          <h3 class="font-orbitron text-xs font-bold leading-snug" style="color: var(--text-primary);">
            {{ project.name }}
          </h3>
          <a
            v-if="project.link"
            :href="`https://${project.link}`"
            target="_blank"
            class="link-icon shrink-0"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>

        <!-- 时间 -->
        <p class="font-terminal text-xs mb-3" style="color: var(--text-dim);">
          [ {{ project.period }} ]
        </p>

        <!-- 中文描述 -->
        <p class="text-sm leading-relaxed mb-1" style="color: var(--text-muted);">
          {{ project.desc }}
        </p>

        <!-- 英文描述 -->
        <p class="font-terminal text-xs leading-relaxed mb-4" style="color: var(--text-dim);">
          // {{ project.descEn }}
        </p>

        <!-- 技术栈 tags -->
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="tech-tag font-terminal text-xs"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: rgba(124, 58, 237, 0.03);
  border: 1px solid var(--border-dim);
  padding: 1.25rem;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 12px; height: 12px;
  border-top: 1px solid var(--cyber-cyan);
  border-left: 1px solid var(--cyber-cyan);
}

.project-card::after {
  content: '';
  position: absolute;
  bottom: 0; right: 0;
  width: 12px; height: 12px;
  border-bottom: 1px solid var(--cyber-cyan);
  border-right: 1px solid var(--cyber-cyan);
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-bright);
  box-shadow: 0 8px 30px rgba(124,58,237,0.15), 0 0 0 1px rgba(124,58,237,0.1);
}

.project-card.project-card-visible {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.link-icon {
  color: var(--text-dim);
  transition: color 0.2s, filter 0.2s;
}
.link-icon:hover {
  color: var(--cyber-cyan);
  filter: drop-shadow(0 0 6px var(--cyber-cyan));
}

.tech-tag {
  padding: 2px 8px;
  background: rgba(124, 58, 237, 0.06);
  border: 1px solid rgba(124, 58, 237, 0.25);
  color: var(--cyber-cyan);
  transition: background 0.2s, box-shadow 0.2s;
}
.tech-tag:hover {
  background: rgba(124, 58, 237, 0.14);
  box-shadow: 0 0 8px rgba(124,58,237,0.25);
}
</style>
