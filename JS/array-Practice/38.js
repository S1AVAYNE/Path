// 38. Используя filter, выберите числа, которые больше 50.
// Пример: [10, 20, 30, 50, 60] → [60]

const array = [10, 20, 30, 50, 60]
const newArr = array.filter(number => number > 50)
console.log(newArr)