// import { createWebHashHistory, createRouter } from "vue-router";
// import Default from '@/components/default/DefaultLayout2';

// const routes = [
//     {
//         path: "/",
//         name: "index", 
//         redirect: '/login'
//       },
//       {
//         path: "/login",
//         name: "login",
//         component: () => import('@/components/common/DemoLogin')
//       },
//       {
//         path: "/main",
//         name: "main",
//         meta: {layout: Default},
//         component: () => import('@/components/common/DemoMain2')
//       },
//       {
//         path: "/temp",
//         name: "temp",
//         meta: {layout: Default},
//         component: () => import('@/components/temporary/temPorary')
//       },
// ]

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

