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
  <div class="min-h-screen py-10 px-4" style="background: var(--bg-primary);">
    <div class="max-w-4xl mx-auto mb-4">
      <RouterLink to="/" class="back-link">← BACK_TO_HOME</RouterLink>
    </div>
    <div class="max-w-4xl mx-auto space-y-5">
      <ResumeHeader />
      <ResumeAbout />
      <ResumeSkills />
      <ResumeExperience />
      <ResumeProjects />
      <ResumeEducation />
    </div>
    <p class="text-center mt-10 text-xs" style="color: var(--text-dim); letter-spacing: 0.1em;">
      © 2024 Zhang San · Frontend Developer
    </p>
  </div>
</template>

<style scoped>
.back-link {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: var(--text-dim);
  text-decoration: none;
  transition: color 0.2s;
}
.back-link:hover {
  color: var(--accent);
}
</style>
