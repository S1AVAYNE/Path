// 43. Используя forEach, выведите только те числа массива, которые являются
// простыми.
// Пример: [1, 2, 3, 4, 5, 6, 7, 8, 9] → 2, 3, 5, 7

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.forEach(number => {
    if (number < 2) return;

    let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(number);
    }
});