<template>
  <div class="mb-5">
    <img :src="pikachuImg" alt="" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PikachuImg from "@/assets/images/pikachu.png";
export default Vue.extend({
  data() {
    return {
      pikachuImg: PikachuImg,
    };
  },
});
</script>
