// 23. Используя map, создайте массив строк с именами всех людей.
// Пример: [{name: 'Иван', age: 25}, {name: 'Мария', age: 30}] →
// ['Иван', 'Мария']

const array = [{name: 'Иван', age: 25}, {name: 'Мария', age: 30}]

const newArr = array.map(user => user.name)

console.log(newArr)