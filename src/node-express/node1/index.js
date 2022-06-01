const express = require("express");
const app = express();
const Question = require("./models/Question");

const connection = require("./database/db");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bem vindo à página inicial");
});

app.get("/index", (req, res) => {
  const products = [
    { name: "Leite", price: 3.12 },
    { name: "Biscoito", price: 5.62 },
    { name: "Pilha", price: 1.34 },
    { name: "Máquina", price: 102.2 },
  ];

  res.render("index", { products });
});

app.get("/nome/:nome", (req, res) => {
  const name = req.params.nome;
  res.send(`Olá, ${name}`);
});

app.get("/query", (req, res) => {
  const name = req.query.nome;
  if (name) res.send(name);
  else res.send("Nome não enviado");
});

app.post("/save", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  Question.create({
    title: title,
    description: description,
  }).then(() => {
    res.redirect("/");
  });
});

app.get("/list", (req, res) => {
  Question.findAll({ raw: true, order: [["id", "DESC"]] }).then(() => {
    res.render("index", { questions });
  });
});

app.get("/list/:id", (req, res) => {
  Question.findOne({ raw: true, where: { id: req.params.id } }).then((question) => {
    if (question) res.render("question", { question });
    else res.redirect("/");
  });
});

app.listen(3000, (err) => {
  if (err) console.log("Ocorreu um erro");
  else console.log("Servidor iniciado com sucesso");
});
