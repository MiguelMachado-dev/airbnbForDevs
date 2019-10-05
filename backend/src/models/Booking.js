const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" // Ref user Model
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spot" // Ref user Model
  }
});

module.exports = mongoose.model("Booking", BookingSchema);
