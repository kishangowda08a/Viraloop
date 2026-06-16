import { useEffect, useState } from "react";

import ServiceCard from "../components/ServiceCard";

import {
  getServices,
} from "../services/serviceService";

function Services() {
  const [services, setServices] =
    useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();

      setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h1>Our Services</h1>

      {services.map((service) => (
        <ServiceCard
          key={service._id}
          service={service}
        />
      ))}
    </div>
  );
}

export default Services;