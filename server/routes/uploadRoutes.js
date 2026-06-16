console.log("UPLOAD ROUTES LOADED");

const express = require("express");
const cloudinary = require("../config/cloudinary");
const upload = require("../middleware/upload");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("UPLOAD TEST WORKING");
});

router.post(
  "/",
  upload.single("file"),
  async (req, res) => {
    try {
      console.log("FILE RECEIVED:", req.file?.originalname);

      const file = req.file;

      const result = await cloudinary.uploader.upload(
        `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
        {
          resource_type: "auto",
        }
      );

      res.status(200).json({
        url: result.secure_url,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: error.message,
      });
    }
  }
);

module.exports = router;