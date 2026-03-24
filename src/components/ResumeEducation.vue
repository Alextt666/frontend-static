<script setup>
// 教育经历
const educations = [
  {
    school: '某某大学 / XX University',
    degree: '计算机科学与技术 学士 / B.S. in Computer Science',
    period: '2015.09 — 2019.06',
    gpa: 'GPA: 3.8 / 4.0',
    honors: ['优秀毕业生 / Outstanding Graduate', '国家奖学金 / National Scholarship'],
  },
]
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm p-8">
    <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
      <span class="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
      教育背景 / Education
    </h2>
    <div v-for="edu in educations" :key="edu.school" class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
      <div>
        <h3 class="text-base font-bold text-gray-900">{{ edu.school }}</h3>
        <p class="text-sm text-blue-600 font-medium mt-0.5">{{ edu.degree }}</p>
        <p class="text-sm text-gray-500 mt-1">{{ edu.gpa }}</p>
        <div class="flex flex-wrap gap-2 mt-2">
          <span
            v-for="honor in edu.honors"
            :key="honor"
            class="px-2 py-0.5 bg-yellow-50 text-yellow-700 rounded text-xs font-medium"
          >
            {{ honor }}
          </span>
        </div>
      </div>
      <p class="text-sm text-gray-500 shrink-0">{{ edu.period }}</p>
    </div>
  </div>
</template>
