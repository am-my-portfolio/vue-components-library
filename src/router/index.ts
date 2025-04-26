import { createRouter, createWebHistory } from "vue-router";

const Landing = () => import("@/views/common/LandingPage.vue");
const NotFoundPage = () => import("@/views/common/NotFound.vue");

const static_routes = [
  {
    path: "/",
    name: "LandingPage",
    component: Landing,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundPage,
  },
];

const routes = [...static_routes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
