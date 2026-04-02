<script setup>
import { ref, onMounted } from 'vue'

// 个人简介
const about = {
  zh: '热爱前端开发的工程师，拥有 5 年以上 Web 开发经验。专注于构建高性能、可维护的用户界面，熟悉现代前端技术栈，具备良好的团队协作能力和问题解决能力。',
  en: 'Passionate frontend developer with 5+ years of web development experience. Focused on building high-performance, maintainable user interfaces with modern frontend tech stacks. Strong team collaboration and problem-solving skills.',
}

const displayZh = ref('')
const displayEn = ref('')
const zhDone = ref(false)

onMounted(() => {
  // IntersectionObserver 触发打字机，避免在视口外提前执行
  const el = document.querySelector('.about-card')
  if (!el) return

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      observer.disconnect()
      startTyping()
    }
  }, { threshold: 0.2 })
  observer.observe(el)
})

function startTyping() {
  let i = 0
  const timerZh = setInterval(() => {
    if (i < about.zh.length) {
      displayZh.value += about.zh[i++]
    } else {
      clearInterval(timerZh)
      zhDone.value = true
      let j = 0
      const timerEn = setInterval(() => {
        if (j < about.en.length) {
          displayEn.value += about.en[j++]
        } else {
          clearInterval(timerEn)
        }
      }, 18)
    }
  }, 28)
}
</script>

<template>
  <div class="cyber-card about-card">
    <!-- 仿终端标题栏 -->
    <div class="terminal-bar">
      <span class="dot dot-red" />
      <span class="dot dot-yellow" />
      <span class="dot dot-green" />
      <span class="font-terminal text-xs ml-3" style="color:var(--text-dim);">
        bash :: profile.sh &mdash; 80x24
      </span>
    </div>

    <h2 class="cyber-section-title mt-6">关于我 / About Me</h2>

    <!-- 中文段落 -->
    <p class="leading-loose text-sm md:text-base" style="color: var(--text-primary);">
      <span class="font-terminal" style="color: var(--cyber-green);">$&gt;&nbsp;</span>
      <span>{{ displayZh }}</span>
      <span v-if="!zhDone" class="cursor">█</span>
    </p>

    <!-- 英文段落 -->
    <p
      v-if="displayEn.length > 0"
      class="font-terminal text-xs mt-3 leading-relaxed"
      style="color: var(--text-muted);"
    >
      // {{ displayEn }}<span v-if="displayEn.length < about.en.length" class="cursor">█</span>
    </p>
  </div>
</template>

<style scoped>
.terminal-bar {
  display: flex;
  align-items: center;
  padding: 8px 14px;
  background: rgba(0, 245, 255, 0.04);
  border-bottom: 1px solid var(--border-dim);
  margin: -2rem -2rem 0;
  border-radius: 2px 2px 0 0;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;
  flex-shrink: 0;
}
.dot-red    { background: #ff5f56; box-shadow: 0 0 5px #ff5f56; }
.dot-yellow { background: #ffbd2e; box-shadow: 0 0 5px #ffbd2e; }
.dot-green  { background: #27c93f; box-shadow: 0 0 5px #27c93f; }

.cursor {
  animation: cursorBlink 1s step-end infinite;
  color: var(--cyber-cyan);
  margin-left: 1px;
}
</style>
