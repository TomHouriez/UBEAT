<template>
  <div class="artistCardContainer">
    <figure>
      <router-link
        :to="{ name: 'Artist', params: { id: artistData.artistId } }"
      >
        <img
          :src="artistData.strArtistThumb"
          alt="Ramdom Accees Memory album cover"
        />
      </router-link>
      <router-link
        :to="{ name: 'Artist', params: { id: artistData.artistId } }"
      >
        <a class="artistName">{{ artistData.artistName }}</a>
      </router-link>
    </figure>
  </div>
</template>

<script>
export default {
  props: ["artistData"]
};
</script>

<style scoped>
.artistCardContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 260px;
  height: 260px;
  align-content: center;
  text-align: center;
}

figure {
  margin: 10px;
  width: 200px;
  overflow: hidden;
  align-content: center;
  text-align: center;
}

figure > img {
  border-radius: 3%;
  max-width: 200px;
  margin: 0;
  padding: 0;
}

figure > figcaption {
  color: black;
  display: -webkit-box;
  font-weight: bold;
  line-height: 25px;
  max-height: 25px;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
}

.artistName {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 25px;
  max-height: 25px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

a {
  color: rgb(54, 54, 54);
}

a:hover {
  color: rgba(214, 38, 61, 0.882);
}
</style>
