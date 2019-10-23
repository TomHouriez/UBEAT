const UBEAT_BASE_URL = "http://ubeat.herokuapp.com";

// const USER_ID = "5c8f031f7e3b3e000487d68d";

const EMAIL = "f.r@gmail.com";
const PASSWORD = "florian";

// export const connectUser = async (email, password) => {
//   const response = await fetch(`${UBEAT_BASE_URL}/login`, {
//     method: "POST",
//     header: {
//       "content-type": "application/x-www-form-urlencoded"
//     },
//     body: {
//       email: email,
//       password: password
//     }
//   });
//   const jsonResponse = await response.json();
//   return jsonResponse;
// };

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
