const BASE_UBEAT_URL = "http://ubeat.herokuapp.com/unsecure";

const USER_ID = "5c8f031f7e3b3e000487d68d";

export const fetchUserPlaylists = async () => {
  const response = await fetch(`${BASE_UBEAT_URL}/users/${USER_ID}/playlists`);
  const jsonResponse = await response.json();
  return jsonResponse;
};
