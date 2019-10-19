const BASE_UBEAT_URL = "http://ubeat.herokuapp.com/unsecure";

const USER_ID = "5c8f031f7e3b3e000487d68d";

export const fetchUserPlaylists = async () => {
  const response = await fetch(`${BASE_UBEAT_URL}/users/${USER_ID}/playlists`);
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const fetchPlaylistByID = async playlistID => {
  const response = await fetch(`${BASE_UBEAT_URL}/playlists/${playlistID}`);
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const addPlaylist = async playlistName => {
  const response = await fetch("http://ubeat.herokuapp.com/playlists", {
    method: "POST",
    headers: {
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1ZGFiNzY5ZGI1ZWVkOTAwMDRkMTFhZmYiLCJleHAiOjE1NzE2MDQ2NDQxNTd9.oWU0nKj94aeWb7x-3widUIHJJrqn-czLiizLtdl04NE"
    },
    body: {
      owner: {
        name: playlistName,
        owner: "michel@gmail.com"
      }
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const addPlaylist2 = async playlistName => {
  const response = await fetch(
    "http://ubeat.herokuapp.com/unsecure/playlists",
    {
      method: "POST",
      body: {
        name: playlistName,
        owner: "michel@gmail.com"
      }
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};
