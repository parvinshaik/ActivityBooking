const Activity = require('../models/Activity');
const Booking = require('../models/Booking');

//exports.listActivities = async (req, res) => {
  //const activities = await Activity.find({},'title description location date');
  //res.json(activities);
//};
exports.listActivities = async (req, res) => {
  try {
    const activities = await Activity.find({}).select('title description location date slots');
    console.log(activities); // Add this line to check the activities data in the console

    if (activities.length === 0) {
      return res.status(404).json({ message: 'No activities found' });
    }

    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.bookActivity = async (req, res) => {
  const booking = await Booking.create({
    user: req.user._id,
    activity: req.params.id
  });
  res.json({ message: 'Activity booked', booking });
};

exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate('activity');
  res.json(bookings);
};
