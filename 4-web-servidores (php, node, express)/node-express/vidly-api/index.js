const Joi = require("joi");
const express = require("express");
const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/vidly";

mongoose
  .connect(db)
  .then(() => console.log(`Connected to MongoDB on ${db}`))
  .catch((err) => console.error(`Error: ${err.message}`));

const genres = require("./routes/genres");
const customers = require("./routes/customers");

const app = express();

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server open on port: ${port}`);
});
