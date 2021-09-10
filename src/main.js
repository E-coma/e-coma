import { createApp } from 'vue'
import App from './App.vue'
import Home from './mitame/Home.vue'
import Profile from './mitame/Profile.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
createApp(App).use(router).mount('#app')
