// дз 05_12_2020
// Программа поиска загаданного числа = 501. Первоначальный диапазон поиска: (-2147483647; 2147483647). При сравнении числа с загаданным, выдавать ответ наподобие "больше/меньше". Весь лог поиска, с указанием номера итерации вывести на страницу.

let minNumber = -2147483647;
let maxNumber = 2147483647;
let guessedNum = 501;
let count = 0;
let strLog = '';
const searchNumber = (num) => {
    do {
        num = Math.ceil((minNumber + maxNumber) / 2);
        count++;
        if (num > guessedNum) maxNumber = num;
        else if (num < guessedNum) minNumber = num;
        strLog = `${strLog}   Прохід: ${count}, Число: ${num}`;
        if (num > guessedNum) {
            strLog = `${strLog}  Відповідь: ${num}<br> `;
            maxNumber = num;
        } else if (num < guessedNum) {
            minNumber = num;
            strLog = `${strLog}  Відповідь: ${num}<br>`;
        } else {
            strLog = `${strLog}  Відповідь: ${num} Ура!<br>`;
        };
    } while (num != guessedNum);
    return strLog;
};
let mainEl = document.querySelector('.main');
mainEl.innerHTML = searchNumber(guessedNum);