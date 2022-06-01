const config = require("config");

module.exports = function () {
  // Settando JWT Secret obrigatório
  if (!config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined");
  }
};
