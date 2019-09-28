<template>
  <div class="componentPage">
    <section>
      <div class="titleContainer">
        <h1 class="sectionTitle">Top Albums</h1>
      </div>
      <div class="firstBlock">
        <div class="albumContainer">
          <div class="albumRow">
            <div class="albumCard">
              <router-link to="/album" class="imageContainer">
                <img
                  src="https://coverartarchive.org/release-group/4bac3d70-deea-3d80-85c4-8be9f90558e6/front.jpg"
                />
              </router-link>

              <div class="albumDescription">
                <p class="collectionName">Alive 2007</p>
                <p class="artistName">Daft Punk</p>
                <p class="genreName">Electronic</p>
              </div>
            </div>
            <div class="albumCard">
              <router-link to="/album" class="imageContainer">
                <img
                  src="https://coverartarchive.org/release-group/4bac3d70-deea-3d80-85c4-8be9f90558e6/front.jpg"
                />
              </router-link>

              <div class="albumDescription">
                <p class="collectionName">Alive 2007</p>
                <p class="artistName">Daft Punk</p>
                <p class="genreName">Electronic</p>
              </div>
            </div>
          </div>
          <div class="albumRow">
            <div class="albumCard">
              <router-link to="/album" class="imageContainer">
                <img
                  src="https://coverartarchive.org/release-group/4bac3d70-deea-3d80-85c4-8be9f90558e6/front.jpg"
                />
              </router-link>

              <div class="albumDescription">
                <p class="collectionName">Alive 2007</p>
                <p class="artistName">Daft Punk</p>
                <p class="genreName">Electronic</p>
              </div>
            </div>
            <div class="albumCard">
              <router-link to="/album" class="imageContainer">
                <img
                  src="https://coverartarchive.org/release-group/4bac3d70-deea-3d80-85c4-8be9f90558e6/front.jpg"
                />
              </router-link>

              <div class="albumDescription">
                <p class="collectionName">Alive 2007</p>
                <p class="artistName">Daft Punk</p>
                <p class="genreName">Electronic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="titleContainer">
        <h1 class="sectionTitle">Top Artists</h1>
      </div>
      <div class="secondContainer">
        <div class="artistContainer">
          <div class="artistCard">
            <router-link to="/artist" class="imageArtistContainer">
              <img
                src="https://geo-media.beatport.com/image/db2552bf-aae0-4ad4-8f44-8999db32b4b8.jpg"
              />
            </router-link>
            <p class="artistName">Daft Punk</p>
            <p class="genreName">Electronic</p>
          </div>
          <div class="artistCard">
            <router-link to="/artist" class="imageArtistContainer">
              <img
                src="https://geo-media.beatport.com/image/db2552bf-aae0-4ad4-8f44-8999db32b4b8.jpg"
              />
            </router-link>
            <p class="artistName">Daft Punk</p>
            <p class="genreName">Electronic</p>
          </div>
          <div class="artistCard">
            <router-link to="/artist" class="imageArtistContainer">
              <img
                src="https://geo-media.beatport.com/image/db2552bf-aae0-4ad4-8f44-8999db32b4b8.jpg"
              />
            </router-link>
            <p class="artistName">Daft Punk</p>
            <p class="genreName">Electronic</p>
          </div>
          <div class="artistCard">
            <router-link to="/artist" class="imageArtistContainer">
              <img
                src="https://geo-media.beatport.com/image/db2552bf-aae0-4ad4-8f44-8999db32b4b8.jpg"
              />
            </router-link>
            <p class="artistName">Daft Punk</p>
            <p class="genreName">Electronic</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style scoped>
componentPage {
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
.artistCard > .imageArtistContainer > img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  cursor: pointer;
  object-fit: cover;
}
.artistCard > .imageArtistContainer > img:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>
