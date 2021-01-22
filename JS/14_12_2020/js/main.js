// dz14_12_2020

// 1.При нажатии на кнопку Go должно появится необходимое количество полей ввода, при этом каждое поле ввода будет заполнено одним словом из текста. 

let inputEl = document.querySelector('.input')
let btnEl = document.querySelector('.btn')

btnEl.addEventListener('click', (inputEl)=> {
    inputEl = document.querySelector('.input')
    inputEl.value
    console.log('click on input')

    let a = [];
    let str = inputEl.value;
    let s = '';
    for (let i=0; i<=str.length; i++) {
        if (str[i] != ' ' && i!=str.length) {
            s += str[i];
        }
        else {
            a.push(s);
            s='';
        }
    };
    
    for (let i = 0; i<a.length; i++){
        s = `${s} <textarea class="input" id="${i}"> ${a[i]} </textarea> `
        document.querySelector('.main2').innerHTML = s;
        }   


// 2.Найти самое длинное слово, вывести его в консоль. 


    let longest = a.reduce(
        (a, b) => a.length >= b.length ? a : b
    );

    console.log(longest);


})