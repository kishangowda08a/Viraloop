const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const videoRoutes = require("./routes/videoRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const projectRoutes =
  require("./routes/projectRoutes");
  const uploadRoutes =
  require("./routes/uploadRoutes");
const dashboardRoutes =
  require("./routes/dashboardRoutes");
  const contactRoutes = require("./routes/contactRoutes");
  const orderRoutes =
  require("./routes/orderRoutes");
//   console.log("uploadRoutes =", uploadRoutes);
// console.log("Dashboard route loaded");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/services", serviceRoutes);
app.use(
  "/api/projects",
  projectRoutes
);
app.use("/api/upload", uploadRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/contact", contactRoutes);
app.use(
  "/api/orders",
  orderRoutes
);

app.get("/", (req, res) => {
    res.send("Viraloop Server is running!");
});

// app.get("/debug-upload", (req, res) => {
//   res.send("DEBUG WORKING");
// });

// app._router.stack.forEach((r) => {
//   if (r.route && r.route.path) {
//     console.log(r.route.path);
//   }
// });


app.get("/api/dashboard/test", (req, res) => {
  res.send("Dashboard Test Working");
});

module.exports = app;