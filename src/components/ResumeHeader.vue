<script setup>
import { ref, onMounted } from 'vue'

// 个人基本信息
const info = {
  name: '张三 / Zhang San',
  title: '前端开发工程师 / Frontend Developer',
  email: 'zhangsan@example.com',
  phone: '+86 138-0000-0000',
  location: '上海，中国 / Shanghai, China',
  github: 'github.com/zhangsan',
  linkedin: 'linkedin.com/in/zhangsan',
}

// 打字机效果
const displayTitle = ref('')
const fullTitle = info.title

onMounted(() => {
  let i = 0
  const timer = setInterval(() => {
    if (i < fullTitle.length) {
      displayTitle.value += fullTitle[i++]
    } else {
      clearInterval(timer)
    }
  }, 50)
})
</script>

<template>
  <div class="cyber-card">
    <div class="flex flex-col md:flex-row md:items-center gap-8">

      <!-- 头像：赛博扫描仪 -->
      <div class="avatar-wrapper shrink-0">
        <!-- 外圈旋转扫描环 -->
        <div class="scan-ring" />
        <!-- 内圈静态边框 -->
        <div class="avatar-frame">
          <div class="avatar-inner">张</div>
          <!-- 扫描线 -->
          <div class="scan-line" />
        </div>
        <!-- 角落装饰点 -->
        <div class="corner-dot corner-tl" />
        <div class="corner-dot corner-br" />
      </div>

      <!-- 文字区域 -->
      <div class="flex-1">
        <!-- IDENTITY 标签 -->
        <p class="font-terminal text-xs mb-2" style="color: var(--cyber-purple); letter-spacing: 0.1em;">
          [ IDENTITY_RECORD :: 001 ]
        </p>

        <!-- 名字：Glitch -->
        <h1 class="glitch-name font-orbitron text-3xl md:text-4xl font-black mb-2" data-text="ZHANG SAN">
          {{ info.name }}
        </h1>

        <!-- 职位：打字机 -->
        <p class="font-terminal text-base md:text-lg mt-2 mb-4" style="color: var(--cyber-cyan);">
          &gt; {{ displayTitle }}<span v-if="displayTitle.length < fullTitle.length" class="cursor">█</span>
        </p>

        <!-- 联系方式：终端风格 -->
        <div class="space-y-1.5">
          <a
            :href="`mailto:${info.email}`"
            class="contact-item"
            style="animation-delay: 0.1s"
          >
            <span class="font-terminal text-xs" style="color:var(--cyber-green)">EMAIL</span>
            <span class="font-terminal text-xs" style="color:var(--text-dim)"> :: </span>
            <span class="font-terminal text-xs">{{ info.email }}</span>
          </a>

          <div class="contact-item" style="animation-delay: 0.2s">
            <span class="font-terminal text-xs" style="color:var(--cyber-green)">PHONE</span>
            <span class="font-terminal text-xs" style="color:var(--text-dim)"> :: </span>
            <span class="font-terminal text-xs">{{ info.phone }}</span>
          </div>

          <div class="contact-item" style="animation-delay: 0.3s">
            <span class="font-terminal text-xs" style="color:var(--cyber-green)">LOCATION</span>
            <span class="font-terminal text-xs" style="color:var(--text-dim)"> :: </span>
            <span class="font-terminal text-xs">{{ info.location }}</span>
          </div>

          <a
            :href="`https://${info.github}`"
            target="_blank"
            class="contact-item"
            style="animation-delay: 0.4s"
          >
            <span class="font-terminal text-xs" style="color:var(--cyber-green)">GITHUB</span>
            <span class="font-terminal text-xs" style="color:var(--text-dim)"> :: </span>
            <span class="font-terminal text-xs">{{ info.github }}</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* 头像容器 */
.avatar-wrapper {
  position: relative;
  width: 96px;
  height: 96px;
}

/* 外圈旋转扫描环 */
.scan-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: var(--cyber-cyan);
  border-right-color: var(--cyber-cyan);
  animation: rotateScan 3s linear infinite;
  box-shadow: 0 0 15px rgba(0,245,255,0.5);
}

/* 头像框 */
.avatar-frame {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 1px solid var(--border-bright);
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 20px rgba(0,245,255,0.3), inset 0 0 20px rgba(0,245,255,0.1);
}

/* 头像内字 */
.avatar-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a1628, #051020);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  color: var(--cyber-cyan);
  text-shadow: var(--glow-cyan);
}

/* 扫描线 */
.scan-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--cyber-cyan), transparent);
  animation: scanSweep 2.5s linear infinite;
  box-shadow: 0 0 8px var(--cyber-cyan);
}

/* 角落装饰点 */
.corner-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--cyber-cyan);
  box-shadow: 0 0 6px var(--cyber-cyan);
}
.corner-tl { top: -2px; left: -2px; }
.corner-br { bottom: -2px; right: -2px; }

/* Glitch 名字 */
.glitch-name {
  position: relative;
  color: var(--text-primary);
  display: inline-block;
}
.glitch-name::before,
.glitch-name::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.8;
}
.glitch-name::before {
  color: var(--cyber-purple);
  animation: glitch 5s infinite linear alternate-reverse;
  z-index: -1;
}
.glitch-name::after {
  color: var(--cyber-cyan);
  animation: glitch 5s 0.5s infinite linear alternate;
  z-index: -1;
}

/* 打字机光标 */
.cursor {
  animation: cursorBlink 1s step-end infinite;
  color: var(--cyber-cyan);
  margin-left: 2px;
}

/* 联系方式条目 */
.contact-item {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-muted);
  opacity: 0;
  animation: slideInLeft 0.5s ease forwards;
  transition: color 0.2s ease;
  cursor: pointer;
}
.contact-item:hover {
  color: var(--cyber-cyan);
}
.contact-item:hover span {
  color: var(--cyber-cyan) !important;
}
</style>
