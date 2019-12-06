<template>
  <div class="userPage">
        <UserCard
            v-bind:key="userData.email"
            :userData="userData"
        >
        </UserCard>
        <p class="sectionHeader">Playlists:</p>
        
        <div class="playlistsContainer">
            <div v-for="aPlaylist in playlists" v-bind:key="aPlaylist.id">
            <router-link
                :to="{ name: 'PlaylistDetail', params: { id: aPlaylist.id } }"
            >
                <PlaylistCard :name="aPlaylist.name" :tracks="aPlaylist.tracks">
                </PlaylistCard
            ></router-link>
            </div>
        </div>
  </div>
</template>

<script>
import PlaylistCard from "./PlaylistCard.vue";
import UserCard from "./UserCard";
import { getUserInfo } from "../scripts/UserApi.js";
import {fetchFollowerPlaylists} from "../scripts/PlaylistsApi";
import {followUser, unfollowUser, isUserFollowed} from "../scripts/FollowApi";

export default {
    components: {
        UserCard: UserCard,
        PlaylistCard: PlaylistCard
    },
    data() {
        return {
            id: null,
            userData: {},
            playlists: [],
            error: "",
        };
    },
    async created() {
        this.id = this.$route.params.id;
        this.playlists = await fetchFollowerPlaylists(this.id);
        try {
            this.userData = await getUserInfo(this.id);
        } catch {
            this.error = "Unable to load user";
        }
    },
    methods: {

    }


}
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

</style>