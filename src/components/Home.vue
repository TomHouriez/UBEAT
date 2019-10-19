<template>
  <div class="componentPage">
    <section>
      <div class="titleContainer">
        <h1 class="sectionTitle">Top Albums</h1>
      </div>
      <div class="firstContainer">
        <div class="albumContainer">
          <AlbumCard
            v-for="anAlbum in topAlbums"
            v-bind:key="anAlbum.collectionId"
            :id="anAlbum.collectionId"
            :artists="anAlbum.artistName"
            :title="anAlbum.collectionName"
            :genre="anAlbum.primaryGenreName"
            :image="anAlbum.artworkUrl100"
          >
          </AlbumCard>

          <div class="fakeAlbumCard"></div>
          <div class="fakeAlbumCard"></div>
          <div class="fakeAlbumCard"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="titleContainer">
        <h1 class="sectionTitle">Top Tracks</h1>
      </div>
      <div class="secondContainer">
        <div class="artistContainer">
          <TrackCard
            v-for="aSong in topSongs"
            v-bind:key="aSong.trackName"
            :trackName="aSong.trackName"
            :trackId="aSong.trackId"
            :primaryGenreName="aSong.primaryGenreName"
            :image="aSong.artworkUrl100"
          >
          </TrackCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AlbumCard from "@/components/AlbumCard";
import TrackCard from "@/components/TrackCard";

import { fetchTopAlbums, fetchTopTracks } from "../scripts/HomeTopsApi";

export default {
  components: {
    AlbumCard: AlbumCard,
    TrackCard: TrackCard
  },
  data() {
    return {
      topAlbums: [],
      topSongs: []
    };
  },
  async created() {
    this.topAlbums = await fetchTopAlbums();
    this.topSongs = await fetchTopTracks();
    console.log(this.topSongs);
  }
};
</script>

<style scoped>
componentPage {
  width: 100%;
}

/* Section Title */
.titleContainer {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  font-size: xx-large;
  padding-top: 20px;
}

/* Albums */
.firstContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.albumContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
}
.fakeAlbumCard {
  height: 1px;
  min-width: 320px;
  max-width: 500px;
  flex: 1;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-basis: 0;
}

/* Artist */
.secondContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.artistContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
  flex: 1;
}
</style>
