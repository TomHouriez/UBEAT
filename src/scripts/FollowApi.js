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
  //doSomething
  let isFollowed = false;
  const tokenInfo = await getTokenInfo(getToken());
  // console.log(tokenInfo.following);
  tokenInfo.following.forEach(async element => {
    if (element.id == userId) {
      console.log("coucou");
      isFollowed = true;
    }
  });
  return isFollowed;
  // console.log("coucou2");
  // return true;
};
