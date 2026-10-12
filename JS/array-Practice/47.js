// 47. Используя forEach, выведите все чётные числа в консоль.
// Пример: [1, 2, 3, 4, 5, 6] → 2, 4, 6

const array = [1, 2, 3, 4, 5, 6]
array.forEach(number => number % 2 === 0 ? console.log(number) : null)