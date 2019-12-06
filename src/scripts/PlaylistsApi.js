import { UBEAT_BASE_URL, getToken, getUserEmail, getUserId } from "./Config";

export const fetchUserPlaylists = async () => {
  const response = await fetch(
    `${UBEAT_BASE_URL}/users/${getUserId()}/playlists`,
    {
      headers: {
        Authorization: getToken()
      }
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const fetchFollowerPlaylists = async id => {
  const response = await fetch(`${UBEAT_BASE_URL}/users/${id}/playlists`, {
    headers: {
      Authorization: getToken()
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const fetchPlaylistByID = async playlistID => {
  const response = await fetch(`${UBEAT_BASE_URL}/playlists/${playlistID}`, {
    headers: {
      Authorization: getToken()
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const addPlaylist = async playlistName => {
  const response = await fetch(`${UBEAT_BASE_URL}/playlists`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: getToken()
    },
    body: JSON.stringify({
      owner: getUserEmail(),
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
  const response = await fetch(`${UBEAT_BASE_URL}/playlists/${playlistID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken()
    },
    body: JSON.stringify({
      owner: getUserEmail(),
      name: newPlaylistName,
      tracks: tracks
    })
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const deletePlaylist = async playlistID => {
  const response = await fetch(`${UBEAT_BASE_URL}/playlists/${playlistID}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: getToken()
    },
    body: JSON.stringify({
      owner: getUserEmail()
    })
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const addTrackToPlaylist = async (playlistID, jsonTrack) => {
  const response = await fetch(
    `${UBEAT_BASE_URL}/playlists/${playlistID}/tracks`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: getToken()
      },
      body: JSON.stringify(jsonTrack)
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const deleteTrackInPlaylist = async (playlistID, trackID) => {
  const response = await fetch(
    `${UBEAT_BASE_URL}/playlists/${playlistID}/tracks/${trackID}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: getToken()
      },
      body: JSON.stringify({
        owner: getUserEmail()
      })
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};
