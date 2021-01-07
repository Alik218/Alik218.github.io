// дз 07_01_2021
const barEl = document.querySelector('.bar')
const mainEl = document.querySelector('.main')
const timeEl = document.querySelector('.time')
const inputFree = document.querySelector('.input-free-wrap')
const inputOcupied = document.querySelector('.input-ocupied')
const inputTime = document.querySelector('.input')
const btnInput = document.querySelector('.btn-input')
const btnOk = document.querySelector('.btn-ok')
const btnCancel = document.querySelector('.btn-no')
const parkingTime = document.querySelector('.parking-time')

// 1) Сгенерировать массив паркомест. Количество задано в константе PLACES. Каждое паркоместо имеет свойства: id, occupied, time
const PLACES = 50
const parking = []

const generateParking = (parkingArr) => {
  for (let i = 0; i < PLACES; i++) {
    let parkingSlot = { id: i, occupied: 'free', time: 0 };
    parkingArr.push(parkingSlot);
};
}

generateParking(parking)

console.log (parking)

// 2) Функция подсчета количества занятых и свободных паркомест

const placeBusy = (parkingArr) => {
  count = 0 
  parkingArr.forEach(i => {
    if(i.occupied == 'busy') count++
  })
  return count
}


const placeFree = (parkingArr) => {
  count = 0
  parkingArr.forEach(i => {
    if(i.occupied == 'free') count++
  })
  return count
}


const parkingPlase = () => {
  setInterval(() => {
    barEl.innerHTML = `FREE: ${placeFree(parking)} , BUSY: ${placeBusy(parking)}`
  }, 1000)
}

// 3) Отобразить на странице паркоместа с указанием id, свободно/занято, время занятого. 

const displayAllParkingStatus = (parkingArr) => {  /// Рисуем на странице статус парковок
  let str = ''
  parkingArr.forEach(element => {
      str += `<div class="parking free" id='${element.id}'>
      Номер места: ${element.id}</br> 
      Статус: ${element.occupied}</br>
      Время: ${element.time}</div>`
  })
  mainEl.innerHTML = str
}

displayAllParkingStatus(parking)

// 4) Также на странице отобразить текущее время

const displayCurrentTime = () => {
  setInterval(() => {
      return timeEl.innerHTML = `Time: ${new Date().toLocaleTimeString()}`
  }, 1000)
}
displayCurrentTime()

// 5) При нажатии на паркоместо, если оно пустое, появляется модальное окно с полем input, в нем текущее время, которое можно исправить, это время занимания парковки. При нажатии "ОК" парковка занимается. 

const checkParkingStatus = (element) => {  /// Проверяем свободна парковка или нет
  return element.occupied === 'free' ? true : false;
}

displayAllParkingStatus(parking)
const parkingAll = document.querySelectorAll('.parking')

parkingAll.forEach (element => {
  element.addEventListener('click', () => {
    index = element.id
    if (checkParkingStatus(parking[index])) {
        inputOcupied.classList.remove('visible')
        inputFree.classList.add('visible')

    } else {
        inputFree.classList.remove('visible')
        inputOcupied.classList.add('visible')
        parkingTime.innerHTML = `Оставшееся время: ${calcTimeLast()}`
    }
  })
})


const refreshStatus = () => { 
  parkingAll[index].innerHTML = `Номер места: ${parking[index].id}</br> Статус: ${parking[index].occupied}</br>Время: ${parking[index].time}`
}

const parsTimeInput = () => {
  let m = moment()
  let inputHours = parking[index].time.slice(0, 2)
  let inputMinutes = parking[index].time.slice(-1)
  inputHours < moment().hour() ? m.add(1, 'd') : true;
  let input = m.hours(inputHours).minutes(inputMinutes)
  return input
}

const calcTimeLast = () => { 
  let timeDiff = parsTimeInput() - moment() 
  let timeLast = `${moment.utc(timeDiff).format('HH:mm')}`
  return timeLast
}

btnInput.addEventListener('click', () => {
  parking[index].occupied = 'busy'
  parking[index].time = inputTime.value
  parkingAll[index].classList.add('ocupied')
  refreshStatus()
  displayCurrentTime()
  inputFree.classList.remove('visible')
})

btnOk.addEventListener('click', () => {
  parking[index].occupied = 'free'
  parking[index].time = 0
  parkingAll[index].classList.remove('ocupied')
  refreshStatus()
  displayCurrentTime()
  inputOcupied.classList.remove('visible')
})

btnCancel.addEventListener('click', () => { 
  inputOcupied.classList.remove('visible')
})

parkingPlase()
