const mongoose = require("mongoose");

// Conectando no MongoDB com 'mongoose'
mongoose
  .connect("mongodb://localhost:27017/playground")
  .then(() => {
    console.log("SUCCESS: Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error: Could not connect to MongoDB", err);
  });

// Criando schema do mongoose com validação
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5, // Minimo de caracteres do nome
    maxlength: 255, // Máximo de caracteres do nome
  },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"], // Categorias devem ser uma dessas
    lowercase: true, // Transforma o input em lowercase
    // uppercase: true, // Transforma o input em uppercase
    // trim: true, // Remove espaços desnecessários
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      isAsync: false, // Validador é assincrono ou não
      validator: function (v) {
        return v && v.length > 0; // Se array de tags não deve ser null/undefined e deve ter pelo menos 1 tag, esta válido
      },
      message: "A course should have at least one tag", // Mensagem de retorno caso invalido
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished; // Se tiver publicado, é obrigatório ter preço
    },
    min: 5, // Preço minimo
    max: 200, // Preço máximo
    get: (v) => Math.round(v), // Puxa o valor do banco de forma arredondada
    set: (v) => Math.round(v), // Insere o valor do banco de forma arredondada
  },
});

// Modificando schema em classe
const Course = mongoose.model("Course", courseSchema);

// Função para adicionar curso no banco
async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    // category: "web",
    author: "V",
    // tags: [],
    isPublished: true,
    price: 200,
  });

  try {
    const result = await course.save();
    console.log(result);
  } catch (err) {
    for (field in err.errors) console.log(err.errors[field].message);
  }
}

// Função para pegar cursos do banco
async function getCourses() {
  const pageNumber = 2;
  const pageSize = 10;
  const courses = await Course.find({
    author: "V",
    isPublished: true,
  })
    .skip((pageNumber - 1) * pageSize) // Realiza paginação
    .limit(pageSize) // Limita a resposta do mongo a 10 elementos

    .sort({ name: 1 }) // Organiza crescentemente por nome
    .select({ name: 1, tags: 1 }); // Seleciona somente o nome e as tags
  // .count(); Retorna o número de resultados ao invés dos resultados em si
  console.log(courses);
}

// Atualiza informações do curso no banco
async function updateCourse(id) {
  const course = await Course.findById(id);
  if (!course) return;

  // course.isPublished = true;
  // course.author = "Another author";

  course.set({
    isPublished: true,
    author: "Another author",
  });
  const result = await course.save();
  console.log(result);
}

// Deleta o curso do banco
async function removeCourse(id) {
  const result = await Course.deleteOne({ _id: id });
  console.log(result);
}

createCourse();
// getCourses();
// updateCourse("61fc3db845261d103c164276");
// removeCourse("61fc3db845261d103c164276");
