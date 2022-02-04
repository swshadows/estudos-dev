const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const express = require("express");
const logger = require("./middleware/logger");
const courses = require("./routes/courses");
const home = require("./routes/home");

const app = express();

// Settando view engine PUG
app.set("view engine", "pug");
app.set("views", "./views");

// Settando a pasta de rotas
app.use("/api/courses", courses);
app.use("/", home);

// Configs predefinidas do pack 'config'
console.log(config.get("name"));
console.log(config.get("mail.host"));

// Habilitando logs de requisições do Morgan em modo de development
if (app.get("env") == "development") {
  app.use(morgan("tiny"));
  console.log("Morgan running...");
}

// Habilitando segurança do Helmet
app.use(helmet());

// Habilitando requisições POST
app.use(express.json());

// Habilitando requisições com formulário urlencoded
app.use(express.urlencoded({ extended: true }));

// Habilitando pasta estática
app.use(express.static("public"));

// Habilitando middleware custom
app.use(logger);

// Definindo porta e iniciando servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server open on port: ${port}`);
});

// Função para validar curso baseado no schema de Joi
function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}
