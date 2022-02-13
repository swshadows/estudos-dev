const winston = require("winston");
const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/vidly";

module.exports = function () {
  // Conectando ao banco de dados
  mongoose.connect(db).then(() => winston.info(`Connected to MongoDB on ${db}`));
};
