"use strict";
let a = 0;
let b = 1;
let termos = 10;
let contador = 1;
while (contador <= termos) {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
    contador++;
}
