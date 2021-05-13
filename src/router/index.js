import {createRouter,createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component:() => import('@/views/login/index.vue')
    },
    {
      path: '/',
      name: 'home',
      component:() => import('@/views/home/index.vue')
    },
    {
      path: '/404',
      name: '404',
      component:() => import('@/views/404.vue')
    }
  ]
})
router.beforeEach((to,from,next) => {

  next()
})
export default router