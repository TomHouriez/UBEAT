<template>
  <div class="container">
    <div v-for="aPlaylist in playlists" v-bind:key="aPlaylist.id">
      <PlaylistCard :name="aPlaylist.name" :tracks="aPlaylist.tracks">
      </PlaylistCard>
    </div>
  </div>
</template>
<script>
import PlaylistCard from "./PlaylistCard.vue";

import { fetchUserPlaylists } from "../scripts/PlaylistsApi";

export default {
  components: {
    PlaylistCard: PlaylistCard
  },
  data() {
    return {
      playlists: []
    };
  },
  methods: {},
  async created() {
    this.playlists = await fetchUserPlaylists();
  }
};
</script>
<style scoped>
.container {
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
