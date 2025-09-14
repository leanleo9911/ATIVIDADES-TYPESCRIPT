"use strict";
// Exercício 12
// Juros compostos
function calculandoJurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow(1 + taxa / 100, tempo);
}
//Exemplo
let capitalC = 1000; // Capital inicial
let taxaC = 0.05; // Taxa de juros anual em %
let tempoC = 10; // Tempo em anos
let vfCompostos = calculandoJurosCompostos(capitalC, taxaC, tempoC);
console.log(`Juro compostos -> VF: R$ ${vfCompostos.toFixed(2)}`);
