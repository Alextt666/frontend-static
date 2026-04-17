<script setup>
import { ref, onMounted } from 'vue'
import ResumeHeader from '../components/ResumeHeader.vue'
import ResumeAbout from '../components/ResumeAbout.vue'
import ResumeSkills from '../components/ResumeSkills.vue'
import ResumeExperience from '../components/ResumeExperience.vue'
import ResumeProjects from '../components/ResumeProjects.vue'
import ResumeEducation from '../components/ResumeEducation.vue'

const resumeData = ref(null)
const loading = ref(true)
const error = ref(null)

async function fetchResume() {
  loading.value = true
  error.value = null
  try {
    const res = await fetch('/api/resume')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    resumeData.value = await res.json()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchResume)
</script>

<template>
  <div class="page-content">
    <div class="page-header">
      <h2 class="page-title">简历 / Resume</h2>
      <p class="page-sub">Frontend Developer · 前端开发工程师</p>
    </div>

    <div v-if="loading" class="content-area space-y-4">
      <div v-for="n in 6" :key="n" class="resume-card animate-pulse">
        <div class="h-3 bg-gray-200 rounded w-1/4 mb-4" />
        <div class="h-2.5 bg-gray-100 rounded w-full mb-2" />
        <div class="h-2.5 bg-gray-100 rounded w-4/5" />
      </div>
    </div>

    <div v-else-if="error" class="content-area">
      <div class="resume-card text-center py-10">
        <p class="text-sm mb-3" style="color: var(--text-dim);">加载失败：{{ error }}</p>
        <button
          @click="fetchResume"
          class="text-xs px-4 py-1.5 rounded-full border transition-colors"
          style="color: var(--accent); border-color: var(--accent);"
        >
          重试
        </button>
      </div>
    </div>

    <div v-else-if="resumeData" class="content-area space-y-4">
      <ResumeHeader :data="resumeData.header" />
      <ResumeAbout :data="resumeData.about" />
      <ResumeSkills :data="resumeData.skills" />
      <ResumeExperience :data="resumeData.experience" />
      <ResumeProjects :data="resumeData.projects" />
      <ResumeEducation :data="resumeData.education" />
    </div>

    <footer class="content-footer">
      <p>© 2024 Alex · Frontend Developer</p>
    </footer>
  </div>
</template>

<style scoped>
.page-content {
  padding: 3rem 2.5rem;
}

.page-header {
  max-width: 760px;
  margin: 0 auto 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-dim);
  animation: fadeInUp 0.4s ease 0.1s both;
}
.page-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.4rem;
}
.page-sub {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
}

.content-area {
  max-width: 760px;
  margin: 0 auto;
  animation: fadeInUp 0.4s ease 0.2s both;
}

.content-footer {
  max-width: 760px;
  margin: 2rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid var(--border-dim);
  text-align: center;
}
.content-footer p {
  font-size: 0.72rem;
  color: var(--text-dim);
  margin: 0;
}

@media (max-width: 767px) {
  .page-content {
    padding: 5rem 1.25rem 2rem;
  }
}
</style>
