const mainObj = {
    arr: [],
}

const budyColor = ['Желтый', 'Зеленый', 'Красный', 'Синий', 'Оранжевый']
const transmission = [ 'Автоматическая', 'Ручная']
const conditioning = ['Установлен', 'Отсутствует']
const interiorTrim = ['Кожа','Ткань', 'Комбинированная']

function item(b, t, c, i) {
    this.budyColor = b
    this.transmission = t
    this.conditioning = c
    this.interiorTrim = i
} 

let count = 1
budyColor.forEach(body => {
    transmission.forEach(tran => {
        conditioning.forEach(con => {
            interiorTrim.forEach(int =>{
                let tempObj = new item(body, tran, con, int)
                let tempStr = `${String(count).padStart(4,'0')}${body[0]}${tran[0]}${con[0]}${int[0]}`
                tempObj.code = tempStr
                mainObj.arr.push(tempObj)
                count++
            })
        })
    })
})

console.dir(mainObj)