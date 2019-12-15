<template>
  <div>
    <b-modal :active.sync="isModalActive">
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Add to playlist</p>
          </header>
          <section class="modal-card-body">
            <div class="checkboxList">
              <b-checkbox
                class="oneCheckbox"
                v-for="aPlaylist in playlists"
                v-bind:key="aPlaylist.id"
                v-model="checkboxAddToPlaylist"
                :native-value="aPlaylist.id"
              >
                {{ aPlaylist.name }}
              </b-checkbox>

              <b-button
                v-if="checkboxAddToPlaylist.length == 0"
                v-on:click="isNewPlaylistModalActive = true"
                >New playlist</b-button
              >
            </div>
          </section>
          <footer class="modal-card-foot">
            <button
              class="button"
              type="button"
              v-on:click="cancelAddToPlaylist()"
            >
              Cancel
            </button>
            <button
              class="button is-primary"
              type="button"
              v-on:click="validateAddToPlaylist()"
            >
              Validate
            </button>
          </footer>
        </div>
      </form>
    </b-modal>

    <b-modal :active.sync="isNewPlaylistModalActive">
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
              type="button"
              class="button is-primary"
              v-on:click="validateAddToNewPlaylist()"
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
import {
  fetchUserPlaylists,
  addTrackToPlaylist,
  addPlaylist
} from "../../scripts/PlaylistsApi.js";

export default {
  props: ["tracksToAdd", "isAddToPlaylistModalActive"],
  name: "AddToPlaylist",
  data() {
    return {
      playlists: [],
      checkboxAddToPlaylist: [],

      isModalActive: JSON.parse(this.isAddToPlaylistModalActive),

      isNewPlaylistModalActive: false,
      playlistName: ""
    };
  },
  watch: {
    isModalActive: function(val) {
      this.$emit("closeModal", val);
    }
  },
  async created() {
    this.playlists = await fetchUserPlaylists();
  },
  methods: {
    cancelAddToPlaylist: function() {
      this.isModalActive = false;
      this.checkboxAddToPlaylist = [];
    },
    validateAddToPlaylist: async function() {
      try {
        this.checkboxAddToPlaylist.forEach(async aPlaylistID => {
          this.tracksToAdd.forEach(async aTrack => {
            await addTrackToPlaylist(aPlaylistID, aTrack);
          });
        });
        this.$buefy.snackbar.open(`Track(s) added successfully`);
      } catch {
        this.error = "Error while adding the track to the playlist";
      }
      this.checkboxAddToPlaylist = [];
      this.isModalActive = false;
      this.trackToAdd = null;
    },

    cancelAddPlaylist: function() {
      this.isNewPlaylistModalActive = false;
      this.playlistName = "";
    },
    validateAddToNewPlaylist: async function() {
      if (this.playlistName != "") {
        try {
          const response = await addPlaylist(this.playlistName);
          const playlistID = response.id;
          this.playlistName = "";
          this.tracksToAdd.forEach(async aTrack => {
            await addTrackToPlaylist(playlistID, aTrack);
          });
          this.$buefy.snackbar.open(`Track(s) added successfully`);
        } catch {
          this.error = "Error while adding the track to the playlist";
        }
        this.isNewPlaylistModalActive = false;
        this.isModalActive = false;
        this.isAddAlbumToPlaylistModalActive = false;
        this.$buefy.snackbar.open(`Track(s) added successfully`);
      }
    }
  }
};
</script>

<style>
.checkboxList {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
}
.oneCheckbox {
  margin: 5px;
}
</style>
