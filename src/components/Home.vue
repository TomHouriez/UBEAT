<template>
  <div class="componentPage">
    <section>
      <div class="titleContainer">
        <h1 class="sectionTitle">Top Album</h1>
      </div>
      <div class="firstBlock">
        <div class="albumContainer">
          <div class="albumRow">
            <div class="albumCard">
              <router-link to="/album" class="imageContainer">
                <img :src="albumData[0].artworkUrl100" />
              </router-link>

              <div class="albumDescription">
                <p class="collectionName">{{ albumData[0].collectionName }}</p>
                <p class="artistName">{{ albumData[0].artistName }}</p>
                <p class="genreName">{{ albumData[0].primaryGenreName }}</p>
              </div>
            </div>
            <div class="albumCard">
              <router-link to="/album" class="imageContainer">
                <img :src="albumData[0].artworkUrl100" />
              </router-link>
              <div class="albumDescription">
                <p class="collectionName">{{ albumData[0].collectionName }}</p>
                <p class="artistName">{{ albumData[0].artistName }}</p>
                <p class="genreName">{{ albumData[0].primaryGenreName }}</p>
              </div>
            </div>
          </div>

          <div class="albumRow">
            <div class="albumCard">
              <router-link to="/album" class="imageContainer">
                <img :src="albumData[0].artworkUrl100" />
              </router-link>
              <div class="albumDescription">
                <p class="collectionName">{{ albumData[0].collectionName }}</p>
                <p class="artistName">{{ albumData[0].artistName }}</p>
                <p class="genreName">{{ albumData[0].primaryGenreName }}</p>
              </div>
            </div>
            <div class="albumCard">
              <router-link to="/album" class="imageContainer">
                <img :src="albumData[0].artworkUrl100" />
              </router-link>
              <div class="albumDescription">
                <p class="collectionName">{{ albumData[0].collectionName }}</p>
                <p class="artistName">{{ albumData[0].artistName }}</p>
                <p class="genreName">{{ albumData[0].primaryGenreName }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="titleContainer">
        <h1 class="sectionTitle">Top Artist</h1>
      </div>
      <div class="secondContainer">
        <div class="artistContainer">
          <div class="artistCard">
            <img :src="artistsList[0].image" />
            <p class="artistName">{{ albumData[0].artistName }}</p>
            <p class="genreName">{{ albumData[0].primaryGenreName }}</p>
          </div>
          <div class="artistCard">
            <img :src="artistsList[0].image" />
            <p class="artistName">{{ albumData[0].artistName }}</p>
            <p class="genreName">{{ albumData[0].primaryGenreName }}</p>
          </div>
          <div class="artistCard">
            <img :src="artistsList[0].image" />
            <p class="artistName">{{ albumData[0].artistName }}</p>
            <p class="genreName">{{ albumData[0].primaryGenreName }}</p>
          </div>
          <div class="artistCard">
            <img :src="artistsList[0].image" />
            <p class="artistName">{{ albumData[0].artistName }}</p>
            <p class="genreName">{{ albumData[0].primaryGenreName }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

// test icons
Vue.use(Buefy, { defaultIconPack: "fal" });

export default {
  data() {
    return {
      albumData: [
        {
          wrapperType: "collection",
          collectionType: "Album",
          artistId: 116851,
          collectionId: 1125488753,
          amgArtistId: 211247,
          artistName: "Blink-182",
          collectionName: "Enema of the State",
          collectionCensoredName: "Enema of the State",
          artistViewUrl:
            "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
          collectionViewUrl:
            "https://itunes.apple.com/us/album/enema-of-the-state/id325483?uo=4",
          artworkUrl60:
            "https://m.media-amazon.com/images/I/71s99Vs2E-L._SS500_.jpg",
          artworkUrl100:
            "https://m.media-amazon.com/images/I/71s99Vs2E-L._SS500_.jpg",
          collectionPrice: 9.99,
          collectionExplicitness: "explicit",
          contentAdvisoryRating: "Explicit",
          trackCount: 12,
          copyright: "℗ 1999 Geffen Records",
          country: "USA",
          currency: "USD",
          releaseDate: "1999-05-25T07:00:00Z",
          primaryGenreName: "Alternative"
        }
      ],
      artistsList: [
        {
          wrapperType: "artist",
          artistType: "Artist",
          artistName: "Daft Punk",
          artistLinkUrl:
            "https://itunes.apple.com/us/artist/blink/3941697?uo=4",
          artistId: 3941697,
          amgArtistId: 144345,
          primaryGenreName: "Alternative",
          primaryGenreId: 18,
          image:
            "https://geo-media.beatport.com/image/db2552bf-aae0-4ad4-8f44-8999db32b4b8.jpg"
        }
      ]
    };
  }
};
</script>

<style>
.componentPage {
  width: 100%;
  height: 100%;
}

/* Section Title */
.titleContainer {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  font-size: xx-large;
  padding-top: 20px;
  border-bottom: 2px solid;
}

/* first section */
.firstBlock {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Albums */
.albumContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
}
.albumRow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
}
.albumCard {
  min-width: 320px;
  max-width: 500px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  height: fit-content;
}
/* image */
.imageContainer {
  min-width: 150px;
  flex: 2;
  display: flex;
  justify-content: center;
}
.imageContainer > img:hover {
  opacity: 0.7;
  cursor: pointer;
}
/* Description */
.albumDescription {
  flex: 3;
  padding: 20px;
  min-width: 150px;
  background-color: lightgray;
}
.collectionName {
  font-size: x-large;
  font-weight: bold;
}
.artistName {
  font-size: large;
}
.genreName {
  font-size: small;
}

/* Artist */

.secondContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.artistContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
  flex: 1;
}

.artistCard {
  width: 200px;
  margin: 20px;
  text-align: center;
}
.artistCard > img {
  width: 200px;
  height: 200px;
  cursor: pointer;
  object-fit: cover;
}
.artistCard > img:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>
