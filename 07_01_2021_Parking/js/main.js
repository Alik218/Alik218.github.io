// дз 07_01_2021
const barEl = document.querySelector('.bar')
const mainEl = document.querySelector('.main')
const timeEl = document.querySelector('.time')
const parkingSlot = document.querySelectorAll('.parking-slot')

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
      str += `<div class="parking-slot free" id='${element.id}'>
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

mainEl.addEventListener('click', (element) => {
  parkingSlot.forEach(el => {
    if(el.occupied == 'free') {
      parking[el] = 'qwer'
    } 
  })
  console.log(element)

})


parking[1].occupied = 'busy'



// 6) Если нажать на занятой парковке, то появляется модальное окно "освободить парковку? Да/Нет. Время занимания паркоместа: столько-то".
// 7) При нажатии на пустой парковке, если количество свободных паркомест меньше 20% от всех и при этом время занимания больше 9:00 и меньше 18:00, то в модальном окне порекомендовать не занимать паркоместо.







displayAllParkingStatus(parking)
parkingPlase()
