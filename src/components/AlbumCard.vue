<template>
  <div class="albumCard">
    <router-link
      :to="{ name: 'Album', params: { id: id } }"
      class="imageContainer"
    >
      <img :src="image.replace('100x100', '200x200')" />
    </router-link>

    <div class="albumDescription">
      <router-link :to="{ name: 'Album', params: { id: id } }" class="">
        <p class="collectionName">{{ title }}</p>
      </router-link>

      <router-link :to="{ name: 'Artist', params: { id: artistId } }" class="">
        <p class="artistName">{{ artists }}</p>
      </router-link>
      <p class="genreName">{{ genre }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "artists", "genre", "image", "id", "artistId"]
};
</script>

<style scoped>
.albumCard {
  min-width: 320px;
  max-width: 500px;
  flex: 1;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: fit-content;
  background-color: lightgray;
  flex-basis: 0;
}
/* image */
.imageContainer {
  min-width: 150px;
  flex: 2;
  display: flex;
  justify-content: flex-start;
  flex-direction: flex-start;
}

.imageContainer > img {
  width: 150;
  height: 150px;
  cursor: pointer;
}

.imageContainer > img:hover {
  opacity: 0.7;
  cursor: pointer;
}
/* Description */
.albumDescription {
  flex: 3;
  padding: 20px;
  min-width: 150px;
  /* background-color: lightgray; */
}
.collectionName {
  font-size: medium;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 25px;
  max-height: 55px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.artistName {
  font-size: medium;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 25px;
  max-height: 55px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.genreName {
  font-size: small;
}

a {
  color: rgb(54, 54, 54);
}

a:hover {
  color: rgba(214, 38, 61, 0.882);
}
</style>
