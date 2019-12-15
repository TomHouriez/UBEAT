<template>
  <div class="container">
    <div class="cardContainer" v-on:click="isAddPlaylistModalActive = true">
      <div class="gridContainer">
        <b-icon pack="fas" class="fa-7x" icon="plus-circle" type="info" />
        <p>Add new playlist</p>
      </div>
    </div>

    <div v-for="aPlaylist in playlists" v-bind:key="aPlaylist.id">
      <router-link
        :to="{
          name: 'PlaylistDetail',
          params: { id: aPlaylist.id, own: true }
        }"
      >
        <PlaylistCard :name="aPlaylist.name" :tracks="aPlaylist.tracks">
        </PlaylistCard
      ></router-link>
      <div class="buttonContainer">
        <b-button
          v-if="!isDeletingPlaylist"
          v-on:click="deleteThisPlaylist(aPlaylist.id)"
          :id="'deletePlaylist-' + aPlaylist.id"
        >
          <b-icon pack="fas" icon="trash-alt" type="info" />
        </b-button>

        <b-button
          v-if="!isDeletingPlaylist"
          v-on:click="
            updatePlaylistButton(aPlaylist.id, aPlaylist.name, aPlaylist.tracks)
          "
          :id="'updatePlaylist-' + aPlaylist.id"
        >
          Rename
        </b-button>
      </div>
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
    </b-modal>

    <b-modal :active.sync="isUpatePlaylistModalActive">
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Update playlist</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Name">
              <b-input
                type="text"
                v-model="updatedPlaylistName"
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
              v-on:click="cancelUpdatePlaylist()"
            >
              Cancel
            </button>
            <button
              class="button is-primary"
              v-on:click="validateUpdatePlaylist()"
            >
              Validate
            </button>
          </footer>
        </div>
      </form>
    </b-modal>
  </div>
</template>
<script>
import PlaylistCard from "@/components/playlist/PlaylistCard.vue";

import {
  fetchUserPlaylists,
  addPlaylist,
  deletePlaylist,
  updatePlaylistName
} from "../../scripts/PlaylistsApi";

export default {
  components: {
    PlaylistCard: PlaylistCard
  },
  data() {
    return {
      playlists: [],

      // add playlist
      isAddPlaylistModalActive: false,
      playlistName: "",

      // update playlist
      isUpatePlaylistModalActive: false,
      updatedPlaylistID: null,
      updatedPlaylistTracks: [],
      updatedPlaylistName: "",

      // delete playlist
      isDeletingPlaylist: false
    };
  },
  methods: {
    // add playlist
    cancelAddPlaylist() {
      this.isAddPlaylistModalActive = false;
      this.playlistName = "";
    },
    async validateAddPlaylist() {
      if (this.playlistName != "") {
        await addPlaylist(this.playlistName);
        this.playlists = await fetchUserPlaylists();
        this.isAddPlaylistModalActive = false;
        this.playlistName = "";
      }
    },

    // delete playlist
    async deleteThisPlaylist(playlistID) {
      if (!this.isDeletingPlaylist) {
        this.isDeletingPlaylist = true;
        await deletePlaylist(playlistID);
        this.playlists = await fetchUserPlaylists();
        this.isDeletingPlaylist = false;
      }
    },

    //update playlist
    updatePlaylistButton: function(playlistID, name, tracks) {
      this.updatedPlaylistName = name;
      this.updatedPlaylistID = playlistID;
      this.updatedPlaylistTracks = tracks;
      this.isUpatePlaylistModalActive = true;
    },
    cancelUpdatePlaylist() {
      this.updatedPlaylistName = "";
      this.isUpatePlaylistModalActive = false;
    },
    async validateUpdatePlaylist() {
      if (this.updatedPlaylistName != "") {
        await updatePlaylistName(
          this.updatedPlaylistID,
          this.updatedPlaylistName,
          this.updatedPlaylistTracks
        );
        this.playlists = await fetchUserPlaylists();
        this.isUpatePlaylistModalActive = false;
        this.updatedPlaylistName = "";
      }
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

.gridContainer span {
  width: 100%;
  height: 100%;
}

.buttonContainer {
  margin-left: 50px;
}
</style>
