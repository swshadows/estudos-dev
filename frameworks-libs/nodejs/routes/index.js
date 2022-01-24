const express = require("express");
const homeController = require("../controllers/homeController"); // Importando o controlador da página home
const userController = require("../controllers/userController");
const sobreController = require("../controllers/sobreController");
const postController = require("../controllers/postController.js");

// Rotas
const router = express.Router(); // Cria o gerenciador de rotas

router.get("/", homeController.userMiddleware, homeController.index);
router.get("/estudos", homeController.estudos);
router.get("/users/login", userController.login);
router.get("/sobre", sobreController.sobre);

router.get("/post/add", postController.add);
router.post("/post/add", postController.addAction); // Faz a postagem com requisição POST
router.get("/post/:slug/edit", postController.edit);
router.post("/post/:slug/edit", postController.editAction);

router.get("/post/:slug", postController.view);

//? Rotas ficticias para teste
router.get("/voce", (req, res) => {
  // Testando queries GET
  let name = req.query.nome;
  let age = req.query.idade;

  res.send(`Olá ${name}, você tem ${age} anos<br>Parâmetros passados por requisição GET, cheque a URL`);
});

router.get("/posts/:slug", (req, res) => {
  // Rota dinâmica
  let slug = req.params.slug;

  // Texto: Como fazer um bolo
  // Slug: como-fazer-um-bolo

  res.send(`Slug da postagem: ${slug}`);
});

//? Testando API
router.get("/api", (req, res) => {
  // Objetificando parametros para API
  let id = req.query.id;
  let name = req.query.nome;
  let data = req.query.dados;

  let obj = {
    id: id,
    nome: name,
    dados: data,
  };

  // Imprimindo o JSON
  res.json(obj);
});

module.exports = router;

// GET - req.query
// POST - req.body
// Parametros da URL - req.params
