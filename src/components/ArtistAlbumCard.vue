<template>
  <li class="artistAlbumCard">
    <router-link
      :to="{ name: 'Album', params: { id: id } }"
      class="albumContainer"
    >
      <figure>
        <img :src="image" />
        <figcaption>{{ title }} ({{ year }})</figcaption>
      </figure>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["title", "year", "image", "id"]
};
</script>

<style scoped></style>
