import { useEffect, useState } from "react";

import {
  getOrders,
  updateOrderStatus,
} from "../services/orderService";

import Sidebar from "../components/Sidebar";


function AdminOrders() {
  const [orders, setOrders] = useState([]);

const handleStatusChange =
  async (id, status) => {
    try {
      await updateOrderStatus(
        id,
        status
      );

      const updated =
        await getOrders();

      setOrders(updated);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Service Requests 📦
        </h1>

        <div className="grid gap-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-xl font-bold">
                {order.serviceTitle}
              </h2>

              <p>
                Customer: {order.userName}
              </p>

              <p>
                Email: {order.userEmail}
              </p>

              <p>
                Status: {order.status}
              </p>

              <select
  value={order.status}
  onChange={(e) =>
    handleStatusChange(
      order._id,
      e.target.value
    )
  }
  className="
    mt-3
    border
    rounded-lg
    p-2
  "
>
  <option>Pending</option>
  <option>Contacted</option>
  <option>In Progress</option>
  <option>Completed</option>
</select>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminOrders;