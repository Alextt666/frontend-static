<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page-content">
    <!-- Hero -->
    <section class="hero-section">
      <p class="hero-greeting">👋 你好，欢迎来到我的个人空间</p>
      <h2 class="hero-headline">
        我是一名<span class="hero-highlight">前端开发工程师</span>
      </h2>
      <p class="hero-sub">
        专注于构建现代化的 Web 应用，热爱探索新技术，追求极致的用户体验与交互细节。
      </p>
    </section>

    <!-- 信息卡片 -->
    <div class="cards-grid">
      <div class="info-card" style="animation-delay: 0.15s">
        <div class="card-icon">💼</div>
        <h3 class="card-title">关于我</h3>
        <p class="card-desc">5+ 年前端开发经验，熟练掌握 Vue、React 等主流框架，擅长构建高性能单页应用。</p>
      </div>
      <div class="info-card" style="animation-delay: 0.23s">
        <div class="card-icon">🚀</div>
        <h3 class="card-title">技能专长</h3>
        <p class="card-desc">Vue 3 · React · TypeScript · Tailwind CSS · Vite · Node.js · 性能优化</p>
      </div>
      <div class="info-card" style="animation-delay: 0.31s">
        <div class="card-icon">✨</div>
        <h3 class="card-title">当前状态</h3>
        <p class="card-desc">开放工作机会，欢迎联系交流合作，期待有趣的项目与挑战。</p>
      </div>
      <div class="info-card" style="animation-delay: 0.39s">
        <div class="card-icon">📍</div>
        <h3 class="card-title">所在地</h3>
        <p class="card-desc">中国上海 · 支持远程工作</p>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta-section">
      <RouterLink to="/resume" class="cta-btn cta-primary">
        查看完整简历
        <svg class="cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </RouterLink>
      <RouterLink to="/portfolio" class="cta-btn cta-secondary">浏览作品集</RouterLink>
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
.hero-sub {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.75;
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
}
.card-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.65;
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
