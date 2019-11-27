import { UBEAT_BASE_URL, TADB_BASE_URL, MB_BASE_URL, getToken } from "./Config";

// fetch artist info from UBeat
export const fetchArtistData = async id => {
  const response = await fetch(`${UBEAT_BASE_URL}/artists/${id}`, {
    headers: {
      Authorization: getToken()
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

// fetch artist's albums list from UBeat
export const fetchArtistAlbums = async id => {
  const response = await fetch(`${UBEAT_BASE_URL}/artists/${id}/albums`, {
    headers: {
      Authorization: getToken()
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

// fetch artist infos from TADB (notably mbid)
export const fetchArtistMBID = async name => {
  const response = await fetch(`${TADB_BASE_URL}/search.php?s=${name}`);
  const jsonResponse = await response.json();
  return jsonResponse;
};

// fetch artist infos from Musicbrainz
export const fetchMbzArtist = async mbid => {
  const response = await fetch(
    `${MB_BASE_URL}/artist/${mbid}?inc=artist-rels+genres&fmt=json`
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};

// fetch artist albums from Musicbrainz

// Infer Musicbrainz artist from Name and Albums
// export const inferMbzArtist = async artistName => {
//   const response = await fetch(
//     `${MB_BASE_URL}/artist/?query=${artistName}&fmt=json`
//   );
//   const jsonResponse = await response.json();

//   for (let artist of jsonResponse.artists) {
//     let albums =
//   }
// };
