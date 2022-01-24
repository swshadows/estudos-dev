const express = require("express"); // Importa o Express.js
const mustache = require("mustache-express"); // Importando o Mustache-Express
const router = require("./routes/index"); // Importa as rotas da pasta local
const helpers = require("./helpers"); // Importando os template helpers
const errorHandler = require("./handlers/errorHandler"); // Importanto o errorHandler
const cookieParser = require("cookie-parser"); // Importando cookieparser
const session = require("express-session"); // Importando session
const flash = require("express-flash"); // Importando express flash

// Configs
const app = express(); // Inicializa o app
app.use(express.json()); // Permite requisições POST
app.use(express.urlencoded({ extended: true })); // Permite requisições POST

app.use(express.static(__dirname + "/public")); // Torna a pasta publica como estática e acessível

app.use(cookieParser(process.env.SECRET)); //Habilitando cookieparser
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
); // Habilitando express-session
app.use(flash()); // Habilitando flashes

app.use((req, res, next) => {
  //Utilizando template helper
  res.locals.h = helpers; // Definindo variavel H como helper
  res.locals.flashes = req.flash(); // Definindo flashes
  next();
});

app.use("/", router); // Inicializa as rotas
app.use(errorHandler.notFound); // Caso não ache a rota, redireciona para página 404 dinâmica

app.engine("mustache", mustache(__dirname + "/views/partials", ".mustache")); // Adaptando o sistema para usar Mustache-Express com a extensão .mustache na pasta direcionado
app.set("view engine", "mustache"); // Settando a view engine criada acima
app.set("views", __dirname + "/views"); // Settando a pasta de views

module.exports = app; // Exporta o app construido
