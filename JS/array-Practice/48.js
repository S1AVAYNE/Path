// 48. Используя map, создайте массив строк, где каждое число преобразовано в
// строку.
// Пример: [1, 2, 3] → ['1', '2', '3']
const array = [1, 2, 3]

const newArr = array.map(number => number.toString())
console.log(newArr)