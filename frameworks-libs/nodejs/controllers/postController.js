const mongoose = require("mongoose");
const Post = mongoose.model("Post");

exports.view = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug }); // Procura postagem pelo slug
  res.render("view", { post });
};

exports.add = (req, res) => {
  res.render("postAdd");
};

exports.addAction = async (req, res) => {
  req.body.tags = req.body.tags.split(",").map((t) => t.trim()); // Separa o array de tags e tira os espaços
  const post = new Post(req.body);
  try {
    await post.save();
  } catch (error) {
    req.flash("error", "Erro: " + error.message);
    return res.redirect("/post/add");
  }

  req.flash("success", "Post salvo com sucesso");

  res.redirect("/");
};

exports.edit = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug }); // Procura postagem pelo slug
  res.render("postEdit", { post });
};

exports.editAction = async (req, res) => {
  req.body.slug = require("slug")(req.body.title); // Edita o slug
  req.body.tags = req.body.tags.split(",").map((t) => t.trim());

  try {
    const post = await Post.findOneAndUpdate({ slug: req.params.slug }, req.body, {
      new: true, // Retorna o valor pro novo post
      runValidators: true, // Roda os validadores do model
    }); // Procura o post com o slug da URL, envia a nova requisição
  } catch (error) {
    req.flash("error", "Ocorreu um erro ao atualizar, tente novamente mais tarde");
    return res.redirect(`/post/${req.params.slug}/edit`);
  }

  req.flash("success", "Post atualizado com sucesso");
  res.redirect("/");
};
