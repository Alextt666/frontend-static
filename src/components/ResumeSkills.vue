<script setup>
// 技能列表
const skillGroups = [
  {
    category: '前端框架 / Frontend',
    skills: ['Vue 3', 'React', 'TypeScript', 'JavaScript (ES6+)'],
  },
  {
    category: '样式 / Styling',
    skills: ['Tailwind CSS', 'SCSS/SASS', 'CSS3', 'Element Plus'],
  },
  {
    category: '工程化 / Tooling',
    skills: ['Vite', 'Webpack', 'Git', 'ESLint', 'Prettier'],
  },
  {
    category: '其他 / Others',
    skills: ['Node.js', 'RESTful API', 'Figma', 'Agile/Scrum'],
  },
]
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm p-8">
    <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
      <span class="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
      技能 / Skills
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div v-for="group in skillGroups" :key="group.category">
        <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          {{ group.category }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in group.skills"
            :key="skill"
            class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
