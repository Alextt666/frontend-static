<script setup>
</script>

<template>
  <div class="page-content">
    <div class="page-header">
      <h2 class="page-title">作品集 / Portfolio</h2>
      <p class="page-sub">精选项目展示 · Selected Works</p>
    </div>

    <div class="content-area">
      <div class="coming-soon-card">
        <div class="coming-soon-icon">🎨</div>
        <h3 class="coming-soon-title">即将上线 · Coming Soon</h3>
        <p class="coming-soon-sub">Selected Works</p>
        <p class="coming-soon-desc">正在整理项目案例，敬请期待。</p>
        <p class="coming-soon-desc-en">Project showcases are being prepared. Stay tuned.</p>
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

.coming-soon-card {
  background: var(--bg-card);
  border: 1px solid var(--border-dim);
  border-radius: 12px;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
}
.coming-soon-icon { font-size: 3rem; margin-bottom: 1.25rem; }
.coming-soon-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 0.4rem;
}
.coming-soon-sub {
  font-size: 0.8rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0 0 1rem;
}
.coming-soon-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0 0 0.35rem;
}
.coming-soon-desc-en {
  font-size: 0.78rem;
  color: var(--text-dim);
  margin: 0;
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
  .page-content { padding: 5rem 1.25rem 2rem; }
}
</style>
