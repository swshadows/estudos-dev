// Importando função
import greet from "./modules/greet";
console.log(greet());

// Importando variáveis
import { variable } from "./modules/variable";
console.log(variable);

// Multiplos imports
// import { a, myFunction } from "./modules/multiple";
import * as importAll from "./modules/multiple";
console.log(importAll);

// Alias de importação
// Importando showName() como name()
import { showName as name } from "./modules/alias";
console.log(name());

// Importando interfaces e tipos
import { Human } from "./modules/typeAndInterfaces";
class User implements Human {
  name: string = "José";
  age: number = 10;
}
