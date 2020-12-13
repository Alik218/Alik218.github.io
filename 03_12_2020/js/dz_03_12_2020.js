// dz_3_12_2020
// 1) Задано 2 массива одинаковой длины n. Получить 3й массив, который есть копия первого, но в индексах 1, n-1, n/2 значения со второго массива.

const randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const arrayRandomNumbers = (length, minNumber, maxNumber) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(randomInt(minNumber, maxNumber));
    };
    return arr;
};

const replaceArrayEl = (arr, index, value) => {
    arr[index] = value;
};

const arrLenght = 10;
const arr1 = arrayRandomNumbers(arrLenght, 10, 99);
const arr2 = arrayRandomNumbers(arrLenght, 10, 99);
const arr3 = [...arr1];

const indexReplaceList = [1, arrLenght - 1, arrLenght / 2];

for (let i = 0; i < indexReplaceList.length; i++) {
    replaceArrayEl(arr3, indexReplaceList[i], arr2[indexReplaceList[i]]);
};

console.log(arr1, arr2, arr3);

// 2) Задано целое число. Определить количество разрядов. 

const numberLength = (num) => (number === 0) ? 1 : Math.ceil(Math.log10(Math.abs(number) + 0.5));

const number = 9991999;
console.log(numberLength(number));