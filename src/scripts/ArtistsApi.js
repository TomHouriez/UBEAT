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

export const getArtistInfos = async id => {
  let artistData = await fetchArtistData(id);
  if (artistData.resultCount !== 0) {
    artistData = artistData.results[0];
    let albums = await fetchArtistAlbums(id);
    if (albums.resultCount !== 0) {
      albums = albums.results;
      // Sort albums in the inverse of released year order (most recent years first)
      albums.sort(
        (a, b) => b.releaseDate.substring(0, 4) - a.releaseDate.substring(0, 4)
      );
    }
  }
  // Try to fetch Musicbrainz ID from TADB
  let tadbData = await fetchArtistMBID(
    encodeURIComponent(artistData.artistName)
  );

  if (tadbData.artists != null) {
    // we assume the first artist is the right one
    tadbData = tadbData.artists[0];

    // now that we have a mbid we fetch the infos from MusicBrainz
    let mbData = await fetchMbzArtist(tadbData.strMusicBrainzID);

    let artistInfos = new Object();
    artistInfos.artistName = artistData.artistName;
    artistInfos.strArtistThumb = tadbData.strArtistThumb;
    artistInfos.artistItuneLinkUrl = artistData.artistLinkUrl;
    // artistLife: Object with all artist's life detail (easier to process in the template)
    artistInfos.artistLife = new Object();
    artistInfos.artistLife.begin = mbData["life-span"].begin;
    artistInfos.artistLife.ended = mbData["life-span"].ended;

    // Displayed text is different for a personn or a group
    if (mbData.type == "Group") {
      artistInfos.artistLife.typeText = "Formed";
      artistInfos.artistLife.status = "Disbanded (";
      // We also want to display the group members
      artistInfos.members = [];
      for (let i = 0; i < mbData.relations.length; i++) {
        if (mbData.relations[i].type == "member of band") {
          var member = mbData.relations[i].artist.name;
          // Members may have had several tenure/positions, we only want to list each member once
          if (
            artistInfos.members.indexOf(member) == -1 &&
            artistInfos.members.indexOf(member + " (Inactive)") == -1
          ) {
            if (mbData.relations[i].ended) {
              member += " (Inactive)";
            }
            artistInfos.members.push(member);
          }
        }
      }
    } else {
      artistInfos.artistLife.typeText = "Born";
      artistInfos.artistLife.status = "Dead (";
    }

    if (mbData["life-span"].ended) {
      artistInfos.artistLife.status =
        artistInfos.artistLife.status + mbData["life-span"].end + ")";
    } else {
      artistInfos.artistLife.status = "Active";
    }
    // We only keep the first 8 genres
    artistInfos.genres = mbData.genres;
    if (artistInfos.genres.length > 8) {
      artistInfos.genres.splice(8);
    }
    return artistInfos;
  } else {
    return null;
  }
};
