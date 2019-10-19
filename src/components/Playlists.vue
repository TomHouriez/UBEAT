<template>
  <div class="container">
    <div class="cardContainer" @click="isAddPlaylistModalActive = true">
      <div class="gridContainer">
        <b-icon pack="fas" class="fa-7x" icon="plus-circle" type="info" />
        <p>Add new playlist</p>
      </div>
    </div>

    <div v-for="aPlaylist in playlists" v-bind:key="aPlaylist.id">
      <router-link
        :to="{ name: 'PlaylistDetail', params: { id: aPlaylist.id } }"
      >
        <PlaylistCard :name="aPlaylist.name" :tracks="aPlaylist.tracks">
        </PlaylistCard
      ></router-link>
    </div>

    <b-modal :active.sync="isAddPlaylistModalActive">
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">New playlist</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Name">
              <b-input
                type="text"
                :value="playlistName"
                v-model="playlistName"
                placeholder="Enter a playlist name"
                required
                oninvalid="this.setCustomValidity('Please fillout this field')"
                oninput="this.setCustomValidity('')"
                validation-message="A name is required"
              >
              </b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button
              class="button"
              type="button"
              v-on:click="cancelAddPlaylist()"
            >
              Cancel
            </button>
            <button
              class="button is-primary"
              v-on:click="validateAddPlaylist()"
            >
              Validate
            </button>
          </footer>
        </div>
      </form>
      <!-- </p> -->
    </b-modal>
  </div>
</template>
<script>
import PlaylistCard from "./PlaylistCard.vue";

import { fetchUserPlaylists, addPlaylist } from "../scripts/PlaylistsApi";

export default {
  components: {
    PlaylistCard: PlaylistCard
  },
  data() {
    return {
      playlists: [],
      isAddPlaylistModalActive: false,
      playlistName: ""
    };
  },
  methods: {
    cancelAddPlaylist() {
      this.isAddPlaylistModalActive = false;
      this.playlistName = "";
    },
    async validateAddPlaylist() {
      let response = await addPlaylist(this.playlistName);
      alert(JSON.stringify(response));
      this.isAddPlaylistModalActive = false;
    }
  },
  async created() {
    this.playlists = await fetchUserPlaylists();
  }
};
</script>
<style scoped>
.container {
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.cardContainer {
  margin: 10px;
  width: 200px;
  display: block;
  text-align: center;
}

.cardContainer:hover {
  cursor: pointer;
  opacity: 0.7;
}
.gridContainer {
  height: 200px;
  width: 200px;
  background-color: lightgray;
}

span {
  width: 100%;
  height: 100%;
}
</style>
