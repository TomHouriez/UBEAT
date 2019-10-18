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
        <div class="artistTableInfo">
          <table>
            <tr>
              <td>Formed/Born</td>
              <td>{{ begin }}</td>
            </tr>
            <tr>
              <td>in</td>
              <td>{{ tadbData.strCountry }}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td v-if="ended">
                <p>Inactive</p>
              </td>
              <td v-else>
                <p>Active</p>
              </td>
            </tr>
            <tr>
              <td>Genre(s)</td>
              <td>
                <tr v-for="genre in genres" :key="genre.name">
                  {{
                    genre.name
                  }}
                </tr>
              </td>
            </tr>
            <tr>
              <td>members</td>
              <td>
                <tr>
                  <a
                    class="artistMbLink"
                    href="https://musicbrainz.org/artist/83886397-adf2-431a-b841-dc4af744a6cc"
                    >Guy-Manuel de Homem-Christo</a
                  >
                </tr>
                <tr>
                  <a
                    class="artistMbLink"
                    href="https://musicbrainz.org/artist/122a2714-24f8-4046-a532-64064b5076d2"
                    >Thomas Bangalter</a
                  >
                </tr>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="artistBiographyContainer">
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
          <li>
            <a href="https://music.apple.com/ca/album/homework/696884422">
              <figure>
                <img
                  src="https://ia800706.us.archive.org/22/items/mbid-497f9acf-a695-332e-bc20-1c8745248550/mbid-497f9acf-a695-332e-bc20-1c8745248550-2688002571.jpg"
                  alt="Homework album cover"
                />
                <figcaption>Homework (1997)</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="https://music.apple.com/ca/album/discovery/697194953">
              <figure>
                <img
                  src="https://ia800700.us.archive.org/10/items/mbid-d073287b-d1bd-4f11-a933-a4386f8cf701/mbid-d073287b-d1bd-4f11-a933-a4386f8cf701-13479423359.png"
                  alt="Discovery album cover"
                />
                <figcaption>Discovery (2001)</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a
              href="https://music.apple.com/ca/album/human-after-all/693748807"
            >
              <figure>
                <img
                  src="https://ia800905.us.archive.org/29/items/mbid-86d4299f-810e-3c4c-a324-2cc03672ed00/mbid-86d4299f-810e-3c4c-a324-2cc03672ed00-5606649161.jpg"
                  alt="Human After All album cover"
                />
                <figcaption>Human After All (2005)</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="/album/#/album">
              <figure>
                <img
                  src="https://coverartarchive.org/release-group/4bac3d70-deea-3d80-85c4-8be9f90558e6/front.jpg"
                  alt="Alive 2007 album cover"
                />
                <figcaption>Alive 2007 (2007)</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="https://music.apple.com/ca/album/tron-legacy/1442926773">
              <figure>
                <img
                  src="https://ia800409.us.archive.org/20/items/mbid-b9b7641f-9389-342e-8be9-e463bd52fdb9/mbid-b9b7641f-9389-342e-8be9-e463bd52fdb9-2587494081.jpg"
                  alt="Tron: Legacy album cover"
                />
                <figcaption>Tron: Legacy (2010)</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a
              href="https://music.apple.com/ca/album/random-access-memories/617154241"
            >
              <figure>
                <img
                  src="https://ia601808.us.archive.org/9/items/mbid-36e2aede-346d-4931-8565-78d810d167c7/mbid-36e2aede-346d-4931-8565-78d810d167c7-4436344925.jpg"
                  alt="Ramdom Accees Memory album cover"
                />
                <figcaption>Ramdom Accees Memory (2013)</figcaption>
              </figure>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  fetchArtistData,
  fetchArtistAlbums,
  fetchArtistMBID,
  fetchMbzArtist
} from "../scripts/ArtistsApi.js";

export default {
  data() {
    return {
      id: null,
      artistData: {},
      tadbData: {},
      mbData: {},
      albums: [],
      ended: null,
      begin: null,
      genres: []
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
        this.album = this.albums.results;
      }
    }
    this.tadbData = await fetchArtistMBID(
      encodeURIComponent(this.artistData.artistName)
    );
    this.tadbData = this.tadbData.artists[0];
    this.mbData = await fetchMbzArtist(this.tadbData.strMusicBrainzID);
    this.ended = this.mbData["life-span"].ended;
    this.begin = this.mbData["life-span"].begin;
    this.genres = this.mbData.genres;
    console.log(this.mbData.genres);
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

.artistAlbumsContainer > ul > li > a {
  color: black;
}

.artistAlbumsContainer > ul > li > a:hover {
  color: crimson;
}

.artistAlbumsContainer > ul > li > a > figure {
  margin: 10px;
  max-width: 350px;
  overflow: hidden;
  text-align: center;
}

.artistAlbumsContainer > ul > li > a > figure > img {
  border: 1px solid black;
  border-radius: 3%;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3);
  max-width: 200px;
  margin: 0;
  padding: 0;
}

.artistAlbumsContainer > ul > li > a > figure > figcaption {
  text-shadow: 1px 1px 3px gray;
}
</style>
