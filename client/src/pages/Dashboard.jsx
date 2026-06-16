import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import { getStats } from "../services/dashboardService";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [stats, setStats] = useState({
    totalVideos: 0,
    totalServices: 0,
    totalProjects: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats();
        setStats(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);

return (
  <div className="flex min-h-screen bg-gray-100">
    
    <Sidebar />

    <div className="flex-1">
     

      <div className="p-8">
     <div className="mb-10">
  <h1 className="text-5xl font-bold">
    Dashboard 🚀
  </h1>

  <p className="text-gray-500 mt-3 text-lg">
    Monitor your platform performance and activity.
  </p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Videos"
            value={stats.totalVideos}
          />

          <StatCard
            title="Projects"
            value={stats.totalProjects}
          />

          <StatCard
            title="Services"
            value={stats.totalServices}
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-2">
            <li>🎬 Videos managed from Admin Panel</li>
            <li>💼 Services managed from Admin Panel</li>
            <li>📁 Projects managed from Admin Panel</li>
            <li>🚀 Dashboard connected to MongoDB</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
);
}

export default Dashboard;