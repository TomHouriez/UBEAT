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
          <b-table-column field="play" label="Play">
            <span>
              <a href="#">
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
      playlist: {}
    };
  },
  async created() {
    this.id = this.$route.params.id;
    this.playlist = await fetchPlaylistByID(this.id);
  },
  methods: {
    deleteTrack: async function(trackID) {
      let response = await deleteTrackInPlaylist(this.id, trackID);
      console.log(response);
      this.playlist = await fetchPlaylistByID(this.id);
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
