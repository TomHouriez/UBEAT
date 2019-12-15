import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/common/Home";
import Album from "@/components/album/Album";
import Artist from "@/components/artist/Artist";
import Playlists from "@/components/playlist/Playlists";
import PlaylistDetail from "@/components/playlist/PlaylistDetail";
import Search from "@/components/common/Search";
import User from "@/components/user/User";

import Login from "@/components/user/Login.vue";
import Register from "@/components/user/Register.vue";

Vue.use(Router);

import VueCookies from "vue-cookies";

let router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/artist/:id",
      name: "Artist",
      component: Artist,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/album/:id",
      name: "Album",
      component: Album,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/playlists",
      name: "Playlists",
      component: Playlists,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/playlist/:id",
      name: "PlaylistDetail",
      component: PlaylistDetail,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/user/:id",
      name: "User",
      component: User,
      props: true,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: {
        guest: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (VueCookies.get("token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (VueCookies.get("token") == null) {
      next();
    } else {
      next({ name: "Home" });
    }
  }
});

export default router;
