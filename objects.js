const book = {
  title: "Мастер и Маргарита",
  author: "Булгаков М.А.",
  year: 1967,
  pages: 480,
  available: true,
  info() {
    return `«${this.title}», ${this.author}, ${this.year} г., ${this.pages} стр.`;
  }
};

console.log(book.info());

const {title, author, ratting = 0} = book

console.log(title)
console.log(author)
console.log(ratting)

const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]

console.log(students.filter (s => s.passed === true).map(s=>s.name))
console.log(students.find(s => s.grade > 4.5))
console.log((students.reduce((acc, x) => acc + x.grade, 0)/students.length).toFixed(2))

const u1 = { name: "Иван", age: 20, city: "Казань" }
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" }

function mergeUsers(user1, user2) {
  return { ...user1, ...user2 };
}

console.log(mergeUsers(u1, u2))

function countByField(arr, field) {
  const counter = {};
  
  for (const item of arr) {
    const value = item[field];
    if (counter[value]) {
      counter[value]++;
    } else {
      counter[value] = 1;
    }
  }
  
  return counter;
}

console.log(countByFilter(students, 'passed'))