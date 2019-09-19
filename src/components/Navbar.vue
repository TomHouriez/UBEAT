<!--<template>
  <section class="team-navbar">
    <b-icon icon="settings" class="myIcon"></b-icon>
    <div class="boxe box1">
      <img class="logo"
           src="../assets/A19Team01-logo.png"
           alt="Lightweight UI components for Vue.js based on Bulma"
      >
    </div>
    <div class="boxe box2">
      <a class="read">Liste de lectures</a>
    </div>
    <section id="content" class="boxe box3">
      <form>
        <input
          type="text"
          required
          id="search-box"
          class="search-box"
          placeholder="Selectionner or rechercher les mots ici...."
          list="dropdown-list"
        >
        <datalist id="dropdown-list">
          <option value="Universite Laval"></option>
          <option value="Le Basketball dans les rues"></option>
          <option value="L'intelligence des affaires"></option>
          <option value="L'Universite Laval comparer avec Toronto"></option>
          <option value="Les nouvelles de l'Universite Laval"></option>
          <option value="Le campus universitaire"></option>
          <option value="Les repas moins dispendieux pour l'Universite"></option>
        </datalist>
        <button
          type="reset"
          class="position-button"
        >
          X
        </button>
        <p id="no-result"> Pas de resultats</p>
      </form>
    </section>
    <section class="boxe box4">
      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <b-dropdown
            v-model="navigation"
            position="is-bottom-left"
            aria-role="menu">
            <a
              class="navbar-item"
              slot="trigger"
              role="button">
              <span>
                 <img src="https://s3.amazonaws.com/uifaces/faces/twitter/heyimjuani/128.jpg" width="28" height="28">
              </span>
              <b-icon icon="menu-down" type="is-white"></b-icon>
            </a>

            <b-dropdown-item custom aria-role="menuitem">
              Logged as <b>{{nom}}</b>
            </b-dropdown-item>
            <hr class="dropdown-divider" aria-role="menuitem">
            <b-dropdown-item value="settings">
              <b-icon icon="settings"></b-icon>
              Profile
            </b-dropdown-item>
            <b-dropdown-item value="logout" aria-role="menuitem">
              <b-icon icon="logout"></b-icon>
              Deconnexion
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </section>
  </section>
</template> -->

<script>
export default {
name: 'NavBar',
props: {
    msg: String,
    type: String,
},
data(){
  return {
      nom: "Justin Djeumene",
      navigation: 'home'
  }
},
mounted(){

},
methods: {

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.search-box {
  width: 550px;
  min-height: 35px;
  border-radius: 4px;
}

input:focus {
  outline-offset: 0;
  border: #270B99 2px solid;
}

:focus {
  outline: none;
}

input {
  border: #ddd 2px solid;
  padding: 4px 5px;
  font-size: 15px;
}

p {
  color: #fff;
  display: none;
  margin: 2px;
}

button {
  width: 20px;
  color: #fff;
  background-color:crimson;
  border-style: none;
  padding-left: auto;
}

.position-button {
  position: relative;
  z-index: 1;
  left: -35px;
  display: none;
}

option {
  font-size: 20px;
}

.logo {
  height: 19px;
}

.team-navbar {
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(90deg, #5C101A 0, #270B99 100%);
}

.boxe {
  flex: 1 0 0;
  padding: 10px;
}
.box3 {
  flex: 4;
}
.box1 {
  flex: 0.5;
}
.box2 {
  flex: 0.5;
}
.box4{
  padding: 0;
}
p {
  color: white;
}

.myIcon {
  display: none;
}
.read {
  color: white;
}
div:hover {

}

.navbar-end {
  background-color: transparent;
}
@media only screen and (max-width: 600px) {
  .team-navbar{
    flex-wrap:wrap;
    justify-content: center;
  }
  .boxe {
    flex:1 1 50%;
  }
  .box4 {
    max-width: 50px;
    height: 50px;
    color: transparent;
  }
  .search-box{
    width: 250px;
    min-height: 35px;
    border-radius: 4px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 601px) {
  .team-navbar{
    flex-wrap:wrap;
    height: 75px;
  }

  .boxe {
    flex:1 1 25%;
  }
  .box4 {

  }
  .box1,
  .box2 {
    flex: 0.75;
  }
  .box3 {
    flex: 2;
  }
  .search-box {
    max-width: 250px;
    min-height: 35px;
    border-radius: 4px;
  }
}

  /* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .team-navbar {
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(90deg, #5C101A 0, #270B99 100%);
    width: 100vw;
    padding-right: 30px;
    margin-left: 0;

  }

  .boxe {
    flex: 1 0 0;
    padding: 10px;
  }

  .box3 {
    flex: 4;
  }

  .box1 {
    flex: 0.5;
  }

  .box2 {
    flex: 0.5;
  }

  .box4 {
    padding: 0;
  }
}
</style>
