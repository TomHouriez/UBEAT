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

<style>
#app {
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  height: 100vh;
  overflow: hidden;
}
</style>
