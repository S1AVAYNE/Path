// 1. Используйте filter:
// Из массива объектов (с полями name и age) отфильтруйте всех пользователей старше 30 лет.

let array = [
    {
        name: "Stas",
        age: 32
    },
    {
        name: "Daria",
        age: 16
    }
]

array = array.filter(user => user.age > 30)
console.log(array)