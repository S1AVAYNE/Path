// 45. Используя filter, оставьте все числа, которые не делятся на 2.
// Пример: [1, 2, 3, 4, 5] → [1, 3, 5]

const array = [1, 2, 3, 4, 5]
const newArr = array.filter(number => number % 2 === 1)
console.log(newArr)