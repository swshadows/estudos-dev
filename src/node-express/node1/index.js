const express = require("express");
const app = express();
const Question = require("./models/Question");
const jwt = require("jsonwebtoken");

const session = require("express-session");

const connection = require("./database/db");
const checkLogin = require("./middleware/middleware");

const jwtsecret = "12345678"; //Colocando no código somente para aprendizado

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(
  session({
    secret: "secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 dia para expirar
    },
  })
);

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

app.get("/nome/:nome", checkLogin, (req, res) => {
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

app.post("/update", (req, res) => {
  Question.update({ title: req.body.title, description: req.body.description }, { where: { id: req.body.id } }).then(() => {
    res.redirect("/");
  });
});

app.post("/delete", (req, res) => {
  Question.destroy({ where: { id: req.body.id } }).then(() => {
    res.redirect("/");
  });
});

// JWT Tests
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email) return res.status(400).json({ err: "Bad Request" });
  if (!password) return res.status(400).json({ err: "Bad Request" });

  jwt.sign({ email: email }, jwtsecret, { expiresIn: "48h" }, (err, token) => {
    if (err) return res.status(400).json({ err: "Falha interna" });
    res.status(200).json({ token: token });
  });
});

// HATEOAS
app.get("/listEv", (req, res) => {
  const HATEOAS = [
    {
      href: "http://localhost:8080/question/0",
      method: "GET",
      rel: "get_question",
    },
    {
      href: "http://localhost:8080/question/0",
      method: "DELETE",
      rel: "delete_question",
    },
  ];
  const questions = question
    .findAll()
    .then((questions) => {
      res.status(200).json({ questions: questions, _links: HATEOAS });
    })
    .catch((err) => {
      if (err) res.json({ error: err });
    });
});

app.listen(3000, (err) => {
  if (err) console.log("Ocorreu um erro");
  else console.log("Servidor iniciado com sucesso");
});
