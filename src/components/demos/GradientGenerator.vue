<script setup>
import { ref, computed } from 'vue'

const type = ref('linear')
const angle = ref(135)
const stops = ref([
  { color: '#0070cc', pos: 0 },
  { color: '#4da3ff', pos: 50 },
  { color: '#00c9a7', pos: 100 },
])
const copied = ref(false)

const gradientCSS = computed(() => {
  const s = stops.value.map(s => `${s.color} ${s.pos}%`).join(', ')
  if (type.value === 'linear') return `linear-gradient(${angle.value}deg, ${s})`
  if (type.value === 'radial') return `radial-gradient(circle, ${s})`
  return `conic-gradient(from ${angle.value}deg, ${s})`
})

const cssText = computed(() => `background: ${gradientCSS.value};`)

function addStop() {
  if (stops.value.length >= 5) return
  stops.value.push({ color: '#ffffff', pos: 75 })
}

function removeStop(i) {
  if (stops.value.length <= 2) return
  stops.value.splice(i, 1)
}

async function copy() {
  await navigator.clipboard.writeText(cssText.value)
  copied.value = true
  setTimeout(() => copied.value = false, 1800)
}
</script>

<template>
  <div class="gg-wrap">
    <!-- 预览区 -->
    <div class="gg-preview" :style="{ background: gradientCSS }"></div>

    <div class="gg-controls">
      <!-- 类型 -->
      <div class="gg-row">
        <label class="gg-label">类型</label>
        <div class="gg-tabs">
          <button v-for="t in ['linear','radial','conic']" :key="t"
            class="gg-tab" :class="{ active: type === t }" @click="type = t">
            {{ t }}
          </button>
        </div>
      </div>

      <!-- 角度（linear/conic） -->
      <div class="gg-row" v-if="type !== 'radial'">
        <label class="gg-label">角度 {{ angle }}°</label>
        <input type="range" min="0" max="360" v-model.number="angle" class="gg-range" />
      </div>

      <!-- 色标 -->
      <div class="gg-row gg-col">
        <div class="gg-label-row">
          <label class="gg-label">色标</label>
          <button class="gg-add-btn" @click="addStop" :disabled="stops.length >= 5">+ 添加</button>
        </div>
        <div class="gg-stops">
          <div v-for="(stop, i) in stops" :key="i" class="gg-stop">
            <input type="color" v-model="stop.color" class="gg-color-input" />
            <input type="range" min="0" max="100" v-model.number="stop.pos" class="gg-range flex-1" />
            <span class="gg-pos-label">{{ stop.pos }}%</span>
            <button class="gg-rm-btn" @click="removeStop(i)" :disabled="stops.length <= 2">×</button>
          </div>
        </div>
      </div>

      <!-- 输出 -->
      <div class="gg-output">
        <code class="gg-code">{{ cssText }}</code>
        <button class="gg-copy-btn" @click="copy">
          {{ copied ? '已复制 ✓' : '复制' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gg-wrap {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 100%;
}
.gg-preview {
  height: 140px;
  border-radius: 10px;
  border: 1px solid var(--border-dim);
  flex-shrink: 0;
  transition: background 0.3s;
}
.gg-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  overflow-y: auto;
}
.gg-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.gg-col { flex-direction: column; align-items: stretch; }
.gg-label {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
  white-space: nowrap;
  min-width: 60px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.gg-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.gg-tabs {
  display: flex;
  gap: 0.35rem;
}
.gg-tab {
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  border: 1px solid var(--border-dim);
  background: transparent;
  color: var(--text-muted);
  font-size: 0.72rem;
  cursor: pointer;
  transition: all 0.15s;
  text-transform: capitalize;
}
.gg-tab.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}
.gg-range {
  flex: 1;
  accent-color: var(--accent);
  cursor: pointer;
}
.gg-stops {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.4rem;
}
.gg-stop {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.gg-color-input {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 2px;
  background: transparent;
  flex-shrink: 0;
}
.gg-pos-label {
  font-size: 0.68rem;
  color: var(--text-dim);
  min-width: 30px;
  text-align: right;
}
.gg-rm-btn {
  width: 22px;
  height: 22px;
  border-radius: 4px;
  border: 1px solid var(--border-dim);
  background: transparent;
  color: var(--text-dim);
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s;
}
.gg-rm-btn:hover:not(:disabled) { border-color: #e55; color: #e55; }
.gg-rm-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.gg-add-btn {
  font-size: 0.7rem;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  border: 1px solid var(--accent);
  background: transparent;
  color: var(--accent);
  cursor: pointer;
  transition: all 0.15s;
}
.gg-add-btn:hover:not(:disabled) { background: var(--accent); color: #fff; }
.gg-add-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.gg-output {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-dim);
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
}
.gg-code {
  flex: 1;
  font-size: 0.68rem;
  color: var(--accent);
  font-family: 'Courier New', monospace;
  word-break: break-all;
  line-height: 1.5;
}
.gg-copy-btn {
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  border: 1px solid var(--accent);
  background: transparent;
  color: var(--accent);
  font-size: 0.7rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;
  flex-shrink: 0;
}
.gg-copy-btn:hover { background: var(--accent); color: #fff; }
</style>
