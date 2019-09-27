<template>
  <nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <span class="icon">
          <i class="fas fa-home is-medium"></i>
        </span>
        <router-link to="/">
          <span class="is-black mobile-color">Home</span>
        </router-link>
      </a>
      <a class="navbar-item desktop tablet">
        <a class="button is-black mobile-title-color">Playlist</a>
      </a>
      <a class="navbar-item desktop tablet">
        <div class="control has-icons-left">
          <input
            class="input"
            type="search"
            placeholder="Search or Select your music"
          />
          <span class="icon is-left">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
      </a>
      <div class="dropdown is-hoverable desktop tablet">
        <div class="dropdown-trigger">
          <a
            class="navbar-link"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
          >
            <span class="icon is-medium">
              <i class="fa fa-user"></i>
            </span>
            <span>User</span>
          </a>
        </div>
        <div class="dropdown-menu" id="dropdown-menu3" role="menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              <span class="icon">
                <i class="fa fa-cog"></i>
              </span>
              <span>Settings</span>
            </a>
            <a class="dropdown-item">
              <span class="icon">
                <i class="fa fa-user"></i>
              </span>
              <span>Profile</span>
            </a>
            <a class="dropdown-item">
              <span class="icon">
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
              <span>Sign Out</span>
            </a>
          </div>
        </div>
      </div>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item desktop">
          <a class="is-black">Playlist</a>
        </a>
        <a class="navbar-item desktop tablet" id="input-item">
          <div class="control has-icons-left">
            <input
              class="input"
              type="search"
              placeholder="Search or Select your music"
              id="navbar-input"
            />
          </div>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <span class="icon is-medium">
              <i class="fa fa-user"></i>
            </span>
            <span>User</span>
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              <span class="icon">
                <i class="fa fa-cog"></i>
              </span>
              <span>Settings</span>
            </a>
            <a class="navbar-item">
              <span class="icon">
                <i class="fa fa-user"></i>
              </span>
              <span>Profile</span>
            </a>
            <a class="navbar-item">
              <span class="icon">
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
              <span>Sign Out</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  mounted() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("#" + burger.dataset.target);
    burger.addEventListener("click", function() {
      burger.classList.toggle("is-active");
      nav.classList.toggle("is-active");
    });
    document
      .querySelector("#navbar-input")
      .addEventListener(
        "click",
        () =>
          (document.querySelector("#input-item").style.background = "#0A0A0A")
      );
  }
};
</script>

<style scoped>
/* Mobile devices up to 768px */
@media only screen and (max-width: 767px) {
  .navbar-brand > .navbar-item.desktop,
  .navbar-brand > .dropdown.desktop {
    display: none;
  }
  .mobile-color {
    color: white;
  }
  .mobile-title-color {
    color: black;
  }
}

/* Tablets devices from 769px */
@media only screen and (min-width: 768px) {
  a.navbar-burger.burger {
    display: none;
  }
  .navbar-brand > .dropdown.desktop {
    margin-left: 80px;
  }
  .navbar-item.desktop {
    color: white;
  }
  a.is-black {
    color: white;
  }
  span.is-black {
    color: white;
  }
  .navbar-item:focus-within {
    background-color: black;
    color: white;
  }
  .navbar-item:focus {
    color: white;
  }
}

/* Desktop devices from 1024px */
@media only screen and (min-width: 1024px) {
  a.navbar-burger.burger {
    display: none;
  }
  .navbar-brand > .navbar-item.desktop,
  .navbar-brand > .dropdown.desktop {
    display: none;
  }
  .navbar {
    height: 70px;
  }
}

/* Wide screens devices from 1216px */
@media only screen and (min-width: 1216px) {
  .navbar-start > .desktop {
    margin-left: 15px;
  }
  input.input {
    width: 500px;
    margin-left: 100px;
  }
}

/* Full HD devices from 1408px */
@media only screen and (min-width: 1408px) {
}
</style>
