import { UBEAT_BASE_URL, getToken } from "./Config";

export const searchGlobal = async (searchInput, limit) => {
  let response = await fetch(
    `${UBEAT_BASE_URL}/search?q=${searchInput}&limit=${limit}`,
    {
      headers: {
        Authorization: getToken()
      }
    }
  );
  let jsonResponse = await response.json();
  return jsonResponse;
};

export const searchAlbums = async (searchInput, limit) => {
  let response = await fetch(
    `${UBEAT_BASE_URL}/search/albums?q=${searchInput}&limit=${limit}`,
    {
      headers: {
        Authorization: getToken()
      }
    }
  );
  let jsonResponse = await response.json();
  return jsonResponse;
};

export const searchArtists = async (searchInput, limit) => {
  let response = await fetch(
    `${UBEAT_BASE_URL}/search/artists?q=${searchInput}&limit=${limit}`,
    {
      headers: {
        Authorization: getToken()
      }
    }
  );
  let jsonResponse = await response.json();
  return jsonResponse;
};

export const searchTracks = async (searchInput, limit) => {
  let response = await fetch(
    `${UBEAT_BASE_URL}/search/tracks?q=${searchInput}&limit=${limit}`,
    {
      headers: {
        Authorization: getToken()
      }
    }
  );
  let jsonResponse = await response.json();
  return jsonResponse;
};

export const searchUsers = async searchInput => {
  let response = await fetch(
    `${UBEAT_BASE_URL}/search/tracks?q=${searchInput}`
  );
  let jsonResponse = await response.json();
  return jsonResponse;
};

export const searchWithType = async (type, searchInput, limit) => {
  let response = await fetch(
    `${UBEAT_BASE_URL}/search/${type}?q=${searchInput}&limit=${limit}`,
    {
      headers: {
        Authorization: getToken()
      }
    }
  );
  let jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
};
