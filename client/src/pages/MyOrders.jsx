import {
  useEffect,
  useState,
} from "react";

import {
  getUserOrders,
} from "../services/orderService";

function MyOrders() {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    const fetchOrders =
      async () => {

        const user =
          JSON.parse(
            localStorage.getItem(
              "user"
            )
          );

        const data =
          await getUserOrders(
            user.email
          );

        setOrders(data);
      };

    fetchOrders();

  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      <div className="grid gap-4">

        {orders.map((order) => (
          <div
            key={order._id}
            className="
              bg-white
              p-6
              rounded-xl
              shadow
            "
          >
            <h2 className="text-xl font-bold">
              {order.serviceTitle}
            </h2>

            <p>
              Status:
              {" "}
              {order.status}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default MyOrders;