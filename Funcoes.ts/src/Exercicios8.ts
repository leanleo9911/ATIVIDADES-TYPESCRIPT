function parOuImpar(n: number): string {
  if (n % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(`7 é ${parOuImpar(7)}`);
