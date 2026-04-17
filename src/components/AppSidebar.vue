<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  Home,
  FileText,
  FolderOpen,
  Notebook,
  ExpandTextInput,
  CollectLaptop,
  Local,
  HamburgerButton,
  Close
} from '@icon-park/vue-next'

const collapsed = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  {
    to: '/',
    label: '首页',
    labelEn: 'Home',
    icon: Home
  },
  {
    to: '/resume',
    label: '简历',
    labelEn: 'Resume',
    icon: FileText
  },
  {
    to: '/portfolio',
    label: '作品集',
    labelEn: 'Portfolio',
    icon: FolderOpen
  },
  {
    to: '/diary',
    label: '日记',
    labelEn: 'Diary',
    icon: Notebook
  }
]
</script>

<template>
  <aside class="sidebar" :class="{ collapsed }">

    <!-- 折叠切换按钮 -->
    <button class="collapse-btn" @click="collapsed = !collapsed" :title="collapsed ? '展开侧边栏' : '折叠侧边栏'">
      <component :is="collapsed ? ExpandTextInput : CollectLaptop" :size="16" :stroke-width="3" />
    </button>

    <div class="sidebar-inner">
      <!-- 头像 -->
      <RouterLink to="/" class="sidebar-avatar-link">
        <div class="sidebar-avatar">
          <span class="avatar-text">耀</span>
        </div>
      </RouterLink>

      <!-- 姓名 + 职位（展开时显示） -->
      <div class="sidebar-profile">
        <RouterLink to="/" class="sidebar-name-link">
          <h1 class="sidebar-name">耀天 / ALEX</h1>
        </RouterLink>
        <p class="sidebar-title">Frontend Developer</p>
      </div>

      <div class="sidebar-divider" />

      <!-- 导航菜单 -->
      <nav class="sidebar-nav">
        <RouterLink
          v-for="(item, i) in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-item"
          :style="{ animationDelay: `${0.4 + i * 0.08}s` }"
          :title="collapsed ? item.label : ''"
        >
          <component :is="item.icon" class="nav-icon" :size="20" :stroke-width="3" />
          <div class="nav-labels">
            <span class="nav-label">{{ item.label }}</span>
            <span class="nav-label-en">{{ item.labelEn }}</span>
          </div>
          <svg class="nav-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </nav>

      <!-- 底部坐标（展开时显示） -->
      <div class="sidebar-footer">
        <p class="footer-location">
          <Local class="inline-icon" :size="13" :stroke-width="3" />
          Shanghai, China
        </p>
        <p class="footer-coords">31.2304° N · 121.4737° E</p>
      </div>
    </div>

    <!-- 移动端汉堡按钮 -->
    <button class="mobile-menu-btn" @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="菜单">
      <component :is="isMobileMenuOpen ? Close : HamburgerButton" :size="22" :stroke-width="3" />
    </button>

    <!-- 移动端展开菜单 -->
    <div class="mobile-nav" :class="{ open: isMobileMenuOpen }">
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="mobile-nav-item"
        @click="isMobileMenuOpen = false"
      >
        <component :is="item.icon" class="nav-icon" :size="18" :stroke-width="3" />
        {{ item.label }} / {{ item.labelEn }}
      </RouterLink>
    </div>
  </aside>
</template>

<style scoped>
/* ─── 侧边栏 ─────────────────────────────────────── */
.sidebar {
  width: 260px;
  height: 100vh;
  background: var(--bg-sidebar);
  overflow-y: auto;
  overflow-x: hidden;
  flex-shrink: 0;
  position: relative;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.sidebar.collapsed {
  width: 64px;
}

/* 折叠按钮 */
.collapse-btn {
  position: absolute;
  top: 1rem;
  right: 0.75rem;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: var(--text-sidebar);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.45;
  transition: opacity 0.2s, background 0.2s, top 0.3s, right 0.3s;
  z-index: 10;
  flex-shrink: 0;
}
.collapsed .collapse-btn {
  top: auto;
  right: auto;
  position: static;
  margin: 0.5rem auto 0;
}
.collapse-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.08);
}
.collapse-btn svg {
  width: 1rem;
  height: 1rem;
}

.sidebar-inner {
  padding: 2.5rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
}

/* 头像 */
.sidebar-avatar-link {
  text-decoration: none;
  display: block;
}
.sidebar-avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-light), #c8e6f7);
  border: 3px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  flex-shrink: 0;
  animation: fadeInUp 0.4s ease 0.15s both;
  transition: box-shadow 0.3s, transform 0.2s, width 0.3s, height 0.3s;
  cursor: pointer;
}
.sidebar-avatar:hover {
  box-shadow: 0 0 0 5px rgba(77, 163, 255, 0.25);
  transform: scale(1.02);
}
.avatar-text {
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  transition: font-size 0.3s;
}

/* 折叠时头像缩小 */
.collapsed .sidebar-avatar {
  width: 40px;
  height: 40px;
  margin-bottom: 0.75rem;
  border-width: 2px;
}
.collapsed .avatar-text {
  font-size: 1.1rem;
}

/* 姓名 + 职位 */
.sidebar-profile {
  overflow: hidden;
  max-height: 80px;
  opacity: 1;
  transition: max-height 0.3s ease, opacity 0.2s ease;
  text-align: center;
  width: 100%;
}
.collapsed .sidebar-profile {
  max-height: 0;
  opacity: 0;
}

.sidebar-name-link {
  text-decoration: none;
  display: block;
}
.sidebar-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.45rem;
  text-align: center;
  animation: fadeInUp 0.4s ease 0.25s both;
  transition: color 0.2s;
  white-space: nowrap;
}
.sidebar-name-link:hover .sidebar-name {
  color: var(--accent-light);
}
.sidebar-title {
  font-size: 0.78rem;
  color: var(--text-sidebar);
  margin: 0 0 1.75rem;
  text-align: center;
  opacity: 0.75;
  animation: fadeInUp 0.4s ease 0.32s both;
  white-space: nowrap;
}

/* 分割线 */
.sidebar-divider {
  width: 55%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 1.75rem;
  transition: width 0.3s;
}
.collapsed .sidebar-divider {
  width: 32px;
}

/* 导航 */
.sidebar-nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-sidebar);
  border-left: 3px solid transparent;
  transition: background 0.2s, color 0.2s, border-color 0.2s, padding 0.3s;
  opacity: 0;
  animation: fadeInUp 0.35s ease both;
  overflow: hidden;
  white-space: nowrap;
}
.nav-item:hover {
  background: rgba(255, 255, 255, 0.07);
  color: #ffffff;
  border-left-color: var(--accent);
}
.nav-item.router-link-exact-active {
  background: rgba(77, 163, 255, 0.15);
  color: #ffffff;
  border-left-color: var(--accent);
}

/* 折叠时 nav-item 居中图标 */
.collapsed .nav-item {
  padding: 0.8rem;
  justify-content: center;
  border-left-color: transparent;
  border-radius: 8px;
}
.collapsed .nav-item:hover {
  border-left-color: transparent;
}
.collapsed .nav-item.router-link-exact-active {
  border-left-color: transparent;
  background: rgba(77, 163, 255, 0.2);
}

.nav-icon {
  width: 1.2rem;
  height: 1.2rem;
  flex-shrink: 0;
}
.nav-labels {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  overflow: hidden;
  transition: opacity 0.2s, max-width 0.3s;
  max-width: 200px;
  opacity: 1;
}
.collapsed .nav-labels {
  max-width: 0;
  opacity: 0;
}
.nav-label {
  font-size: 0.85rem;
  font-weight: 500;
}
.nav-label-en {
  font-size: 0.62rem;
  opacity: 0.55;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.nav-arrow {
  width: 0.9rem;
  height: 0.9rem;
  opacity: 0;
  flex-shrink: 0;
  transition: opacity 0.2s, transform 0.2s;
}
.nav-item:hover .nav-arrow {
  opacity: 0.6;
  transform: translateX(2px);
}
.collapsed .nav-arrow {
  display: none;
}

/* 底部 */
.sidebar-footer {
  width: 100%;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  overflow: hidden;
  max-height: 80px;
  opacity: 1;
  transition: max-height 0.3s ease, opacity 0.2s ease;
}
.collapsed .sidebar-footer {
  max-height: 0;
  opacity: 0;
  border-top-color: transparent;
  padding-top: 0;
}
.footer-location {
  font-size: 0.75rem;
  color: var(--text-sidebar);
  margin: 0 0 0.35rem;
  opacity: 0.65;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
}
.inline-icon {
  flex-shrink: 0;
}
.footer-coords {
  font-size: 0.62rem;
  color: var(--text-dim);
  margin: 0;
  opacity: 0.45;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

/* 移动端按钮（桌面隐藏） */
.mobile-menu-btn { display: none; }
.mobile-nav { display: none; }

/* ─── 响应式：移动端 ─────────────────────────────── */
@media (max-width: 767px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100% !important;
    height: auto;
    z-index: 100;
    overflow: visible;
    animation: none;
    transition: none;
  }

  .collapse-btn { display: none; }

  .sidebar-inner {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0.85rem 1.25rem;
    min-height: auto;
    gap: 0.85rem;
  }

  .sidebar-avatar {
    width: 38px !important;
    height: 38px !important;
    margin: 0;
    animation: none;
    border-width: 2px;
  }
  .avatar-text { font-size: 1rem !important; }

  .sidebar-profile {
    max-height: none !important;
    opacity: 1 !important;
    flex: 1;
    text-align: left;
  }
  .sidebar-name {
    font-size: 0.9rem;
    margin: 0;
    animation: none;
  }
  .sidebar-title { display: none; }

  .sidebar-divider,
  .sidebar-nav,
  .sidebar-footer {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    background: transparent;
    border: none;
    color: var(--text-sidebar);
    cursor: pointer;
    padding: 0.4rem;
  }
  .mobile-menu-btn svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
  .mobile-nav.open { max-height: 300px; }
  .mobile-nav-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.9rem 1.25rem;
    text-decoration: none;
    color: var(--text-sidebar);
    font-size: 0.85rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: background 0.2s, color 0.2s;
  }
  .mobile-nav-item:hover,
  .mobile-nav-item.router-link-exact-active {
    background: rgba(77, 163, 255, 0.15);
    color: #ffffff;
  }
}
</style>
