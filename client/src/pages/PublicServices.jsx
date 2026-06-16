import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";;
import { getServices } from "../services/serviceService";

function PublicServices() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center mb-12">
        Our Services 💼
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service._id}
            className="
            bg-white
            rounded-2xl
            p-6
            shadow-lg
            transition-all
            duration-500
            hover:-translate-y-3
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]
            "
          >
            <h2 className="text-2xl font-bold mb-3">
              {service.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {service.description}
            </p>

            <p className="text-3xl font-bold text-indigo-600">
              ₹{service.price}
            </p>
            <button
  onClick={() => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      navigate("/login");
      return;
    }

    navigate(`/buy-service/${service._id}`);
  }}
  className="
    mt-4
    w-full
    bg-indigo-600
    text-white
    py-3
    rounded-lg
    hover:bg-indigo-700
    transition
  "
>
  Buy Service
</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PublicServices;