import axios from "axios";

const API_URL =
  "https://viraloop-backend.onrender.com";

export const uploadFile = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await axios.post(
    API_URL,
    formData
  );

  return response.data;
};