// 28. Используя forEach, увеличьте возраст всех людей на 5 лет.
// Пример: [{name: 'Иван', age: 25}, {name: 'Мария', age: 30}] →
// [{name: 'Иван', age: 30}, {name: 'Мария', age: 35}]


const array = [{name: 'Иван', age: 25}, {name: 'Мария', age: 30}]

array.forEach(user => ({
    ...user,
    age: user.age += 5
}))

console.log(array)