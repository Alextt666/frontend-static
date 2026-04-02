<script setup>
import { onMounted } from 'vue'

// 技能列表（带进度值）
const skillGroups = [
  {
    category: 'FRONTEND_CORE',
    label: '前端框架',
    skills: [
      { name: 'Vue 3', level: 92 },
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript ES6+', level: 95 },
    ],
  },
  {
    category: 'STYLING_SYS',
    label: '样式',
    skills: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'SCSS/SASS', level: 82 },
      { name: 'CSS3', level: 88 },
      { name: 'Element Plus', level: 78 },
    ],
  },
  {
    category: 'TOOLCHAIN',
    label: '工程化',
    skills: [
      { name: 'Vite', level: 88 },
      { name: 'Webpack', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'ESLint / Prettier', level: 85 },
    ],
  },
  {
    category: 'OTHER_MODULES',
    label: '其他',
    skills: [
      { name: 'Node.js', level: 72 },
      { name: 'RESTful API', level: 85 },
      { name: 'Figma', level: 70 },
      { name: 'Agile / Scrum', level: 80 },
    ],
  },
]

onMounted(() => {
  const section = document.querySelector('.skills-section')
  if (!section) return

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      observer.disconnect()
      section.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
        bar.style.animationDelay = `${i * 0.07}s`
        bar.classList.add('skill-bar-animate')
      })
    }
  }, { threshold: 0.15 })

  observer.observe(section)
})
</script>

<template>
  <div class="cyber-card skills-section">
    <h2 class="cyber-section-title">技能 / Skills</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="group in skillGroups" :key="group.category">
        <!-- 分类标题 -->
        <p class="font-terminal text-xs mb-4" style="color: var(--cyber-purple); letter-spacing: 0.12em;">
          [ {{ group.category }} ]
        </p>

        <!-- 技能条列表 -->
        <div class="space-y-4">
          <div
            v-for="skill in group.skills"
            :key="skill.name"
            class="skill-row"
          >
            <!-- 名称 + 百分比 -->
            <div class="flex justify-between mb-1.5">
              <span class="font-terminal text-xs" style="color: var(--text-primary);">
                {{ skill.name.toUpperCase() }}
              </span>
              <span class="font-terminal text-xs" style="color: var(--cyber-cyan);">
                {{ skill.level }}%
              </span>
            </div>
            <!-- 轨道 + 进度条 -->
            <div class="skill-track">
              <div
                class="skill-bar-fill"
                :style="`--bar-width: ${skill.level}%`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-track {
  height: 3px;
  background: rgba(0, 245, 255, 0.08);
  position: relative;
  overflow: visible;
}

.skill-bar-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--cyber-purple), var(--cyber-cyan));
  box-shadow: 0 0 8px var(--cyber-cyan);
  position: relative;
  transition: box-shadow 0.3s;
}

/* 进度条右端光点 */
.skill-bar-fill::after {
  content: '';
  position: absolute;
  right: -3px;
  top: -3px;
  width: 9px;
  height: 9px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 8px var(--cyber-cyan), 0 0 16px var(--cyber-cyan);
}

/* IntersectionObserver 触发后添加此 class */
.skill-bar-animate {
  animation: loadBar 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.skill-row:hover .skill-bar-fill {
  box-shadow: 0 0 16px var(--cyber-cyan), 0 0 4px white;
}
.skill-row:hover .font-terminal {
  color: var(--cyber-cyan) !important;
}
</style>
