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

      <b-navbar-dropdown hoverable label="Filters" style="width:120px">
        <b-navbar-item>
          <b-checkbox v-model="filters" native-value="artists"
            >Artists</b-checkbox
          >
        </b-navbar-item>
        <b-navbar-item>
          <b-checkbox v-model="filters" native-value="albums"
            >Albums</b-checkbox
          >
        </b-navbar-item>
        <b-navbar-item>
          <b-checkbox v-model="filters" native-value="tracks"
            >Tracks</b-checkbox
          >
        </b-navbar-item>
        <b-navbar-item>
          <b-checkbox v-model="filters" native-value="users">Users</b-checkbox>
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-dropdown hoverable label="Joe Blo" style="width:150px">
        <b-navbar-item href="#">
          <b-icon pack="fas" class="fa fa-cog" type="info" />
          <span>Settings</span>
        </b-navbar-item>
        <b-navbar-item href="#">
          <b-icon pack="fas" class="fa fa-user" type="info" />
          <span>Profile</span>
        </b-navbar-item>
        <b-navbar-item href="#">
          <b-icon pack="fas" class="fa fa-times" type="info" />
          <span>Sign Out</span>
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      filters: ["artists", "albums", "tracks", "users"],
      searchInput: ""
    };
  }
};
</script>

<style scoped>
.searchLine {
  width: 100%;
  min-width: 400px;
  height: 50px;
}

.autocomplete {
  margin-top: 10px;
  margin-left: 30px;
  float: left;
  width: 60%;
  min-width: 400px;
}
.searchButton {
  width: 70px;
  float: left;
  margin-top: 10px;
}
</style>
