const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
  repeat_password: {
    type: String,
    minlength: 8,
    maxlength: 1024,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, config.get("JWT_KEY"));
  return token;
};

const User = mongoose.model("User", userSchema);

function validateRegister(user) {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(50),
    email: Joi.string().required().min(3).max(255).email(),
    password: Joi.string().required().min(8).max(255),
    repeat_password: Joi.ref("password"),
  });

  return schema.validate(user);
}

function validateLogin(user) {
  const schema = Joi.object({
    email: Joi.string().required().min(3).max(255).email(),
    password: Joi.string().required().min(8).max(255),
  });

  return schema.validate(user);
}

module.exports.User = User;
module.exports.validateLog = validateLogin;
module.exports.validateReg = validateRegister;
