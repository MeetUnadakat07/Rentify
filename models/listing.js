const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  image: {
    filename: String,
    url: {
      type: String,
      default:
        "https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096",
    },
  },

  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;
