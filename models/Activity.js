const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  datetime: Date
});

//module.exports = mongoose.model('Activity', ActivitySchema);
const Activity = mongoose.model('Activity', ActivitySchema);
module.exports = Activity;