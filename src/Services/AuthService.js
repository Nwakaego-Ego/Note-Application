import axios from "axios";

const baseUrl = "https://note-api-q17l.onrender.com/api";

export const registerUser = async (username, password, email) => {
  let data = {
    username: username,
    password: password,
    email: email,
  };
  try {
    await axios.post(`${baseUrl}/users/register`, data);
  } catch (error) {
    console.log(error);
  }
};
