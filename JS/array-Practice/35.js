// 35. Используя filter, оставьте только те числа, которые делятся на 3.
// Пример: [1, 2, 3, 4, 5, 6] → [3, 6]

const array = [1, 2, 3, 4, 5, 6]
const newArr = array.filter(number => number % 3 === 0)
console.log(newArr)