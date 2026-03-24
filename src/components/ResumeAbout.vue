<script setup>
// 个人简介
const about = {
  zh: '热爱前端开发的工程师，拥有 5 年以上 Web 开发经验。专注于构建高性能、可维护的用户界面，熟悉现代前端技术栈，具备良好的团队协作能力和问题解决能力。',
  en: 'Passionate frontend developer with 5+ years of web development experience. Focused on building high-performance, maintainable user interfaces with modern frontend tech stacks. Strong team collaboration and problem-solving skills.',
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm p-8">
    <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
      <span class="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
      关于我 / About Me
    </h2>
    <p class="text-gray-700 leading-relaxed">{{ about.zh }}</p>
    <p class="text-gray-500 leading-relaxed mt-2 text-sm">{{ about.en }}</p>
  </div>
</template>
