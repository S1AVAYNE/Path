// 3. Используйте forEach:
// Пройдитесь по массиву объектов, в каждом объекте есть поле isActive (булево значение). Для каждого активного пользователя выведите сообщение: "Пользователь <name> активен".

const array = [
    {
        name: "Stas",
        isActive: true
    },
    {
        name: "Daria",
        isActive: false
    }
]

array.forEach(user => {
    if(user.isActive){
        console.log(`Пользователь ${user.name} активен`)
    }
})