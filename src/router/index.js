import { createRouter, createWebHistory } from 'vue-router'
import AddList from '../views/AddList.vue'
import DelForm from '../views/DelForm.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: AddList
  },
  {
    path: '/del/:no',
    name: 'dle',
    component: DelForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
