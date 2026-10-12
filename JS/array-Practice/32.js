// 32. Используя filter, оставьте только отрицательные числа.
// Пример: [1, -2, 3, -4] → [-2, -4]

const array = [1, -2, 3, -4]
const newArr = array.filter(number => number < 0)
console.log(newArr)