const express = require("express");
const router = express.Router();

const {
  getVideos,
  createVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController");

// Get all videos
router.get("/", getVideos);

// Create a video
router.post("/", createVideo);

router.put("/:id", updateVideo);

// Delete a video
router.delete("/:id", deleteVideo);

// Seed sample videos
router.post("/seed", async (req, res) => {
  try {
    const Video = require("../models/Video");

    const videos = await Video.insertMany([
      {
        title: "Clothing Brand Promo",
        description: "Instagram reel for fashion brand",
        videoUrl:
          "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
        creator: "Viraloop",
        views: 15000,
        likes: 1200,
      },
      {
        title: "Gym Transformation Edit",
        description: "Fitness reel",
        videoUrl:
          "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
        creator: "Viraloop",
        views: 28000,
        likes: 2400,
      },
    ]);

    res.status(201).json(videos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;