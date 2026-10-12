// 46. Используя map, создайте новый массив объектов, где ключ — число, а
// значение — его квадрат.
// Пример: [1, 2, 3] → [{1: 1}, {2: 4}, {3: 9}]

const array = [1, 2, 3];

const newArray = array.map(number => {
    return {
        [number]: number ** 2
    };
});

console.log(newArray);