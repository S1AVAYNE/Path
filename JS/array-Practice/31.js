// 31. Используя map, возведите все числа массива в квадрат.
// Пример: [1, 2, 3, 4] → [1, 4, 9, 16]

const array = [1, 2, 3, 4]
const newArr = array.map(number => Math.pow(number, 2))
console.log(newArr)