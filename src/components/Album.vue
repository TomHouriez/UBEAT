<template>
  <div class="componentPage">
    <div v-if="error == ''" class="container">
      <div class="albumDataContainer">
        <div class="albumImageContainer">
          <img
            v-if="albumData.artworkUrl100"
            :src="albumData.artworkUrl100.replace('100x100', '300x300')"
          />
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
                <a v-on:click="addAlbumToPlaylist()">
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
                    :to="{ name: 'Artist', params: { id: props.row.artistId } }"
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
                <a
                  v-if="isPlaying && trackUrlPlaying == props.row.previewUrl"
                  v-on:click="pauseTrack(props.row.previewUrl)"
                >
                  <b-icon pack="fas" icon="pause-circle" type="info" />
                </a>
                <a v-else v-on:click="playTrack(props.row.previewUrl)">
                  <b-icon pack="fas" icon="play-circle" type="info" />
                </a>
              </span>
            </b-table-column>

            <b-table-column field="action" label="Action">
              <a v-on:click="addToPlaylistButton(props.row)">
                <b-icon pack="fas" class="fa" icon="plus-circle" type="info" />
              </a>
            </b-table-column>
          </template>
        </b-table>
      </div>
    </div>
    <div v-else class="errorContainer">
      {{ error }}
    </div>
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
import AddToPlaylist from "@/components/AddToPlaylist";

import { fetchAlbumData, fetchTracks } from "../scripts/AlbumApi.js";
import { fetchUserPlaylists } from "../scripts/PlaylistsApi.js";

export default {
  components: {
    AddToPlaylist: AddToPlaylist
  },
  data() {
    return {
      id: null,
      albumData: {},
      tracks: [],

      isAddToPlaylistModalActive: false,

      tracksToAdd: [],

      // audio
      audio: null,
      isPlaying: false,
      trackUrlPlaying: null,

      //error
      error: ""
    };
  },
  async created() {
    this.isPlaying = false;
    this.id = this.$route.params.id;
    try {
      this.albumData = await fetchAlbumData(this.id);
    } catch {
      this.error = "Unable to load album";
    }

    if (this.albumData.resultCount == 0) {
      this.error = "Unable to load album";
    } else {
      this.albumData = this.albumData.results[0];
      try {
        this.tracks = await fetchTracks(this.id);
      } catch {
        this.error = "Unable to load album";
      }

      if (this.tracks.resultCount == 0) {
        this.error = "Unable to load album";
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
      try {
        this.playlists = await fetchUserPlaylists();
      } catch {
        this.error = "Unable to load playlists";
      }
    },
    addToPlaylistButton: function(jsonTrack) {
      this.tracksToAdd = [jsonTrack];
      this.isAddToPlaylistModalActive = true;
    },
    addAlbumToPlaylist: function() {
      this.tracksToAdd = this.tracks.map(a => ({ ...a }));
      this.isAddToPlaylistModalActive = true;
    },

    //play sond
    playTrack: function(trackUrl) {
      if (this.audio != null) {
        this.audio.pause();
        this.isPlaying = true;
      }
      if (this.trackUrlPlaying != trackUrl) {
        this.trackUrlPlaying = trackUrl;
        this.audio = new Audio(trackUrl);
        this.audio.addEventListener("ended", () => {
          this.trackUrlPlaying = null;
          this.isPlaying = false;
        });
        this.audio.play();
        this.isPlaying = true;
      } else {
        this.audio.play();
        this.isPlaying = true;
      }
    },
    pauseTrack() {
      if (this.audio != null) {
        this.isPlaying = false;
        this.audio.pause();
      }
    },

    //other
    millisToMinutes: function(timeMillis) {
      let result = "";
      let minutes = parseInt(timeMillis / 60000);
      let seconds = timeMillis % 60000;
      seconds = (seconds + "").slice(0, 2);
      result = minutes + ":" + seconds;
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

.errorContainer {
  margin: 10px;
}

/* Tracks */
.albumTracksContainer {
  padding: 15px;
  flex: 4;
  margin-top: 10px;
}
a {
  color: rgb(54, 54, 54);
}

a:hover {
  color: rgba(214, 38, 61, 0.882);
}
</style>
