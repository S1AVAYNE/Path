// 49. Используя filter, выберите все числа, которые меньше 10 и больше 5.
// Пример: [3, 7, 12, 6] → [7, 6]
const array = [3, 7, 12, 6]
const newArr = array.filter(number => number < 10 && number > 5)
console.log(newArr)