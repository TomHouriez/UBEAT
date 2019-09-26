<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "app",
  components: {
  "navbar": Navigation,
  }
};
</script>

<style></style>
