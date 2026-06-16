function VideoCard({ video }) {
  return (
    <div className="border rounded-xl p-5 shadow mb-5">

      <video
        controls
        className="w-full rounded-lg"
        src={video.videoUrl}
      />

      <h2 className="text-xl font-bold mt-3">
        {video.title}
      </h2>

      <p>{video.description}</p>

      <div className="flex gap-4 mt-2">
        <span>👁 {video.views}</span>
        <span>❤️ {video.likes}</span>
      </div>

    </div>
  );
}

export default VideoCard;