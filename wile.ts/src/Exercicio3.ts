let N: number = 100;
let soma: number = 0;
let k: number = 1;

while (k <= N) {
  soma += k;
  k++;
}

console.log(`Soma de 1 até ${N} = ${soma}`);