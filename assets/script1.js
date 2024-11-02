let num = parseInt(prompt("Ədədi daxil edin:"));
let originalNum = num;
let sumOfCubes = 0;

while (num > 0) {
    let digit = num % 10;
    sumOfCubes += digit * digit * digit;  
    num = (num - digit) / 10;   
}

if (sumOfCubes === originalNum) {
    console.log(originalNum + " Armstrong ədədidir.");
} else {
    console.log(originalNum + " Armstrong ədədi deyil.");
}
