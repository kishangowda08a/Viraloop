import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>{" | "}
      <Link to="/videos">Videos</Link>{" | "}
      <Link to="/projects">Projects</Link>{" | "}
      <Link to="/services">Services</Link>{" | "}
      <Link to="/profile">Profile</Link>{" | "}
      <Link to="/videos">Videos</Link>

      <button onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;