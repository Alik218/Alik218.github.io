// дз 26-11-2020
// Выведите в консоль одной строкой все четные числа от 2 до 14 и нечетные от 33 до 45
let num1 = 2;
let num2 = 14;
let result = '';
for (i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        result = `${result} ${i}`;
    }
}
let num3 = 33;
let num4 = 45;
for (i = num3; i <= num4; i++) {
    if (i % 2 === 1) {
        result = `${result} ${i}`;
    }
}
console.log(result);

// 2) Найти ближайшие два простые числа к числу 9991999

let numStart = 9991999;

let currentNum = numStart;
let resultSimpleNumbers = '';
let count = 0;
let radius = 0;

const isSimpleNum = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const addNumberToResult = (number) => {
    resultSimpleNumbers = `${resultSimpleNumbers} ${number}`;
    count++;
};

do {
    radius = radius + 2;
    if (isSimpleNum(currentNum + radius)) {
        addNumberToResult(currentNum + radius);
    }
    if (isSimpleNum(currentNum - radius)) {
        addNumberToResult(currentNum - radius);
    }
} while(count < 2);

console.log(`Nearest simple numbers to ${numStart} are: ${resultSimpleNumbers}`);