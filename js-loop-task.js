// task 1

let num = 1;

while (num <= 60) {
    console.log(num, "- I will invest at least 6 hrs every single day for next 60 days!");
    num++;
}

console.log('task 1 done');

// task 2

let num2 = 61;

while (num2 <= 100) {
    if (num2 % 2 === 1) {
        console.log(num2);
    }
    num2++;
}

console.log('task 2 done');

// task 3
let num3 = 78;
while (num3 <= 98) {
    num3 % 2 === 0 ? console.log(num3) : null;
    num3++
}


console.log('task 3 done');

// task 4
let num4 = 81;
sum = 0;

while (num4 <= 131) {
    num4 % 2 === 1 ? sum += num4 : null;
    num4++;
}
console.log('Sum of odd numbers between 81 to 131 is:', sum);

console.log('task 4 done');

// task 5
let num5 = 206;
sum1 = 0;

while (num5 <= 311) {
    num5 % 2 === 0 ? sum1 += num5 : null;
    num5++;
}
console.log('Sum of even numbers between 206 to 311 is:', sum1);

console.log('task 5 done');

// task 6
let num6 = 1;
let multiples = 0;
while(num6 <= 10){
    multiples = 5 * num6;
    console.log("5 x", num6, "=", multiples);
    num6++;
}

console.log('task 6 done');

// task 7
let num7 = 21;

while(num7 >= 15){
    console.log(num7);
    num7--;
}

console.log('task 7 done');