// 33. Используя forEach, вычислите сумму всех чисел в массиве.
// Пример: [1, 2, 3, 4] → 10


const array = [1, 2, 3, 4]
let sum = 0
array.forEach(number => sum += number)
console.log(sum)