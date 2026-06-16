function ServiceCard({ service }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{service.title}</h2>

      <h3>₹{service.price}</h3>

      <p>{service.description}</p>

      <ul>
        {service.features.map((feature, index) => (
          <li key={index}>
            {feature}
          </li>
        ))}
      </ul>

      <button>
        Book Now
      </button>
    </div>
  );
}

export default ServiceCard;