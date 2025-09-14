// Exercício 5
//Media da nota de um aluno
let nota1: number = 7;
let nota2: number = 8;
let nota3: number = 6;

let media: number = (nota1 + nota2 + nota3) / 3;

console.log(`Média do aluno: ${media.toFixed(2)}`);
if (media >= 6) {
    console.log("Aluno aprovado.");
} else {
    console.log("Aluno reprovado.");
}