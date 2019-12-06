import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Album from "@/components/Album";
import Artist from "@/components/Artist";
import Playlists from "@/components/Playlists";
import PlaylistDetail from "@/components/PlaylistDetail";
import Search from "@/components/Search";
import User from "@/components/User";

//Guest
import Login from "../components/Guest/Login.vue";
import Register from "../components/Guest/Register.vue";

Vue.use(Router);

// cookies
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
      path: "/playlist/:id/:own",
      name: "PlaylistDetail",
      component: PlaylistDetail,
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

    //Guest
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
