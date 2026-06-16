import { useState } from "react";
import { registerUser } from "../services/authService";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
  setLoading(true);

  const data = await registerUser(formData);

  toast.success(data.message);

  setFormData({
    name: "",
    email: "",
    password: "",
  });
} catch (error) {
  toast.error(
    error.response?.data?.message ||
    "Registration Failed"
  );
} finally {
  setLoading(false);
}
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        w-full
        max-w-md
        bg-white/10
        backdrop-blur-lg
        rounded-3xl
        shadow-2xl
        p-8
        border
        border-white/20
      "
    >

      <h1 className="text-4xl font-bold text-white text-center mb-2">
        Create Account
      </h1>

      <p className="text-white/80 text-center mb-8">
        Join Viraloop today
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="
            w-full
            p-4
            rounded-xl
            bg-white/20
            border
            border-white/30
            text-white
            placeholder-white/70
            focus:outline-none
            focus:ring-2
            focus:ring-white
          "
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="
            w-full
            p-4
            rounded-xl
            bg-white/20
            border
            border-white/30
            text-white
            placeholder-white/70
            focus:outline-none
            focus:ring-2
            focus:ring-white
          "
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="
            w-full
            p-4
            rounded-xl
            bg-white/20
            border
            border-white/30
            text-white
            placeholder-white/70
            focus:outline-none
            focus:ring-2
            focus:ring-white
          "
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="
            w-full
            bg-white
            text-indigo-600
            font-bold
            py-4
            rounded-xl
            shadow-lg
            disabled:opacity-50
          "
        >
          {loading
            ? "Creating Account..."
            : "Register"}
        </motion.button>

        <p className="text-center text-white">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold underline"
          >
            Login
          </Link>
        </p>

      </form>

    </motion.div>

  </div>
);
}

export default Register;