<script setup>
import { onMounted } from 'vue'

const props = defineProps({ data: Array })
const experiences = props.data

onMounted(() => {
  const section = document.querySelector('.experience-section')
  if (!section) return
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      observer.disconnect()
      const line = section.querySelector('.timeline-line')
      if (line) line.classList.add('timeline-grow')
      section.querySelectorAll('.exp-item').forEach((el, i) => {
        el.style.animationDelay = `${0.15 + i * 0.15}s`
        el.classList.add('exp-item-visible')
      })
    }
  }, { threshold: 0.1 })
  observer.observe(section)
})
</script>

<template>
  <div class="resume-card experience-section">
    <h2 class="section-title">工作经历 / Experience</h2>

    <div class="relative">
      <!-- 时间线竖线 -->
      <div class="timeline-line" />

      <div class="space-y-8 pl-7">
        <div
          v-for="exp in experiences"
          :key="exp.company"
          class="exp-item relative"
        >
          <!-- 圆形节点 -->
          <div class="node-dot" />

          <!-- 头部 -->
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
            <div>
              <h3 class="text-sm font-semibold" style="color: var(--text-primary);">{{ exp.role }}</h3>
              <p class="text-xs mt-0.5" style="color: var(--accent);">{{ exp.company }}</p>
            </div>
            <div class="shrink-0 text-right">
              <p class="text-xs" style="color: var(--text-dim);">{{ exp.period }}</p>
              <p class="text-xs mt-0.5" style="color: var(--text-dim);">{{ exp.location }}</p>
            </div>
          </div>

          <!-- 要点 -->
          <ul class="space-y-1.5 mt-2">
            <li
              v-for="(point, i) in exp.points"
              :key="i"
              class="flex items-start gap-2 text-xs"
              style="color: var(--text-muted);"
            >
              <span class="shrink-0 mt-1 w-1 h-1 rounded-full bg-current opacity-50" />
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-line {
  position: absolute;
  left: 5px;
  top: 6px;
  bottom: 6px;
  width: 1px;
  background: var(--border-bright);
  transform: scaleY(0);
  transform-origin: top;
}
.timeline-line.timeline-grow {
  animation: timelineGrow 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
}

.node-dot {
  position: absolute;
  left: -24px;
  top: 5px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg-card);
  box-shadow: 0 0 0 1px var(--accent);
}

.exp-item {
  opacity: 0;
  transform: translateX(-12px);
}
.exp-item.exp-item-visible {
  animation: slideInLeft 0.45s ease forwards;
}
</style>
