// 7. Используйте filter:
// Из массива объектов (с полями id, name, status) отфильтруйте всех пользователей со статусом "offline".
const array = [
    {
        id: 1,
        name: "Stas",
        status: "online"
    },
    {
        id: 2,
        name: "Daria",
        status: "offline"
    },
    {
        id: 3,
        name: "Alex",
        status: "offline"
    }
];

const newArr = array.filter(user => user.status === "offline")

console.log(newArr);