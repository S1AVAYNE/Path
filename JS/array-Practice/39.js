// 39. Используя map, создайте новый массив чисел, где каждое число уменьшено
// на 5.Пример: [10, 20, 30] → [5, 15, 25]

const array = [10, 20, 30]
const newArr = array.map(number => number -= 5)
console.log(newArr)
