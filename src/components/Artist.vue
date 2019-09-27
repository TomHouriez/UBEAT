<template>
  <div class="componentPage">
    <div class="container">
      <h1 class="artistName">Daft Punk</h1>
      <div class="artistDataContainer">
        <div class="artistImageContainer">
          <img
            src="
              https://geo-media.beatport.com/image/db2552bf-aae0-4ad4-8f44-8999db32b4b8.jpg"
          />
          <a
            href="https://geo.music.apple.com/us/artist/daft-punk/5468295?mt=1&app=music&ls=1"
            style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/lockup.svg?kind=artist&bubble=apple_music&style=standard-black) no-repeat;width:140px;height:30px;"
          ></a>
        </div>
        <div class="artistTableInfo">
          <table>
            <tr>
              <td>Active</td>
              <td>1990s - 2010s</td>
            </tr>
            <tr>
              <td>Formed</td>
              <td>1993</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>France</td>
            </tr>
            <tr>
              <td>Town</td>
              <td>Paris, Ile de France</td>
            </tr>
            <tr>
              <td>Genre</td>
              <td>Electronic</td>
            </tr>
            <tr>
              <td>Style</td>
              <td>
                <tr>
                  Eletronica
                </tr>
                <tr>
                  House
                </tr>
                <tr>
                  Progressive House
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
                Daft Punk is a French electronic music duo formed in Paris in
                1993 by Guy-Manuel de Homem-Christo and Thomas Bangalter (born
                January 3, 1975) They achieved popularity in the late 1990s as
                part of the French house movement; they also had success in the
                years following, combining elements of house music with funk,
                techno, disco, rock and synthpop. They have worn ornate helmets
                and gloves to assume robot personas in most public appearances
                since 1999 and rarely grant interviews or appear on television.
                The duo were managed from 1996 to 2008 by Pedro Winter (also
                known as Busy P), the head of Ed Banger Records. After Bangalter
                and Homem-Christo's indie rock band Darlin' disbanded, they
                began experimenting with drum machines and synthesisers. Their
                debut studio album Homework was released by Virgin Records in
                1997 to positive reviews, backed by singles "Around the World"
                and "Da Funk". Their second album, Discovery, had further
                success, supported by hit singles "One More Time", "Digital
                Love" and "Harder, Better, Faster, Stronger". In March 2005,
                Daft Punk released their third album, Human After All, to mixed
                reviews, though the singles "Robot Rock" and "Technologic"
                achieved success in the United Kingdom. Daft Punk toured
                throughout 2006 and 2007 and released the live album Alive 2007,
                which won a Grammy Award for Best Electronic/Dance Album. They
                composed the score for the film Tron: Legacy, which was released
                in 2010 alongside its soundtrack album. In 2013, Daft Punk left
                Virgin for Columbia Records, and released their fourth album,
                Random Access Memories, to acclaim; lead single "Get Lucky"
                reached the top 10 in the charts of 32 countries. Random Access
                Memories won five Grammy Awards in 2014, including Album of the
                Year and Record of the Year for "Get Lucky". In 2016, Daft Punk
                gained their first number one on the Billboard Hot 100 with the
                song "Starboy", a collaboration with The Weeknd. As of 2015,
                Daft Punk had sold over 12 million albums worldwide.
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
                  alt
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
                  alt
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
                  alt
                />
                <figcaption>Human After All (2005)</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="https://music.apple.com/ca/album/tron-legacy/1442926773">
              <figure>
                <img
                  src="https://ia800409.us.archive.org/20/items/mbid-b9b7641f-9389-342e-8be9-e463bd52fdb9/mbid-b9b7641f-9389-342e-8be9-e463bd52fdb9-2587494081.jpg"
                  alt
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
                  alt
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

<script></script>

<style scoped>
.componentPage {
  height: 100%;
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
