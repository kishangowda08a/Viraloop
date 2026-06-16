const express = require("express");

const router = express.Router();

const {
  sendContactMessage,
  getContacts,
} = require("../controllers/contactController");

router.post("/", sendContactMessage);

// router.post("/", sendContactMessage);

router.get("/", getContacts);

module.exports = router;