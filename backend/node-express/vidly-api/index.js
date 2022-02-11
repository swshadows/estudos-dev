const config = require("config");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/vidly";

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}

const error = require("./middleware/error");

mongoose
  .connect(db)
  .then(() => console.log(`Connected to MongoDB on ${db}`))
  .catch((err) => console.error(`Error: ${err.message}`));

const genres = require("./routes/genres");
const customers = require("./routes/customers");
const movies = require("./routes/movies");
const rental = require("./routes/rental");
const users = require("./routes/user");
const auth = require("./routes/auth");

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);
app.use("/api/rental", rental);
app.use("/api/users", users);
app.use("/api/auth", auth);

app.use(error);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server open on port: ${port}`);
});
