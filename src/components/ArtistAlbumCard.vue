<template>
  <div class="artistAlbumCard">
    <router-link
      :to="{ name: 'Album', params: { id: id } }"
      class="albumContainer"
    >
      <figure>
        <img class="albumImage" :src="image" />
        <figcaption>{{ title }} ({{ year }})</figcaption>
      </figure>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["title", "year", "image", "id"]
};
</script>

<style scoped>
a {
  color: rgb(54, 54, 54);
}

a:hover {
  color: rgba(214, 38, 61, 0.882);
}

.artistAlbumCard figure > img:hover {
  opacity: 0.7;
}
</style>
