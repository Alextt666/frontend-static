<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page-content">
    <!-- Hero -->
    <section class="hero-section">
      <p class="hero-greeting">👋 你好，欢迎来到我的个人空间 · Welcome to my space</p>
      <h2 class="hero-headline">
        我是一名<span class="hero-highlight">全栈 Agent 开发工程师</span>
      </h2>
      <p class="hero-headline-en">Full-Stack Agent Developer · Building AI-powered products end to end</p>
      <p class="hero-sub">
        专注于 AI Agent 系统与全栈研发，从前端到后端、从桌面应用到大模型集成，热爱将 LLM 能力落地为真实产品。
      </p>
      <p class="hero-sub-en">
        Focused on AI agent systems and full-stack development — from frontend to backend, desktop apps to LLM integration, passionate about shipping real products powered by large language models.
      </p>
    </section>

    <!-- 信息卡片 -->
    <div class="cards-grid">
      <div class="info-card" style="animation-delay: 0.15s">
        <div class="card-icon">💼</div>
        <h3 class="card-title">关于我 <span class="card-title-en">About</span></h3>
        <p class="card-desc">全栈 Agent 开发工程师，具备前端、桌面端、后端与 AI 系统完整研发能力，深度参与 AI 视频生成平台落地。</p>
        <p class="card-desc-en">Full-stack Agent developer with end-to-end capabilities across frontend, desktop, backend, and AI systems. Shipped AI video generation platforms in production.</p>
      </div>
      <div class="info-card" style="animation-delay: 0.23s">
        <div class="card-icon">🚀</div>
        <h3 class="card-title">技术栈 <span class="card-title-en">Stack</span></h3>
        <p class="card-desc">Vue 3 · Electron · Go · TypeScript · FFmpeg · Volcengine Ark · Klingai · Seedream</p>
        <p class="card-desc-en">Vue 3 · Electron · Go · TypeScript · FFmpeg · LLM APIs · Agent Orchestration</p>
      </div>
      <div class="info-card" style="animation-delay: 0.31s">
        <div class="card-icon">✨</div>
        <h3 class="card-title">当前状态 <span class="card-title-en">Status</span></h3>
        <p class="card-desc">开放工作机会，欢迎 AI 产品、Agent 系统、全栈方向的合作与交流。</p>
        <p class="card-desc-en">Open to opportunities in AI products, agent systems, and full-stack roles. Feel free to reach out.</p>
      </div>
      <div class="info-card" style="animation-delay: 0.39s">
        <div class="card-icon">📍</div>
        <h3 class="card-title">所在地 <span class="card-title-en">Location</span></h3>
        <p class="card-desc">中国上海 · 支持远程工作</p>
        <p class="card-desc-en">Shanghai, China · Open to remote</p>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta-section">
      <RouterLink to="/resume" class="cta-btn cta-primary">
        查看完整简历 · View Resume
        <svg class="cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </RouterLink>
      <RouterLink to="/portfolio" class="cta-btn cta-secondary">浏览作品集 · Portfolio</RouterLink>
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

/* Hero */
.hero-section {
  max-width: 760px;
  margin: 0 auto 2.5rem;
  animation: fadeInUp 0.5s ease 0.05s both;
}
.hero-greeting {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin: 0 0 1rem;
}
.hero-headline {
  font-size: clamp(1.75rem, 3.5vw, 2.4rem);
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 1rem;
  line-height: 1.3;
}
.hero-highlight { color: var(--accent); }
.hero-headline-en {
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-dim);
  margin: 0.25rem 0 1rem;
  letter-spacing: 0.01em;
}
.hero-sub {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.75;
  margin: 0 0 0.4rem;
}
.hero-sub-en {
  font-size: 0.85rem;
  color: var(--text-dim);
  line-height: 1.7;
  margin: 0;
}

/* 卡片网格 */
.cards-grid {
  max-width: 760px;
  margin: 0 auto 2.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
.info-card {
  background: var(--bg-card);
  border: 1px solid var(--border-dim);
  border-radius: 12px;
  padding: 1.6rem 1.5rem;
  box-shadow: var(--shadow-sm);
  opacity: 0;
  animation: fadeInUp 0.4s ease both;
  transition: transform 0.2s, box-shadow 0.2s;
}
.info-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}
.card-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
.card-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 0.6rem;
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}
.card-title-en {
  font-size: 0.72rem;
  font-weight: 400;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.card-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin: 0 0 0.35rem;
}
.card-desc-en {
  font-size: 0.75rem;
  color: var(--text-dim);
  line-height: 1.6;
  margin: 0;
}

/* CTA */
.cta-section {
  max-width: 760px;
  margin: 0 auto 2.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
}
.cta-btn:hover { transform: scale(1.03); }
.cta-primary {
  background: var(--accent);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
}
.cta-primary:hover {
  background: var(--accent-hover);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
.cta-secondary {
  background: var(--bg-card);
  color: var(--accent);
  border: 1px solid var(--accent);
}
.cta-secondary:hover {
  background: var(--accent-light);
  color: var(--accent);
}
.cta-arrow {
  width: 1rem;
  height: 1rem;
  transition: transform 0.2s;
}
.cta-btn:hover .cta-arrow { transform: translateX(3px); }

/* 页脚 */
.content-footer {
  max-width: 760px;
  margin: 0 auto;
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
  .page-content { padding: 5rem 1.25rem 2rem; }
  .cards-grid { grid-template-columns: 1fr; }
  .cta-section { flex-direction: column; }
  .cta-btn { width: 100%; justify-content: center; }
}
</style>
