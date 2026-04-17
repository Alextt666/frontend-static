<script setup>
import { Sun, Moon } from '@icon-park/vue-next'
import { useTheme } from '../composables/useTheme'

const { isDark, toggle } = useTheme()
</script>

<template>
  <div class="toolbar">
    <button class="toolbar-btn" @click="toggle" :title="isDark ? '切换到亮色模式' : '切换到暗色模式'">
      <Sun v-if="isDark" :size="18" :stroke-width="3" />
      <Moon v-else :size="18" :stroke-width="3" />
    </button>
  </div>
</template>

<style scoped>
.toolbar {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 200;
  background: var(--bg-card);
  border: 1px solid var(--border-dim);
  border-radius: 10px;
  padding: 0.35rem 0.5rem;
  box-shadow: var(--shadow-sm);
  transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.18s ease;
}
.toolbar-btn:hover {
  background: var(--accent-light);
  color: var(--accent);
  transform: scale(1.05);
}
</style>
