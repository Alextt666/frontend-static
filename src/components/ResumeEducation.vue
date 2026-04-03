<script setup>
const educations = [
  {
    school: '某某大学 / XX University',
    degree: '计算机科学与技术 学士 / B.S. in Computer Science',
    period: '2015.09 — 2019.06',
    gpa: '3.8 / 4.0',
    honors: ['优秀毕业生 / Outstanding Graduate', '国家奖学金 / National Scholarship'],
  },
]
</script>

<template>
  <div class="resume-card">
    <h2 class="section-title">教育背景 / Education</h2>

    <div
      v-for="edu in educations"
      :key="edu.school"
      class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"
    >
      <div>
        <h3 class="text-sm font-semibold" style="color: var(--text-primary);">{{ edu.school }}</h3>
        <p class="text-xs mt-1" style="color: var(--accent);">{{ edu.degree }}</p>
        <p class="text-xs mt-1.5" style="color: var(--text-dim);">GPA {{ edu.gpa }}</p>
        <div class="flex flex-wrap gap-2 mt-2.5">
          <span
            v-for="honor in edu.honors"
            :key="honor"
            class="tag"
          >
            {{ honor }}
          </span>
        </div>
      </div>
      <p class="text-xs shrink-0" style="color: var(--text-dim);">{{ edu.period }}</p>
    </div>
  </div>
</template>
