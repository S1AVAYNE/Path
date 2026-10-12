// 36. Используя map, создайте новый массив, где каждое число увеличено на 100.
// Пример: [1, 2, 3, 4] → [101, 102, 103, 104]

const array = [1, 2, 3, 4]
const newArr = array.map(number => number += 100)
console.log(newArr)