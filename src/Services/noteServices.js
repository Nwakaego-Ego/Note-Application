import { baseUrl } from "./utils";
import axios from "axios";

const userData = JSON.parse(localStorage.getItem("user"));

//header obj
let config = {
  headers: {
    Authorization: `Bearer ${userData?.token}`,
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

export const updateNote = async (data, id) => {
  const response = await axios.put(`${baseUrl}/notes/${id}`, data, config);
  return response.data;
};

export const deleteNote = async (id) => {
  const response = await axios.delete(`${baseUrl}/notes/${id}`, config);
  return response.data;
};

// export const getSingleNote = async () => {
//   const response = await axios.get(`${baseUrl}/notes`, data);
//   return response.data;
// };
