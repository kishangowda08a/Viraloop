import axios from "axios";

const API_URL =
  "https://viraloop-backend.onrender.com/api/contact";

export const sendMessage = async (data) => {
  const response = await axios.post(
    API_URL,
    data
  );

  return response.data;
};

export const getContacts = async () => {
  const response = await axios.get(
    API_URL
  );

  return response.data;
};