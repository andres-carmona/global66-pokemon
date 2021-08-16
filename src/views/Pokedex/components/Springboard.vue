<template>
  <div class="springboard-container fixed-bottom">
    <div class="container h-100">
      <b-row align-h="center" align-v="center" class="h-100">
        <b-col md="6">
          <b-row align-h="around" align-v="center">
            <b-col cols="5">
              <b-row>
                <b-button
                  :variant="filter === 'all' ? 'primary' : 'dark'"
                  pill
                  class="w-40"
                  @click.prevent="changeFilter('all')"
                >
                  <font-awesome-icon :icon="['fas', 'list']" class="mx-2" />All
                </b-button>
              </b-row>
            </b-col>
            <b-col cols="5">
              <b-row>
                <b-button
                  :variant="filter === 'fav' ? 'primary' : 'dark'"
                  pill
                  class="w-40"
                  @click.prevent="changeFilter('fav')"
                >
                  <font-awesome-icon :icon="['fas', 'star']" class="mx-2" />Favorites
                </b-button>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script lang="ts">
import { ActionsTypes } from "@/store/actions";
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
export default Vue.extend({
  computed: {
    ...mapGetters("pokemonsStore", ["filter"]),
  },
  methods: {
    ...mapActions("pokemonsStore", {
      SET_FILTER: ActionsTypes.SET_FILTER,
    }),
    changeFilter(filter: string) {
      this.SET_FILTER(filter);
    },
  },
});
</script>
<style lang="scss">
.springboard-container {
  background-color: white;
  width: 100%;
  height: 100px;
  box-shadow: 0px -2px 10px 0 #00000010;
}
</style>
