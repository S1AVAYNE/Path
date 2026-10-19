// 4. Создай новый элемент
// Задача:
// Создайте на странице:
// Кнопку “Добавить приветствие” (id: addBtn)
// Пустой блок (<div>) с id: container
// Условие:
// При клике на кнопку в блок container добавляется абзац (<p>) с текстом “Привет, студент!”
// Каждый клик добавляет новый абзац.

const btn = document.getElementById("addBtn")
const div = document.getElementById("container")

btn.addEventListener("click", () => {
    div.innerHTML += '<p>Привет, студент!</p>'
})