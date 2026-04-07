<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
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
  <div class="min-h-screen py-8 px-4" style="background: var(--bg-primary);">
    <!-- 返回链接 -->
    <div class="max-w-3xl mx-auto mb-5">
      <RouterLink to="/" class="back-link">← 返回首页</RouterLink>
    </div>

    <!-- 加载中：skeleton -->
    <div v-if="loading" class="max-w-3xl mx-auto space-y-4">
      <div v-for="n in 6" :key="n" class="resume-card animate-pulse">
        <div class="h-3 bg-gray-200 rounded w-1/4 mb-4" />
        <div class="h-2.5 bg-gray-100 rounded w-full mb-2" />
        <div class="h-2.5 bg-gray-100 rounded w-4/5" />
      </div>
    </div>

    <!-- 加载失败 -->
    <div v-else-if="error" class="max-w-3xl mx-auto">
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

    <!-- 正常渲染 -->
    <div v-else class="max-w-3xl mx-auto space-y-4">
      <ResumeHeader :data="resumeData.header" />
      <ResumeAbout :data="resumeData.about" />
      <ResumeSkills :data="resumeData.skills" />
      <ResumeExperience :data="resumeData.experience" />
      <ResumeProjects :data="resumeData.projects" />
      <ResumeEducation :data="resumeData.education" />
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
