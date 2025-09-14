"use strict";
// Exercício 6
//Aprovando com falta
let materia = "Matemática";
let nota = 8;
let faltas = 12;
if (nota >= 7 && faltas <= 10) {
    console.log(`Aprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
}
else {
    console.log(`Reprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
}
