import { ref, watch } from 'vue'

// 初始值：优先读 localStorage，否则跟随系统偏好
const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const isDark = ref(saved ? saved === 'dark' : prefersDark)

// 同步到 DOM 和 localStorage
watch(isDark, (val) => {
  document.documentElement.setAttribute('data-theme', val ? 'dark' : 'light')
  localStorage.setItem('theme', val ? 'dark' : 'light')
}, { immediate: true })

export function useTheme() {
  return {
    isDark,
    toggle: () => { isDark.value = !isDark.value }
  }
}
