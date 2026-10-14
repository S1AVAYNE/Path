// 8. Используйте map:
// Преобразуйте массив объектов с полями product, category, price в новый массив объектов, где каждому объекту добавлено поле discountedPrice (скидка 10%).

const array = [
    {
        product: "Conditioner",
        category: "Cosmetics",
        price: 200
    },
    {
        product: "Cup",
        category: "Kitchen",
        price: 100
    }
];

const newArr = array.map(product => {
    const obj = {
        product: product.product,
        category: product.category,
        price: product.price,
        discountedPrice: product.price * 0.9
    }
    return obj
})

console.log(newArr);