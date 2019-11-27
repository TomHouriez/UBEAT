import { UBEAT_BASE_URL, getToken } from "./Config";

export const fetchOneTrackFromAlbumIDAndTrackID = async (albumID, trackID) => {
  let response = await fetch(`${UBEAT_BASE_URL}/albums/${albumID}/tracks`, {
    headers: {
      Authorization: getToken()
    }
  });
  let jsonResponse = await response.json();
  let result = null;
  if (jsonResponse.resultCount > 0) {
    jsonResponse.results.forEach(aTrack => {
      if (aTrack.trackId == trackID) {
        result = aTrack;
      }
    });
  }
  return result;
};
