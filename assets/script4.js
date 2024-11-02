let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let i = 0;

while (i < numbers.length) {
    sum += numbers[i];
    i++;
}

let average = sum / numbers.length;
console.log("Ədədi orta:", average);
