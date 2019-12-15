import { UBEAT_BASE_URL, getToken, getTokenInfo } from "./Config";

export const followUser = async userId => {
  const response = await fetch(`${UBEAT_BASE_URL}/follow`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: getToken()
    },
    body: JSON.stringify({
      id: userId
    })
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const unfollowUser = async userId => {
  const response = await fetch(`${UBEAT_BASE_URL}/follow/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: getToken()
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const isUserFollowed = async userId => {
  let isFollowed = false;
  const tokenInfo = await getTokenInfo(getToken());
  tokenInfo.following.forEach(async element => {
    if (element.id == userId) {
      isFollowed = true;
    }
  });
  return isFollowed;
};
