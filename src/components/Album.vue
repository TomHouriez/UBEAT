<template>
  <div class="componentPage">
    <div class="container">
      <div class="albumDataContainer">
        <div class="albumImageContainer">
          <img :src="albumData.artworkUrl100" />
          <a
            :href="albumData.collectionViewUrl"
            style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2007-11-14&kind=album&bubble=apple_music) no-repeat;width:158px;height:45px;"
          ></a>
        </div>
        <div class="albumTableDescription">
          <table>
            <tr>
              <td>Album:</td>
              <td>{{ albumData.collectionName }}</td>
            </tr>
            <tr>
              <td>Artist:</td>
              <td>
                <router-link
                  v-if="albumData.artistId"
                  :to="{ name: 'Artist', params: { id: albumData.artistId } }"
                  >{{ albumData.artistName }}
                </router-link>
              </td>
            </tr>
            <tr>
              <td>Release Date:</td>
              <td>{{ formatDate(albumData.releaseDate) }}</td>
            </tr>
            <tr>
              <td>Genre:</td>
              <td>{{ albumData.primaryGenreName }}</td>
            </tr>
            <tr>
              <td>{{ albumData.trackCount }} songs</td>
            </tr>

            <tr>
              <td>Add entire album :</td>
              <td>
                <a v-on:click="isAddAlbumToPlaylistModalActive = true">
                  <b-icon
                    pack="fas"
                    class="fa"
                    icon="plus-circle"
                    type="info"
                  />
                </a>
              </td>
            </tr>
          </table>

          <!-- <b-button v-on:click="isAddAlbumToPlaylistModalActive = true">
            Add Album to Playlist
          </b-button>

          <a v-on:click="isAddAlbumToPlaylistModalActive = true">
            <b-icon pack="fas" class="fa" icon="plus-circle" type="info" />
          </a> -->

          <b-modal :active.sync="isAddAlbumToPlaylistModalActive">
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
                      v-model="checkboxAddAlumToPlaylist"
                      :native-value="aPlaylist.id"
                    >
                      {{ aPlaylist.name }}
                    </b-checkbox>
                  </div>

                  <b-button
                    v-if="checkboxAddAlumToPlaylist.length == 0"
                    v-on:click="isNewPlaylistModalActive = true"
                    >New playlist</b-button
                  >
                </section>
                <footer class="modal-card-foot">
                  <button
                    class="button"
                    type="button"
                    v-on:click="cancelAddAlbumToPlaylist()"
                  >
                    Cancel
                  </button>
                  <button
                    class="button is-primary"
                    v-on:click="validateAddAlbumToPlaylist()"
                  >
                    Validate
                  </button>
                </footer>
              </div>
            </form>
          </b-modal>
        </div>
      </div>
      <div class="albumTracksContainer">
        <b-table
          class="trackTable"
          :data="tracks"
          :hoverable="true"
          :mobile-cards="false"
        >
          <template slot-scope="props">
            <b-table-column field="trackNumber" label="#">
              {{ props.row.trackNumber }}
            </b-table-column>
            <b-table-column field="trackName" label="Title">
              {{ props.row.trackName }}
            </b-table-column>
            <b-table-column
              class="artistName"
              field="artistName"
              label="Artists"
            >
              <span>
                <a>
                  <router-link
                    :to="{ name: 'Artist', params: { id: albumData.artistId } }"
                  >
                    {{ props.row.artistName }}
                  </router-link>
                </a>
              </span>
            </b-table-column>
            <b-table-column field="trackLength" label="Length">
              {{ millisToMinutes(props.row.trackTimeMillis) }}
            </b-table-column>

            <b-table-column field="play" label="Play">
              <span>
                <a v-on:click="playTrack(props.row.previewUrl)">
                  <b-icon pack="fas" icon="play-circle" type="info" />
                </a>
              </span>
            </b-table-column>

            <b-table-column field="action" label="Action">
              <a v-on:click="addToPlaylistButton(props.row)">
                <b-icon pack="fas" class="fa" icon="plus-circle" type="info" />
              </a>

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
            </b-table-column>
          </template>
        </b-table>
      </div>
    </div>

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
import { fetchAlbumData, fetchTracks } from "../scripts/AlbumApi.js";
import {
  fetchUserPlaylists,
  addTrackToPlaylist,
  addPlaylist
} from "../scripts/PlaylistsApi.js";

export default {
  data() {
    return {
      id: null,
      albumData: {},
      tracks: [],

      // add to playlist
      playlists: [],
      checkboxAddToPlaylist: [],
      trackToAdd: null,
      isAddToPlaylistModalActive: false,

      // add album to playlist
      checkboxAddAlumToPlaylist: [],
      isAddAlbumToPlaylistModalActive: false,

      // new playlist
      isNewPlaylistModalActive: false,
      playlistName: "",

      // audio
      audio: null
    };
  },
  async created() {
    this.id = this.$route.params.id;
    this.albumData = await fetchAlbumData(this.id);
    if (this.albumData.resultCount == 0) {
      alert("album not found");
    } else {
      this.albumData = this.albumData.results[0];
      this.tracks = await fetchTracks(this.id);
      if (this.tracks.resultCount == 0) {
        alert("no track in album");
      } else {
        this.tracks = this.tracks.results;
      }
    }
    this.loadPlaylist();
  },
  destroyed() {
    if (this.audio != null) {
      this.audio.pause();
      this.audio = null;
    }
  },
  methods: {
    // add to playlist
    loadPlaylist: async function() {
      this.playlists = await fetchUserPlaylists();
    },
    addToPlaylistButton: function(jsonTrack) {
      this.trackToAdd = jsonTrack;
      this.isAddToPlaylistModalActive = true;
    },
    cancelAddToPlaylist: function() {
      this.trackToAdd = null;
      this.isAddToPlaylistModalActive = false;
      this.checkboxAddToPlaylist = [];
    },
    validateAddToPlaylist: async function() {
      this.checkboxAddToPlaylist.forEach(async aPlaylistID => {
        await addTrackToPlaylist(aPlaylistID, this.trackToAdd);
      });
      this.checkboxAddToPlaylist = [];
      this.isAddToPlaylistModalActive = false;
      this.trackToAdd = null;
    },

    // add album to playlist
    cancelAddAlbumToPlaylist: function() {
      this.isAddAlbumToPlaylistModalActive = false;
      this.checkboxAddAlumToPlaylist = [];
    },
    validateAddAlbumToPlaylist: async function() {
      this.checkboxAddAlumToPlaylist.forEach(async aPlaylistID => {
        this.tracks.forEach(async aTrack => {
          await addTrackToPlaylist(aPlaylistID, aTrack);
        });
      });
      this.checkboxAddAlumToPlaylist = [];
      this.isAddAlbumToPlaylistModalActive = false;
    },

    // add to new playlist
    cancelAddPlaylist: function() {
      this.isNewPlaylistModalActive = false;
      this.playlistName = "";
    },
    validateAddToNewPlaylist: async function() {
      if (this.playlistName != "") {
        const response = await addPlaylist(this.playlistName);
        const playlistID = response.id;
        this.playlistName = "";
        if (this.trackToAdd != null) {
          await addTrackToPlaylist(playlistID, this.trackToAdd);
        } else {
          this.tracks.forEach(async aTrack => {
            await addTrackToPlaylist(playlistID, aTrack);
          });
        }

        this.isNewPlaylistModalActive = false;
        this.isAddToPlaylistModalActive = false;
        this.isAddAlbumToPlaylistModalActive = false;
      }
    },

    //play sond
    playTrack: function(trackUrl) {
      if (this.audio != null) {
        this.audio.pause();
      }
      this.audio = new Audio(trackUrl);
      this.audio.play();
    },

    //other
    millisToMinutes: function(timeMillis) {
      let result = "";
      let minutes = parseInt(timeMillis / 60000);
      let seconds = timeMillis % 60000;
      seconds = (seconds + "").slice(0, 2);
      result = minutes + "." + seconds;
      return result;
    },
    formatDate: function(releaseDate) {
      if (releaseDate) {
        let year = releaseDate.substring(0, 4);
        let month = releaseDate.substring(5, 7);
        let day = releaseDate.substring(8, 10);
        let result = year + "/" + month + "/" + day;

        return result;
      }
      return "0000/00/00";
    }
  }
};
</script>

<style scoped>
.componentPage {
  width: 100%;
}

.container {
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

/* Album image and description */
.albumDataContainer {
  min-width: 300px;
  flex: 1;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
}
/* image */
.albumImageContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  align-items: center;
}
.albumImageContainer > img {
  width: 200px;
  overflow: hidden;
  margin: 10px;
}
.albumImageContainer > a {
  margin-top: 10px;
  margin-bottom: 10px;
}

/* description */
.albumTableDescription {
  min-width: 200px;
  margin: 0 auto;
}
.albumTableDescription > table {
  border-collapse: separate;
  border-spacing: 20px 3px;
}
.albumTableDescription > td {
  padding-left: 30px 0;
}

/* Tracks */
.albumTracksContainer {
  padding: 15px;
  flex: 4;
  margin-top: 10px;
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

a {
  color: rgb(54, 54, 54);
}

a:hover {
  color: rgba(214, 38, 61, 0.882);
}
</style>
