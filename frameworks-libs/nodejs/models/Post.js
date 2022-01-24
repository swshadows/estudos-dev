const mongoose = require("mongoose");
const slug = require("slug");
const postSchema = new mongoose.Schema({
  //Predefinindo regras das informações do banco de dados, um schema
  title: {
    // Campo titulo
    type: String, // Deve ser string
    trim: true, // Tira espaços desnecessários
    required: "Titulo obrigatório", // Titulo é obrigatório, mensagem de feedback
  },
  slug: String, // Slug deve ser uma string
  body: {
    type: String, // Corpo deve ser uma string
    trim: true, // Tira espaços desnecessários
  },
  tags: [String], // Tags deve ser um array composto por strings
});

postSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slug(this.title);
  }

  next();
});

module.exports = mongoose.model("Post", postSchema); // Exporta com o nome do módulo e um schema opcional
