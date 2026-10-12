// 27. Используя map, создайте новый массив объектов с добавленным ключом
// "isAdult", где true для людей старше 18 лет, false — для остальных.
// Пример: [{name: 'Иван', age: 17}, {name: 'Мария', age: 22}] →
// [{name: 'Иван', age: 17, isAdult: false}, {name: 'Мария', age:
// 22, isAdult: true}]


const array = [
    { name: 'Иван', age: 17 },
    { name: 'Мария', age: 22 }
]

const newArr = array.map(user => ({
    ...user,
    isAdult: user.age > 18 ? true : false
}))

console.log(newArr)