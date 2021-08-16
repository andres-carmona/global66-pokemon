<template>
  <div>
    <b-row>
      <b-col>
        <b-row align-h="center">
          <search-bar></search-bar>
        </b-row>
        <b-row>
          <b-col>
            <detail-list
              :handleSetFavorite="handleFavorite"
              :handleViewDetail="handleView"
            ></detail-list>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <springboard />
    <detail-modal
      modal-id="detailModal"
      :pokemon="selectedPokemon"
      :isFavorite="selectedIsFavorite"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchBar from "@/views/Pokedex/components/SearchBar.vue";
import DetailList from "@/views/Pokedex/components/DetailList.vue";
import Springboard from "@/views/Pokedex/components/Springboard.vue";
import DetailModal from "@/views/Pokedex/components/DetailModal.vue";
import { mapActions } from "vuex";
import { IPokemon, IPokemonListItem } from "@/schema/types";
import { ActionsTypes } from "@/store/actions";
export default Vue.extend({
  components: {
    SearchBar,
    DetailList,
    Springboard,
    DetailModal,
  },
  data() {
    return {
      selectedPokemon: null as IPokemon | null,
      selectedIsFavorite: false,
    };
  },
  methods: {
    ...mapActions("pokemonsStore", {
      SET_FAVORITE: ActionsTypes.SET_FAVORITE,
      GET_SINGLE_POKEMON: ActionsTypes.GET_SINGLE_POKEMON,
    }),
    handleFavorite: function (pokemon: IPokemonListItem) {
      this.SET_FAVORITE(pokemon);
    },
    handleView(selectedItem: IPokemonListItem) {
      this.GET_SINGLE_POKEMON({ url: selectedItem.url }).then((result: IPokemon) => {
        this.selectedPokemon = result;
        this.selectedIsFavorite = selectedItem.isFavorite;
        this.$nextTick(() => {
          this.$bvModal.show("detailModal");
        });
      });
    },
  },
});
</script>
