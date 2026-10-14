// 2. Используйте map:
// Из массива объектов (с полями productName и price) создайте новый массив строк, где каждый элемент будет в формате: "Название продукта: <productName>, Цена: <price>".

const array = [
    {
        productName: 'Conditioner',
        price: 200
    },
    {
        productName: 'Cup',
        price: 10
    }
]

const newArr = array.map(product => `Название продукта: ${product.productName}, Цена: ${product.price}`)

console.log(newArr)