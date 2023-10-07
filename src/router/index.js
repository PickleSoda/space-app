import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        meta: {
          title: "Space",
          requiresAuth: true,
        },
        path: "/",
        name: "Home",
        component: () => import("@/views/main.vue"),
      },
      {
        meta: {
          title: "Space",
          requiresAuth: true,
        },
        path: "/earth",
        name: "earth",
        component: () => import("@/views/earth.vue"),
      },
      {
        meta: {
          title: "Forms",
          requiresAuth: true,
        },
        path: "/forms",
        name: "forms",
        component: () => import("@/views/FormsView.vue"),
      },

  {
    meta: {
      title: "Error",
      requiresAuth: false,
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/ErrorView.vue"),
  },
  {
    path: "/:catchAll(.*)", // Use a parameter with a custom regexp to define the catch-all route
    redirect: "/error",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});
export default router;