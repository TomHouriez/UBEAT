<template>
  <li class="artistAlbumCard">
    <router-link
      :to="{ name: 'Album', params: { id: id } }"
      class="albumContainer"
    >
      <img :src="image" />
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["title", "artists", "genre", "image", "id", "artistId"]
};
</script>

<style scoped>
.artistAlbumCard {
  min-width: 200px;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

a {
  color: rgb(54, 54, 54);
}

a:hover {
  color: rgba(214, 38, 61, 0.882);
}
</style>
