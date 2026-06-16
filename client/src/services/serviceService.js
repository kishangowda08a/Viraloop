import axios from "axios";

const API_URL =
  "https://viraloop-backend.onrender.com";

export const getServices =
  async () => {
    const response =
      await axios.get(API_URL);

    return response.data;
  };

export const createService =
  async (serviceData) => {
    const response =
      await axios.post(
        API_URL,
        serviceData
      );

    return response.data;
  };

export const updateService =
  async (id, serviceData) => {
    const response =
      await axios.put(
        `${API_URL}/${id}`,
        serviceData
      );

    return response.data;
  };

export const deleteService =
  async (id) => {
    const response =
      await axios.delete(
        `${API_URL}/${id}`
      );

    return response.data;
  };