const BASE_UBEAT_URL = "http://ubeat.herokuapp.com/unsecure";

// const USER_ID = "5c8f031f7e3b3e000487d68d";

const USER_ID = "5daf81e46134f50004862ef9";
const USER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1ZGFmODFlNDYxMzRmNTAwMDQ4NjJlZjkiLCJleHAiOjE1NzE4NzI0OTI5NTJ9.QxwZeDhayvQfBmmpBw5QaWaZ1SVxSLbEP8Pb8ZqirQU";

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
      Authorization: USER_TOKEN,
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: playlistName
    })
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const updatePlaylist = async newplaylist => {
  const response = await fetch(
    `http://ubeat.herokuapp.com/playlists/${newplaylist.id}`,
    {
      method: "PUT",
      headers: {
        Authorization: USER_TOKEN
      },
      body: newplaylist
    }
  );
  const jsonResponse = await response.json();
  alert(JSON.stringify(jsonResponse));
  return jsonResponse;
};

export const deletePlaylist = async playlistID => {
  const response = await fetch(
    `http://ubeat.herokuapp.com/playlists/${playlistID}`,
    {
      method: "DELETE",
      headers: {
        Authorization: USER_TOKEN,
        "Content-type": "application/json"
      }
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const addTrackToPlaylist = async (playlistID, jsonTrack) => {
  const response = await fetch(
    `http://ubeat.herokuapp.com/playlists/${playlistID}/tracks`,
    {
      method: "POST",
      headers: {
        Authorization: USER_TOKEN,
        "Content-type": "application/json"
      },
      body: JSON.stringify(jsonTrack)
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};
