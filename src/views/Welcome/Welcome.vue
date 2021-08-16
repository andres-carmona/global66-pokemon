<template>
  <b-row align-v="center" align-h="center" class="vh-100">
    <b-col cols="11" sm="8" class="text-center">
      <b-row>
        <pikachu-img></pikachu-img>
      </b-row>
      <b-row>
        <h3 class="mb-4">Welcome to Pokédex</h3>
      </b-row>
      <b-row>
        <p class="mb-5">
          The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the
          Pokémon world.
        </p>
      </b-row>
      <b-row>
        <b-col>
          <b-button pill variant="primary" @click.prevent="queryPokemons()"> Get started </b-button>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { ActionsTypes } from "@/store/actions";
import Vue from "vue";
import { mapActions } from "vuex";
import PikachuImg from "./components/Pikachu.vue";
export default Vue.extend({
  name: "Welcome",
  components: {
    PikachuImg,
  },
  methods: {
    ...mapActions("pokemonsStore", {
      GET_POKEMONS: ActionsTypes.GET_POKEMONS,
    }),
    queryPokemons() {
      this.GET_POKEMONS({ limit: 1200 }).then(() => {
        this.$router.push("/pokedex");
      });
    },
  },
});
</script>
