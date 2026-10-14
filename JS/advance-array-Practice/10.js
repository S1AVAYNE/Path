// 10. Используйте filter:
// Из массива объектов с полями productId, name, и category отфильтруйте все товары, которые принадлежат категории "electronics".

const array = [
    {
        productId: 1,
        name: "Phone",
        category: "electronics"
    },
    {
        productId: 2,
        name: "Cup",
        category: "kitchen"
    },
    {
        productId: 3,
        name: "Laptop",
        category: "electronics"
    }
];

const newArr = array.filter(product => product.category === "electronics")

console.log(newArr);