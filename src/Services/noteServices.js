import { baseUrl } from "./utils";
import axios from "axios";

const userData = JSON.parse(localStorage.getItem("user"));

// console.log(userData);

//header obj
let config = {
  headers: {
    Authorization: `Bearer ${userData?.accessToken}`,
  },
};

export const createNote = async (note) => {
  let data = {
    note: note,
  };
  const response = await axios.post(`${baseUrl}/notes`, data, config);
  return response.data;
};

export const getNotes = async () => {
  const response = await axios.get(`${baseUrl}/notes`, config);
  return response.data;
};

export const updateNote = async (note, id) => {
  let data = {
    note: note,
  };
  const response = await axios.put(`${baseUrl}/notes/${id}`, data, config);

  return response.data;
};

export const deleteNote = async (id) => {
  const response = await axios.delete(`${baseUrl}/notes/${id}`, config);
  return response.data;
};

export const search = async (text) => {
  const response = await axios.get(`${baseUrl}/notes?search=${text}`, config);
  return response.data;
};
