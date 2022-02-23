// Importando express
const winston = require("winston");
const express = require("express");
const app = express();

// Requerindo módulos de inicialização, pelo principio da responsabilidade única
require("./start/logging")();
require("./start/routes")(app);
require("./start/db")();
require("./start/config")();
require("./start/validation")();

// Definindo porta e iniciando servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  winston.info(`Server open on port: ${port}`);
});
