import { ref, watch } from 'vue'

// 模块级别的 ref，所有导入此函数的组件共享同一个状态
const theme = ref(
  localStorage.getItem('theme') || 'dark'
)

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

// 监听主题变化，同步到 DOM 和 localStorage
watch(theme, (val) => {
  document.documentElement.setAttribute('data-theme', val)
  localStorage.setItem('theme', val)
}, { immediate: true })

export function useTheme() {
  return { theme, toggleTheme }
}
