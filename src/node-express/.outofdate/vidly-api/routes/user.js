const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/me", async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered");

  // Criando objeto user com lodash
  user = new User(_.pick(req.body, ["name", "email", "password"]));

  // Criando senha e encriptando com bcrypt
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  // Gerando token e enviando para o header como x-auth-token
  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send(_.pick(user, ["name", "email"]));
});

module.exports = router;
