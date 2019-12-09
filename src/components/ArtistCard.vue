<template>
  <div class="artistCardContainer">
    <h1>An Artist</h1>
    <p>{{ artistId }}</p>
  </div>
</template>

<script>
import { getArtistInfos } from "../scripts/ArtistsApi";
export default {
  props: ["artistId"],
  data() {
    return {
      artistData: {}
    };
  },
  async created() {
    // this.artistData = await getArtistInfos(this.$props.artistId);
    // await console.log(this.artistData);
    console.log("coucou");
  }
};
</script>

<style>
.artistCardContainer {
  display: block;
  margin: 20px;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  text-align: center;
}
</style>
