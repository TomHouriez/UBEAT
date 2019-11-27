import { UBEAT_BASE_URL, getToken } from "./Config";

export const fetchAlbumData = async id => {
  const response = await fetch(`${UBEAT_BASE_URL}/albums/${id}`, {
    headers: {
      Authorization: getToken()
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const fetchTracks = async id => {
  const response = await fetch(`${UBEAT_BASE_URL}/albums/${id}/tracks`, {
    headers: {
      Authorization: getToken()
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
