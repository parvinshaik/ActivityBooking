const express = require('express');
const { listActivities, bookActivity, getMyBookings } = require('../controllers/activityController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', listActivities);
router.post('/book/:id', protect, bookActivity);
router.get('/my-bookings', protect, getMyBookings);

module.exports = router;
