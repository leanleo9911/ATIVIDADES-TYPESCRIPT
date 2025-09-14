let num: number = 5;
let fat: number = 1;
let c: number = num;

while (c > 1) {
  fat *= c;
  c--;
}

console.log(`${num}! = ${fat}`);
