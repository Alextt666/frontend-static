<script setup>
import { RouterView, useRoute } from 'vue-router'
import AppSidebar from './components/AppSidebar.vue'
import AppToolbar from './components/AppToolbar.vue'

const route = useRoute()
</script>

<template>
  <div class="app-root">
    <AppSidebar />
    <AppToolbar />
    <main class="app-main">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style>
.app-root {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.app-main {
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  background: var(--bg-primary);
}

.fade-enter-active,
.fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from,
.fade-leave-to    { opacity: 0; }

@media (max-width: 767px) {
  .app-root {
    flex-direction: column;
    height: auto;
    overflow: visible;
  }
  .app-main {
    height: auto;
    overflow: visible;
    padding-top: 56px; /* 补偿 fixed sidebar 高度 */
  }
}
</style>
