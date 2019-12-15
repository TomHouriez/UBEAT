<template>
  <div class="componentPage">
    <div v-if="artistInfos == null" class="container">
      <h1 class="artistName">Unknown artist</h1>
    </div>
    <div v-else class="container">
      <h1 class="artistName">{{ artistInfos.artistName }}</h1>
      <div class="artistDataContainer">
        <div class="artistImageContainer">
          <img :src="artistInfos.strArtistThumb" />
          <a
            :href="artistInfos.artistItuneLinkUrl"
            style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?kind=artist&bubble=apple_music)
            no-repeat;width:158px;height:45px;"
          ></a>
        </div>
        <div v-if="artistInfos.extendedData" class="artistTableInfo">
          <table>
            <tr v-if="artistInfos.artistLife.begin">
              <td>{{ artistInfos.artistLife.typeText }}</td>
              <td>{{ artistInfos.artistLife.begin }}</td>
            </tr>
            <tr v-if="artistInfos.strCountry">
              <td>in</td>
              <td>{{ artistInfos.strCountry }}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                <p>{{ artistInfos.artistLife.status }}</p>
              </td>
            </tr>
            <tr
              v-if="
                artistInfos.genres != null && artistInfos.genres.length != 0
              "
            >
              <td>Genre(s)</td>
              <td>
                <tr v-for="genre in artistInfos.genres" :key="genre.name">
                  {{
                    genre.name
                  }}
                </tr>
              </td>
            </tr>
            <tr
              v-if="
                artistInfos.members != null && artistInfos.members.length != 0
              "
            >
              <td>Member(s)</td>
              <td>
                <tr v-for="member in artistInfos.members" :key="member">
                  {{
                    member
                  }}
                </tr>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div v-if="artistInfos.strBiographyEN" class="artistBiographyContainer">
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
                {{ artistInfos.strBiographyEN }}
              </p>
            </div>
          </div>
        </b-collapse>
      </div>
      <h1 v-if="albums.resultCount == 0" class="artistAlbumsTitle">
        No album found
      </h1>
      <h1 v-else class="artistAlbumsTitle">
        Albums
      </h1>
      <div v-if="albums.resultCount !== 0" class="artistAlbumsContainer">
        <artistAlbumCard
          v-for="album in albums"
          v-bind:key="album.collectionId"
          :id="album.collectionId"
          :title="album.collectionName"
          :year="album.releaseDate.substring(0, 4)"
          :image="album.artworkUrl100.replace('100x100', '500x500')"
        >
        </artistAlbumCard>
      </div>
    </div>
  </div>
</template>

<script>
import artistAlbumCard from "@/components/artist/ArtistAlbumCard";
import { getArtistInfos } from "../../scripts/ArtistsApi.js";

export default {
  components: {
    artistAlbumCard: artistAlbumCard
  },
  data() {
    return {
      id: null,
      albums: [],
      artistInfos: {}
    };
  },

  async created() {
    this.id = this.$route.params.id;
    try {
      this.artistInfos = await getArtistInfos(this.id);
      this.albums = this.artistInfos.albums;
    } catch (e) {
      this.artistInfos = null;
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
  text-align: center;
  font-size: 2em;
  padding-top: 20px;
}

.artistAlbumsContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  margin: auto;
}

.artistAlbumCard {
  max-width: 300px;
  padding: 1rem;
  text-align: center;
}
</style>
