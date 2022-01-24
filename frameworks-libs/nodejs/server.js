const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" }); // Requerindo variaveis

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }); // Conecta ao banco de dados
// mongoose.Promise = global.Promise;
mongoose.connection.on("error", (error) => {
  console.error("ERRO: " + error.message); // Printa erro
});

// Carregando models
require("./models/Post"); // Carregando model 'Post'

const app = require("./app"); // Importa app
app.set("port", process.env.PORT || 7777); // Setta uma porta

const server = app.listen(app.get("port"), () => {
  console.log("Servidor aberto na porta: " + server.address().port); // Debug
}); // Inicializa servidor na porta
