import axios from "axios";

const API_URL =
  "https://viraloop-backend.onrender.com";

// Get all videos
export const getVideos = async () => {
  const response = await axios.get(
    API_URL
  );

  return response.data;
};

// Create video
export const createVideo = async (
  videoData
) => {
  const response = await axios.post(
    API_URL,
    videoData
  );

  return response.data;
};

export const deleteVideo = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};

export const updateVideo = async (
  id,
  videoData
) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    videoData
  );

  return response.data;
};