<template>
  <div class="playlistCardContainer">
    <div class="container">
      <div class="gridContainer" v-if="tracks">
        <div class="gridItem">
          <img v-if="tracks[0]" :src="tracks[0].artworkUrl100" />
        </div>
        <div class="gridItem">
          <img v-if="tracks[3]" :src="tracks[3].artworkUrl100" />
        </div>
        <div class="gridItem">
          <img v-if="tracks[1]" :src="tracks[1].artworkUrl100" />
        </div>
        <div class="gridItem">
          <img v-if="tracks[2]" :src="tracks[2].artworkUrl100" />
        </div>
      </div>
    </div>
    <a>{{ name }}</a>
  </div>
  
</template>

<script>
export default {
  props: ["name", "tracks"]
};
</script>
<style scoped>
.container {
  margin: 10px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.container:hover {
  cursor: pointer;
  opacity: 0.7;
}
.gridContainer {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px 100px;
  background-color: lightgray;
}
.gridItem {
  margin: 2px;
  font-size: 30px;
  text-align: center;
}

a {
  color: rgb(54, 54, 54);
}

a:hover {
  color: rgba(214, 38, 61, 0.882);
}

.playlistCardContainer {
  text-align: center;
}
</style>
