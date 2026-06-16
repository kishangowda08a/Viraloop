const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    features: {
      type: [String],
      default: [],
    },

    category: {
      type: String,
      default: "Editing",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Service",
  serviceSchema
);