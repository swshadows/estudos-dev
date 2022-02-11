const bcrypt = require("bcrypt");
const _ = require("lodash");
const config = require("config");
const express = require("express");
const router = express.Router();
const { User, validateReg } = require("../models/user");

router.get("/", (req, res) => {
  res.render("register");
});
router.post("/", async (req, res) => {
  const { error } = validateReg(req.body);
  if (error) return res.status(400).send(error.details[0]);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("Usuário já cadastrado");

  user = new User(_.pick(req.body, ["name", "password", "email"]));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  user = await user.save();

  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send("Usuário cadastrado");
});
module.exports = router;
