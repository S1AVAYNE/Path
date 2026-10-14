// 5. Используйте map:
// Из массива объектов с полями name, email и age создайте новый массив, где каждый элемент будет объектом, включающим только name и email.

const array = [
    {
        name: "Stas",
        email: "stas@gmail.com",
        age: 32
    },
    {
        name: "Daria",
        email: "daria@gmail.com",
        age: 16
    }
];

const newArr = array.map(user => {
    const obj = {
        name: user.name,
        email: user.email 
    }
    return obj
});

console.log(newArr);