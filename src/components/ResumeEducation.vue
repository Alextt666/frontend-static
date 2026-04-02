<script setup>
// 教育经历
const educations = [
  {
    school: '某某大学 / XX University',
    degree: '计算机科学与技术 学士 / B.S. in Computer Science',
    period: '2015.09 → 2019.06',
    gpa: '3.8 / 4.0',
    honors: ['优秀毕业生 / Outstanding Graduate', '国家奖学金 / National Scholarship'],
  },
]
</script>

<template>
  <div class="cyber-card">
    <!-- 认证标记 -->
    <p class="font-terminal text-xs mb-4" style="color: var(--cyber-purple); letter-spacing: 0.1em;">
      ACCESS_LEVEL :: VERIFIED &nbsp;✓
    </p>

    <h2 class="cyber-section-title">教育背景 / Education</h2>

    <div
      v-for="edu in educations"
      :key="edu.school"
      class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
    >
      <div>
        <!-- 院校名 -->
        <h3 class="font-orbitron text-sm font-bold" style="color: var(--text-primary);">
          {{ edu.school }}
        </h3>

        <!-- 专业 -->
        <p
          class="font-terminal text-xs mt-1.5"
          style="color: var(--cyber-cyan); text-shadow: 0 0 8px rgba(0,245,255,0.5);"
        >
          {{ edu.degree }}
        </p>

        <!-- GPA -->
        <p class="font-terminal text-xs mt-2" style="color: var(--cyber-green);">
          SYS_SCORE :: {{ edu.gpa }}
        </p>

        <!-- 荣誉 badges -->
        <div class="flex flex-wrap gap-2 mt-3">
          <span
            v-for="honor in edu.honors"
            :key="honor"
            class="honor-badge font-terminal text-xs"
          >
            ✓ {{ honor }}
          </span>
        </div>
      </div>

      <!-- 时间 -->
      <p class="font-terminal text-xs shrink-0" style="color: var(--text-dim);">
        [ {{ edu.period }} ]
      </p>
    </div>
  </div>
</template>

<style scoped>
.honor-badge {
  padding: 3px 10px;
  border: 1px solid rgba(124, 58, 237, 0.35);
  color: var(--cyber-cyan);
  background: rgba(124, 58, 237, 0.05);
  transition: background 0.2s ease, box-shadow 0.2s ease;
  cursor: default;
}
.honor-badge:hover {
  background: rgba(124, 58, 237, 0.12);
  box-shadow: 0 0 10px rgba(124,58,237,0.25);
}
</style>
