import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

// Views
import WelcomeView from "@/views/Welcome/Welcome.vue";
import PokedexView from "@/views/Pokedex/Pokedex.vue";

const routes: RouteConfig[] = [
  {
    path: "/",
    component: WelcomeView,
  },
  {
    path: "/pokedex",
    component: PokedexView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.afterEach(() => {
  const preLoader = document.getElementById("loading_wrap");
  if (preLoader) preLoader.style.display = "none";
});

export default router;
