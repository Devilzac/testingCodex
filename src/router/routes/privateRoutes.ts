import type { RouteRecordRaw } from 'vue-router';

/**
 * Routes that require the user to be authenticated before access.
 */
const privateRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/UsersView.vue'),
    meta: { requiresAuth: true }
  }
];

export default privateRoutes;
