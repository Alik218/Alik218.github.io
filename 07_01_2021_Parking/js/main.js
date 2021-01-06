// дз 07_01_2021

const barEl = document.querySelector('.bar')
const mainEl = document.querySelector('.main')
const timeEl = document.querySelector('.time')

// 1) Сгенерировать массив паркомест. Количество задано в константе PLACES. Каждое паркоместо имеет свойства: id, occupied, time
const PLACES = 10 
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

const placeBusy = (parkingArr) => {
  count = 0 
  parkingArr.forEach(i => {
    if(i.occupied) count++
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

const genOneSpaceDiv = (index) => {
  let str =''
  str = `<div class="OneCar" id="${index}"><br>
      id = ${parking[index].id}<br>
      occupation: ${parking[index].occupied}<br>
      time: ${parking[index].time}<br>
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

timeEl.innerHTML = moment().format('MMMM Do YYYY, H:mm:ss ')
