// 30. Используя filter, выберите всех людей старше 18 лет.
// Пример: [{name: 'Иван', age: 17}, {name: 'Мария', age: 22}] →
// [{name: 'Мария', age: 22}]

const array = [{name: 'Иван', age: 17}, {name: 'Мария', age: 22}]

const newArr = array.filter(user => user.age > 18)
console.log(newArr)