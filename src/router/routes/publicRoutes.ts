import type { RouteRecordRaw } from 'vue-router';

/**
 * Routes that are accessible without authentication.
 */
const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: { requiresAuth: false }
  }
];

export default publicRoutes;
