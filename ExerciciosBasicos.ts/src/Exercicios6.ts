// Exercício 6
//Aprovando com falta

let materia: string = "Matemática";
let nota: number = 8;
let faltas: number = 12;

if (nota >= 7 && faltas <= 10) {
  console.log(`Aprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
} else {
  console.log(`Reprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
}