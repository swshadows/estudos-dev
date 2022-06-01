const express = require("express");

// Middleware de erros
const error = require("../middleware/error");

// Requirindo rotas
const genres = require("../routes/genres");
const customers = require("../routes/customers");
const movies = require("../routes/movies");
const rental = require("../routes/rental");
const users = require("../routes/user");
const auth = require("../routes/auth");

module.exports = function (app) {
  // Utilizando json() para request POST com corpo JSON
  app.use(express.json());

  // Usando rotas
  app.use("/api/genres", genres);
  app.use("/api/customers", customers);
  app.use("/api/movies", movies);
  app.use("/api/rental", rental);
  app.use("/api/users", users);
  app.use("/api/auth", auth);

  // Usando middleware de erro
  app.use(error);
};
