<template>
  <div>
    <figure>
      <img :src="image" alt="Ramdom Accees Memory album cover" />
      <figcaption>{{ trackName }}</figcaption>
      <router-link :to="{ name: 'Artist', params: { id: artistId } }">
        <a class="artistName">{{ artistName }}</a>
      </router-link>
      <a v-on:click="playTrack()">
        <b-icon pack="fas" class="fa" icon="play-circle" type="info" />
      </a>
      <a v-on:click="addToPlaylistButton()">
        <b-icon pack="fas" class="fa" icon="plus-circle" type="info" />
      </a>
    </figure>

    <!-- Modal add to playlist -->
    <AddToPlaylist
      v-if="isAddToPlaylistModalActive"
      @closeModal="isAddToPlaylistModalActive = false"
      :tracksToAdd="tracksToAdd"
      :isAddToPlaylistModalActive="isAddToPlaylistModalActive"
    ></AddToPlaylist>
  </div>
</template>

<script>
import { fetchUserPlaylists } from "../scripts/PlaylistsApi.js";

import AddToPlaylist from "@/components/AddToPlaylist";

export default {
  props: [
    "trackName",
    "artistName",
    "image",
    "trackId",
    "primaryGenreName",
    "artistId",
    "trackData"
  ],
  components: {
    AddToPlaylist: AddToPlaylist
  },
  data() {
    return {
      isAddToPlaylistModalActive: false
    };
  },
  async created() {
    this.playlists = await fetchUserPlaylists();
  },
  methods: {
    addToPlaylistButton: function() {
      this.tracksToAdd = [this.trackData];
      this.isAddToPlaylistModalActive = true;
    },

    playTrack() {
      this.$emit("play-track", this.trackData.previewUrl);
    }
  }
};
</script>

<style scoped>
.songCard {
  margin: 10px;
}

figure {
  margin: 10px;
  width: 200px;
  overflow: hidden;
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
