"use strict";
// Exercício 14
// Sistema de notas


function conceito(nota) {
    if (nota >= 90)
        return "A";
    else if (nota >= 80)
        return "B";
    else if (nota >= 70)
        return "C";
    else if (nota >= 60)
        return "D";
    else if (nota >= 50)
        return "E";
    else
        return "F";
}
console.log(`Nota 95 -> Conceito: ${conceito(95)}`); // A
console.log(`Nota 85 -> Conceito: ${conceito(85)}`); // B
console.log(`Nota 75 -> Conceito: ${conceito(75)}`); // C
console.log(`Nota 65 -> Conceito: ${conceito(65)}`); // D
console.log(`Nota 55 -> Conceito: ${conceito(55)}`); // E
