<script setup>
import { onMounted } from 'vue'

// 工作经历
const experiences = [
  {
    company: '某科技有限公司 / Tech Co., Ltd.',
    role: '高级前端工程师 / Senior Frontend Developer',
    period: '2022.03 → PRESENT',
    location: 'SH',
    points: [
      '主导公司核心产品前端架构重构，将页面加载速度提升 40%',
      '带领 3 人前端小组，推动组件库建设，复用率提升至 70%',
      '与产品、设计、后端紧密协作，按时交付多个重点项目',
      'Led frontend architecture refactor of core product, improving load speed by 40%',
      'Managed a 3-person frontend team, built component library with 70% reuse rate',
    ],
  },
  {
    company: '某互联网公司 / Internet Company',
    role: '前端开发工程师 / Frontend Developer',
    period: '2019.07 → 2022.02',
    location: 'BJ',
    points: [
      '参与多个 B 端管理系统开发，使用 Vue 2/3 + Element UI',
      '负责移动端 H5 页面开发，适配主流机型',
      'Developed multiple B2B management systems using Vue 2/3 + Element UI',
      'Built mobile H5 pages with cross-device compatibility',
    ],
  },
]

onMounted(() => {
  const section = document.querySelector('.experience-section')
  if (!section) return

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      observer.disconnect()
      // 时间线生长
      const line = section.querySelector('.timeline-line')
      if (line) line.classList.add('timeline-grow')
      // 每个条目依次滑入
      section.querySelectorAll('.exp-item').forEach((el, i) => {
        el.style.animationDelay = `${0.2 + i * 0.2}s`
        el.classList.add('exp-item-visible')
      })
    }
  }, { threshold: 0.1 })

  observer.observe(section)
})
</script>

<template>
  <div class="cyber-card experience-section">
    <h2 class="cyber-section-title">工作经历 / Experience</h2>

    <div class="relative">
      <!-- 时间线竖线 -->
      <div class="timeline-line" />

      <div class="space-y-10 pl-8">
        <div
          v-for="(exp, idx) in experiences"
          :key="exp.company"
          class="exp-item relative"
        >
          <!-- 菱形节点 -->
          <div class="node-diamond" />

          <!-- 头部：角色 + 时间 -->
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 class="font-orbitron text-sm font-bold" style="color: var(--text-primary);">
                {{ exp.role }}
              </h3>
              <p class="font-terminal text-xs mt-1" style="color: var(--cyber-cyan); text-shadow: 0 0 8px rgba(0,245,255,0.5);">
                {{ exp.company }}
              </p>
            </div>
            <div class="shrink-0 text-right">
              <p class="font-terminal text-xs" style="color: var(--text-dim);">
                [ {{ exp.period }} ]
              </p>
              <p class="font-terminal text-xs mt-0.5" style="color: var(--text-dim);">
                [ {{ exp.location }} ]
              </p>
            </div>
          </div>

          <!-- 要点列表 -->
          <ul class="space-y-2">
            <li
              v-for="(point, i) in exp.points"
              :key="i"
              class="point-item flex items-start gap-2 text-sm"
              style="color: var(--text-muted);"
            >
              <span class="shrink-0 mt-0.5 font-terminal text-xs" style="color: var(--cyber-green);">▶</span>
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 时间线竖线 */
.timeline-line {
  position: absolute;
  left: 7px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: linear-gradient(to bottom, var(--cyber-cyan), var(--cyber-purple));
  transform: scaleY(0);
  transform-origin: top;
  box-shadow: 0 0 6px rgba(124,58,237,0.3);
}

.timeline-line.timeline-grow {
  animation: timelineGrow 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
}

/* 菱形节点 */
.node-diamond {
  position: absolute;
  left: -26px;
  top: 4px;
  width: 10px;
  height: 10px;
  background: var(--cyber-cyan);
  transform: rotate(45deg);
  box-shadow: 0 0 8px var(--cyber-cyan), 0 0 16px rgba(124,58,237,0.35);
  animation: neonPulse 2.5s ease-in-out infinite;
}

/* 经历条目入场 */
.exp-item {
  opacity: 0;
  transform: translateX(-30px);
}

.exp-item.exp-item-visible {
  animation: slideInLeft 0.5s ease forwards;
}

/* 要点 hover */
.point-item {
  transition: color 0.2s ease;
  cursor: default;
}
.point-item:hover {
  color: var(--text-primary) !important;
}
.point-item:hover span:first-child {
  text-shadow: var(--glow-green);
}
</style>
