const Video = require("../models/Video");

// Get all videos
const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create new video
const createVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);

    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(
      req.params.id
    );

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    res.json({
      message: "Video deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateVideo = async (req, res) => {
  try {
    const video =
      await Video.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(video);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getVideos,
  createVideo,
  updateVideo,  
  deleteVideo,
};