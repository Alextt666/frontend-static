<script setup>
const props = defineProps({ data: Object })
const about = props.data
</script>

<template>
  <div class="resume-card">
    <h2 class="section-title">关于我 / About</h2>
    <p class="text-sm leading-relaxed mb-2" style="color: var(--text-primary);">{{ about.zh }}</p>
    <p class="text-xs leading-relaxed" style="color: var(--text-dim);">{{ about.en }}</p>
  </div>
</template>
