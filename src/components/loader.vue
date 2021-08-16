<template>
  <div class="loader" :style="display ? '' : 'display: none;'">
    <div class="loading">
      <img src="/img/loader.png" class="" alt="logo" style="max-height: 80px" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    display: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.loader {
  background-color: white;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  position: absolute;
  z-index: 999999;
}
</style>
