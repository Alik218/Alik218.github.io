const btnRedEl = document.querySelector('.btn_red')
const btnOrangEl = document.querySelector('.btn_orang')
const btnGreenEl = document.querySelector('.btn_green')

const lightsRedEl = document.querySelector('.red')
const lightsOrangEl = document.querySelector('.orang')
const lightsGreenEl = document.querySelector('.green')

const offLights = () => {
  lightsRedEl.classList.remove('red_on');
  lightsOrangEl.classList.remove('orang_on');
  lightsGreenEl.classList.remove('green_on');
}

btnRedEl.addEventListener('click', () => {
  offLights()
  lightsRedEl.classList.add('red_on')
  })


btnOrangEl.addEventListener('click', () => {
  offLights()
  lightsOrangEl.classList.add('orang_on')
  })


btnGreenEl.addEventListener('click', () => {
  offLights()
  lightsGreenEl.classList.add('green_on')
  })