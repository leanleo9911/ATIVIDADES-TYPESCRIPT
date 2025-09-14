"use strict";
let valores = [10, 20, 30, 40, 50];
let idx = 0;
let total = 0;
while (idx < valores.length) {
    total += valores[idx];
    idx++;
}
console.log(`Total = ${total}`);
