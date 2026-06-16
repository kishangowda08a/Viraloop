import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AddProjectForm from "../components/AddProjectForm";
import {
  getProjects,
  deleteProject,
  updateProject,
} from "../services/projectService";

function AdminProjects() {
  const [projects, setProjects] = useState([]);

  const [editingId, setEditingId] =
  useState(null);

const [editData, setEditData] =
  useState({
    projectTitle: "",
    description: "",
    clientName: "",
    videoUrl: "",
  });

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

const handleEdit = (project) => {
  setEditingId(project._id);

 setEditData({
  projectTitle:
    project.projectTitle,
  description:
    project.description,
  clientName:
    project.clientName,
  videoUrl:
    project.videoUrl || "",
});
};

const handleUpdate = async () => {
  try {
    await updateProject(
      editingId,
      editData
    );

    setEditingId(null);

    fetchProjects();

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-2">
          Manage Projects 📁
        </h1>

        <p className="text-gray-500 mb-8">
          Create, manage and showcase projects.
        </p>

        {/* Add Project Form */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Add New Project
          </h2>

          <AddProjectForm />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <p>No projects found</p>
          ) : (
            projects.map((project) => (
              <div
                key={project._id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
              >
              {editingId === project._id ? (
  <input
    value={editData.projectTitle}
    onChange={(e) =>
      setEditData({
        ...editData,
        projectTitle:
          e.target.value,
      })
    }
    className="
      border
      p-2
      rounded
      w-full
      mb-2
    "
  />
) : (
  <h3 className="text-xl font-bold mb-3">
    {project.projectTitle}
  </h3>
)}

              {editingId === project._id ? (
  <textarea
    value={editData.description}
    onChange={(e) =>
      setEditData({
        ...editData,
        description:
          e.target.value,
      })
    }
    className="
      border
      p-2
      rounded
      w-full
      mb-3
    "
  />
) : (
  <p className="text-gray-600 mb-4">
    {project.description}
  </p>
)}

                <div className="mb-4">
                  <span className="text-sm text-gray-500">
                    Client
                  </span>

                  {editingId === project._id ? (
  <input
    value={editData.clientName}
    onChange={(e) =>
      setEditData({
        ...editData,
        clientName:
          e.target.value,
      })
    }
    className="
      border
      p-2
      rounded
      w-full
      mb-2
    "
  />
) : (
  <p className="font-semibold">
    {project.clientName}
  </p>
)}
                </div>

<div className="mb-4">
  <span className="text-sm text-gray-500">
    Video URL
  </span>

  {editingId === project._id ? (
    <input
      value={editData.videoUrl}
      onChange={(e) =>
        setEditData({
          ...editData,
          videoUrl: e.target.value,
        })
      }
      placeholder="Video URL"
      className="
        border
        p-2
        rounded
        w-full
        mt-2
      "
    />
  ) : (
    <p className="text-sm text-green-600">
      🎥 Video Attached
    </p>
  )}
</div>
               <div className="flex gap-3">

  {editingId ===
  project._id ? (
    <button
      onClick={handleUpdate}
      className="
        bg-green-500
        text-white
        px-4
        py-2
        rounded-lg
      "
    >
      Save
    </button>
  ) : (
    <button
      onClick={() =>
        handleEdit(project)
      }
      className="
        bg-blue-500
        text-white
        px-4
        py-2
        rounded-lg
      "
    >
      Edit
    </button>
  )}

  <button
    onClick={() =>
      handleDelete(
        project._id
      )
    }
    className="
      bg-red-500
      text-white
      px-4
      py-2
      rounded-lg
    "
  >
    Delete
  </button>

</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminProjects;