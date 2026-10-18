
let i, num;

// 1. Multiplication Table of 5
console.log("-- Multiplication Table of 5 --");

for (i = 1; i <= 5; i++) {
    num = 5 * i;
    console.log("5 x " + i + " = " + num);
}

// 2. First number greater than 10 divisible by 6
console.log("-- First number > 10 divisible by 6 --");

let n = 11;

while (n > 10) {
    if (n % 6 === 0) {
        console.log("Found:", n);
        break;
    }
    n++;
}

// 3. do...while loop using continue
let j = 0;

do {
    j++;

    if (j === 2 || j === 4) {
        continue;
    }

    console.log("Number:", j);

} while (j < 5);
