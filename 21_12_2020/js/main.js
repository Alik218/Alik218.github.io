// dz21_12_2020

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
    trainEl.style.left = getComputedStyle(trainEl).left
    console.log(trainEl.style.left)
    trainEl.classList.remove('train_left')
    trainEl.classList.add('train_right')
    trainEl.style.animationPlayState=state?'paused':'running';
    state=!state;
})

btnLeftEl.addEventListener('click' , () => {
    trainEl.style.left = getComputedStyle(trainEl).left
    console.log(trainEl.style.left)
    trainEl.classList.remove('train_right')
    trainEl.classList.add('train_left')
    trainEl.style.animationPlayState=state?'paused':'running';
    state=!state;
})


document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyF' : 
            lightEl.classList.toggle('light_on')
        break
        case 'ArrowRight' :
            trainEl.style.left = getComputedStyle(trainEl).left
            trainEl.classList.remove('train_left')
            trainEl.classList.add('train_right')
            trainEl.style.animationPlayState=state?'paused':'running';
            state=!state;
        break
        case 'ArrowLeft' :
            trainEl.style.left = getComputedStyle(trainEl).left
            trainEl.classList.remove('train_right')
            trainEl.classList.add('train_left')
            trainEl.style.animationPlayState=state?'paused':'running';
            state=!state;
        break
    }
    })
