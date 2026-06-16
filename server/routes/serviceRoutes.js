const express = require("express");

const {
  getServices,
   createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

const router = express.Router();

router.get("/", getServices);
router.post("/", createService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

router.post("/seed", async (req, res) => {
  const Service = require("../models/Service");

  const services = await Service.insertMany([
    {
      title: "Basic Reel Edit",
      price: 499,
      description: "Short reel editing",
      features: [
        "30 sec reel",
        "Transitions",
        "Music Sync",
      ],
    },
    {
      title: "Premium Reel Edit",
      price: 999,
      description: "Advanced editing",
      features: [
        "60 sec reel",
        "Motion Graphics",
        "Color Grading",
      ],
    },
    {
      title: "Brand Promotion",
      price: 2999,
      description: "Complete campaign",
      features: [
        "Reel Creation",
        "Promotion Strategy",
        "Analytics",
      ],
    },
  ]);

  router.post("/seed", async (req, res) => {
  const Service =
    require("../models/Service");

  const services =
    await Service.insertMany([
      {
        title: "Instagram Reels",
        description:
          "Professional reel editing",
        price: 999,
      },
      {
        title: "Social Media Marketing",
        description:
          "Growth and engagement",
        price: 4999,
      },
    ]);

  res.json(services);
});

  res.json(services);
});

module.exports = router;