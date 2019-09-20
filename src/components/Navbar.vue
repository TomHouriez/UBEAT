<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img
          src="../assets/A19Team01-logo-white.png"
          alt="A19-Team-01"
          class="logo"
        >
      </a>
      <a class="navbar-item listes-tablet-show-only is-white">
        Listes de lectures
      </a>
      <a class="navbar-item search-tablet-show-only">
        <div class="control has-icons-left"  >
          <input class="input" type="search" placeholder="Select or search for musics.....">
          <span class="icon is-left">
              <i class="fas fa-search"></i>
             </span>

        </div>
      </a>

      <div class="dropdown is-hoverable user-tablet-show-only">
        <div class="dropdown-trigger">
          <a  aria-haspopup="true" aria-controls="dropdown-menu">
                          <span>
                             <img src="https://s3.amazonaws.com/uifaces/faces/twitter/heyimjuani/128.jpg"  class="img-menu">
                          </span>
            <b-icon icon="menu-down" type="is-white"></b-icon>
            <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                          </span>
          </a>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">
              Active dropdown item
            </a>
            <a href="#" class="dropdown-item">
              Settings
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item">
              Sign out
            </a>
          </div>
        </div>
      </div>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item desktop is-white" href="#">
          Listes de lectures
        </a>
        <a class="navbar-item desktop tablet">
          <div class="control has-icons-left"  >
            <input class="input search" type="search" placeholder="Select or search for musics....">
            <span class="icon is-left">
                <i class="fas fa-search"></i>
             </span>

          </div>
        </a>

      </div>
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <span class="icon is-medium"><i class="fa fa-user"></i></span>
            <span>
                             <img src="https://s3.amazonaws.com/uifaces/faces/twitter/heyimjuani/128.jpg"  class="img-menu">
                        </span>
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              <span class="icon"><i class="fa fa-sign-out"></i></span>
              <span>Sign out</span>
            </a>
            <a class="navbar-item">
              <span class="icon"><i class="fa fa-cog"></i></span>
              <span>Settings</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "Navbar2",
        mounted() {
            document.addEventListener('DOMContentLoaded', () => {

                // Get all "navbar-burger" elements
                const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

                // Check if there are any navbar burgers
                if ($navbarBurgers.length > 0) {

                    // Add a click event on each of them
                    $navbarBurgers.forEach( el => {
                        el.addEventListener('click', () => {

                            // Get the target from the "data-target" attribute
                            const target = el.dataset.target;
                            const $target = document.getElementById(target);

                            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                            el.classList.toggle('is-active');
                            $target.classList.toggle('is-active');

                        });
                    });
                }

            });
        }
    }
</script>

<style scoped>

  .logo {
    height: 19px;
  }
  .navbar {
    background-color: #333;
    padding-left: 15px;
    padding-right: 15px;
  }


  /* Mobile devices up to 768px */
  @media only screen and (max-width: 767px) {
    .navbar-item.search-tablet-show-only, .user-tablet-show-only, .navbar-item.listes-tablet-show-only {
      display: none;
    }
    .img-menu {
      width: 28px;
      border-radius: 50%;
      margin-top: 15px;
      margin-left: 50px;
    }

    a.navbar-burger.burger {
      color: white;
    }

  }

  /* Tablets devices from 769px */
  @media only screen and (min-width: 768px) {

    .user-tablet-show-only {
      margin-left: 90px;
    }
    a.navbar-burger.burger {
      display: none;
    }
    .img-menu {
      width: 28px;
      border-radius: 50%;
      margin-top: 12px;

    }

    .search {
      width: 300px;
      margin-left: 50px;
    }
    .search:hover {
      background-color: transparent;
    }
    .navbar-item:hover {
      background-color: transparent;
      color: white;
    }
    .navbar-item:focus, .navbar-item:active, .navbar-item:focus-within {
      background-color: transparent;
    }
    .navbar-item {
      color: white;
    }

  }


  /* Desktop devices from 1024px */
  @media only screen and (min-width: 1024px) {
    a.navbar-burger.burger {
      display: none;
    }
    .search-tablet-show-only, .user-tablet-show-only, .listes-tablet-show-only {
      display: none;
    }

    input.search {
      width: 500px;
      margin-left: 100px;
    }

    .search:hover {
      background-color: transparent;
    }
    .navbar-item:hover {
      background-color: transparent;
      color: white;
    }
    .navbar-item:focus, .navbar-item:active, .navbar-item:focus-within {
      background-color: transparent;
    }
    .navbar-item {
      color: white;
    }
  }

  /* Wide screens devices from 1216px */
  @media only screen and (min-width: 1216px) {
    input.search {
      width: 600px;
      margin-left: 150px;
    }
    .search:hover {
      background-color: transparent;
    }
    .navbar-item:hover {
      background-color: transparent;
      color: white;
    }
    .navbar-item:focus, .navbar-item:active, .navbar-item:focus-within {
      background-color: transparent;
    }
    .navbar-item {
      color: white;
    }
  }

  /* Full HD devices from 1408px */
  @media only screen and (min-width: 1408px) {
    .search:hover {
      background-color: transparent;
    }
    .navbar-end > .navbar-item:hover {
      background-color: transparent;
    }
    .navbar-end > .navbar-item:focus, .navbar-item:active, .navbar-item:focus-within {
      background-color: transparent;
    }
    .navbar-item.has-dropdown:hover, .navbar-link {
      background-color: transparent;
    }
  }
</style>
