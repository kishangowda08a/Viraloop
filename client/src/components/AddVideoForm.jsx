import { useState } from "react";
import { uploadFile } from "../services/uploadService";
import { createVideo } from "../services/videoService";

function AddVideoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [creator, setCreator] =
    useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !file) {
      alert(
        "Please enter a title and select a video."
      );
      return;
    }

    try {
      setLoading(true);

      const uploadResponse =
        await uploadFile(file);

      await createVideo({
        title,
        description,
        creator,
        videoUrl: uploadResponse.url,
        views: 0,
        likes: 0,
      });

      alert(
        "Video Uploaded Successfully"
      );

      setTitle("");
      setDescription("");
      setCreator("");
      setFile(null);

      document.getElementById(
        "videoFile"
      ).value = "";
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="text"
        placeholder="Video Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <textarea
        placeholder="Video Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        rows="4"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="text"
        placeholder="Creator Name"
        value={creator}
        onChange={(e) =>
          setCreator(e.target.value)
        }
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        id="videoFile"
        type="file"
        accept="video/*"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
        className="w-full border rounded-lg p-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        {loading
          ? "Uploading..."
          : "Upload Video"}
      </button>
    </form>
  );
}

export default AddVideoForm;