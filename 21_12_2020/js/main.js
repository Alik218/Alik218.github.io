const btnLightEl = document.querySelector('.light2')
const lightEl = document.querySelector('.light_on')
const locoEl = document.querySelector('.loco');
const leftBtnEl = document.querySelector('.left');
const rightBtnEl = document.querySelector('.right');
const START = 0;
const LEFT = 0;
const RIGHT = 1000;
const TIME = 2;


btnLightEl.addEventListener('click', () => {
    lightEl.classList.toggle('light_on')
})

const toggleAnimPlayState = () => {
    if (locoEl.style.animationPlayState === 'paused' || locoEl.style.animationPlayState === '') {
        locoEl.style.animationPlayState = 'running'
    } else {
        locoEl.style.animationPlayState = 'paused'
    }
}

const moveLeft = () => {
    move('left')
}

const moveRight = () => {
    move('right')
}

const move = (direction) => {
    let classNameReplace = getClassNameReplace(direction)
    if (locoEl.classList.contains(classNameReplace)) {
        let currentLeft = getComputedStyle(locoEl).left
        locoEl.style.left = currentLeft
        currentLeft = Number(currentLeft.slice(0, -2))
        let newAnimationTime = null
        if (currentLeft === LEFT) newAnimationTime = TIME * 3
        else newAnimationTime = getDividend(direction, currentLeft) * TIME / START
        locoEl.style.animationDuration = newAnimationTime
        toggleDirection()
    }
    toggleAnimPlayState()
}

const getDividend = (direction, currentLeft) => {
    let dividend = null
    if (direction === 'left') dividend = currentLeft
    else if (direction === 'right') dividend = RIGHT - currentLeft
    return dividend
}

const getClassNameReplace = (direction) => {
    let classNameReplace = ''
    if (direction === 'left') classNameReplace = 'moveRight'
    else if (direction === 'right') classNameReplace = 'moveLeft'
    return classNameReplace
}

const toggleDirection = () => {
    locoEl.classList.toggle('moveLeft')
    locoEl.classList.toggle('moveRight')
}

document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowLeft':
            moveLeft()
            break
        case 'ArrowRight':
            moveRight()
            break
        case 'KeyF' : 
            lightEl.classList.toggle('light_on')
            break
    }
})

leftBtnEl.addEventListener('click', moveLeft)
rightBtnEl.addEventListener('click', moveRight)