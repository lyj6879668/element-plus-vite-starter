import {createRouter,createWebHashHistory} from 'vue-router'
import Layout from '@/layout/index.vue'
import { getToken } from "@/utils/storage/cookie";
import NProgress from "@/utils/progress";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'login'
      },
      component:() => import('@/views/login/index.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: '/welcome',
      meta: {
        title: 'home'
      },
      children: [{
        path: '/welcome',
        name: 'welcome',
        component:() => import('@/views/home/index.vue')
      }]
    },

    {
      path: '/list',
      name: 'list',
      component: Layout,
      redirect: '/test',
      meta: {
        title: 'home'
      },
      children: [{
        path: '/test',
        name: 'test',
        component:() => import('@/views/list/index.vue')
      }]
    },
    {
      path: '/404',
      name: '404',
      meta: {
        title: '404'
      },
      component:() => import('@/views/404.vue')
    }
  ]
})

const whiteList = ["/login"];

router.beforeEach((to,from,next) => {
  NProgress.start();
  document.title = to.meta.title || '';
  whiteList.indexOf(to.path) !== -1 || getToken()
    ? next()
    : next("/login"); // 全部重定向到登录页
});
router.afterEach(() => {
  NProgress.done()
})
export default router