"use strict";
let num = 5;
let fat = 1;
let c = num;
while (c > 1) {
    fat *= c;
    c--;
}
console.log(`${num}! = ${fat}`);
