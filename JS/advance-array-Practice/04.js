// 4. Используйте filter:
// Из массива объектов, где каждый объект имеет поля city и temperature, отфильтруйте все объекты, где температура больше 25 градусов.

let array = [
    {
        city: "Chisinau",
        temperature: 10
    },
    {
        city: "Budapest",
        temperature: 35
    }
]

array = array.filter(city => city.temperature > 25)
console.log(array)