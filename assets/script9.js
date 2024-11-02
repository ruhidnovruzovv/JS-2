let arr = [203, 19, 2, 13, 196, 86, 35, 77];

let inputNumber = +prompt("Yoxlamaq istədiyiniz ədəd")
let exists;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === inputNumber) {
        exists = "var";
        break;
    }
    else{
        exists = "yoxdur"
    }
}

alert(`${inputNumber} array-də var mı? ${exists}`);
