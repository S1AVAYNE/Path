// 25. Используя map, создайте массив, где возраст каждого человека в 2 раза
// больше.
// Пример: [{name: 'Иван', age: 25}, {name: 'Мария', age: 30}] →
// [{name: 'Иван', age: 50}, {name: 'Мария', age: 60}]

const array = [{name: 'Иван', age: 25}, {name: 'Мария', age: 30}]

const newArr = array.map(user => ({
    ...user,
    age: user.age *= 2
}))

console.log(newArr)