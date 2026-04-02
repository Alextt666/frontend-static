<script setup>
import { ref, onMounted } from 'vue'

// 个人基本信息
const info = {
  name: '张三',
  nameEn: 'Zhang San',
  title: '前端开发工程师',
  titleEn: 'Frontend Developer',
  email: 'zhangsan@example.com',
  phone: '+86 138-0000-0000',
  location: '上海，中国',
  github: 'github.com/zhangsan',
  linkedin: 'linkedin.com/in/zhangsan',
}
</script>

<template>
  <div class="cyber-card">
    <div class="flex flex-col md:flex-row md:items-start gap-8">

      <!-- 头像 -->
      <div class="avatar-wrapper shrink-0">
        <div class="avatar-circle">
          <span class="avatar-text">{{ info.name.charAt(0) }}</span>
        </div>
      </div>

      <!-- 文字区域 -->
      <div class="flex-1">
        <!-- 名字 -->
        <h1 class="text-3xl md:text-4xl font-bold mb-1" style="color: var(--text-primary);">
          {{ info.name }}
        </h1>
        <p class="text-lg md:text-xl mb-1" style="color: var(--text-muted);">
          {{ info.nameEn }}
        </p>

        <!-- 职位 -->
        <p class="text-base md:text-lg font-medium mt-3 mb-6" style="color: var(--accent);">
          {{ info.title }} / {{ info.titleEn }}
        </p>

        <!-- 联系方式 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            :href="`mailto:${info.email}`"
            class="contact-item"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span class="text-sm">{{ info.email }}</span>
          </a>

          <div class="contact-item">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span class="text-sm">{{ info.phone }}</span>
          </div>

          <div class="contact-item">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="text-sm">{{ info.location }}</span>
          </div>

          <a
            :href="`https://${info.github}`"
            target="_blank"
            class="contact-item"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span class="text-sm">{{ info.github }}</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* 头像容器 */
.avatar-wrapper {
  width: 96px;
  height: 96px;
}

.avatar-circle {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-light), #d5daf5);
  border: 3px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
}

.avatar-text {
  font-size: 2rem;
  font-weight: 900;
  color: var(--accent);
}

/* 联系方式条目 */
.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  transition: color 0.2s ease;
  cursor: pointer;
}
.contact-item:hover {
  color: var(--accent);
}
.contact-item svg {
  flex-shrink: 0;
}
</style>
