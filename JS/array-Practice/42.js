// 42. Используя filter, выберите все числа больше 10 и кратные 5.
// Пример: [5, 10, 15, 20, 25] → [15, 20, 25]

const array = [5, 10, 15, 20, 25]
const newArr = array.filter(number => number > 10 && number % 5 === 0)
console.log(newArr)