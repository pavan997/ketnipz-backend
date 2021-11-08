const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

require("dotenv").config();

const newToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
};

const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = newToken(user);
    return res.status(201).json({ data: token });
  } catch (e) {
    return res
      .status(500)
      .json({ status: "error", message: "Someting went wrong" });
  }
};

const signin = async (req, res) => {
  return res.status(201).send("User");
};

module.exports = { signin, signup };
