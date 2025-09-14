"use strict";
function dividir(a, b) {
    if (b === 0) {
        console.log("Erro: divisão por zero");
        return NaN;
    }
    return a / b;
}
console.log(`Resultado: ${dividir(20, 4)}`);
