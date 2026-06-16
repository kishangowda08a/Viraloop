import { useState, useContext } from "react";
import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

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

  const data = await loginUser(formData);

login(data.user, data.token);

if (data.user.role === "admin") {
  navigate("/admin");
} else {
  navigate("/dashboard");
}
}catch (error) {
      alert(error.response?.data?.message);
    }
    finally {
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
    Welcome Back
  </h1>

  <p className="text-white/80 text-center mb-8">
    Login to your Viraloop account
  </p>

<form
  onSubmit={handleSubmit}
  className="space-y-4"
>
     
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

        <br /><br />

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

        <button type="submit">
          Login
        </button>
      </form>
      </motion.div>
    </div>
  );
}

export default Login;