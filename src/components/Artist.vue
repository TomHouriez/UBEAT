<template>
  <div class="componentPage">
    <div v-if="artistData.resultCount == 0" class="container">
      <h1 class="artistName">Unknown artist</h1>
    </div>
    <div v-if="artistData.resultCount !== 0" class="container">
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
            <tr v-if="artistLife.begin">
              <td>{{ artistLife.typeText }}</td>
              <td>{{ artistLife.begin }}</td>
            </tr>
            <tr v-if="tadbData.strCountry">
              <td>in</td>
              <td>{{ tadbData.strCountry }}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                <p>{{ artistLife.status }}</p>
              </td>
            </tr>
            <tr v-if="genres.length">
              <td>Genre(s)</td>
              <td>
                <tr v-for="genre in genres" :key="genre.name">
                  {{
                    genre.name
                  }}
                </tr>
              </td>
            </tr>
            <tr v-if="members.length != 0">
              <td>Member(s)</td>
              <td>
                <tr v-for="member in members" :key="member">
                  {{
                    member
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
      <h1 v-if="albums.resultCount == 0" class="artistAlbumsTitle">
        No album found
      </h1>
      <h1 v-if="albums.resultCount !== 0" class="artistAlbumsTitle">Albums</h1>
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
      infoExist: false,
      members: []
    };
  },

  async created() {
    this.id = this.$route.params.id;
    this.artistData = await fetchArtistData(this.id);
    if (this.artistData.resultCount !== 0) {
      this.artistData = this.artistData.results[0];
      this.albums = await fetchArtistAlbums(this.id);
      if (this.albums.resultCount !== 0) {
        this.albums = this.albums.results;
        // Sort albums in the inverse of released year order (most recent years first)
        this.albums.sort(
          (a, b) =>
            b.releaseDate.substring(0, 4) - a.releaseDate.substring(0, 4)
        );
      }
    }
    // Try to fetch Musicbrainz ID from TADB
    this.tadbData = await fetchArtistMBID(
      encodeURIComponent(this.artistData.artistName)
    );

    // If artist not in TADB we won't display artist's details (infoExist == false)
    if (this.tadbData.artists != null) {
      this.infoExist = true;
      // we assume the first artist is the right one
      this.tadbData = this.tadbData.artists[0];

      this.mbData = await fetchMbzArtist(this.tadbData.strMusicBrainzID);

      // this.artistLife: Object with all artist's detail (easier to process in the template)
      this.artistLife = new Object();
      this.artistLife.begin = this.mbData["life-span"].begin;
      this.artistLife.ended = this.mbData["life-span"].ended;

      // Displayed text is different for a personn or a group
      if (this.mbData.type == "Group") {
        this.artistLife.typeText = "Formed";
        this.artistLife.status = "Disbanded (";
        // We also want to display the group members
        for (let i = 0; i < this.mbData.relations.length; i++) {
          if (this.mbData.relations[i].type == "member of band") {
            var member = this.mbData.relations[i].artist.name;
            // Members may have had several tenure/positions, we only want to list each member once
            if (
              this.members.indexOf(member) == -1 &&
              this.members.indexOf(member + " (Inactive)") == -1
            ) {
              if (this.mbData.relations[i].ended) {
                member += " (Inactive)";
              }
              this.members.push(member);
            }
          }
        }
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
      // We only keep the first 8 genres
      this.genres = this.mbData.genres;
      if (this.genres.length > 8) {
        this.genres.splice(8);
      }
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
