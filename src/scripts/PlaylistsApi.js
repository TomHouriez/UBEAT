const BASE_UBEAT_URL = "http://ubeat.herokuapp.com/unsecure";

const USER_EMAIL = "f.r@gmail.com";
const USER_ID = "5daf81e46134f50004862ef9";

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
  const response = await fetch(
    "http://ubeat.herokuapp.com/unsecure/playlists",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        owner: USER_EMAIL,
        name: playlistName
      })
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const updatePlaylistName = async (playlistID, newPlaylistName) => {
  const response = await fetch(
    `http://ubeat.herokuapp.com/unsecure/playlists/${playlistID}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        owner: USER_EMAIL,
        name: newPlaylistName
      })
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const deletePlaylist = async playlistID => {
  const response = await fetch(
    `http://ubeat.herokuapp.com/unsecure/playlists/${playlistID}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        owner: USER_EMAIL
      })
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const addTrackToPlaylist = async (playlistID, jsonTrack) => {
  const response = await fetch(
    `http://ubeat.herokuapp.com/unsecure/playlists/${playlistID}/tracks`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(jsonTrack)
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const deleteTrackInPlaylist = async (playlistID, trackID) => {
  const response = await fetch(
    `http://ubeat.herokuapp.com/unsecure/playlists/${playlistID}/tracks/${trackID}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        owner: USER_EMAIL
      })
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};
