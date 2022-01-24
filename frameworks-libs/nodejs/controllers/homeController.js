const mongoose = require("mongoose");
const Post = mongoose.model("Post");

exports.userMiddleware = (req, res, next) => {
  let info = { name: "Joe", id: 1 };
  req.userInfo = info;
  next();
};

exports.index = async (req, res) => {
  let responseJson = {
    pageTitle: "Home",
    posts: [],
  };

  const posts = await Post.find(); // Aguarda uma resposta do banco de dados para os posts
  responseJson.posts = posts;
  res.render("home", responseJson);
};

exports.estudos = (req, res) => {
  // Rota inicial para testar
  // res.send("Olá mundo 2.0!");
  let obj = {
    // Objeto a ser passado para a home abaixo para ter acesso as informações
    //pageTitle: "Pagina teste",
    userInfo: req.userInfo,
    nome: req.query.nome,
    idade: req.query.idade,
    show: true,
    ingredients: [
      { nome: "Arroz", qt: "20g" },
      { nome: "Feijão", qt: "15g" },
      { nome: "Bife", qt: "50g" },
    ],

    study: ["html", "css", "js", "node", "react"],
    test: "<strong>Testando negrito</strong>",
    ingredients2: [],
  };

  res.render("estudos", obj); // Renderiza a pagina HOME das views, com acesso ao obj
};
