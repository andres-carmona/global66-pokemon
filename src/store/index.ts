import Vue from "vue";
import Vuex, { Store } from "vuex";
Vue.use(Vuex);

import pokemonsStore from "./modules/pokemons-store";

const store = new Store({
  modules: {
    pokemonsStore,
  },
});

export default store;
