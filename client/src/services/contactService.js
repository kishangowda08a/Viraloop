import axios from "axios";

export const sendMessage = async (data) => {
  const response = await axios.post(
    "https://viraloop-backend.onrender.com",
    data
  );

  return response.data;
};

export const getContacts = async () => {
  const response = await axios.get(
    "https://viraloop-backend.onrender.com"
  );

  return response.data;
};