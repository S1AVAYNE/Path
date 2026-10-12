// 50. Используя forEach, найдите максимальное число в массиве.
// Пример: [3, 5, 7, 2, 9] → 9

const array = [3, 5, 7, 2, 9]
let max = array[0]
array.forEach(number => {
    if(max < number){
        max = number
    }
})
console.log(max)