const camiseta1: number = 80;
const descontos: number = 0.15;
const valorComDesconto: number = (camiseta1 * descontos);
const valorFinal: number = (camiseta1 - valorComDesconto);

console.log("O valor original: R$ " + camiseta1);
console.log("O desconto: R$ " + valorComDesconto);
console.log("O valor final com desconto: R$ " + valorFinal);
