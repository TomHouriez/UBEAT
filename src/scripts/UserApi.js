const UBEAT_BASE_URL = "http://ubeat.herokuapp.com";
const EMAIL = "f.r@gmail.com";
const PASSWORD = "florian";

export const getUserAndToken = async () => {
  const response = await fetch(`${UBEAT_BASE_URL}/login`, {
    method: "POST",
    header: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: JSON.stringify({
      email: EMAIL,
      password: PASSWORD
    })
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
