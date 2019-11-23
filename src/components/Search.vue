<template>
  <div>
    <h1>Albums</h1>
    <div class="albumsContainer">
      <artistAlbumCard
        v-for="album in albums.results"
        v-bind:key="album.collectionId"
        :id="album.collectionId"
        :title="album.collectionName"
        :year="album.releaseDate.substring(0, 4)"
        :image="album.artworkUrl100.replace('100x100', '100x100')"
      >
      </artistAlbumCard>
    </div>

    <h1>Tracks</h1>
    <!--  @play-track="playTrack" -->
    <div class="tracksContainer">
      <TrackCard
        v-for="aSong in tracks.results"
        v-bind:key="aSong.trackId"
        :trackName="aSong.trackName"
        :trackId="aSong.trackId"
        :primaryGenreName="aSong.primaryGenreName"
        :artistId="aSong.artistId"
        :artistName="aSong.artistName"
        :image="aSong.artworkUrl100"
        :trackData="aSong"
      >
      </TrackCard>
    </div>

    <h1>Users</h1>
    <div class="userContainer">
      <UserCard
        v-for="aUser in users"
        v-bind:key="aUser.email"
        :userData="aUser"
      >
      </UserCard>
    </div>
  </div>
</template>

<script>
import { searchWithType } from "../scripts/SearchApi";

import ArtistAlbumCard from "./ArtistAlbumCard";
import TrackCard from "./TrackCard";
import UserCard from "./UserCard";

export default {
  components: {
    ArtistAlbumCard: ArtistAlbumCard,
    TrackCard: TrackCard,
    UserCard: UserCard
  },
  data() {
    return {
      searchInput: "",
      filters: [],

      artists: [],
      albums: [],
      tracks: [],
      users: []
    };
  },
  created() {
    this.search();
    this.$parent.$on("searchApp", this.search);
  },
  methods: {
    async search() {
      let searchInput = localStorage.getItem("searchInput");
      let filters = localStorage.getItem("filters").split(",");

      this.artists = [];
      this.albums = [];
      this.tracks = [];
      this.users = [];

      if (filters.length > 0) {
        filters.forEach(async aFilter => {
          this[aFilter] = await searchWithType(aFilter, searchInput, 10);
        });
      }
    }
  }
};
</script>

<style scoped>
.tracksContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.albumsContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
}
.artistAlbumCard {
  max-width: 300px;
  padding: 1rem;
  text-align: center;
}
</style>
