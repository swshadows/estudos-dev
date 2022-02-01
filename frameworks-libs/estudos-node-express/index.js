const Joi = require("joi");
const express = require("express");
const { validate } = require("joi/lib/types/lazy");
const app = express();

// Habilitando requisições POST
app.use(express.json());

const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
];

// Requisição GET
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// Teste com parametros
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => {
    if (c.id === parseInt(req.params.id)) return c;
  });
  if (!course) return res.status(404).send("Course not found");
  res.send(course);
});

// Requisição POST
app.post("/api/courses", (req, res) => {
  // Valida o curso baseado no schema definido
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(result.error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

// Requisição PUT
app.put("/api/courses/:id", (req, res) => {
  // Checa se o ID enviado na url existe
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  // Se não, envia alerta 404 e mensagem
  if (!course) return res.status(404).send("Course doesn't exist");

  // Valida o curso baseado no schema definido
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(result.error.details[0].message);

  // Caso o ID exista e o nome seja válido, modifica
  course.name = req.body.name;
  res.send(course);
});

// Requisição DELETE
app.delete("/api/courses/:id", (req, res) => {
  // Checa se o ID enviado na url existe
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  // Se não, envia alerta 404 e mensagem
  if (!course) return res.status(404).send("Course doesn't exist");

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(courses);
});

// Definindo porta e iniciando servidor
const port = process.env.PORT || 7777;
app.listen(port, () => {
  console.log(`Servidor aberto na porta: ${port}`);
});

// Função para validar curso baseado no schema de Joi
function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}
