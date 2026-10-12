// 21. Используя map, увеличьте возраст всех людей в массиве на 1.
// Пример: [{name: 'Иван', age: 25}, {name: 'Мария', age: 30}] →
// [{name: 'Иван', age: 26}, {name: 'Мария', age: 31}]

const array = [
    {
        name: 'Иван',
        age: 25
    }, 
    {
        name: 'Мария',
        age: 30
    }
]

const newArr = array.map(user => ({
    ...user,
    age: user.age + 1
}))

console.log(newArr)