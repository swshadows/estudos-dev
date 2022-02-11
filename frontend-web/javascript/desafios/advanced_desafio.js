function createObj(name, age) {
  return { name, age };
}

let arrayMap = [createObj("Mário", 12), createObj("Iran", 10), createObj("Maria", 15), createObj("Gabriel", 15)];

// Função que replica o map()
function mappingFunc(elemArray) {
  for (let i in elemArray) {
    console.log(elemArray[i].name + " tem " + elemArray[i].age + " anos");
  }
}

console.log("Map() do array de objetos por função personalizada: ");
mappingFunc(arrayMap);

// Função que replica o reduce()
function reduceFuncAge(elemArray) {
  let age = 0;
  for (let i in elemArray) {
    age += elemArray[i].age;
  }
  console.log("Reduce() de idades por função personalizada: " + age);
}

function reduceFuncName(elemArray) {
  let name = "";
  for (let i in elemArray) {
    name += elemArray[i].name + " ";
  }
  console.log("Reduce() de nomes por função personalizada: " + name);
}

reduceFuncAge(arrayMap);
reduceFuncName(arrayMap);
