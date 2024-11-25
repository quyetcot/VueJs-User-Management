import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'list',
    component: () => import('@/views/ListUser.vue')
  },
  {
    path: '/user/create',
    name: 'create',
    component: () => import('@/views/AddUser.vue')
  },
  {
    path: '/user/update/:id',
    name: 'update',
    component: () => import('@/views/UpdateUser.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
