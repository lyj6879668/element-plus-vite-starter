import {createRouter,createWebHashHistory} from 'vue-router'
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
      meta: {
        title: 'home'
      },
      component:() => import('@/views/home/index.vue')
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