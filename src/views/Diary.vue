<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page-root">
    <div class="corner corner-tl" />
    <div class="corner corner-tr" />
    <div class="corner corner-bl" />
    <div class="corner corner-br" />

    <main class="content">
      <p class="sys-label">MODULE :: DIARY</p>
      <h1 class="title">日记</h1>
      <p class="subtitle">// COMING SOON</p>
      <RouterLink to="/" class="back-link">← BACK_TO_HOME</RouterLink>
    </main>
  </div>
</template>

<style scoped>
.page-root {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #050508;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.corner {
  position: absolute;
  width: 32px;
  height: 32px;
  pointer-events: none;
}
.corner-tl { top: 24px; left: 24px; border-top: 1px solid rgba(0,245,255,0.5); border-left: 1px solid rgba(0,245,255,0.5); }
.corner-tr { top: 24px; right: 24px; border-top: 1px solid rgba(0,245,255,0.5); border-right: 1px solid rgba(0,245,255,0.5); }
.corner-bl { bottom: 24px; left: 24px; border-bottom: 1px solid rgba(0,245,255,0.5); border-left: 1px solid rgba(0,245,255,0.5); }
.corner-br { bottom: 24px; right: 24px; border-bottom: 1px solid rgba(0,245,255,0.5); border-right: 1px solid rgba(0,245,255,0.5); }

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0;
}

.sys-label {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  color: rgba(0, 245, 255, 0.45);
  margin-bottom: 1.5rem;
}

.title {
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 6vw, 4rem);
  color: #e8f4ff;
  margin: 0 0 1rem;
}

.subtitle {
  font-family: 'Share Tech Mono', monospace;
  font-size: 1rem;
  color: rgba(0, 245, 255, 0.5);
  letter-spacing: 0.2em;
  margin: 0 0 3rem;
}

.back-link {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: rgba(0, 245, 255, 0.4);
  text-decoration: none;
  transition: color 0.2s;
}
.back-link:hover { color: #00f5ff; }
</style>
