<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
=======
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';

const routes: RouteRecordRaw[] = [
  ...publicRoutes,
  ...privateRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
>>>>>>> 800bf29e063ee72cf4842e0d8e7a7c72bbdba1e2
