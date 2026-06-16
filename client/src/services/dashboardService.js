import axios from "axios";

export const getStats = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/dashboard"
  );

  return response.data;
};