import { createApp } from 'vue'
import App from './App.vue'
import Simple from './Simple.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { path: '/a', component: Simple }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
createApp(App).use(router).mount('#app')
