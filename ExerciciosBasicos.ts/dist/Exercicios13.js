"use strict";
// Exercício 13
// Conversor de temperaturas
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}
//Exemplo
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C é igual a ${fahrenheit}°F`);
