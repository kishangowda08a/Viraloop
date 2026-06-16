import axios from "axios";

const API_URL =
  "http://localhost:5000/api/orders";

export const createOrder = async (
  orderData
) => {
  const response =
    await axios.post(
      API_URL,
      orderData
    );

  return response.data;
};

export const getOrders = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/orders"
  );

  return response.data;
};

export const updateOrderStatus =
  async (id, status) => {
    const response =
      await axios.put(
        `https://viraloop-backend.onrender.com`,
        { status }
      );

    return response.data;
  };

  export const getUserOrders =
  async (email) => {
    const response =
      await axios.get(
        `https://viraloop-backend.onrender.com`
      );

    return response.data;
  };