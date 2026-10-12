// 22. Используя filter, выберите все объекты, где возраст больше 30.
// Пример: [{name: 'Иван', age: 25}, {name: 'Мария', age: 30}, {name:
// 'Петр', age: 35}] → [{name: 'Петр', age: 35}]

const array = [{name: 'Иван', age: 25}, {name: 'Мария', age: 30}, {name:'Петр', age: 35}]

const newArr = array.filter(user => user.age > 30)
console.log(newArr)