import { UBEAT_BASE_URL } from "./Config";

export const login = async (email, password) => {
  const response = await fetch(`${UBEAT_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      email: email,
      password: password
    })
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const register = async (name, email, password) => {
  const response = await fetch(`${UBEAT_BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      name: name,
      email: email,
      password: password
    })
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
