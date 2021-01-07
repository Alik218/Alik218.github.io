// дз 07_01_2021

// 1) Сгенерировать массив паркомест. Количество задано в константе PLACES. Каждое паркоместо имеет свойства: id, occupied, time
const PLACES = 50
const parking = []

const generateParking = (parkingArr) => {
  for (let i = 0; i < PLACES; i++) {
    tempObj = {}
    tempObj.id = i+1
    tempObj.occupied = false
    tempObj.time = null
    parkingArr.push(tempObj)
  }
  return parkingArr
}

generateParking(parking)
parking[1].occupied = true;
parking[2].occupied = true;

console.log (parking)

// 2) Функция подсчета количества занятых и свободных паркомест

const barEl = document.querySelector('.bar')

const placeBusy = (parkingArr) => {
  count = 0 
  parkingArr.forEach(i => {
    if(i.occupied) {count++}
  })
  return count
}

placeBusy(parking)

const placeFree = (parkingArr) => {
  count = 0
  parkingArr.forEach(i => {
    if(!i.occupied) count++
  })
  return count
}

barEl.innerHTML = `FREE: ${placeFree(parking)} , BUSY: ${placeBusy(parking)}`

// 3) Отобразить на странице паркоместа с указанием id, свободно/занято, время занятого. 

const mainEl = document.querySelector('.main')

const genOneSpaceDiv = (index) => {
  let str =''
  str = `<div class="OneCar free" id="${index}">
  Номер места: ${parking[index].id}<br>
  Статус: ${parking[index].occupied}<br>
  Время: ${parking[index].time}<br>
  </div>`
  return str
}

const generateParkingHTML = () => {
  let str = ''
  parking.forEach((value,index) => {
      str = str + genOneSpaceDiv(index)
  })
  return str
}

mainEl.innerHTML = generateParkingHTML()

// 4) Также на странице отобразить текущее время

const timeEl = document.querySelector('.time')

const displayCurrentTime = () => {  /// Выводим на страницу текущее время и количество свободных мест
  setInterval(() => {
      return timeEl.innerHTML = `Time: ${new Date().toLocaleTimeString()}`
  }, 1000)
}
displayCurrentTime()

// 5) При нажатии на паркоместо, если оно пустое, появляется модальное окно с полем input, в нем текущее время, которое можно исправить, это время занимания парковки. При нажатии "ОК" парковка занимается.