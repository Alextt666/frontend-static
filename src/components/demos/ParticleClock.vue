<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let ctx = null
let animationId = null
let particles = []

class Particle {
  constructor(x, y, angle) {
    this.x = x
    this.y = y
    this.vx = Math.cos(angle) * 0.5
    this.vy = Math.sin(angle) * 0.5
    this.life = 1
    this.decay = 0.008
    this.size = Math.random() * 2 + 1
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.life -= this.decay
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(77, 163, 255, ${this.life * 0.6})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

function drawClock(ctx, w, h, now) {
  const cx = w / 2
  const cy = h / 2
  const radius = Math.min(w, h) * 0.35

  // 时针、分针、秒针
  const hours = now.getHours() % 12
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  const ms = now.getMilliseconds()

  const secondAngle = ((seconds + ms / 1000) / 60) * Math.PI * 2 - Math.PI / 2
  const minuteAngle = ((minutes + seconds / 60) / 60) * Math.PI * 2 - Math.PI / 2
  const hourAngle = ((hours + minutes / 60) / 12) * Math.PI * 2 - Math.PI / 2

  // 外圈
  ctx.strokeStyle = 'rgba(77, 163, 255, 0.2)'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.stroke()

  // 刻度
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2 - Math.PI / 2
    const x1 = cx + Math.cos(angle) * (radius - 10)
    const y1 = cy + Math.sin(angle) * (radius - 10)
    const x2 = cx + Math.cos(angle) * (radius - 2)
    const y2 = cy + Math.sin(angle) * (radius - 2)
    ctx.strokeStyle = 'rgba(77, 163, 255, 0.4)'
    ctx.lineWidth = i % 3 === 0 ? 2 : 1
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
  }

  // 时针
  ctx.strokeStyle = '#4da3ff'
  ctx.lineWidth = 4
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(cx, cy)
  ctx.lineTo(cx + Math.cos(hourAngle) * radius * 0.5, cy + Math.sin(hourAngle) * radius * 0.5)
  ctx.stroke()

  // 分针
  ctx.strokeStyle = '#4da3ff'
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.moveTo(cx, cy)
  ctx.lineTo(cx + Math.cos(minuteAngle) * radius * 0.7, cy + Math.sin(minuteAngle) * radius * 0.7)
  ctx.stroke()

  // 秒针
  ctx.strokeStyle = '#00c9a7'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(cx, cy)
  ctx.lineTo(cx + Math.cos(secondAngle) * radius * 0.85, cy + Math.sin(secondAngle) * radius * 0.85)
  ctx.stroke()

  // 中心点
  ctx.fillStyle = '#4da3ff'
  ctx.beginPath()
  ctx.arc(cx, cy, 5, 0, Math.PI * 2)
  ctx.fill()

  // 每秒发射粒子
  if (ms < 50) {
    const tipX = cx + Math.cos(secondAngle) * radius * 0.85
    const tipY = cy + Math.sin(secondAngle) * radius * 0.85
    for (let i = 0; i < 8; i++) {
      particles.push(new Particle(tipX, tipY, secondAngle + (Math.random() - 0.5) * 0.5))
    }
  }
}

function animate() {
  if (!ctx || !canvas.value) return

  const w = canvas.value.width
  const h = canvas.value.height

  // 清空画布（半透明尾迹效果）
  ctx.fillStyle = 'rgba(26, 29, 39, 0.15)'
  ctx.fillRect(0, 0, w, h)

  // 绘制时钟
  drawClock(ctx, w, h, new Date())

  // 更新粒子
  particles = particles.filter(p => p.life > 0)
  particles.forEach(p => {
    p.update()
    p.draw(ctx)
  })

  animationId = requestAnimationFrame(animate)
}

function resize() {
  if (!canvas.value) return
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.value.getBoundingClientRect()
  canvas.value.width = rect.width * dpr
  canvas.value.height = rect.height * dpr
  ctx.scale(dpr, dpr)
}

onMounted(() => {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')
  resize()
  animate()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <div class="pc-wrap">
    <canvas ref="canvas" class="pc-canvas"></canvas>
    <div class="pc-time">{{ new Date().toLocaleTimeString('zh-CN') }}</div>
  </div>
</template>

<style scoped>
.pc-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #1a1d27;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pc-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
.pc-time {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: rgba(77, 163, 255, 0.8);
  font-family: 'Courier New', monospace;
  letter-spacing: 0.08em;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  backdrop-filter: blur(4px);
}
</style>
