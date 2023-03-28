import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/index";

export default createRouter({
  routes: [
    {
      path: "",
      redirect: "/eChart",
    },
    {
      path: "/eChart",
      name: "eChart",
      component: Home.Echart,
    },
    {
      path: "/404",
      name: "404",
      component: Home.Nofind,
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
  ],
  history: createWebHashHistory(),
});
