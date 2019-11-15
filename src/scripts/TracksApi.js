//const UBEAT_BASE_URL = "http://ubeat.herokuapp.com/unsecure";

import { UBEAT_BASE_URL } from "./Config";

export const fetchOneTrackFromAlbumIDAndTrackID = async (albumID, trackID) => {
  let response = await fetch(`${UBEAT_BASE_URL}/albums/${albumID}/tracks`);
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
