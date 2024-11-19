import axios from "axios";

const API_BASE = "https://jsonplaceholder.typicode.com";

export const getUsers = () => axios.get(`${API_BASE}/users`);
export const addUser = (user) => axios.post(`${API_BASE}/users`, user);
export const editUser = (id, user) => axios.put(`${API_BASE}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_BASE}/users/${id}`);
