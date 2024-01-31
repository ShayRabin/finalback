const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../modal/User");
router.post("/register", async (req, res) => {
  const {
    firstName,
    lastName,
    date,
    sex,
    email,
    userName,
    password,
    countrey,
    city,
    zip,
  } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ error: "User already exists" });
    }
    user = new User({
      firstName,
      lastName,
      date,
      sex,
      email,
      userName,
      password,
      countrey,
      city,
      zip,
      premission: "user",
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.status(200).send({ message: "User created succefully  " });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something is wrong" });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: "User already exists" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: "The password is wrong" });
    }
    res.send({ user: user });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something is wrong" });
  }
});

module.exports = router;
