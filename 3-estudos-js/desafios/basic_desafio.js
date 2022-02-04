var nomes = ["Joelson", "Iago", "Mario", "José"];
var notas1 = [10, 8.3, 6, 2];
var notas2 = [9, 7.5, 9.5, 0];

function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

function aprovReprov(media) {
  if (media >= 7) return "Aprovado";
  else return "Reprovado";
}

console.log("---------------- CALCULADOR DE MÉDIA v0.1 ----------------");
for (var index in nomes) {
  var nota1 = notas1[index];
  var nota2 = notas2[index];
  var media = calcularMedia(nota1, nota2);
  console.log("Aluno: " + nomes[index] + "\nNota 1: " + notas1[index] + "\nNota 2: " + notas2[index] + "\nMedia: " + media + "\n" + aprovReprov(media) + "\n");
}
