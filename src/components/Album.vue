<template>
  <div class="componentPage">
    <div class="container">
      <div class="albumDataContainer">
        <div class="albumImageContainer">
          <img :src="albumData.artworkUrl100" />
          <a
            href="https://geo.music.apple.com/ca/album/alive-2007/742555152?mt=1&app=music"
            style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2007-11-14&kind=album&bubble=apple_music) no-repeat;width:158px;height:45px;"
          ></a>
        </div>
        <div class="albumTableDescription">
          <table>
            <tr>
              <td>Album:</td>
              <td>{{albumData.collectionName}}</td>
            </tr>
            <tr>
              <td>Artist:</td>
              <td><router-link to="/artist">{{albumData.artistName}}</router-link></td>
            </tr>
            <tr>
              <td>Release Date:</td>
              <!-- <td>{{albumData.releaseDate}}</td> -->
              <td>{{formatDate(albumData.releaseDate)}}</td>
              <!-- <td>{{formatDate("2018-11-30T08:00:00Z")}}</td> -->
            </tr>
            <tr>
              <td>Genre:</td>
              <td>House</td>
            </tr>
            <tr>
              <td>13 songs</td>
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
                  <router-link to="/artist">
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
                <a href="#">
                  <b-icon pack="fas" icon="play-circle" type="info" />
                </a>
              </span>
            </b-table-column>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

//test icons
Vue.use(Buefy, { defaultIconPack: "fal" });

import { fetchAlbumData, fetchTracks } from "../scripts/AlbumApi.js";

export default {
  data() {
    return {
      id: null,
      albumData: {},
      tracks: []
    };
  },
  async created() {
    this.id = this.$route.params.id;
    this.albumData = await fetchAlbumData(this.id);
    if (this.albumData.resultCount == 0) {
      alert("artist not found");
    } else {
      this.albumData = this.albumData.results[0];
      console.log(" albumm data ");
      console.log(this.albumData);
      this.tracks = await fetchTracks(this.id);
      if (this.tracks.resultCount == 0) {
        alert("no track in album");
      } else {
        this.tracks = this.tracks.results;
      }
      console.log(this.tracks);
    }
  },
  methods: {
    millisToMinutes: function(timeMillis) {
      let result = "";
      let minutes = parseInt(timeMillis / 60000);
      let seconds = timeMillis % 60000;
      seconds = (seconds + "").slice(0, 2);
      result = minutes + "." + seconds;
      return result;
    },
    formatDate: function(releaseDate) {
      // console.log("la date d'entrée");
      // console.log(releaseDate);
      // console.log(typeof(releaseDate));
      //console.log(releaseDate.substring(0,4));
      if(releaseDate) {
        let year = releaseDate.substring(0,4);
      let month = releaseDate.substring(5,7);
      let day = releaseDate.substring(8,10);
      let result = year+"/"+month+"/"+day;

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

/* .albumTracksContainer .artistName:hover  {
  font: red;
} */

a {
  color: rgb(54, 54, 54);
}

a:hover {
  color: rgba(214, 38, 61, 0.882);
}
</style>
