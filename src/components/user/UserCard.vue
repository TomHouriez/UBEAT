<template>
  <div class="userContainer">
    <div class="iconContainer">
      <i class="fas fa-3x fa-user"></i>
      <p class="name">{{ userData.name }}</p>

      <router-link
        v-if="userData.id"
        :to="{ name: 'User', params: { id: userData.id, showButton: true } }"
        :key="userData.id"
      >
        <a class="email">{{ userData.email }}</a>
      </router-link>
      <div v-if="showButton">
        <b-button v-on:click="followThisUser(userData.id)" v-if="!isFollowed">
          Follow
        </b-button>
        <b-button v-on:click="unfollowThisUser(userData.id)" v-if="isFollowed">
          Unfollow
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  followUser,
  unfollowUser,
  isUserFollowed
} from "../../scripts/FollowApi";

export default {
  props: ["userData", "showButton"],
  data() {
    return {
      isFollowed: false
    };
  },
  methods: {
    async followThisUser(userID) {
      let isFollowed = await isUserFollowed(userID);
      if (!isFollowed) {
        const jsonResponse = await followUser(userID);
        if (jsonResponse) {
          //todo
        }
        this.isFollowed = true;
        this.$buefy.snackbar.open(`User followed`);
      } else {
        this.$buefy.snackbar.open(`Error`);
      }
    },
    async unfollowThisUser(userID) {
      let isFollowed = await isUserFollowed(userID);
      if (!isFollowed) {
        this.$buefy.snackbar.open(`Error`);
      } else {
        await unfollowUser(userID);
        this.$buefy.snackbar.open(`User unfollowed`);
        this.isFollowed = false;
      }
    }
  },
  async created() {
    this.isFollowed = await isUserFollowed(this.$props.userData.id);
  }
};
</script>

<style scoped>
.userContainer {
  display: block;
  margin: 20px;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  text-align: center;
}

.name {
  font-weight: bold;
  color: black;
  padding: 2px;
}

.email {
  padding-bottom: 5px;
}
</style>
