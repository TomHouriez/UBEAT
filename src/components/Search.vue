<template>
  <div>
    <p class="sectionHeader" v-if="isFilterActive('albums')">Albums:</p>
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

    <p class="sectionHeader" v-if="isFilterActive('tracks')">Tracks:</p>
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

    <p class="sectionHeader" v-if="isFilterActive('artists')">Artists:</p>
    <!-- to do -->
    <div class="artistContainer">
      <ArtistCard
        v-for="anArtist in artists"
        v-bind:key="anArtist.artistId"
        :artistId="anArtist.artistId"
      >
      </ArtistCard>
    </div>

    <p class="sectionHeader" v-if="isFilterActive('users')">Users:</p>
    <div class="userContainer">
      <UserCard
        v-for="aUser in users"
        v-bind:key="aUser.email"
        :userData="aUser"
        :showButton="true"
      >
      </UserCard>
    </div>
  </div>
</template>

<script>
import { searchWithType, searchArtists } from "../scripts/SearchApi";
import { getArtistInfos } from "../scripts/ArtistsApi";
import { getToken, getTokenInfo } from "../scripts/Config";

import ArtistAlbumCard from "./ArtistAlbumCard";
import TrackCard from "./TrackCard";
import ArtistCard from "./ArtistCard";
import UserCard from "./UserCard";

export default {
  components: {
    ArtistAlbumCard: ArtistAlbumCard,
    TrackCard: TrackCard,
    UserCard: UserCard,
    ArtistCard: ArtistCard
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
          if (aFilter != "artists") {
            this[aFilter] = await searchWithType(aFilter, searchInput, 10);
          }
        });
      }

      await this.filterUsers();

      if (filters.length > 0) {
        filters.forEach(async aFilter => {
          if (aFilter == "artists") {
            this.artists = [];
            await this.filterArtists();
          }
        });
      }
    },
    isFilterActive(aFilter) {
      let filters = localStorage.getItem("filters").split(",");
      let isActive = false;
      if (filters.length > 0) {
        filters.forEach(filter => {
          if (filter == aFilter) {
            isActive = true;
          }
        });
      }
      return isActive;
    },
    async filterUsers() {
      const token = getToken();
      const tokenInfo = await getTokenInfo(token);
      const myID = tokenInfo.id;
      let index = 0;
      this.users.forEach(aUser => {
        if (aUser.id == myID) {
          this.users.splice(index, 1);
        } else {
          index = index + 1;
        }
      });
    },
    async filterArtists() {
      // console.log("coucou");
      let searchInput = localStorage.getItem("searchInput");
      let temporaryArtists = [];
      temporaryArtists = await searchArtists(searchInput, 10);
      console.log(temporaryArtists);
      // await console.log(this.artists.results);
      if (await temporaryArtists.results) {
        temporaryArtists.results.forEach(async anArtist => {
          // console.log(index);
          let test = await getArtistInfos(anArtist.artistId);
          // console.log(test);
          if (test != null) {
            this.artists.push(anArtist);
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.sectionHeader {
  text-decoration: underline;
  font-weight: bold;
  font-size: 150%;
}

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

.userContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
}

.artistContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
