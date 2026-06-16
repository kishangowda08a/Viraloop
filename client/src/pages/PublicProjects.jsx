import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";

function PublicProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center mb-4">
        Our Projects 📁
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Explore our successful campaigns and client projects.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="
                group
                bg-white
                p-6
                rounded-2xl
                shadow-lg
                border-2
                border-transparent
                transition-all
                duration-500
                transform-gpu
                hover:-translate-y-4
                hover:scale-105
                hover:bg-emerald-50
                hover:border-emerald-400
                hover:shadow-[0_0_50px_rgba(16,185,129,0.45)]
              "
            >
              <h2 className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:text-emerald-600">
                {project.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold">
                  Client: {project.clientName}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PublicProjects;