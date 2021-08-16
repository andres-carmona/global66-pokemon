<template>
  <b-col md="6" class="pt-4">
    <b-input-group class="search-bar">
      <b-input-group-prepend class="px-2">
        <font-awesome-icon :icon="['fas', 'search']" />
      </b-input-group-prepend>
      <b-form-input placeholder="Search" @keyup="handleQuery" v-model="query"></b-form-input>
    </b-input-group>
  </b-col>
</template>
<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions("pokemonsStore", ["SET_QUERY"]),
    handleQuery() {
      this.SET_QUERY(this.query);
    },
  },
});
</script>
<style lang="scss">
.search-bar {
  box-shadow: 0px 2px 10px 0 #00000010;
  min-height: 40px;
}
.search-bar .input-group-prepend {
  border: none;
  background-color: #fff;
  display: flex;
  align-items: center;
  color: #bfbfbf;
}

.search-bar input {
  border: none;
  background-color: #fff;
  border-radius: 0;
  font-family: "Montserrat", sans-serif;
}
.search-bar input::placeholder {
  color: #bfbfbf;
}
.search-bar input:focus {
  background-color: #fff;
  border: none;
  box-shadow: none;
}
// .search-bar {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
//   -webkit-box-pack: left;
//   -ms-flex-pack: left;
//   justify-content: left;
//   background: #f3f4f6;
//   border: 1px solid #e5e7eb;
//   border-radius: 20px;
//   position: relative;
//   width: 230px;
//   height: 40px;
// }

// .search-bar input {
//   background: transparent;
//   border: 0;
//   color: #212121;
//   font-size: 0.8rem;
//   line-height: 2;
//   height: 100%;
//   outline: initial !important;
//   padding: 0.5rem 1rem;
//   width: calc(100% - 32px);
// }

// .search-bar .search-icon {
//   font-size: 18px;
//   width: 24px;
//   display: inline-block;
// }
</style>
