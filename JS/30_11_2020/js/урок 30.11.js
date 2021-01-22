урок 30.11
// 1dz

const genArr = () =>{
    return [1, 4, 6, 3, 7, 2, 8, 0, 2];
};

const fixArr = (index, array) => {
    if (array[index] !== (array[index -1] + array[index + 1])){
        array[index] = (array[index -1] + array[index + 1]);
    };
    return array
};

let arr = genArr();
arr = fixArr(2, arr)
arr = fixArr(5, arr)
arr = fixArr(7, arr)

console.log(arr);


// 2 dz
const randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const genArr = (len, min1, max1) => {
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(randomInt(min1, max1));
    }
    return arr;
};

const minValue = (arr) => {
    let min = arr [0];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    };
    return min;
};

const decrElem = (index, array, diff) => {
    let newArr = []; 
    for(let i = 0; i < array.length; i++) {
        newArr[i] = array[i];
    }
    newArr[index] = newArr[index] - diff;
    return newArr;
}

const arr = genArr(10, 1, 30);
let min1 = minValue(arr);
let arr1 = decrElem(0, arr, min1);
let lastEl = arr.length - 1;
arr1 = decrElem(lastEl, arr1, min1);
console.log('arr1:', arr, 'arr2:', arr1, 'min:', min1);



// 3dz

const randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let genArr = (l, min, max) => {
    let arr1 = []
    for(let i=0; i < l; i++) {
        arr1.push(randomInt(min, max))
    }
    return arr1
}

const arr2 = genArr(9, 0, 80);

console.log(arr2)


let arrNew = arr2
for (let i=0; i < arrNew.length; i++) {
    arrNew[i] = arrNew[i] * 3 - 5;
}

console.log(arrNew)