<script setup>
import { onMounted } from 'vue'

const props = defineProps({ data: Array })
const skillGroups = props.data

onMounted(() => {
  const section = document.querySelector('.skills-section')
  if (!section) return
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      observer.disconnect()
      section.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
        bar.style.animationDelay = `${i * 0.05}s`
        bar.classList.add('skill-bar-animate')
      })
    }
  }, { threshold: 0.1 })
  observer.observe(section)
})
</script>

<template>
  <div class="resume-card skills-section">
    <h2 class="section-title">技能 / Skills</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="group in skillGroups" :key="group.category">
        <p class="text-xs font-semibold uppercase tracking-widest mb-3" style="color: var(--text-dim);">
          {{ group.category }}
        </p>
        <div class="space-y-3">
          <div v-for="skill in group.skills" :key="skill.name">
            <div class="flex justify-between mb-1">
              <span class="text-xs" style="color: var(--text-primary);">{{ skill.name }}</span>
              <span class="text-xs" style="color: var(--text-dim);">{{ skill.level }}%</span>
            </div>
            <div class="skill-track">
              <div class="skill-bar-fill" :style="`--bar-width: ${skill.level}%`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-track {
  height: 5px;
  background: var(--accent-light);
  border-radius: 99px;
  overflow: hidden;
}
.skill-bar-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--accent), #7b8fd4);
  border-radius: 99px;
}
.skill-bar-animate {
  animation: loadBar 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
