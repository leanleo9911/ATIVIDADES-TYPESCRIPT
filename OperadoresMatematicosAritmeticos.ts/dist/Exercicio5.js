"use strict";
//Operadores matemáticos em funções
function calcularQuadrado(num) {
    return Math.pow(num, 2);
}
console.log("Quadrado de 4:", calcularQuadrado(4));
// Exemplo 6: Mais um exemplo de Operador de Módulo
function ehParOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}
console.log("O número 7 é:", ehParOuImpar(7));
console.log("O número 10 é:", ehParOuImpar(10));
