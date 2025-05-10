// routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const authMiddleware = require("../middleware/authMiddleware"); // if you have JWT auth

// Route to create a new booking
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { activityId } = req.body; // make sure this is part of your request body
    const userId = req.user._id; // assuming the user is authenticated and we get the ID from JWT

    const newBooking = new Booking({ activityId, userId });

    await newBooking.save();

    res.status(201).json({
      message: "Booking successfully created",
      booking: newBooking,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get bookings of the current user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const bookings = await Booking.find({ userId });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
