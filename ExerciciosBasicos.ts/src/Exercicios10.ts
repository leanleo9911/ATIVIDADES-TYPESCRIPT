// Exercício 10
// Calculadora simples

function calcular(a: number, b: number, operacao: string): number {
    if (operacao === "+") return a + b;
    if (operacao === "-") return a - b;
    if (operacao === "*") return a * b;
    if (operacao === "/") {
        if (b === 0) {
            console.log("Erro: Divisão por zero");
            return NaN;
        }
        return a / b;
    }
    console.log("Erro: Operação inválida");
    return NaN;
}
console.log(`10 + 5 = ${calcular(10, 5, "+")}`); // 15
console.log(`10 - 5 = ${calcular(10, 5, "-")}`); // 5
console.log(`10 * 5 = ${calcular(10, 5, "*")}`); // 50
console.log(`10 / 5 = ${calcular(10, 5, "/")}`); // 2
