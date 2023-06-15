import axios from "axios";

const API_BASE_URL = "http://localhost:9000";

// Get a list of items
export const getItems = () => {
  return axios.get(`${API_BASE_URL}/dishes`);
};

// Clear items
export const clearItems = () => {
  return axios.get(`${API_BASE_URL}/dishes/clear`);
};

// Get item by ID
export const getItemById = (itemId) => {
  return axios.get(`${API_BASE_URL}/dishes/${itemId}`);
};

// Add new or update existing item
export const insertItem = (itemData) => {
  return axios.put(`${API_BASE_URL}/dishes`, itemData);
};

// Delete item
export const deleteItem = (itemId) => {
  return axios.delete(`${API_BASE_URL}/dishes/${itemId}`);
};
