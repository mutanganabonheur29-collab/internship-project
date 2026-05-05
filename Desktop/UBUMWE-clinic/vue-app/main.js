import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Registration from './views/Registration.vue'
import Management from './views/Management.vue'
import Appointment from './views/Appointment.vue'
import Reports from './views/Reports.vue'
import Settings from './views/Settings.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/registration', component: Registration },
  { path: '/management', component: Management },
  { path: '/appointment', component: Appointment },
  { path: '/reports', component: Reports },
  { path: '/settings', component: Settings }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
