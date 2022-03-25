const fs = require("fs");

fs.writeFile("test.txt", "Olá Node.js", (error) => {
  console.log(error);
});
