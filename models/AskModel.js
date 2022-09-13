const mongoose = require("mongoose");

const AskItems = new mongoose.Schema({
  who: {
    type: String,
    required: [true, "Must tell us who you are."],
    trim: true,
  },
  type: {
    type: String,
    required: [true, "Must provide type"],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, "Must provide a quantity"],
  },
  specify: {
    type: String,
  },
  condition: {
    type: Array,
    required: [true, "Must provide condition"],
  },
  location: {
    type: String,
    required: [true, "Must provide city or town"],
    maxlength: [49, "Please Provide a city or town below 49 characters"],
  },
  zipcode: {
    type: String,
    required: [true, "Must provide a ZIP code"],
  },
  postType: {
    type: String,
  },
  _uid: {
    type: String,
  },
  bookmarked: {
    type: Array,
  },
});

module.exports = mongoose.model("AskItems", AskItems);
