import { createApp } from 'vue'
import App from './App.vue'
import Home from './mitame/Home.vue'
import Profile from './mitame/Profile.vue'
import Webdesign from './mitame/Webdesign.vue'
import Gallery from './mitame/Gallery.vue'
import Contact from './mitame/Contact.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/webdesign', component: Webdesign },
  { path: '/photos', component: Gallery },
  { path: '/contact', component: Contact }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
createApp(App).use(router).mount('#app')
