const express = require("express");

const {
  createOrder,
  getOrders,
  updateOrderStatus,
  getUserOrders
} = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder);

router.get("/", getOrders);

router.put(
  "/:id",
  updateOrderStatus
);

router.get(
  "/user/:email",
  getUserOrders
);

module.exports = router;