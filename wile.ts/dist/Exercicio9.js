"use strict";
let nums = [5, 12, 3, 27, 9, 27, 1];
let iMax = 0;
let maior = nums[0];
while (iMax < nums.length) {
    if (nums[iMax] > maior) {
        maior = nums[iMax];
    }
    iMax++;
}
console.log(`Maior valor = ${maior}`);
