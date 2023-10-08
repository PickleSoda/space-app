import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    meta: {
      title: "Space",
    },
    path: "/",
    name: "Home",
    component: () => import("@/views/main.vue"),
  },
  {
    meta: {
      title: "planet",
      requiresAuth: true,
    },
    path: "/planet/:id",
    name: "planet",
    component: () => import("@/views/planet.vue"),
    props: (route) => ({
      id: route.params.id ? parseInt(route.params.id) : 2,
      query: route.query,
    }),
  },
  {
    meta: {
      title: "reciept",
    },
    path: "/reciept",
    name: "reciept",
    component: () => import("@/views/stats.vue"),
    props: (route) => ({ query: route.query }),
  },
  {
    meta: {
      title: "quiz",
    },
    path: "/quiz",
    name: "quiz",
    component: () => import("@/views/shit.vue"),
  },

    {
      meta: {
        title: "Error",
        requiresAuth: false,
      },
      path: "/error",
      name: "error",
      component: () => import("@/views/error.vue"),
    },
    {
      path: "/:catchAll(.*)", // Use a parameter with a custom regexp to define the catch-all route
      redirect: "/error",
    },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});
export default router;
