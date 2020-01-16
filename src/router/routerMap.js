import Home from "@/views/Home.vue";
export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showNav: true
    }
  },
  {
    path: "/page",
    name: "Page",
    component: () => import("@/views/page/index.vue"),
    meta: {
      showNav: true
    }
  },
  {
    path: "/single",
    name: "Single",
    component: () => import("@/views/single/index.vue"),
    meta: {
      showNav: true
    }
  }
];
