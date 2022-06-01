const Sequelize = require("sequelize");

const connection = new Sequelize("test", "admin", "1973", {
  host: "localhost",
  dialect: "mariadb",
});

connection
  .authenticate()
  .then(() => {
    console.log("Conectado ao banco de dados");
  })
  .catch((err) => {
    console.error("ERRO: " + err);
  });

module.exports = connection;
