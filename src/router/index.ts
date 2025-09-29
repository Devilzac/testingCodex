import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';

/**
 * Complete set of routes available in the application.
 */
const routes: RouteRecordRaw[] = [
  ...publicRoutes,
  ...privateRoutes
];

/**
 * Vue Router instance configured with history mode and app routes.
 */
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
