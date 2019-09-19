<template>
  <div class="componentPage">
    <div class="container">


      <div class="albumDataContainer">
        <img src="https://m.media-amazon.com/images/I/71s99Vs2E-L._SS500_.jpg" />
        <p>Album: Alive 2007</p>
        <p>Artist: Daft Punk</p>
        <p>Release Date: 2007/11/19</p>
        <p>Genre: House</p>
        <p>13 songs</p>
        <a href="https://geo.music.apple.com/ca/album/alive-2007/742555152?mt=1&app=music" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2007-11-14&kind=album&bubble=apple_music) no-repeat;width:158px;height:45px;"></a>
      </div>

      <div class="albumTracksContainer">
        <b-table class="trackTable"
          :data="trackList"
          :hoverable="true">

          <template slot-scope="props">
                <b-table-column field="trackNumber" label="#" width="40"  >
                    {{ props.row.trackNumber }}
                </b-table-column>
                <b-table-column field="trackName" label="Title" width="40"  >
                    {{ props.row.trackName }}
                </b-table-column>
                <b-table-column field="artistName" label="Artists" width="40"  >
                    {{ props.row.artistName }}
                </b-table-column>
                <b-table-column field="trackLength" label="Length" width="40"  >
                    {{ millisToMinutes(props.row.trackTimeMillis) }}
                </b-table-column>

                <!-- <b-table-column field="genre" label="genre" width="40" sortable numeric>
                    {{ props.row.primaryGenreName }}
                </b-table-column> -->

                <b-table-column field="play" label="Play" width="40">
                    <span>
                        <a href="#"><b-icon pack="fas" icon="play-circle" type="is-success" /></a>
                    </span>
                </b-table-column>
            </template>
        </b-table>


      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

//test icons
Vue.use(Buefy, { defaultIconPack: 'fal' });

export default {
  name: 'HelloWorld',
  data () {
    return {
      albumData: {
            "wrapperType": "collection",
            "collectionType": "Album",
            "artistId": 116851,
            "collectionId": 1125488753,
            "amgArtistId": 211247,
            "artistName": "Blink-182",
            "collectionName": "Enema of the State",
            "collectionCensoredName": "Enema of the State",
            "artistViewUrl": "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
            "collectionViewUrl": "https://itunes.apple.com/us/album/enema-of-the-state/id325483?uo=4",
            "artworkUrl60": "https://m.media-amazon.com/images/I/71s99Vs2E-L._SS500_.jpg",
            "artworkUrl100": "https://m.media-amazon.com/images/I/71s99Vs2E-L._SS500_.jpg",
            "collectionPrice": 9.99,
            "collectionExplicitness": "explicit",
            "contentAdvisoryRating": "Explicit",
            "trackCount": 12,
            "copyright": "℗ 1999 Geffen Records",
            "country": "USA",
            "currency": "USD",
            "releaseDate": "1999-05-25T07:00:00Z",
            "primaryGenreName": "Alternative"
        },
      trackList: [
        {
          "wrapperType": "track",
          "kind": "song",
          "artistId": 116851,
          "collectionId": 325483,
          "trackId": 325479,
          "artistName": "Blink-182",
          "collectionName": "Enema of the State",
          "trackName": "Dumpweed",
          "collectionCensoredName": "Enema of the State",
          "trackCensoredName": "Dumpweed",
          "artistViewUrl": "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
          "collectionViewUrl": "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          "trackViewUrl": "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          "previewUrl": "http://a816.phobos.apple.com/us/r1000/118/Music/e6/86/40/mzm.xhlwhbtm.aac.p.m4a",
          "artworkUrl30": "http://a1.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.30x30-50.jpg",
          "artworkUrl60": "http://a3.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.60x60-50.jpg",
          "artworkUrl100": "http://a2.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.100x100-75.jpg",
          "collectionPrice": 9.99,
          "trackPrice": 1.29,
          "releaseDate": "1999-05-25T07:00:00Z",
          "collectionExplicitness": "explicit",
          "trackExplicitness": "explicit",
          "discCount": 1,
          "discNumber": 1,
          "trackCount": 12,
          "trackNumber": 1,
          "trackTimeMillis": 143862,
          "country": "USA",
          "currency": "USD",
          "primaryGenreName": "Alternative",
          "contentAdvisoryRating": "Explicit",
          "radioStationUrl": "https://itunes.apple.com/station/idra.325479"
      },
      {
          "wrapperType": "track",
          "kind": "song",
          "artistId": 116851,
          "collectionId": 325483,
          "trackId": 325479,
          "artistName": "Blink-182",
          "collectionName": "Enema of the State",
          "trackName": "Dumpweed",
          "collectionCensoredName": "Enema of the State",
          "trackCensoredName": "Dumpweed",
          "artistViewUrl": "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
          "collectionViewUrl": "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          "trackViewUrl": "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          "previewUrl": "http://a816.phobos.apple.com/us/r1000/118/Music/e6/86/40/mzm.xhlwhbtm.aac.p.m4a",
          "artworkUrl30": "http://a1.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.30x30-50.jpg",
          "artworkUrl60": "http://a3.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.60x60-50.jpg",
          "artworkUrl100": "http://a2.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.100x100-75.jpg",
          "collectionPrice": 9.99,
          "trackPrice": 1.29,
          "releaseDate": "1999-05-25T07:00:00Z",
          "collectionExplicitness": "explicit",
          "trackExplicitness": "explicit",
          "discCount": 1,
          "discNumber": 1,
          "trackCount": 12,
          "trackNumber": 1,
          "trackTimeMillis": 143862,
          "country": "USA",
          "currency": "USD",
          "primaryGenreName": "Alternative",
          "contentAdvisoryRating": "Explicit",
          "radioStationUrl": "https://itunes.apple.com/station/idra.325479"
      },
      {
          "wrapperType": "track",
          "kind": "song",
          "artistId": 116851,
          "collectionId": 325483,
          "trackId": 325479,
          "artistName": "Blink-182",
          "collectionName": "Enema of the State",
          "trackName": "Dumpweed",
          "collectionCensoredName": "Enema of the State",
          "trackCensoredName": "Dumpweed",
          "artistViewUrl": "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
          "collectionViewUrl": "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          "trackViewUrl": "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          "previewUrl": "http://a816.phobos.apple.com/us/r1000/118/Music/e6/86/40/mzm.xhlwhbtm.aac.p.m4a",
          "artworkUrl30": "http://a1.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.30x30-50.jpg",
          "artworkUrl60": "http://a3.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.60x60-50.jpg",
          "artworkUrl100": "http://a2.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.100x100-75.jpg",
          "collectionPrice": 9.99,
          "trackPrice": 1.29,
          "releaseDate": "1999-05-25T07:00:00Z",
          "collectionExplicitness": "explicit",
          "trackExplicitness": "explicit",
          "discCount": 1,
          "discNumber": 1,
          "trackCount": 12,
          "trackNumber": 1,
          "trackTimeMillis": 143862,
          "country": "USA",
          "currency": "USD",
          "primaryGenreName": "Alternative",
          "contentAdvisoryRating": "Explicit",
          "radioStationUrl": "https://itunes.apple.com/station/idra.325479"
      },
      {
          "wrapperType": "track",
          "kind": "song",
          "artistId": 116851,
          "collectionId": 325483,
          "trackId": 325479,
          "artistName": "Blink-182",
          "collectionName": "Enema of the State",
          "trackName": "Dumpweed",
          "collectionCensoredName": "Enema of the State",
          "trackCensoredName": "Dumpweed",
          "artistViewUrl": "https://itunes.apple.com/us/artist/blink-182/id116851?uo=4",
          "collectionViewUrl": "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          "trackViewUrl": "https://itunes.apple.com/us/album/dumpweed/id325483?i=325479&uo=4",
          "previewUrl": "http://a816.phobos.apple.com/us/r1000/118/Music/e6/86/40/mzm.xhlwhbtm.aac.p.m4a",
          "artworkUrl30": "http://a1.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.30x30-50.jpg",
          "artworkUrl60": "http://a3.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.60x60-50.jpg",
          "artworkUrl100": "http://a2.mzstatic.com/us/r30/Features/cb/72/0e/dj.aoonomrr.100x100-75.jpg",
          "collectionPrice": 9.99,
          "trackPrice": 1.29,
          "releaseDate": "1999-05-25T07:00:00Z",
          "collectionExplicitness": "explicit",
          "trackExplicitness": "explicit",
          "discCount": 1,
          "discNumber": 1,
          "trackCount": 12,
          "trackNumber": 1,
          "trackTimeMillis": 143862,
          "country": "USA",
          "currency": "USD",
          "primaryGenreName": "Alternative",
          "contentAdvisoryRating": "Explicit",
          "radioStationUrl": "https://itunes.apple.com/station/idra.325479"
      }
      ],
    }
  },
  methods: {
    millisToMinutes: function (timeMillis) {
      var result = "";
      var minutes = parseInt(timeMillis / 60000);
      var seconds = timeMillis % 60000;
      seconds = (seconds + "").slice(0, 2);
      result = minutes + "." + seconds;
      return result
    }
  }
}
</script>

<style>

.componentPage {
  width: 100%;
  height: 100%;
}
.container {
  /* margin: 0; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.albumDataContainer {
  /* max-width: 300px; */
  min-width: 200px;
  flex-grow: 1;
  height: 100%;
  /* background-color: gray; */
  padding: 15px;

}
.albumDataContainer > img {
  max-width: 300px;
  max-height: 300px;
  min-width: 100px;
  min-height: 100px;
  width: 75%;
  height: 75%;
  display: block;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 30px;
}

.albumDataContainer > a {
  display: block !important;
  margin: 0 auto;
  margin-top: 10px;
}

.albumDataContainer > p {
  text-align: center;
}

.albumTracksContainer {
  min-width: 500px;
  flex-grow: 10;
  padding: 15px;
}
.trackTable {

}
</style>
