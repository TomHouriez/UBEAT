import { UBEAT_BASE_URL } from "./Config";

export const fetchAlbumData = async id => {
  const response = await fetch(`${UBEAT_BASE_URL}/albums/${id}`);
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const fetchTracks = async id => {
  const response = await fetch(`${UBEAT_BASE_URL}/albums/${id}/tracks`);
  const jsonResponse = await response.json();
  return jsonResponse;
};
