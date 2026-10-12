// 44. Используя map, создайте новый массив, где каждое число возведено в куб.
// Пример: [1, 2, 3, 4] → [1, 8, 27, 64]

const array = [1, 2, 3, 4]
const newArr = array.map(number => Math.pow(number, 3))
console.log(newArr)