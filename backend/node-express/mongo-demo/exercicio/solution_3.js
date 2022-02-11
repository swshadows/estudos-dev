// Criar um processo que pega todos os cursos que custam mais que 15 ou tenham a palavra BY no titulo
const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/playground";

mongoose
  .connect(db)
  .then(() => console.log("Conectado a MongoDB"))
  .catch(() => console.error("Não pode conectar a MongoDB"));

const courseSchema = new Schema({
  name: String,
  tags: [String],
  author: String,
  date: Date,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  const courses = await Course.find({
    isPublished: true,
  })
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
  console.log(courses);
}

getCourses();
