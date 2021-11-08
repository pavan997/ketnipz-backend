const mongoose = require("mongoose");

//for signin

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 8 },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
