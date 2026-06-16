import { useState } from "react";
import { createProject } from "../services/projectService";

function AddProjectForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [clientName, setClientName] = useState("");
  const [image, setImage] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

    await createProject({
  clientName,
  projectTitle: title,
  description,
  amount: 0,
  results: "Coming Soon",
  videoUrl,
});
      alert("Project Created Successfully");

      setTitle("");
      setDescription("");
      setClientName("");
      setVideoUrl("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full border rounded-lg p-3"
      />

      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        rows="4"
        className="w-full border rounded-lg p-3"
      />

      <input
        type="text"
        placeholder="Client Name"
        value={clientName}
        onChange={(e) =>
          setClientName(e.target.value)
        }
        className="w-full border rounded-lg p-3"
      />

<input
  type="text"
  placeholder="Video URL"
  value={videoUrl}
  onChange={(e) =>
    setVideoUrl(e.target.value)
  }
  className="w-full border rounded-lg p-3"
/>
     {/* <input
  type="file"
  accept="image/*"
  onChange={(e) =>
    setImage(e.target.files[0])
  }
  className="w-full border p-3 rounded-lg"
/> */}

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
      >
        Create Project
      </button>
    </form>
  );
}

export default AddProjectForm;