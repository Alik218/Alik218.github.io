const cardTypeCount = 10;
const typeCount = 3;
const cardCount = cardTypeCount * typeCount;

// створюю масив з порожніми обєктами

const createField = (cellRow, cellCols) => {
  let arr = [];

  for (let i=0; i < cellRow; i++){
            arr[i] = []
            for (let j = 0; j < cellCols; j++){
                arr[i][j] = []
            }
        }
        return arr
};


// генерувати карти


const generateCards = () => {
  let cards = []
  for (let j = 0; j < typeCount; j++) {
    for (let i = 0; i < cardTypeCount; i++) {
      let card = {}
      card.type = j
      cards.push(card)
    }
  }
  for (let i = 0; i < 100; i++) {
    cards = shuffle(cards)
  }
  return cards
};

// перемішати карти

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

//  підраховуючи залишилися карти в колоді

const cardsInDeck = (arr) => {
  let sumPlayed = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof(arr[i][j].type) !== 'undefined') sumPlayed++
    }
  }
  return cardCount - sumPlayed
}

//  створення ігрового поля


const makeTableHTML = (arr, onclick) => {
  const poz = document.querySelector('.main')
  const tab = document.createElement('table')
  poz.appendChild(tab)
  for (let i = 0; i < arr.length; i++) {
    let row = tab.insertRow(i)
    for (let j = 0; j < arr[i].length; j++) {
      let cell = row.insertCell(j)
      cell.addEventListener('click',  onclick)
      cell.classList.add('cell')
    }
  }
}

// вивід кількості карт

const infoEl = document.querySelector('.info')

const generateInfoHTML = (field) => {
  infoEl.innerHTML = `Remainder: ${cardsInDeck(field)} cards`
}

// витягнути карту

const generateBoxCards = (cards) => {
  card = cards[cards.length - 1]
  drawCard(document.querySelector('.box_cards'), card)
}

const statusEl = document.querySelector('.status')

const drawCard = (el, card) => {
  el.classList.remove("img0")
  el.classList.remove("img1")
  el.classList.remove("img2")
  if(typeof(card) === 'undefined') {
    statusEl.classList.remove('visible')
    statusEl.classList.add('visible')
    statusEl.innerHTML = `The cards are over`
      return;
  }
  switch (card.type) {
    case 0:
      el.classList.add("img0")
      break
    case 1:
      el.classList.add("img1")
      break
    case 2:
      el.classList.add("img2")
  }
}


let field = createField(8, 8)
let cards = generateCards()

const doMove = (ev) => {
  let elt = field[ev.target.parentNode.rowIndex][ev.target.cellIndex]; //отримати активну польову комірку

  if (typeof (elt.type) === 'undefined') {     // покласти картку на клітинку
    card = cards.pop()

    elt['angle'] = 0  //встановіть кут повороту на 0
    elt['type'] = card.type   //присвоєння типу картки польовій комірці
  
    drawCard(ev.target, card)  
    
  } else { 
      let angle = parseInt(elt.angle)  
      angle += 90
      if(angle === 360) {
          angle = 0
      }
      ev.target.style.transform = `rotate(${angle}deg)`
      elt.angle = '' + angle
  }
  
  generateBoxCards(cards)
  generateInfoHTML(field)

    field[ev.target.parentNode.rowIndex][ev.target.cellIndex] = elt
};

makeTableHTML(field, doMove)


generateInfoHTML(field)

generateBoxCards(cards)

















