"use strict";
let m = 1;
while (m <= 20) {
    if (m % 3 === 0) {
        m++; // importante incrementar antes de continuar
        continue; // pula o restante e volta ao while
    }
    console.log(m);
    m++;
}
