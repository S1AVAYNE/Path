// 24. Используя forEach, выведите в консоль имена всех людей в массиве.
// Пример: [{name: 'Иван', age: 25}, {name: 'Мария', age: 30}] →
// Иван, Мария

const array = [{name: 'Иван', age: 25}, {name: 'Мария', age: 30}]

array.forEach(user => console.log(user.name))