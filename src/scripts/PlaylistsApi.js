const BASE_UBEAT_URL = "http://ubeat.herokuapp.com/unsecure";

import { USER_EMAIL, USER_ID } from "./Config";

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
  const response = await fetch(`${BASE_UBEAT_URL}/playlists`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      owner: USER_EMAIL,
      name: playlistName
    })
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const updatePlaylistName = async (
  playlistID,
  newPlaylistName,
  tracks
) => {
  const response = await fetch(`${BASE_UBEAT_URL}/playlists/${playlistID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      owner: USER_EMAIL,
      name: newPlaylistName,
      tracks: tracks
    })
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const deletePlaylist = async playlistID => {
  const response = await fetch(`${BASE_UBEAT_URL}/playlists/${playlistID}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      owner: USER_EMAIL
    })
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const addTrackToPlaylist = async (playlistID, jsonTrack) => {
  const response = await fetch(
    `${BASE_UBEAT_URL}/playlists/${playlistID}/tracks`,
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
    `${BASE_UBEAT_URL}/playlists/${playlistID}/tracks/${trackID}`,
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
