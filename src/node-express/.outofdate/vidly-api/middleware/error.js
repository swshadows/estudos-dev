// Middleware de erros
const winston = require("winston");

module.exports = function (err, req, res, next) {
  //error, log, warn, info, verbose, debug, silly
  winston.error(err.message, err);

  res.status(500).send("Something went wrong");
};
