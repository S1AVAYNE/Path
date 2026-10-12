// 34. Используя map, преобразуйте все числа в их абсолютные значения.
// Пример: [-1, 2, -3, 4] → [1, 2, 3, 4]

const array = [-1, 2, -3, 4]
const newArr = array.map(number => Math.abs(number))
console.log(newArr)