<template>
  <b-modal :id="modalId" hide-footer hide-header centered>
    <template #default>
      <b-row class="h-40 fieldBg m-0" align-v="center" align-h="center">
        <img :src="pokemonImage" alt="" class="poke-img" />
      </b-row>
      <b-row align-h="center">
        <b-col class="pt-3">
          <b-row align-h="center">
            <b-col cols="10">
              <p><strong>Name: </strong>{{ uppercaseName(pokemon.name) }}</p>
              <hr />
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col cols="10">
              <p><strong>Weight: </strong>{{ pokemon.weight }}</p>
              <hr />
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col cols="10">
              <p><strong>Height: </strong>{{ pokemon.height }}</p>
              <hr />
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col cols="10">
              <p><strong>Types: </strong>{{ pokemonTypes }}</p>
              <hr />
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col cols="8">
              <b-row align-h="center">
                <b-button variant="primary" pill @click.prevent="shareData">
                  Share to my friends
                </b-button>
              </b-row>
            </b-col>
            <b-col cols="2">
              <b-row align-h="center">
                <b-avatar
                  button
                  class="align-center"
                  variant="light"
                  :class="isFavorite ? 'favorite' : ''"
                >
                  <font-awesome-icon :icon="['fas', 'star']" />
                </b-avatar>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </template>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import { stringFirstUppercase } from "@/utils/string-casing";
import { IPokemon } from "@/schema/types";
export default Vue.extend({
  props: {
    modalId: {
      type: String,
      required: true,
    },
    pokemon: {
      type: Object as () => IPokemon,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      payload: this.pokemon
        ? { ...this.pokemon }
        : {
            height: 0,
            weight: 0,
            name: "",
            types: [],
          },
    };
  },
  computed: {
    pokemonImage() {
      return this.pokemon.sprites.other["official-artwork"].front_default;
    },
    pokemonTypes() {
      let types: string[] = [];
      this.pokemon.types.forEach((type) => {
        types.push(this.uppercaseName(type.type.name));
      });
      return types.join(", ");
    },
  },
  methods: {
    uppercaseName(name: string) {
      return stringFirstUppercase(name);
    },
    shareData() {
      navigator.clipboard.writeText(
        `Name: ${this.uppercaseName(this.pokemon.name)}, Weight: ${this.pokemon.weight}, Height: ${
          this.pokemon.height
        }, Types: ${this.pokemonTypes}`
      );
    },
  },
});
</script>

<style lang="scss">
.modal-body {
  padding: 0px;
  padding-bottom: 10px;
}
.fieldBg {
  background-image: url("/img/field.png");
  height: 200px;
}
.poke-img {
  max-width: 70%;
  max-height: 100%;
  width: auto;
}
.modal-body p {
  font-size: 20px;
}
</style>
