<template>
  <div id="app">
    <b-button v-if="this.$cookies.get('token')" v-on:click="$router.go(-1)"
      >Back</b-button
    >
    <navbar v-if="this.$cookies.get('token')" @search="search"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "app",
  components: {
    navbar: Navigation
  },
  methods: {
    search() {
      this.$router.push("/search", () => {});
      this.$emit("searchApp");
    }
  }
};
</script>

<style></style>
