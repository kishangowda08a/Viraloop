import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServices } from "../services/serviceService";
import { createOrder }
from "../services/orderService";

import toast from "react-hot-toast";

function BuyService() {
  const { id } = useParams();

  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const services = await getServices();

        const selectedService =
          services.find(
            (item) => item._id === id
          );

        setService(selectedService);
      } catch (error) {
        console.log(error);
      }
    };

    fetchService();
  }, [id]);


  const handleRequest = async () => {
  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    await createOrder({
      userName: user.name,
      userEmail: user.email,
      serviceId: service._id,
      serviceTitle: service.title,
    });

    toast.success(
      "Service Request Sent 🚀"
    );

  } catch (error) {
    console.log(error);

    toast.error(
      "Failed to create request"
    );
  }
};
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold mb-6">
          Purchase Service
        </h1>

        {service ? (
          <>
            <h2 className="text-2xl font-bold">
              {service.title}
            </h2>

            <p className="text-gray-600 mt-3">
              {service.description}
            </p>

            <p className="text-indigo-600 font-bold text-xl mt-4">
              ₹{service.price}
            </p>

         <button
  onClick={handleRequest}
              className="
                mt-6
                bg-indigo-600
                text-white
                px-6
                py-3
                rounded-lg
                hover:bg-indigo-700
              "
            >
              Request Service
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}

      </div>

    </div>
  );
}

export default BuyService;