<template>
  <div>
    <p class="sectionHeader" v-if="showAlbums">
      Albums:
    </p>
    <div class="albumsContainer" v-if="showAlbums">
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

    <p class="sectionHeader" v-if="showTracks">Tracks:</p>
    <div class="tracksContainer" v-if="showTracks">
      <TrackCard
        @play-track="playTrack"
        @pause-track="pauseTrack"
        v-for="aSong in tracks.results"
        v-bind:key="aSong.trackId"
        :trackName="aSong.trackName"
        :trackId="aSong.trackId"
        :primaryGenreName="aSong.primaryGenreName"
        :artistId="aSong.artistId"
        :artistName="aSong.artistName"
        :image="aSong.artworkUrl100"
        :trackData="aSong"
        :playing="aSong.previewUrl == trackUrlPlaying && audio != null"
      >
      </TrackCard>
    </div>

    <p class="sectionHeader" v-if="showArtists">Artists:</p>
    <div class="artistContainer" v-if="showArtists">
      <ArtistCard
        v-for="anArtist in artists"
        v-bind:key="anArtist.artistId"
        :artistData="anArtist"
      >
      </ArtistCard>
    </div>

    <p class="sectionHeader" v-if="showUsers">Users:</p>
    <div class="userContainer" v-if="showUsers">
      <h2 v-if="this.users.length == 0">No users found</h2>
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
import {
  searchWithType,
  searchArtists,
  searchUsers
} from "../../scripts/SearchApi";
import { getArtistInfos } from "../../scripts/ArtistsApi";
import { getToken, getTokenInfo } from "../../scripts/Config";

import ArtistAlbumCard from "@/components/artist/ArtistAlbumCard";
import TrackCard from "@/components/album/TrackCard";
import ArtistCard from "@/components/artist/ArtistCard";
import UserCard from "@/components/user/UserCard";

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

      audio: null,
      trackUrlPlaying: null,

      showAlbums: false,
      showTracks: false,
      showArtists: false,
      showUsers: false,

      artists: [],
      albums: [],
      tracks: [],
      users: []
    };
  },
  created() {
    this.artists = [];
    this.filters = localStorage.getItem("filters").split(",");
    this.checkFilters();
    this.search();
    this.$parent.$on("searchApp", this.update);
  },
  methods: {
    async search() {
      this.searchInput = localStorage.getItem("searchInput");

      let filters = ["albums", "tracks", "artists", "users"];

      this.artists = [];
      this.albums = [];
      this.tracks = [];
      this.users = [];

      if (filters.length > 0) {
        filters.forEach(async aFilter => {
          if (aFilter != "artists" && aFilter != "users") {
            this[aFilter] = await searchWithType(aFilter, this.searchInput, 10);
          }
        });
      }

      if (filters.length > 0) {
        filters.forEach(async aFilter => {
          if (aFilter == "users") {
            this.users = [];
            await this.filterUsers();
          }
        });
      }

      if (filters.length > 0) {
        filters.forEach(async aFilter => {
          if (aFilter == "artists") {
            this.artists = [];
            await this.filterArtists();
          }
        });
      }
      this.checkFilters();
    },
    async update() {
      if (this.searchInput == localStorage.getItem("searchInput")) {
        this.filters = localStorage.getItem("filters").split(",");
        this.checkFilters();
      } else {
        await this.search();
      }
    },
    checkFilters() {
      this.showAlbums = this.isFilterActive("albums");
      this.showTracks = this.isFilterActive("tracks");
      this.showArtists = this.isFilterActive("artists");
      this.showUsers = this.isFilterActive("users");
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
      let searchInput = localStorage.getItem("searchInput");
      let temporaryUsers = [];
      temporaryUsers = await searchUsers(searchInput, 10);
      const token = getToken();
      const tokenInfo = await getTokenInfo(token);
      const myID = tokenInfo.id;
      if (await temporaryUsers) {
        temporaryUsers.forEach(async aUser => {
          if (myID != aUser.id) {
            this.users.push(aUser);
          }
        });
      }
    },
    async filterArtists() {
      let searchInput = localStorage.getItem("searchInput");
      let temporaryArtists = [];
      temporaryArtists = await searchArtists(searchInput, 10);
      if (await temporaryArtists.results) {
        temporaryArtists.results.forEach(async anArtist => {
          let test = await getArtistInfos(anArtist.artistId);
          if (test.extendedData == true) {
            test.artistId = anArtist.artistId;
            this.artists.push(test);
          }
        });
      }
      temporaryArtists = [];
    },
    playTrack(trackUrl) {
      if (this.audio != null) {
        this.audio.pause();
      }
      if (this.trackUrlPlaying != trackUrl) {
        this.trackUrlPlaying = trackUrl;
        this.audio = new Audio(trackUrl);
        this.audio.addEventListener("ended", () => {
          this.trackUrlPlaying = null;
        });
        this.audio.play();
      } else {
        this.audio.play();
      }
    },
    pauseTrack() {
      if (this.audio != null) {
        this.audio.pause();
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
