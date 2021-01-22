// дз 28_11_2020
// Найти ближайшие два простые числа к числу 9991999, написать код через функции.
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