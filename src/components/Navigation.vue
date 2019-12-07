<template>
  <b-navbar :fixed-top="true" type="is-dark">
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <b-icon pack="fas" icon="home" type="info" />
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/playlists' }">
        Playlists
      </b-navbar-item>

      <div class="searchLine">
        <b-autocomplete
          v-model="searchInput"
          icon-pack="fas"
          icon="search"
          class="autocomplete"
          placeholder="Search"
          :data="searchData"
          @typing="getSearchData"
          @select="select"
        >
        </b-autocomplete>
        <b-button class="searchButton" v-on:click="search()">Search</b-button>
      </div>

      <b-navbar-dropdown hoverable label="Filters" class="navbarDropdown">
        <b-navbar-item>
          <b-checkbox @change.native="search()" v-model="filters" native-value="albums"
            >Albums</b-checkbox
          >
        </b-navbar-item>
        <b-navbar-item>
          <b-checkbox @change.native="search()" v-model="filters" native-value="tracks"
            >Tracks</b-checkbox
          >
        </b-navbar-item>
        <b-navbar-item>
          <b-checkbox @change.native="search()" v-model="filters" native-value="artists"
            >Artists</b-checkbox
          >
        </b-navbar-item>
        <b-navbar-item>
          <b-checkbox @change.native="search()" v-model="filters" native-value="users">Users</b-checkbox>
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-dropdown hoverable label="Joe Blo" style="width:150px">
        <b-navbar-item href="#">
          <b-icon pack="fas" class="fa fa-cog" type="info" />
          <span>Settings</span>
        </b-navbar-item>
        <router-link v-if="currentUserId" :to="{ name: 'User', params: {id: currentUserId, showButton: false} }" :key="currentUserId" >
          <b-navbar-item href="#">
            <b-icon pack="fas" class="fa fa-user" type="info" />
            <span>Profile</span>
          </b-navbar-item> 
        </router-link>
        <b-navbar-item>
          <div v-on:click="logout()">
            <b-icon pack="fas" class="fa fa-times" type="info" />
            <span>Sign Out</span>
          </div>
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
import { searchGlobal } from "../scripts/SearchApi";
import { getTokenInfo, getToken } from "../scripts/Config";

export default {
  data() {
    return {
      filters: ["artists", "albums", "tracks", "users"],
      oldSearchInput: "",
      searchInput: "",
      currentUserId: null,

      searchJsonData: [],
      searchData: []
    };
  },
  async created() {
    // console.log(this.$cookies.set("token"));
    const token = getToken();
    const tokenInfo = await getTokenInfo(token);
    this.currentUserId = await tokenInfo.id;
  },
  methods: {
    async logout() {
      await fetch("http://ubeat.herokuapp.com/logout", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
      });
      this.$cookies.remove("token");
      this.$router.push("/", () => {});
      location.reload();
    },
    search() {
      if (this.searchInput != "") {
        localStorage.setItem("searchInput", this.searchInput);
        localStorage.setItem("filters", this.filters);
        this.$emit("search");
      }
    },
    async getSearchData() {
      const data = await searchGlobal(this.searchInput, 10);
      this.searchData = [];
      this.searchJsonData = data.results;
      data.results.forEach(aData => {
        if (aData.wrapperType == "artist") {
          this.searchData.push(aData.artistName);
        } else if (aData.wrapperType == "collection") {
          this.searchData.push(aData.collectionName);
        } else if (aData.wrapperType == "track") {
          this.searchData.push(aData.trackName);
        }
      });
    },
    select(selectedValue) {
      this.searchJsonData.forEach(aData => {
        if (
          aData.wrapperType == "artist" &&
          aData.artistName == selectedValue
        ) {
          this.$router.push("/artist/" + aData.artistId);
        } else if (
          aData.wrapperType == "collection" &&
          aData.collectionName == selectedValue
        ) {
          this.$router.push("/album/" + aData.collectionId);
        } else if (
          aData.wrapperType == "track" &&
          aData.trackName == selectedValue
        ) {
          this.$router.push("/album/" + aData.collectionId);
        }
      });
    }
  }
};
</script>

<style scoped>
.searchLine {
  width: 100%;
  min-width: 400px;
  height: 50px;
}

.navbarDropdown {
  width: 120px;
}

@media only screen and (max-width: 1023px) {
  .searchLine {
    width: 100%;
    min-width: 350px;
    height: 50px;
  }

  .autocomplete {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    float: left;
    width: 60%;
    min-width: 150px;
  }
  .searchButton {
    width: 60px;
    float: left;
    margin-top: 10px;
  }
}
@media only screen and (min-width: 1024px) {
  .searchLine {
    width: 100%;
    min-width: 400px;
    height: 50px;
  }

  .autocomplete {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    float: left;
    width: 60%;
    min-width: 400px;
  }
  .searchButton {
    width: 60px;
    float: left;
    margin-top: 10px;
  }
}
</style>
