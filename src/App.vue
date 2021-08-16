<template>
  <b-container>
    <router-view />
    <loader-component :display="showLoader" />
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import LoaderComponent from "@/components/loader.vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: {
    LoaderComponent,
  },
  computed: {
    ...mapGetters("pokemonsStore", ["loading"]),
    showLoader() {
      return this.loading;
    },
  },
});
</script>
