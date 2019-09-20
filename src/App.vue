<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
/***import Navigation from "@/components/Navigation"; ***/
import Navbar from "./components/Navbar";
export default {
  name: "app",
  components: {
    /**"nav-menu": Navigation, **/
    "navbar": Navbar,
  }
};
</script>

<style></style>
