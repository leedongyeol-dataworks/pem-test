
import { createWebHashHistory, createRouter } from "vue-router";
import Default from '@/components/default/DefaultLayout';

const routes = [
    {
        path: "/",
        name: "index", 
        redirect: '/login'
      },
      {
        path: "/login",
        name: "login",
        component: () => import('@/components/common/DemoLogin')
      },
      {
        path: "/main",
        name: "main",
        meta: {layout: Default},
        component: () => import('@/components/common/DemoMain')
      },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;

