<template>
  <router-link to="/artist" class="songCard">
    <figure>
      <img :src="image" alt="Ramdom Accees Memory album cover" />
      <figcaption>{{ trackName }}</figcaption>
    </figure>
  </router-link>
</template>

<script>
export default {
  props: ["trackName", "artistName", "image", "trackId", "primaryGenreName"]
};
</script>

<style scoped>
.songCard {
  margin: 10px;
}

figure {
  margin: 10px;
  max-width: 350px;
  overflow: hidden;
  text-align: center;
}

figure > img {
  /* border: 1px solid black; */
  border-radius: 3%;
  /* box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3); */
  max-width: 200px;
  margin: 0;
  padding: 0;
}

figure img:hover {
  opacity: 0.7;
  cursor: pointer;
}

figure > figcaption {
  /* text-shadow: 1px 1px 3px gray; */
  color: black;
  max-width: 200px;
  display: -webkit-box;
  line-height: 25px;
  max-height: 55px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
