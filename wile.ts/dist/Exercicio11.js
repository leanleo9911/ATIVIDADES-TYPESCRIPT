"use strict";
let texto = "TypeScript";
let invertido = "";
let p = texto.length - 1;
while (p >= 0) {
    invertido += texto[p];
    p--;
}
console.log(`Original: ${texto}`);
console.log(`Invertido: ${invertido}`);
