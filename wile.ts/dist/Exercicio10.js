"use strict";
let lista = ["sql", "ts", "js", "python", "go"];
let alvo = "python";
let pos = 0;
let encontrado = false;
while (pos < lista.length) {
    if (lista[pos] === alvo) {
        encontrado = true;
        break; // interrompe o loop quando encontra
    }
    pos++;
}
console.log(encontrado ? `Encontrado em lista[${pos}]` : "Não encontrado");
