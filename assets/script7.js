let arr = [203, 19, 2, 13, 196, 86, 35, 77];

let min = arr[0];
let max2 = arr[0];
let minIndex = 0;
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
    }
    if (arr[i] > max2) {
        max2 = arr[i];
        maxIndex = i;
    }
}

let temp = arr[minIndex];
arr[minIndex] = arr[maxIndex];
arr[maxIndex] = temp;

console.log("Dəyişdirilmiş array:", arr);
