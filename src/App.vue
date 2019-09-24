<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
//import Navbar from "./components/Navbar";
export default {
  name: "app",
  components: {
  "navbar": Navigation, 
  //"navbar": Navbar,
  }
};
</script>

<style></style>
