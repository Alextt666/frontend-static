<script setup>
import { onMounted, onUnmounted } from 'vue'
import ResumeHeader from './components/ResumeHeader.vue'
import ResumeAbout from './components/ResumeAbout.vue'
import ResumeExperience from './components/ResumeExperience.vue'
import ResumeSkills from './components/ResumeSkills.vue'
import ResumeEducation from './components/ResumeEducation.vue'
import ResumeProjects from './components/ResumeProjects.vue'

let animFrame = null

onMounted(() => {
  const canvas = document.getElementById('matrix-bg')
  const ctx = canvas.getContext('2d')

  const resize = () => {
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const CHARS = 'アイウエオカキクケコサシスセソ01アBCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const fontSize = 13
  let drops = []

  const initDrops = () => {
    const cols = Math.floor(canvas.width / fontSize)
    drops = Array(cols).fill(1)
  }
  initDrops()
  window.addEventListener('resize', initDrops)

  const draw = () => {
    ctx.fillStyle = 'rgba(2, 12, 20, 0.06)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    drops.forEach((y, i) => {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)]
      // 每隔几列亮一些，制造层次感
      ctx.fillStyle = i % 7 === 0 ? 'rgba(0,245,255,0.25)' : 'rgba(0,245,255,0.06)'
      ctx.font = `${fontSize}px "Share Tech Mono", monospace`
      ctx.fillText(char, i * fontSize, y * fontSize)

      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
      drops[i]++
    })

    animFrame = requestAnimationFrame(draw)
  }
  draw()

  // IntersectionObserver：所有 cyber-card 进入视口时触发入场动画
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  )
  // 延迟一帧确保组件已渲染
  requestAnimationFrame(() => {
    document.querySelectorAll('.cyber-card').forEach(el => observer.observe(el))
  })

  // 保险 fallback：1.5s 后强制所有卡片可见
  setTimeout(() => {
    document.querySelectorAll('.cyber-card:not(.is-visible)').forEach(el => {
      el.classList.add('is-visible')
    })
  }, 1500)

  onUnmounted(() => {
    cancelAnimationFrame(animFrame)
    window.removeEventListener('resize', resize)
    window.removeEventListener('resize', initDrops)
  })
})
</script>

<template>
  <!-- 矩阵雨背景 Canvas -->
  <canvas
    id="matrix-bg"
    style="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.55;"
  />

  <!-- 网格纹理叠层 -->
  <div
    style="
      position:fixed;inset:0;pointer-events:none;z-index:0;
      background-image:
        linear-gradient(rgba(0,245,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,245,255,0.025) 1px, transparent 1px);
      background-size: 48px 48px;
    "
  />

  <!-- 主体内容 -->
  <div style="position:relative;z-index:10;" class="min-h-screen py-10 px-4">
    <div class="max-w-4xl mx-auto space-y-6">
      <ResumeHeader />
      <ResumeAbout />
      <ResumeSkills />
      <ResumeExperience />
      <ResumeProjects />
      <ResumeEducation />
    </div>

    <!-- 底部终端版权行 -->
    <p
      class="font-terminal text-center mt-10 text-xs"
      style="color: var(--text-dim); letter-spacing: 0.15em;"
    >
      // SYSTEM INITIALIZED &nbsp;·&nbsp; ALL MODULES LOADED &nbsp;·&nbsp; EOF
    </p>
  </div>
</template>
