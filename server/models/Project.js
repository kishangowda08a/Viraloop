const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },

    projectTitle: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    results: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

      videoUrl: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Project",
  projectSchema
);