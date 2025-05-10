// app.js
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const authRoutes = require("./routes/authRoutes");
const activityRoutes = require("./routes/activityRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/bookings", bookingRoutes);  // Use the bookingRoutes here

// Root Route
app.get("/", (req, res) => {
  res.send("🎉 Welcome to the Activity Booking API");
});

module.exports = app;
