const UBEAT_BASE_URL = "http://ubeat.herokuapp.com";

const USER_ID = "5c8f031f7e3b3e000487d68d";

const EMAIL = "michel@gmail.com";
const PASSWORD = "azerty";

export const connectUser = async (email, password) => {
  const response = await fetch(`${UBEAT_BASE_URL}/login`, {
    method: "POST",
    header: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: {
      email: email,
      password: password
    }
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
