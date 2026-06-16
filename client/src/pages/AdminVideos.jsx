import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  getVideos,
  deleteVideo,
} from "../services/videoService";

function AdminVideos() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const data = await getVideos();
    setVideos(data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    await deleteVideo(id);
    fetchVideos();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-6">
          Manage Videos
        </h1>

        {videos.length === 0 ? (
          <p>No videos found</p>
        ) : (
          videos.map((video) => (
            <div
              key={video._id}
              className="bg-white rounded-xl shadow-md p-5 mb-4"
            >
              <h3 className="text-xl font-semibold">
                {video.title}
              </h3>

              <button
                onClick={() =>
                  handleDelete(video._id)
                }
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default AdminVideos;