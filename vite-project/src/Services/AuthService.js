import axios from "axios";

const baseUrl = "https://note-test-api.onrender.com/api";

export const registerUser = async (username, password, email) => {
  let data = {
    username: username,
    password: password,
    email: email,
  };
  const response = await axios.post(`${baseUrl}/users/register`, data);
  return response.data;
};

export const loginUser = async (email, password) => {
  let data = {
    password: password,
    email: email,
  };
  const response = await axios.post(`${baseUrl}/users/login`, data);
  return response.data;
};
