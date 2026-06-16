import axios from "axios";

export const getStats = async () => {
  const response = await axios.get(
    "https://viraloop-backend.onrender.com/api/dashboard"
  );

  return response.data;
};