<template>
  <div class="componentPage">
    <div class="container">
      <div class="albumDataContainer">
        <div class="albumImageContainer">
          <img
            src="https://m.media-amazon.com/images/I/71s99Vs2E-L._SS500_.jpg"
          />
          <a
            href="https://geo.music.apple.com/ca/album/alive-2007/742555152?mt=1&app=music"
            style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2007-11-14&kind=album&bubble=apple_music) no-repeat;width:158px;height:45px;"
          ></a>
        </div>
        <div class="albumTableDescription">
          <table>
            <tr>
              <td>Album:</td>
              <td>Alive 2007</td>
            </tr>
            <tr>
              <td>Artist:</td>
              <td>Daft Punk</td>
            </tr>
            <tr>
              <td>Release Date:</td>
              <td>2007/11/19</td>
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
          :data="trackList"
          :hoverable="true"
          :mobile-cards="false"
        >
          <template slot-scope="props">
            <b-table-column field="trackNumber" label="#">{{
              props.row.trackNumber
            }}</b-table-column>
            <b-table-column field="trackName" label="Title">{{
              props.row.trackName
            }}</b-table-column>
            <b-table-column
              class="artistName"
              field="artistName"
              label="Artists"
            >
              <span>
                <a :href="props.row.artistViewUrl">{{
                  props.row.artistName
                }}</a>
              </span>
            </b-table-column>
            <b-table-column field="trackLength" label="Length">{{
              millisToMinutes(props.row.trackTimeMillis)
            }}</b-table-column>

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

export default {
  data() {
    return {
      albumData: {
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
      },
      trackList: [
        {
          artistName: "Daft Punk",
          collectionName: "Alive 2007",
          trackName: "Robot Rock / Oh Yeah",
          collectionCensoredName: "Alive 2007",
          trackCensoredName: "Robot Rock / Oh Yeah",
          artistViewUrl: "https://music.apple.com/us/artist/daft-punk/5468295",
          collectionViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          trackViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          previewUrl:
            "http://a816.phobos.apple.com/us/r1000/118/Music/e6/86/40/mzm.xhlwhbtm.aac.p.m4a",
          artworkUrl30:
            "http://a1.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.30x30-50.jpg",
          artworkUrl60:
            "http://a3.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.60x60-50.jpg",
          artworkUrl100:
            "http://a2.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.100x100-75.jpg",
          collectionPrice: 9.99,
          trackPrice: 1.29,
          releaseDate: "1999-05-25T07:00:00Z",
          collectionExplicitness: "explicit",
          trackExplicitness: "explicit",
          discCount: 1,
          discNumber: 1,
          trackCount: 12,
          trackNumber: 1,
          trackTimeMillis: 627000,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Alternative",
          contentAdvisoryRating: "Explicit",
          radioStationUrl: "https://itunes.apple.com/station/idra.325479"
        },
        {
          wrapperType: "track",
          kind: "song",
          artistId: 116851,
          collectionId: 325483,
          trackId: 325479,
          artistName: "Daft Punk",
          collectionName: "Alive 2007",
          trackName: "Touch It / Technologic",
          collectionCensoredName: "Alive 2007",
          trackCensoredName: "Touch It / Technologic",
          artistViewUrl:
            "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
          collectionViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          trackViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          previewUrl:
            "http://a816.phobos.apple.com/us/r1000/118/Music/e6/86/40/mzm.xhlwhbtm.aac.p.m4a",
          artworkUrl30:
            "http://a1.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.30x30-50.jpg",
          artworkUrl60:
            "http://a3.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.60x60-50.jpg",
          artworkUrl100:
            "http://a2.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.100x100-75.jpg",
          collectionPrice: 9.99,
          trackPrice: 1.29,
          releaseDate: "1999-05-25T07:00:00Z",
          collectionExplicitness: "explicit",
          trackExplicitness: "explicit",
          discCount: 1,
          discNumber: 1,
          trackCount: 12,
          trackNumber: 1,
          trackTimeMillis: 143862,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Alternative",
          contentAdvisoryRating: "Explicit",
          radioStationUrl: "https://itunes.apple.com/station/idra.325479"
        },
        {
          wrapperType: "track",
          kind: "song",
          artistId: 116851,
          collectionId: 325483,
          trackId: 325479,
          artistName: "Daft Punk",
          collectionName: "Alive 2007",
          trackName: "Television Rules the Nation / Crescendolls",
          collectionCensoredName: "Alive 2007",
          trackCensoredName: "Television Rules the Nation / Crescendolls",
          artistViewUrl:
            "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
          collectionViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          trackViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          previewUrl:
            "http://a816.phobos.apple.com/us/r1000/118/Music/e6/86/40/mzm.xhlwhbtm.aac.p.m4a",
          artworkUrl30:
            "http://a1.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.30x30-50.jpg",
          artworkUrl60:
            "http://a3.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.60x60-50.jpg",
          artworkUrl100:
            "http://a2.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.100x100-75.jpg",
          collectionPrice: 9.99,
          trackPrice: 1.29,
          releaseDate: "1999-05-25T07:00:00Z",
          collectionExplicitness: "explicit",
          trackExplicitness: "explicit",
          discCount: 1,
          discNumber: 1,
          trackCount: 12,
          trackNumber: 1,
          trackTimeMillis: 143862,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Alternative",
          contentAdvisoryRating: "Explicit",
          radioStationUrl: "https://itunes.apple.com/station/idra.325479"
        },
        {
          wrapperType: "track",
          kind: "song",
          artistId: 116851,
          collectionId: 325483,
          trackId: 325479,
          artistName: "Daft Punk",
          collectionName: "Alive 2007",
          trackName: "Too Long / Steam Machine",
          collectionCensoredName: "Alive 2007",
          trackCensoredName: "Too Long / Steam Machine",
          artistViewUrl:
            "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
          collectionViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          trackViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          previewUrl:
            "http://a816.phobos.apple.com/us/r1000/118/Music/e6/86/40/mzm.xhlwhbtm.aac.p.m4a",
          artworkUrl30:
            "http://a1.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.30x30-50.jpg",
          artworkUrl60:
            "http://a3.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.60x60-50.jpg",
          artworkUrl100:
            "http://a2.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.100x100-75.jpg",
          collectionPrice: 9.99,
          trackPrice: 1.29,
          releaseDate: "1999-05-25T07:00:00Z",
          collectionExplicitness: "explicit",
          trackExplicitness: "explicit",
          discCount: 1,
          discNumber: 1,
          trackCount: 12,
          trackNumber: 1,
          trackTimeMillis: 143862,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Alternative",
          contentAdvisoryRating: "Explicit",
          radioStationUrl: "https://itunes.apple.com/station/idra.325479"
        },
        {
          artistName: "Daft Punk",
          collectionName: "Alive 2007",
          trackName: "Robot Rock / Oh Yeah",
          collectionCensoredName: "Alive 2007",
          trackCensoredName: "Robot Rock / Oh Yeah",
          artistViewUrl:
            "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
          collectionViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          trackViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          previewUrl:
            "http://a816.phobos.apple.com/us/r1000/118/Music/e6/86/40/mzm.xhlwhbtm.aac.p.m4a",
          artworkUrl30:
            "http://a1.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.30x30-50.jpg",
          artworkUrl60:
            "http://a3.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.60x60-50.jpg",
          artworkUrl100:
            "http://a2.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.100x100-75.jpg",
          collectionPrice: 9.99,
          trackPrice: 1.29,
          releaseDate: "1999-05-25T07:00:00Z",
          collectionExplicitness: "explicit",
          trackExplicitness: "explicit",
          discCount: 1,
          discNumber: 1,
          trackCount: 12,
          trackNumber: 1,
          trackTimeMillis: 627000,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Alternative",
          contentAdvisoryRating: "Explicit",
          radioStationUrl: "https://itunes.apple.com/station/idra.325479"
        },
        {
          wrapperType: "track",
          kind: "song",
          artistId: 116851,
          collectionId: 325483,
          trackId: 325479,
          artistName: "Daft Punk",
          collectionName: "Alive 2007",
          trackName: "Touch It / Technologic",
          collectionCensoredName: "Alive 2007",
          trackCensoredName: "Touch It / Technologic",
          artistViewUrl:
            "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
          collectionViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          trackViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          previewUrl:
            "http://a816.phobos.apple.com/us/r1000/118/Music/e6/86/40/mzm.xhlwhbtm.aac.p.m4a",
          artworkUrl30:
            "http://a1.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.30x30-50.jpg",
          artworkUrl60:
            "http://a3.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.60x60-50.jpg",
          artworkUrl100:
            "http://a2.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.100x100-75.jpg",
          collectionPrice: 9.99,
          trackPrice: 1.29,
          releaseDate: "1999-05-25T07:00:00Z",
          collectionExplicitness: "explicit",
          trackExplicitness: "explicit",
          discCount: 1,
          discNumber: 1,
          trackCount: 12,
          trackNumber: 1,
          trackTimeMillis: 143862,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Alternative",
          contentAdvisoryRating: "Explicit",
          radioStationUrl: "https://itunes.apple.com/station/idra.325479"
        },
        {
          wrapperType: "track",
          kind: "song",
          artistId: 116851,
          collectionId: 325483,
          trackId: 325479,
          artistName: "Daft Punk",
          collectionName: "Alive 2007",
          trackName: "Television Rules the Nation / Crescendolls",
          collectionCensoredName: "Alive 2007",
          trackCensoredName: "Television Rules the Nation / Crescendolls",
          artistViewUrl:
            "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
          collectionViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          trackViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          previewUrl:
            "http://a816.phobos.apple.com/us/r1000/118/Music/e6/86/40/mzm.xhlwhbtm.aac.p.m4a",
          artworkUrl30:
            "http://a1.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.30x30-50.jpg",
          artworkUrl60:
            "http://a3.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.60x60-50.jpg",
          artworkUrl100:
            "http://a2.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.100x100-75.jpg",
          collectionPrice: 9.99,
          trackPrice: 1.29,
          releaseDate: "1999-05-25T07:00:00Z",
          collectionExplicitness: "explicit",
          trackExplicitness: "explicit",
          discCount: 1,
          discNumber: 1,
          trackCount: 12,
          trackNumber: 1,
          trackTimeMillis: 143862,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Alternative",
          contentAdvisoryRating: "Explicit",
          radioStationUrl: "https://itunes.apple.com/station/idra.325479"
        },
        {
          wrapperType: "track",
          kind: "song",
          artistId: 116851,
          collectionId: 325483,
          trackId: 325479,
          artistName: "Daft Punk",
          collectionName: "Alive 2007",
          trackName: "Too Long / Steam Machine",
          collectionCensoredName: "Alive 2007",
          trackCensoredName: "Too Long / Steam Machine",
          artistViewUrl:
            "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
          collectionViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          trackViewUrl:
            "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          previewUrl:
            "http://a816.phobos.apple.com/us/r1000/118/Music/e6/86/40/mzm.xhlwhbtm.aac.p.m4a",
          artworkUrl30:
            "http://a1.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.30x30-50.jpg",
          artworkUrl60:
            "http://a3.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.60x60-50.jpg",
          artworkUrl100:
            "http://a2.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.100x100-75.jpg",
          collectionPrice: 9.99,
          trackPrice: 1.29,
          releaseDate: "1999-05-25T07:00:00Z",
          collectionExplicitness: "explicit",
          trackExplicitness: "explicit",
          discCount: 1,
          discNumber: 1,
          trackCount: 12,
          trackNumber: 1,
          trackTimeMillis: 143862,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Alternative",
          contentAdvisoryRating: "Explicit",
          radioStationUrl: "https://itunes.apple.com/station/idra.325479"
        }
      ]
    };
  },
  methods: {
    millisToMinutes: function(timeMillis) {
      let result = "";
      let minutes = parseInt(timeMillis / 60000);
      let seconds = timeMillis % 60000;
      seconds = (seconds + "").slice(0, 2);
      result = minutes + "." + seconds;
      return result;
    }
  }
};
</script>

<style>
.componentPage {
  width: 100%;
  height: 100%;
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
