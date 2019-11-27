import { fetchOneTrackFromAlbumIDAndTrackID } from "./TracksApi.js";
import { BASE_TOP_URL, UBEAT_BASE_URL, getToken } from "./Config";

// =========================================
// fetch top albums
// =========================================

export const fetchTopAlbums = async () => {
  const response = await fetch(`${BASE_TOP_URL}/topalbums/limit=10/json`);
  const jsonResponse = await response.json();
  const arrayAlbumID = getArrayAlbumID(jsonResponse.feed.entry);
  const formatAlbumsArray = await getFormatTopAlbums(arrayAlbumID);
  return formatAlbumsArray;
};

const getArrayAlbumID = jsonResponse => {
  let arrayAlbumID = [];
  jsonResponse.forEach(anAlbum => {
    arrayAlbumID.push(anAlbum.id.attributes["im:id"]);
  });
  return arrayAlbumID;
};

export const getOneAlbumDataFromUbeat = async albumID => {
  const response = await fetch(`${UBEAT_BASE_URL}/albums/${albumID}`, {
    headers: {
      Authorization: getToken()
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

const getFormatTopAlbums = async arrayAlbumID => {
  let formatAlbumsArray = [];
  arrayAlbumID.forEach(async anAlbumID => {
    let currentAlbum = await getOneAlbumDataFromUbeat(anAlbumID);
    if (currentAlbum.resultCount > 0) {
      formatAlbumsArray.push(currentAlbum.results[0]);
    }
  });
  return formatAlbumsArray;
};

// =========================================
// fetch top songs
// =========================================

export const fetchTopTracks = async () => {
  const response = await fetch(`${BASE_TOP_URL}/topsongs/limit=10/json`);
  const jsonResponse = await response.json();
  const tracksArray = await getTracksFromResponse(jsonResponse.feed.entry);
  return tracksArray;
};

// Exemple : https://music.apple.com/ca/album/hollywoods-bleeding/1477880265?uo=2  id = 1477880265
const getAlbumIdFromUrl = url => {
  let id = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("?"));
  return id;
};

const getTracksFromResponse = async responseArray => {
  let tracksArray = [];
  await responseArray.forEach(async aTrack => {
    let trackID = aTrack.id.attributes["im:id"];
    let albumID = getAlbumIdFromUrl(
      aTrack["im:collection"].link.attributes.href
    );
    let theUbeatTrack = await fetchOneTrackFromAlbumIDAndTrackID(
      albumID,
      trackID
    );
    if (theUbeatTrack != null) {
      tracksArray.push(theUbeatTrack);
    }
  });
  return tracksArray;
};
