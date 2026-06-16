import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">
        Viraloop
      </h1>

      <div className="space-y-4">
        <Link
          to="/dashboard"
          className="block"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/videos"
          className="block"
        >
          Videos
        </Link>

        <Link
          to="/admin/services"
          className="block"
        >
          Services
        </Link>

        <Link
          to="/admin/projects"
          className="block"
        >
          Projects
        </Link>

        <Link
  to="/admin/orders"
  className="block py-2"
>
  Orders
</Link>

        <button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }}
  className="mt-8"
>
  Logout
</button>
      </div>
    </div>
    
  );
}

export default Sidebar;