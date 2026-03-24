<script setup>
// 工作经历
const experiences = [
  {
    company: '某科技有限公司 / Tech Co., Ltd.',
    role: '高级前端工程师 / Senior Frontend Developer',
    period: '2022.03 — 至今 / Present',
    location: '上海 / Shanghai',
    points: [
      '主导公司核心产品前端架构重构，将页面加载速度提升 40%',
      '带领 3 人前端小组，推动组件库建设，复用率提升至 70%',
      '与产品、设计、后端紧密协作，按时交付多个重点项目',
      'Led frontend architecture refactor of core product, improving load speed by 40%',
      'Managed a 3-person frontend team, built component library with 70% reuse rate',
    ],
  },
  {
    company: '某互联网公司 / Internet Company',
    role: '前端开发工程师 / Frontend Developer',
    period: '2019.07 — 2022.02',
    location: '北京 / Beijing',
    points: [
      '参与多个 B 端管理系统开发，使用 Vue 2/3 + Element UI',
      '负责移动端 H5 页面开发，适配主流机型',
      'Developed multiple B2B management systems using Vue 2/3 + Element UI',
      'Built mobile H5 pages with cross-device compatibility',
    ],
  },
]
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm p-8">
    <h2 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
      <span class="w-1 h-6 bg-blue-500 rounded-full inline-block"></span>
      工作经历 / Experience
    </h2>
    <div class="space-y-8">
      <div v-for="exp in experiences" :key="exp.company" class="relative pl-6 border-l-2 border-gray-100">
        <!-- 时间轴圆点 -->
        <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow"></div>

        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <div>
            <h3 class="text-base font-bold text-gray-900">{{ exp.role }}</h3>
            <p class="text-sm text-blue-600 font-medium">{{ exp.company }}</p>
          </div>
          <div class="text-right text-sm text-gray-500 shrink-0">
            <p>{{ exp.period }}</p>
            <p>{{ exp.location }}</p>
          </div>
        </div>

        <ul class="mt-3 space-y-1">
          <li
            v-for="(point, i) in exp.points"
            :key="i"
            class="text-sm text-gray-600 flex items-start gap-2"
          >
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
