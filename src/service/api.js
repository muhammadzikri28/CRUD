import axios from "axios";

const API_URL = "http://localhost:3001/users";
export const addUser = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error while calling addUser api", error.message);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while calling getUsers api", error.message);
  }
};

export const getUser = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log("Error while calling getUser api", error.message);
  }
};

export const editUser = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log("Error while calling editUser api", error.message);
  }
};

export const deleteUser =  (id) => {
  try {
    return axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while calling deleteUser api", error.message);
  }
};

