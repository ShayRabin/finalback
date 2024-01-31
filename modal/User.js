const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  date: Date,
  sex: String,
  email: String,
  userName: String,
  password: String,
  countrey: String,
  city: String,
  zip: Number,
  premission: String,
});
module.exports = mongoose.model("Users", UserSchema);
