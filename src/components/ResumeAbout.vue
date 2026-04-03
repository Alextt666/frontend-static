<script setup>
const about = {
  zh: '热爱前端开发的工程师，拥有 5 年以上 Web 开发经验。专注于构建高性能、可维护的用户界面，熟悉现代前端技术栈，具备良好的团队协作能力和问题解决能力。',
  en: 'Passionate frontend developer with 5+ years of web development experience. Focused on building high-performance, maintainable user interfaces with modern frontend tech stacks.',
}
</script>

<template>
  <div class="resume-card">
    <h2 class="section-title">关于我 / About</h2>
    <p class="text-sm leading-relaxed mb-2" style="color: var(--text-primary);">{{ about.zh }}</p>
    <p class="text-xs leading-relaxed" style="color: var(--text-dim);">{{ about.en }}</p>
  </div>
</template>
