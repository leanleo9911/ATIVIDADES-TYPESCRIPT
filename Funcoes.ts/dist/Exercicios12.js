"use strict";
function jurosSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo);
}
console.log(`VF = R$ ${jurosSimples(1000, 0.05, 12).toFixed(2)}`);
