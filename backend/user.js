// User Schema
const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  name: String,
  number: Number
});

module.exports = mongoose.model("User", user)