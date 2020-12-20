const btnLightEl = document.querySelector('.light2')
const lightEl = document.querySelector('.light_on')
const btnRightEl = document.querySelector('.right')
const btnLeftEl = document.querySelector('.left')
const trainEl = document.querySelector('.train')
let state=true;


btnLightEl.addEventListener('click', () => {
    lightEl.classList.toggle('light_on')
})

btnRightEl.addEventListener('click' , () => {
    document.getElementsByClassName('train')[0].style= "animation: voyage 10s linear infinite";
    trainEl.style.animationPlayState=state?'paused':'running';
    state=!state;
})

btnLeftEl.addEventListener('click' , () => {
    document.getElementsByClassName('train')[0].style= "animation: voyage2 10s linear infinite";
    trainEl.style.animationPlayState=state?'paused':'running';
    state=!state;
})

