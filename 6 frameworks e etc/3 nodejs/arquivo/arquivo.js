let fs = require("fs");
let args = process.argv.slice(2);

fs.writeFile(args[0], args[1], (error) => {
  if (error) {
    throw error;
  } else {
    console.log("Arquivo criado com sucesso");
  }
});
