<template>
  <div class="container">
    <div class="playlistCardContainer">
      <PlaylistCard :name="playlist.name" :tracks="playlist.tracks">
      </PlaylistCard>
    </div>

    <div class="playlistTracksContainer">
      <b-table
        class="trackTable"
        :data="playlist.tracks"
        :hoverable="true"
        :mobile-cards="false"
      >
        <template slot-scope="props">
          <b-table-column field="trackName" label="Title">
            {{ props.row.trackName }}
          </b-table-column>
          <b-table-column class="artistName" field="artistName" label="Artists">
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

          <b-table-column field="delete" label="">
            <a href="#" v-on:click="deleteTrack(props.row.trackId)">
              <b-icon pack="fas" icon="trash-alt" type="info" />
            </a>
          </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import PlaylistCard from "./PlaylistCard.vue";
import {
  fetchPlaylistByID,
  deleteTrackInPlaylist
} from "../scripts/PlaylistsApi";

export default {
  components: {
    PlaylistCard: PlaylistCard
  },
  data() {
    return {
      id: null,
      playlist: {},

      // audio
      audio: null,
      isPlaying: false,
      trackUrlPlaying: null
    };
  },
  destroyed() {
    if (this.audio != null) {
      this.audio.pause();
      this.audio = null;
    }
  },
  async created() {
    this.id = this.$route.params.id;
    this.playlist = await fetchPlaylistByID(this.id);
  },
  methods: {
    deleteTrack: async function(trackID) {
      await deleteTrackInPlaylist(this.id, trackID);
      this.playlist = await fetchPlaylistByID(this.id);
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
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.playlistCardContainer {
  min-width: 300px;
  flex: 1;
  padding: 15px;
}

.playlistTracksContainer {
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
