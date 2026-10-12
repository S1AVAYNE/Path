// 41. Используя map, округлите все числа массива до ближайшего целого.
// Пример: [1.2, 2.5, 3.7] → [1, 3, 4]

const array = [1.2, 2.5, 3.7]
const newArr = array.map(number => Math.round(number))
console.log(newArr)