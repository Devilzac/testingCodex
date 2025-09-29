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
