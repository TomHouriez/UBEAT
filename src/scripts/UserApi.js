import { UBEAT_BASE_URL, getToken } from "./Config";

export const getUserInfo = async id => {
  const response = await fetch(`${UBEAT_BASE_URL}/users/${id}`, {
    method: "GET",
    headers: {
      Authorization: getToken()
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
