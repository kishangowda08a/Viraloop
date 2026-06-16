import axios from "axios";

export const sendMessage = async (data) => {
  const response = await axios.post(
    "http://localhost:5000/api/contact",
    data
  );

  return response.data;
};

export const getContacts = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/contact"
  );

  return response.data;
};