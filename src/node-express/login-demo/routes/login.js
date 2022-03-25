const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User, validateLog } = require("../models/user");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  const { error } = validateLog(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email ou senha inválidos");

  let validPass = bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Email ou senha inválidos");

  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send("Usuário logado");
});

module.exports = router;
