<template>
  <div class="componentPage">
    <div class="container">
      <h1 class="artistName">{{ artistData.artistName }}</h1>
      <div class="artistDataContainer">
        <div class="artistImageContainer">
          <img :src="tadbData.strArtistThumb" />
          <a
            :href="artistData.artistLinkUrl"
            style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?kind=artist&bubble=apple_music)
            no-repeat;width:158px;height:45px;"
          ></a>
        </div>
        <div v-if="infoExist" class="artistTableInfo">
          <table>
            <tr>
              <td>{{ artistLife.typeText }}</td>
              <td>{{ artistLife.begin }}</td>
            </tr>
            <tr>
              <td>in</td>
              <td>{{ tadbData.strCountry }}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                <p>{{ artistLife.status }}</p>
              </td>
            </tr>
            <tr v-if="genres">
              <td>Genre(s)</td>
              <td>
                <tr v-for="genre in genres" :key="genre.name">
                  {{
                    genre.name
                  }}
                </tr>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div v-if="tadbData.strBiographyEN" class="artistBiographyContainer">
        <b-collapse :open="false" class="card" aria-id="contentIdForA11y3">
          <div
            slot="trigger"
            slot-scope="props"
            class="card-header"
            role="button"
            aria-controls="contentIdForA11y3"
          >
            <p class="card-header-title">
              Artist's biography
            </p>
            <a class="card-header-icon">
              <b-icon pack="fas" :icon="props.open ? 'angle-up' : 'angle-down'">
              </b-icon>
            </a>
          </div>
          <div class="card-content">
            <div class="content">
              <p>
                {{ tadbData.strBiographyEN }}
              </p>
            </div>
          </div>
        </b-collapse>
      </div>
      <h1 class="artistAlbumsTitle">Albums</h1>
      <div class="artistAlbumsContainer">
        <ul>
          <artistAlbumCard
            v-for="album in albums"
            v-bind:key="album.collectionId"
            :id="album.collectionId"
            :title="album.collectionName"
            :year="album.releaseDate.substring(0, 4)"
            :image="album.artworkUrl100.replace('100x100', '500x500')"
          >
          </artistAlbumCard>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import artistAlbumCard from "@/components/ArtistAlbumCard";
import {
  fetchArtistData,
  fetchArtistAlbums,
  fetchArtistMBID,
  fetchMbzArtist
} from "../scripts/ArtistsApi.js";

export default {
  components: {
    artistAlbumCard: artistAlbumCard
  },
  data() {
    return {
      id: null,
      artistData: {},
      tadbData: {},
      mbData: {},
      artistLife: {},
      genres: {},
      albums: [],
      infoExist: false
    };
  },

  async created() {
    this.id = this.$route.params.id;
    this.artistData = await fetchArtistData(this.id);
    if (this.artistData.resultCount == 0) {
      alert("artist not found");
    } else {
      this.artistData = this.artistData.results[0];
      this.albums = await fetchArtistAlbums(this.id);
      if (this.albums.resultCount == 0) {
        alert("no albums for this artist");
      } else {
        this.albums = this.albums.results;
      }
    }
    this.tadbData = await fetchArtistMBID(
      encodeURIComponent(this.artistData.artistName)
    );

    if (this.tadbData.artists != null) {
      this.infoExist = true;
      this.tadbData = this.tadbData.artists[0];

      this.mbData = await fetchMbzArtist(this.tadbData.strMusicBrainzID);

      this.artistLife = new Object();
      this.artistLife.begin = this.mbData["life-span"].begin;
      this.artistLife.ended = this.mbData["life-span"].ended;

      if (this.mbData.type == "Group") {
        this.artistLife.typeText = "Formed";
        this.artistLife.status = "Disbanded (";
      } else {
        this.artistLife.typeText = "Born";
        this.artistLife.status = "Dead (";
      }

      if (this.mbData["life-span"].ended) {
        this.artistLife.status =
          this.artistLife.status + this.mbData["life-span"].end + ")";
      } else {
        this.artistLife.status = "Active";
      }
      this.genres = this.mbData.genres;
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}

.artistName {
  font-size: 3rem;
  text-align: center;
  width: 100%;
}

.artistDataContainer {
  min-width: 300px;
  flex: 1;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.artistImageContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  align-items: center;
}

.artistImageContainer > img {
  border-radius: 35%;
  margin: 10px;
  max-width: 350px;
  overflow: hidden;
  width: 90%;
}

.artistTableInfo {
  align-items: center;
  display: flex;
  font-size: 1em;
  min-width: 200px;
}

.artistTableInfo > table > tr > td {
  padding-left: 15px;
}

.artistMbLink {
  color: black;
  text-shadow: 1px 1px 3px gray;
}

.artistMbLink:hover {
  color: crimson;
}

.artistAlbumsTitle {
  font-size: 2em;
  padding-top: 20px;
}

.artistAlbumsContainer > ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 20px;
  text-align: center;
}

.artistAlbumsContainer > ul > li {
  max-width: 350px;
  margin: auto;
  margin-bottom: 20px;
}

.artistAlbumsContainer > ul > li > figure {
  max-width: 200px;
  margin: auto;
  margin-bottom: 20px;
}

.artistAlbumsContainer > ul > li > a {
  color: black;
}

.artistAlbumsContainer > ul > li > a:hover {
  color: crimson;
}
</style>
