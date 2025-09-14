"use strict";
let dia = 6;
if (dia >= 1 && dia <= 5) {
    console.log("Dia útil.");
}
else if (dia === 6 || dia === 7) {
    console.log("Final de semana.");
}
else {
    console.log("Número inválido para dia.");
}
