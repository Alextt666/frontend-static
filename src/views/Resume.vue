<script setup>
import { RouterLink } from 'vue-router'
import ResumeHeader from '../components/ResumeHeader.vue'
import ResumeAbout from '../components/ResumeAbout.vue'
import ResumeSkills from '../components/ResumeSkills.vue'
import ResumeExperience from '../components/ResumeExperience.vue'
import ResumeProjects from '../components/ResumeProjects.vue'
import ResumeEducation from '../components/ResumeEducation.vue'
</script>

<template>
  <div class="min-h-screen py-8 px-4" style="background: var(--bg-primary);">
    <!-- 返回链接 -->
    <div class="max-w-3xl mx-auto mb-5">
      <RouterLink to="/" class="back-link">← 返回首页</RouterLink>
    </div>

    <!-- 简历主体 -->
    <div class="max-w-3xl mx-auto space-y-4">
      <ResumeHeader />
      <ResumeAbout />
      <ResumeSkills />
      <ResumeExperience />
      <ResumeProjects />
      <ResumeEducation />
    </div>

    <p class="text-center mt-8 text-xs" style="color: var(--text-dim);">
      © 2024 Alex · Frontend Developer
    </p>
  </div>
</template>

<style scoped>
.back-link {
  font-size: 0.75rem;
  color: var(--text-dim);
  text-decoration: none;
  transition: color 0.2s;
}
.back-link:hover {
  color: var(--accent);
}
</style>
