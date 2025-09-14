"use strict";
const camiseta1 = 80;
const descontos = 0.15;
const valorComDesconto = (camiseta1 * descontos);
const valorFinal = (camiseta1 - valorComDesconto);
console.log("O valor original: R$ " + camiseta1);
console.log("O desconto: R$ " + valorComDesconto);
console.log("O valor final com desconto: R$ " + valorFinal);
