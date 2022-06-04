const Sequelize = require("sequelize");
const connection = require("../database/db");

const Question = connection.define("question", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});
