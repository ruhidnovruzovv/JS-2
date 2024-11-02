let arr = [203, 19, 2, 13, 196, 86, 35, 77];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Ən böyük ədəd:", max);
