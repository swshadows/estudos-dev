const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");
const pug = require("pug");

if (!config.get("JWT_KEY")) {
  console.error("JWT_KET não foi configurada");
  process.exit(1);
}

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = config.get("DB_ADDRESS");
const port = config.get("PORT_ADDRESS");

mongoose
  .connect(db)
  .then(() => console.log(`Conectado com sucesso à ${db}`))
  .catch(() => console.error(`Erro ao conectar à ${db}`));

const index = require("./routes/index");
const login = require("./routes/login");
const register = require("./routes/register");

app.use("/", index);
app.use("/register", register);
app.use("/login", login);

app.listen(port, (req, res) => {
  console.log(`Conectado com sucesso a http://localhost:${port}`);
});
