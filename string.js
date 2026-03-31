const sentense = " javascript - это просто! "
console.log(sentense.trim()[0].toUpperCase()+ sentense.trim().slice(1))

const stringname = "Имя"
const surname = "Иванов"
const group ="ИСР-21"
const floornum = 4.75
console.log(`Студент ${surname} ${stringname}, ${group}, средний бал:${floornum}`)

const stringdate = "2025-03-15"
const splitdate = stringdate.split("-")
console.log(`${splitdate[2]}.${splitdate[1]}.${splitdate[0]}`)

const stringstring = "Node.js разработчик"
console.log(`${stringstring.startsWith("Node") && stringstring.endsWith("разработчик") ? "true" : "false"}`)

console.log("42".padStart(8, "0"))