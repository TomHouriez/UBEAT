<template>
  <b-navbar type="is-dark">
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <b-icon pack="fas" icon="home" type="info" />
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/playlists' }">
        Playlists
      </b-navbar-item>
      <b-navbar-item>
        <b-field>
          <b-input
            placeholder="Search..."
            type="search"
            icon-pack="fas"
            icon="search"
          >
          </b-input>
        </b-field>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-dropdown label="Joe Blo">
        <b-navbar-item href="#">
          Settings
        </b-navbar-item>
        <b-navbar-item href="#">
          Profile
        </b-navbar-item>
        <b-navbar-item href="#">
          Sign out
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script></script>

<style scoped>
/* .navbar {
  background-color: gray;
} */
</style>
