import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Videos from "../pages/Videos";
import Services from "../pages/Services";
import AdminDashboard from "../pages/AdminDashboard";
import AdminVideos from "../pages/AdminVideos";
import AdminServices from "../pages/AdminServices";
import AdminProjects from "../pages/AdminProjects";
import PublicServices from "../pages/PublicServices";
import PublicProjects from "../pages/PublicProjects";
import ContactLeads from "../pages/ContactLeads";
import UserDashboard from "../pages/UserDashboard";
import BuyService from "../pages/BuyService";
import AdminOrders from "../pages/AdminOrders";
import MyOrders
from "../pages/MyOrders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <UserDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/videos"
  element={
    <ProtectedRoute>
      <Videos />
    </ProtectedRoute>
  }
/>
<Route
  path="/services"
  element={
    <ProtectedRoute>
      <Services />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/videos"
  element={
    <ProtectedRoute>
      <AdminVideos />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin/services"
  element={
    <ProtectedRoute>
      <AdminServices />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/projects"
  element={
    <ProtectedRoute>
      <AdminProjects />
    </ProtectedRoute>
  }
/>

<Route
  path="/public-services"
  element={<PublicServices />}
/>

<Route
  path="/public-projects"
  element={<PublicProjects />}
/>

<Route
  path="/admin/contacts"
  element={<ContactLeads />}
/>
<Route
  path="/buy-service/:id"
  element={
    <ProtectedRoute>
      <BuyService />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin/orders"
  element={
    <ProtectedRoute>
      <AdminOrders />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-orders"
  element={
    <ProtectedRoute>
      <MyOrders />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default AppRoutes;