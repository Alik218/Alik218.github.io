const arr = [5, 23, -110, 3, 18, 0, 14];

// a.Вывести в консоль только нечетные числа;
arr.forEach(value => {
    if (value % 2 != 0) 
    console.log(value);
});

// b.Вывести в консоль массив, каждая ячейка которого будет увеличена на 20;
console.log(arr.map(value => value * 20));

// c.Вывести в консоль массив, состоящий только из положительных нечетных чисел;
console.log(arr.filter(value => value > 0 && value % 2 != 0));

// d.Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки.
console.log(arr.reduce((sum, value) => sum + (value % 3), 0));

// e.Проверить, и вывести в консоль результат проверки, есть ли в массиве число 5.
const arrCheckNum = arr.includes(5);
console.log(arrCheckNum)

// f.Получить массив без первого элемента, вывести в консоль.
console.log(arr.slice(1));

// g.Отсортировать массив по возрастанию, вывести в консоль.
console.log(arr.sort((a, b) => a - b));

// h) Определить, есть ли в массиве числа, кратные 5.
console.log(arr.some(value => (value != 0 && value % 5 === 0))); 