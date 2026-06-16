import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-2">
        Welcome to Viraloop 👋
      </h1>

      <p className="text-gray-500 mb-8">
        Manage your services and requests.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

       <Link
  to="/my-orders"
  className="
    bg-white
    p-6
    rounded-2xl
    shadow-lg
    hover:shadow-xl
    transition
    block
  "
>
  <h2 className="text-xl font-bold">
    My Orders
  </h2>

  <p className="text-gray-500 mt-2">
    Track your service requests
  </p>
</Link>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-bold">
            My Services
          </h2>

          <p className="text-gray-500 mt-2">
            Track active services.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-bold">
            Support
          </h2>

          <p className="text-gray-500 mt-2">
            Contact the Viraloop team.
          </p>
        </motion.div>

      </div>

    </div>
  );
}

export default UserDashboard;