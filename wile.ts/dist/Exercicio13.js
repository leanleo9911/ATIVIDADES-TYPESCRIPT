"use strict";
let acumulador = 0;
let sorteado;
do {
    sorteado = Math.floor(Math.random() * 10) + 1;
    acumulador += sorteado;
    console.log(`Sorteado: ${sorteado} | Acumulado: ${acumulador}`);
} while (acumulador <= 50);
console.log("Limite atingido!");
