import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AddServiceForm from "../components/AddServiceForm";
import {
  getServices,
  deleteService,
} from "../services/serviceService";

function AdminServices() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const data = await getServices();
      setServices(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteService(id);
      fetchServices();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-2">
          Manage Services 
        </h1>

        <p className="text-gray-500 mb-8">
          Create, manage and delete services.
        </p>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Add New Service
          </h2>

          <AddServiceForm />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-indigo-600">
                  ₹{service.price}
                </span>

                <button
                  onClick={() =>
                    handleDelete(service._id)
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminServices;