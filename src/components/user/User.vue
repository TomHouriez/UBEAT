<template>
  <div class="userPage">
    <UserCard
      v-bind:key="userData.email"
      :userData="userData"
      :showButton="showButton"
    >
    </UserCard>
    <p class="sectionHeader">Playlists:</p>

    <div class="playlistsContainer">
      <div v-for="aPlaylist in playlists" v-bind:key="aPlaylist.id">
        <router-link
          v-if="aPlaylist.owner.id != owner"
          :to="{
            name: 'PlaylistDetail',
            params: { id: aPlaylist.id, own: false }
          }"
        >
          <PlaylistCard :name="aPlaylist.name" :tracks="aPlaylist.tracks">
          </PlaylistCard
        ></router-link>
        <router-link
          v-else
          :to="{
            name: 'PlaylistDetail',
            params: { id: aPlaylist.id, own: true }
          }"
        >
          <PlaylistCard :name="aPlaylist.name" :tracks="aPlaylist.tracks">
          </PlaylistCard
        ></router-link>
      </div>
    </div>

    <p class="sectionHeader">Friends:</p>
    <div class="friendsContainer">
      <UserCard
        v-for="aUser in userData.following"
        v-bind:key="aUser.email"
        :userData="aUser"
        :showButton="true"
      >
      </UserCard>
    </div>
  </div>
</template>

<script>
import PlaylistCard from "@/components/playlist/PlaylistCard.vue";
import UserCard from "@/components/user/UserCard";
import { getUserInfo } from "../../scripts/UserApi.js";
import { fetchFollowerPlaylists } from "../../scripts/PlaylistsApi";
import { getToken, getTokenInfo } from "../../scripts/Config";

export default {
  components: {
    UserCard: UserCard,
    PlaylistCard: PlaylistCard
  },
  props: {
    showButton: {
      type: Boolean
    }
  },
  data() {
    return {
      id: null,
      route: window.location.hash,
      userData: {},
      playlists: [],
      error: "",
      owner: false
    };
  },
  async created() {
    this.loadData();
    const token = await getToken();
    const tokenInfo = await getTokenInfo(token);
    this.owner = tokenInfo.id;
  },
  methods: {
    async loadData() {
      this.id = this.$route.params.id;
      this.playlists = await fetchFollowerPlaylists(this.id);
      try {
        this.userData = await getUserInfo(this.id);
      } catch {
        this.error = "Unable to load user";
      }
    }
  },
  watch: {
    async $route() {
      this.loadData();
    }
  }
};
</script>

<style scoped>
.sectionHeader {
  text-decoration: underline;
  font-weight: bold;
  font-size: 150%;
  margin-left: 5px;
}

.playlistsContainer {
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.friendsContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
