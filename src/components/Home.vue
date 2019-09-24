<template>
  <section class="home_page">
    <header class="title_home">
      <nav>
        <ul>
          <li class="album-link">
            <router-link to="/album" class="mobile-menu is-white">
              <b-icon  icon="view-dashboard" type="is-primary" class="space"></b-icon>
              Album
            </router-link>
          </li>
          <li class="artist-link">
            <router-link to="/artist" class="mobile-menu">
              <b-icon  icon="account" type="is-primary" class="space"></b-icon>
              Artist
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main id="dark">
      <section id="icons">
        <i class="material-icons">arrow_back</i>
        <i class="material-icons">arrow_forward</i>
      </section>
      <h3 class="title">Music Sharing Platform</h3>
      <section class="group">
        <div class="card">
          <img class="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7eLwvqB0SacPnBkaCm-8aoQMLIkIScfl9mZiraw3FQVk59FLOHg"/>
          <div class="card-content">
            <p class="card-overline"><i class="material-icons">music_note</i>Slow</p>
            <h5 class="card-title">I Don't Care</h5>
            <p class="card-subtitle">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="card">
          <img class="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7eLwvqB0SacPnBkaCm-8aoQMLIkIScfl9mZiraw3FQVk59FLOHg"/>
          <div class="card-content">
            <p class="card-overline"><i class="material-icons">music_note</i>Country</p>
            <h5 class="card-title">I Don't Care</h5>
            <p class="card-subtitle">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="card">
          <img class="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7eLwvqB0SacPnBkaCm-8aoQMLIkIScfl9mZiraw3FQVk59FLOHg"/>
          <div class="card-content">
            <p class="card-overline"><i class="material-icons">music_note</i>Soul</p>
            <h5 class="card-title">I Don't Care</h5>
            <p class="card-subtitle">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="card">
          <img class="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7eLwvqB0SacPnBkaCm-8aoQMLIkIScfl9mZiraw3FQVk59FLOHg"/>
          <div class="card-content">
            <p class="card-overline"><i class="material-icons">music_note</i>Pop</p>
            <h5 class="card-title">I Don't Care</h5>
            <p class="card-subtitle">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>
      <section class="group">
        <div class="card">
          <div class="card-content">
            <p class="card-overline"><i class="material-icons">music_note</i>Jazz</p>
            <h5 class="card-title">I Don't Care</h5>
            <p class="card-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent quis orci maximus, tempor eros sit amet, accumsan arcu.
            </p>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="avatar">
                <img src="https://material-ui.com/static/images/avatar/3.jpg" alt="artist"/>
              </div>
              &nbsp;Toby M.
            </div>
            <div class="row">
              <i class="material-icons">favorite</i>&nbsp;896
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <p class="card-overline"><i class="material-icons">music_note</i>Country</p>
            <h5 class="card-title">I Don't Care</h5>
            <p class="card-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent quis orci maximus, tempor eros sit amet, accumsan arcu.
            </p>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="avatar">
                <img src="https://material-ui.com/static/images/avatar/2.jpg"/>
              </div>
              &nbsp;Lil W.
            </div>
            <div class="row">
              <i class="material-icons">favorite</i>&nbsp;896
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <p class="card-overline"><i class="material-icons">music_note</i>Rap</p>
            <h5 class="card-title">I Don't Care</h5>
            <p class="card-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent quis orci maximus, tempor eros sit amet, accumsan arcu.
            </p>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="avatar">
                <img src="https://material-ui.com/static/images/avatar/1.jpg"/>
              </div>
              &nbsp;Steven B.
            </div>
            <div class="row">
              <i class="material-icons">favorite</i>&nbsp;896
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <p class="card-overline"><i class="material-icons">music_note</i>Pop</p>
            <h5 class="card-title">I Don't Care</h5>
            <p class="card-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent quis orci maximus, tempor eros sit amet, accumsan arcu.
            </p>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="avatar">
                <img src="https://material-ui.com/static/images/avatar/4.jpg"/>
              </div>
              &nbsp;Jack R.
            </div>
            <div class="row">
              <i class="material-icons">favorite</i>&nbsp;896
            </div>
          </div>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
    export default {
        name: "Home",
        data: () => ({
            name: '10 Best Things to Do in Seattle',
            category: 'Travel',
            image: 'https://source.unsplash.com/DnWYw0zLJBg',
            author: 'Katherine Kato',
            desc: `Seattle is a seaport city on the west coast of the United States...`
        })
    }
</script>

<style scoped>
  .home_page {
    display: flex;
    justify-content: flex-start;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
  }
  .title_home {
    width: 150px;
    padding-top: 30px;
    background-color: black;
  }
  .main_content {
    background-color: black;
    display: flex;
  }
  .home-link, .artist-link, .album-link {
    height: 60px;
    width: 100%;
  }
  .space {
    margin-left: 5px;
  }

  .mobile-menu {
    color: white;
  }

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');


  @mixin transition($args...) {
    transition: $args;
  }

  * {
    box-sizing: border-box;
    &::before, &::after {
      box-sizing: border-box;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 24px;
    font: 16px BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .avatar {
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 50%;
  }
  .avatar img {
    width: 32px;
    height: 32px;
  }

  #icons {
    color: #404040;
  }

  .title {
    margin: 8px 0 0;
    font-size: 34px;
    font-weight: 100;
  }

  .group {
    display: flex;
    margin: 16px 0 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 16px 0 0;
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    overflow: hidden;
  }
  .card .card-content {
    padding: 16px;
  }
  .card .card-image {
    background-size: cover;
    width: 100%;
    height: 128px;
  }
  .card .card-overline {
    display: flex;
    margin: 0 0 4px;
    font-size: 14px;
    font-weight: 400;
    color: #404040;
  }
  .card .card-overline i {
    font-size: 18px;
  }
  .card .card-title {
    margin: 0 0 4px;
    font-size: 20px;
    font-weight: 400;
  }
  .card .card-subtitle {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: #404040;
  }
  .card .card-footer {
    display: flex;
    justify-content: space-between;
    padding: 0 16px 16px;
  }

  main#dark {
    background: #242028;
  }
  main#dark #icons {
    color: #808080;
  }
  main#dark .title {
    color: white;
  }
  main#dark .card {
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.3);
  }
  main#dark .card .card-overline, body#dark .card .card-subtitle {
    color: #808080;
  }
  main#dark .card .card-title {
    color: white;
  }

  @media only screen and (max-width: 767px) {
    .title_home {
      width: 70px;
      background-color:black;
      padding: 10px;
    }
    .home-link, .artist-link, .album-link {
      margin-bottom: 10px;
    }
  }


  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .group {
      flex-wrap: wrap;
    }
    .group .card {
      flex: 1 1 15%;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .group {
      flex-wrap: wrap;
    }
    .group .card {
      flex: 1 1 15%;
    }
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 1200px) {
    .group {
      flex-wrap: wrap;
    }
    main {
      width: 100%;
    }

  }
</style>
