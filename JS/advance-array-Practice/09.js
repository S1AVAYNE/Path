// 9. Используйте forEach:
// У вас есть массив объектов, представляющих заказы, каждый объект содержит orderId, productName, и quantity. Выведите на экран сообщение для каждого заказа в формате: "Заказ <orderId>: <quantity> единиц продукта <productName>".

const array = [
    {
        orderId: 1,
        productName: "Conditioner",
        quantity: 2
    },
    {
        orderId: 2,
        productName: "Cup",
        quantity: 5
    }
];

array.forEach(order => console.log(`Заказ ${order.orderId}: ${order.quantity} единиц продукта ${order.productName}`))