<template>
  <div>
    <figure>
      <img :src="image" alt="Ramdom Accees Memory album cover" />
      <figcaption>{{ trackName }}</figcaption>
      <router-link :to="{ name: 'Artist', params: { id: artistId } }">
        <a class="artistName">{{ artistName }}</a>
      </router-link>
      <a v-on:click="isAddToPlaylistModalActive = true">
        <b-icon pack="fas" class="fa" icon="plus-circle" type="info" />
      </a>
    </figure>

    <!-- Modal add to playlist -->
    <b-modal :active.sync="isAddToPlaylistModalActive">
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
} from "../scripts/PlaylistsApi.js";

export default {
  props: [
    "trackName",
    "artistName",
    "image",
    "trackId",
    "primaryGenreName",
    "artistId",
    "data"
  ],
  data() {
    return {
      playlists: [],

      isAddToPlaylistModalActive: false,
      checkboxAddToPlaylist: [],

      isNewPlaylistModalActive: false,
      playlistName: ""
    };
  },
  async created() {
    this.playlists = await fetchUserPlaylists();
  },
  methods: {
    cancelAddToPlaylist: function() {
      this.trackToAdd = null;
      this.isAddToPlaylistModalActive = false;
      this.checkboxAddToPlaylist = [];
    },
    validateAddToPlaylist: async function() {
      this.checkboxAddToPlaylist.forEach(async aPlaylistID => {
        await addTrackToPlaylist(aPlaylistID, this.data);
      });
      this.checkboxAddToPlaylist = [];
      this.isAddToPlaylistModalActive = false;
      this.trackToAdd = null;
    },

    /// add to new playlist
    cancelAddPlaylist() {
      this.isNewPlaylistModalActive = false;
      this.playlistName = "";
    },

    validateAddToNewPlaylist: async function() {
      if (this.playlistName != "") {
        const response = await addPlaylist(this.playlistName);
        const playlistID = response.id;
        this.playlistName = "";
        await addTrackToPlaylist(playlistID, this.data);
        this.isNewPlaylistModalActive = false;
        this.isAddToPlaylistModalActive = false;
      }
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

/* figure img:hover {
  opacity: 0.7;
  cursor: pointer;
} */

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
