import Vue from "vue";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

const UBEAT_BASE_URL = "http://ubeat.herokuapp.com";

const BASE_TOP_URL = "https://itunes.apple.com/ca/rss";
const TADB_BASE_URL = "https://www.theaudiodb.com/api/v1/json/1";
const MB_BASE_URL = "https://musicbrainz.org/ws/2";

const getTokenInfo = async token => {
  const response = await fetch(`${UBEAT_BASE_URL}/tokenInfo`, {
    method: "GET",
    headers: {
      Authorization: token
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

const getToken = () => {
  return VueCookies.get("token");
};
const getUserEmail = () => {
  return VueCookies.get("email");
};
const getUsername = () => {
  return VueCookies.get("name");
};
const getUserId = () => {
  return VueCookies.get("id");
};

export {
  UBEAT_BASE_URL,
  BASE_TOP_URL,
  TADB_BASE_URL,
  MB_BASE_URL,
  getToken,
  getTokenInfo,
  getUserEmail,
  getUsername,
  getUserId
};
