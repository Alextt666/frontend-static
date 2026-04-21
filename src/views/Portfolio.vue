<script setup>
import { ref } from 'vue'
import GradientGenerator from '../components/demos/GradientGenerator.vue'
import ParticleClock from '../components/demos/ParticleClock.vue'

const projects = [
  {
    id: 'gradient-generator',
    name: 'CSS 渐变生成器',
    nameEn: 'CSS Gradient Generator',
    desc: '可视化 CSS 渐变工具，支持线性、径向、锥形渐变，实时预览并一键复制代码。',
    descEn: 'Visual CSS gradient tool with linear, radial, and conic support. Real-time preview and one-click copy.',
    tech: ['Vue 3', 'CSS', 'Clipboard API'],
    component: GradientGenerator,
  },
  {
    id: 'particle-clock',
    name: '粒子时钟',
    nameEn: 'Particle Clock',
    desc: 'Canvas 动画时钟，秒针尾部发射粒子轨迹，展示流畅的动画效果。',
    descEn: 'Canvas-based animated clock with particle trails from the second hand.',
    tech: ['Vue 3', 'Canvas API', 'Animation'],
    component: ParticleClock,
  },
]

const activeProject = ref(null)

function openPreview(project) {
  activeProject.value = project
}

function closePreview() {
  activeProject.value = null
}
</script>

<template>
  <div class="page-content">
    <div class="page-header">
      <h2 class="page-title">作品集 / Portfolio</h2>
      <p class="page-sub">精选项目展示 · Selected Works</p>
    </div>

    <div class="content-area">
      <!-- 项目列表 -->
      <div class="project-grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-item"
          @click="openPreview(project)"
        >
          <div class="project-header">
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-name-en">{{ project.nameEn }}</p>
          </div>
          <p class="project-desc">{{ project.desc }}</p>
          <p class="project-desc-en">{{ project.descEn }}</p>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech" class="tag">{{ tech }}</span>
          </div>
          <div class="project-action">
            <span class="action-text">点击预览</span>
            <svg class="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- 预览弹窗 -->
    <div v-if="activeProject" class="preview-overlay" @click.self="closePreview">
      <div class="preview-modal">
        <div class="preview-header">
          <div>
            <h3 class="preview-title">{{ activeProject.name }}</h3>
            <p class="preview-subtitle">{{ activeProject.nameEn }}</p>
          </div>
          <button class="preview-close" @click="closePreview">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="preview-body">
          <component :is="activeProject.component" />
        </div>
      </div>
    </div>

    <footer class="content-footer">
      <p>© 2026 Alex Zhang · Full-Stack Agent Developer</p>
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

/* 项目网格 */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
}

.project-item {
  background: var(--bg-card);
  border: 1px solid var(--border-dim);
  border-radius: 10px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-sm);
}
.project-item:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.project-header {
  margin-bottom: 0.75rem;
}
.project-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 0.25rem;
}
.project-name-en {
  font-size: 0.7rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0;
}

.project-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 0.35rem;
}
.project-desc-en {
  font-size: 0.72rem;
  color: var(--text-dim);
  line-height: 1.5;
  margin: 0 0 0.75rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}

.project-action {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-dim);
}
.action-text {
  transition: transform 0.2s;
}
.project-item:hover .action-text {
  transform: translateX(2px);
}
.action-icon {
  width: 0.9rem;
  height: 0.9rem;
  transition: transform 0.2s;
}
.project-item:hover .action-icon {
  transform: translateX(3px);
}

/* 预览弹窗 */
.preview-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: fadeIn 0.2s ease;
}

.preview-modal {
  background: var(--bg-card);
  border: 1px solid var(--border-bright);
  border-radius: 12px;
  width: 100%;
  max-width: 720px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border-dim);
  flex-shrink: 0;
}
.preview-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 0.25rem;
}
.preview-subtitle {
  font-size: 0.7rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0;
}
.preview-close {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid var(--border-dim);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex-shrink: 0;
}
.preview-close:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-light);
}
.preview-close svg {
  width: 1rem;
  height: 1rem;
}

.preview-body {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  min-height: 400px;
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

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 767px) {
  .page-content { padding: 5rem 1.25rem 2rem; }
  .project-grid { grid-template-columns: 1fr; }
  .preview-overlay { padding: 1rem; }
  .preview-modal { max-height: 90vh; }
  .preview-body { min-height: 300px; }
}
</style>
