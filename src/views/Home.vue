<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const titleText = 'Frontend Developer'
const displayedTitle = ref('')
const showCursor = ref(false)
const canvasRef = ref(null)
let animFrameId = null

function initStars(canvas) {
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const stars = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2 + 0.2,
    speed: Math.random() * 0.15 + 0.05,
    opacity: Math.random() * 0.6 + 0.2,
  }))

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    stars.forEach(s => {
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(200, 220, 255, ${s.opacity})`
      ctx.fill()
      s.y += s.speed
      if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width }
    })
    animFrameId = requestAnimationFrame(draw)
  }
  draw()

  const onResize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  window.addEventListener('resize', onResize)
  return onResize
}

onMounted(() => {
  document.body.style.background = '#050508'

  let resizeHandler = null
  if (canvasRef.value) {
    resizeHandler = initStars(canvasRef.value)
  }

  // 打字机效果，延迟 1400ms 启动
  setTimeout(() => {
    showCursor.value = true
    let i = 0
    const interval = setInterval(() => {
      if (i < titleText.length) {
        displayedTitle.value += titleText[i++]
      } else {
        clearInterval(interval)
      }
    }, 60)
  }, 1400)

  onUnmounted(() => {
    if (animFrameId) cancelAnimationFrame(animFrameId)
    if (resizeHandler) window.removeEventListener('resize', resizeHandler)
    document.body.style.background = ''
  })
})

onUnmounted(() => {
  if (animFrameId) cancelAnimationFrame(animFrameId)
  document.body.style.background = ''
})
</script>

<template>
  <div class="home-root">
    <!-- 星空 canvas -->
    <canvas ref="canvasRef" class="starfield" />

    <!-- 单次扫描线 -->
    <div class="scan-line" />

    <!-- 四角装饰 -->
    <div class="corner corner-tl" />
    <div class="corner corner-tr" />
    <div class="corner corner-bl" />
    <div class="corner corner-br" />

    <!-- 中央内容 -->
    <main class="content">
      <p class="sys-label">SYSTEM ONLINE // v2.1</p>

      <h1 class="name">耀天 / ALEX</h1>

      <p class="title-line">
        <span>{{ displayedTitle }}</span>
        <span v-if="showCursor" class="cursor">█</span>
      </p>

      <div class="divider" />

      <nav class="nav-links">
        <RouterLink to="/resume" class="nav-item">
          <span class="nav-index">01</span>
          <span class="nav-label">简历 / RESUME</span>
          <span class="nav-arrow">→</span>
        </RouterLink>
        <RouterLink to="/portfolio" class="nav-item">
          <span class="nav-index">02</span>
          <span class="nav-label">作品集 / PORTFOLIO</span>
          <span class="nav-arrow">→</span>
        </RouterLink>
        <RouterLink to="/diary" class="nav-item">
          <span class="nav-index">03</span>
          <span class="nav-label">日记 / DIARY</span>
          <span class="nav-arrow">→</span>
        </RouterLink>
      </nav>
    </main>

    <!-- 坐标 -->
    <p class="coords">31.2304° N &nbsp; 121.4737° E &nbsp;// &nbsp;SHANGHAI</p>
  </div>
</template>

<style scoped>
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.home-root {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #050508;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.starfield {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

/* 单次扫描线 */
@keyframes scanSweepOnce {
  0%   { top: -2px; opacity: 0.8; }
  100% { top: 100vh; opacity: 0; }
}
.scan-line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, #00f5ff 40%, #00f5ff 60%, transparent 100%);
  box-shadow: 0 0 12px #00f5ff, 0 0 24px #00f5ff60;
  animation: scanSweepOnce 2s ease-in 0.3s forwards;
  pointer-events: none;
  z-index: 5;
}

/* 四角装饰 */
.corner {
  position: absolute;
  width: 32px;
  height: 32px;
  pointer-events: none;
  z-index: 2;
}
.corner-tl { top: 24px; left: 24px; border-top: 1px solid rgba(0,245,255,0.5); border-left: 1px solid rgba(0,245,255,0.5); }
.corner-tr { top: 24px; right: 24px; border-top: 1px solid rgba(0,245,255,0.5); border-right: 1px solid rgba(0,245,255,0.5); }
.corner-bl { bottom: 24px; left: 24px; border-bottom: 1px solid rgba(0,245,255,0.5); border-left: 1px solid rgba(0,245,255,0.5); }
.corner-br { bottom: 24px; right: 24px; border-bottom: 1px solid rgba(0,245,255,0.5); border-right: 1px solid rgba(0,245,255,0.5); }

/* 中央内容 */
.content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0;
}

/* 系统标签 */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.sys-label {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  color: rgba(0, 245, 255, 0.45);
  margin-bottom: 2rem;
  animation: fadeIn 0.6s ease 0.5s both;
}

/* 名字 */
@keyframes glitchIn {
  0%   { opacity: 0; transform: translateX(-10px); filter: blur(6px); }
  60%  { opacity: 1; transform: translateX(2px);   filter: blur(0); }
  100% { opacity: 1; transform: translateX(0); }
}
.name {
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 6vw, 4.5rem);
  color: #e8f4ff;
  letter-spacing: 0.05em;
  margin: 0 0 1.2rem;
  text-shadow: 0 0 40px rgba(0, 245, 255, 0.15);
  animation: glitchIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
}

/* 职位打字机 */
.title-line {
  font-family: 'Share Tech Mono', monospace;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  color: #00f5ff;
  letter-spacing: 0.12em;
  margin: 0 0 2.5rem;
  min-height: 1.6em;
  text-shadow: 0 0 12px rgba(0, 245, 255, 0.5);
  animation: fadeIn 0.1s ease 1.3s both;
}

@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.cursor {
  animation: cursorBlink 0.7s steps(1) infinite;
  color: #00f5ff;
}

/* 分割线 */
@keyframes expandWidth {
  from { width: 0; opacity: 0; }
  to   { width: 120px; opacity: 1; }
}
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #00f5ff, transparent);
  box-shadow: 0 0 8px rgba(0, 245, 255, 0.4);
  margin-bottom: 2.5rem;
  animation: expandWidth 0.6s ease 1.8s both;
}

/* 导航列表 */
@keyframes navFadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: clamp(260px, 40vw, 360px);
  animation: navFadeIn 0.6s ease 1.8s both;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid rgba(0, 245, 255, 0.1);
  text-decoration: none;
  color: rgba(232, 244, 255, 0.6);
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  transition: color 0.2s, background 0.2s, padding-left 0.2s;
}
.nav-item:first-child { border-top: 1px solid rgba(0, 245, 255, 0.1); }
.nav-item:hover {
  color: #00f5ff;
  background: rgba(0, 245, 255, 0.04);
  padding-left: 1.4rem;
}

.nav-index {
  color: rgba(0, 245, 255, 0.35);
  font-size: 0.65rem;
  flex-shrink: 0;
}
.nav-label { flex: 1; }
.nav-arrow {
  color: rgba(0, 245, 255, 0.3);
  transition: color 0.2s, transform 0.2s;
}
.nav-item:hover .nav-arrow {
  color: #00f5ff;
  transform: translateX(4px);
}

/* 坐标 */
.coords {
  position: absolute;
  bottom: 28px;
  right: 32px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: rgba(0, 245, 255, 0.18);
  pointer-events: none;
  z-index: 2;
  animation: fadeIn 1s ease 2.2s both;
}
</style>
