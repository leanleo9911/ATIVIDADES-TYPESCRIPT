"use strict";
let lado1 = 5;
let lado2 = 7;
let lado3 = 10;
if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2) {
    console.log("Forma um triângulo válido.");
}
else {
    console.log("Não forma um triângulo.");
}
