const Service = require("../models/Service");
const Project = require("../models/Project");
const Video = require("../models/Video");
const Contact = require("../models/Contact");

const getDashboardStats = async (req, res) => {
  try {
    const totalServices =
      await Service.countDocuments();

    const totalProjects =
      await Project.countDocuments();

    const totalVideos =
      await Video.countDocuments();

    const totalContacts =
      await Contact.countDocuments();

    res.status(200).json({
      totalServices,
      totalProjects,
      totalVideos,
      totalContacts,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch stats",
    });
  }
};

module.exports = {
  getDashboardStats,
};