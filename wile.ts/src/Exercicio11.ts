let texto: string = "TypeScript";
let invertido: string = "";
let p: number = texto.length - 1;

while (p >= 0) {
  invertido += texto[p];
  p--;
}

console.log(`Original: ${texto}`);
console.log(`Invertido: ${invertido}`);