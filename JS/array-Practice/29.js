// 29. Используя map, создайте массив объектов, где каждому человеку добавлен
// ключ "initials", состоящий из первых букв имени и фамилии.
// Пример: [{name: 'Иван Иванов', age: 25}, {name: 'Мария Петрова',
// age: 30}] → [{name: 'Иван Иванов', age: 25, initials: 'ИИ'},
// {name: 'Мария Петрова', age: 30, initials: 'МП'}]

const array = [
    { name: 'Иван Иванов', age: 25 },
    { name: 'Мария Петрова', age: 30 }
]

const newArr = array.map(user => {
    const name = user.name.split(' ')

    return {
        ...user,
        initials: name[0][0] + name[1][0]
    }
})

console.log(newArr)