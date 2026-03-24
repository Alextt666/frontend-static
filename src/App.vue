<script setup>
import ResumeHeader from './components/ResumeHeader.vue'
import ResumeAbout from './components/ResumeAbout.vue'
import ResumeExperience from './components/ResumeExperience.vue'
import ResumeSkills from './components/ResumeSkills.vue'
import ResumeEducation from './components/ResumeEducation.vue'
import ResumeProjects from './components/ResumeProjects.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4">
    <div class="max-w-4xl mx-auto space-y-6">
      <ResumeHeader />
      <ResumeAbout />
      <ResumeSkills />
      <ResumeExperience />
      <ResumeProjects />
      <ResumeEducation />
    </div>
  </div>
</template>
