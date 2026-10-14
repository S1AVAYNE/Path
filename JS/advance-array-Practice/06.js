// 6. Используйте forEach:
// У вас есть массив пользователей, каждый объект с полями name и age. Для каждого пользователя выведите его имя и возраст, если возраст больше 18 лет.

const array = [
    {
        name: "Stas",
        age: 32
    },
    {
        name: "Daria",
        age: 16
    },
    {
        name: "Alex",
        age: 25
    }
];

array.forEach(user => {
    if(user.age > 18){
        console.log(`Name: ${user.name}\nAge: ${user.age}`)
    }
});