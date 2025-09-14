//Função matemática exemplo
function calcularFatorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcularFatorial(n - 1);
}
console.log("Fatorial de 5:", calcularFatorial(5));
console.log("Fatorial de 7:", calcularFatorial(7));