import axios from "axios";

const API_URL =
  "https://viraloop-backend.onrender.com/api/orders";

export const createOrder = async (
  orderData
) => {
  const response = await axios.post(
    API_URL,
    orderData
  );

  return response.data;
};

export const getOrders = async () => {
  const response = await axios.get(
    API_URL
  );

  return response.data;
};

export const updateOrderStatus =
  async (id, status) => {
    const response = await axios.put(
      `${API_URL}/${id}`,
      { status }
    );

    return response.data;
  };

export const getUserOrders =
  async (email) => {
    const response = await axios.get(
      `${API_URL}/user/${email}`
    );

    return response.data;
  };