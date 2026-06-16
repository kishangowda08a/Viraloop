const express = require("express");

const {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.post("/seed", async (req, res) => {
  const Project =
    require("../models/Project");

  const projects =
    await Project.insertMany([
      {
        clientName: "XYZ Fashion",
        projectTitle:
          "Summer Clothing Campaign",
        amount: 25000,
        description:
          "Instagram reel campaign",
        results:
          "1.2M views generated",
      },

      {
        clientName: "FitLife Gym",
        projectTitle:
          "Fitness Promotion",
        amount: 18000,
        description:
          "Transformation reel series",
        results:
          "850K views generated",
      },
    ]);

  res.json(projects);
});

module.exports = router;