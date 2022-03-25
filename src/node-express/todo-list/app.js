const express = require("express");
const checklists = require("./src/routes/checklist");
const app = express();

app.use(express.json());
app.use("/checklists", checklists);

const log = (req, res, next) => {
  console.log(req.body);
  console.log(`Data: ${Date.now}`);
  next();
};

app.get("/", (req, res) => {
  res.send("<h1>Minha lista de tarefas</h1>");
});

app.get("/json", (req, res) => {
  res.json({ title: "Tarefa X", done: true });
});

app.listen(3000, () => {
  console.log("Servidor iniciado");
});
