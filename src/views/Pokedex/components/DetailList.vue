<template>
  <div>
    <ul class="mt-4 pt-1 px-0 pokemon-list" v-if="list.length > 0">
      <li v-for="pokemon in list" :key="pokemon.name" class="mb-2">
        <div @click.prevent="handleViewDetail(pokemon)" class="w-100">
          <h3 class="mb-0">{{ uppercaseName(pokemon.name) }}</h3>
        </div>
        <b-avatar
          button
          class="align-center"
          variant="light"
          :class="pokemon.isFavorite ? 'favorite' : ''"
          @click.prevent="handleSetFavorite(pokemon)"
        >
          <font-awesome-icon :icon="['fas', 'star']" />
        </b-avatar>
      </li>
    </ul>
    <div v-else class="text-center pt-5">
      <h1 class="mb-3">Uh-oh!</h1>
      <h5>You look lost on your journey</h5>
      <b-button variant="primary" pill class="mt-4" @click.prevent="$router.go(-1)">
        Go back home</b-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { stringFirstUppercase } from "@/utils/string-casing";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: {},
  props: {
    handleSetFavorite: {
      type: Function,
      required: true,
    },
    handleViewDetail: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ...mapGetters("pokemonsStore", ["allItems", "allFavorites", "loading", "filter"]),
    list() {
      return this.filter === "all" ? this.allItems : this.allFavorites;
    },
  },
  methods: {
    uppercaseName(name: string) {
      return stringFirstUppercase(name);
    },
  },
});
</script>
<style lang="scss">
.pokemon-list {
  padding-bottom: 100px;
}
.pokemon-list li {
  list-style: none;
  background-color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px !important;
}

.pokemon-list li .btn {
  color: #bfbfbf;
  font-size: 1.4rem;
}

.pokemon-list li .btn:focus {
  box-shadow: none;
}

.btn.favorite {
  color: #eca539 !important;
}
</style>
