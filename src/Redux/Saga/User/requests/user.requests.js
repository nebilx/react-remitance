import axios from "axios";

axios.defaults.baseURL = "";

export const userRequest = {
  getUser: () => axios.get("/"),
  addUser: (body) => axios.post("/", body),
  updateUser: (id, body) => axios.put(`/?id=${id}`, body),
  deleteUser: (id) => axios.delete(`/?${id}`),
};
