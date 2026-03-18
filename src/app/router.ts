import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import {ROUTES_NAMES} from "./router-names.ts";
import AppHome from "../pages/Home/AppHome.vue";

const routes: RouteRecordRaw[] = [
  { path: '/', component: AppHome, name: ROUTES_NAMES.HOME },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
