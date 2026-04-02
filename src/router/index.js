import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Portfolio from '../views/Portfolio.vue'
import Diary from '../views/Diary.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/resume', component: Resume },
    { path: '/portfolio', component: Portfolio },
    { path: '/diary', component: Diary },
  ],
})
