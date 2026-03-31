const arr = [4, 5, 3, 5, 2, 4, 5, 3]
const sum = arr.reduce((arr, n) => arr + n, 0).toFixed (2)
console.log(sum)

const event = arr.filter(n => n > 3)
console.log(event)
const squared = event.map(n => n = `Оценка 5`)
console.log(squared)

const arrfruits = ["банан", "яблоко", "вишня", "абрикос", "груша"]
const sort = arrfruits.sort()
console.log(sort.join(", "))

const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]

console.log(products.filter(n => n < 10000))
console.log(products.map(p => p.name))
console.log(products.reduce((acc, el) => acc + el.price, 0))

const arrnum = [12, 45, 7, 33, 18]
console.log(arrnum.some(num => num > 40))
console.log(arrnum.every(num => num > 5))
