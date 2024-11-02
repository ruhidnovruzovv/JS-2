let arr = [203, 19, 2, 13, 196, 86, 35, 77];

let oneDigit = 0;
let twoDigits = 0;
let threeDigits = 0;

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num < 10) {
        oneDigit++;
    } else if (num < 100) {
        twoDigits++;
    } else if (num < 1000) {
        threeDigits++;
    }
}

console.log("Bir rəqəmli:", oneDigit);
console.log("İki rəqəmli:", twoDigits);
console.log("Üç rəqəmli:", threeDigits);
