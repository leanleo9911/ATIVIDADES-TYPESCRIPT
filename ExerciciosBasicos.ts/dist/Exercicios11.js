"use strict";
// Exercício 11
// Juros simples
function calcularJurosSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo) / 100;
}
// Exemplo de uso
const capital = 1000; // valor inicial
const taxa = 5; // taxa de juros em porcentagem
const tempo = 2; // tempo em anos
let vfSimples = calcularJurosSimples(capital, taxa, tempo);
console.log(`Juro simples -> VF: R$ ${vfSimples.toFixed(2)}`);
