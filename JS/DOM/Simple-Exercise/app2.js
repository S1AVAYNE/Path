// 2. Добавь и спрячь элемент
// Задача:
// Создайте на странице:
// Кнопку “Показать” (id: showBtn)
// Кнопку “Скрыть” (id: hideBtn)
// Абзац (<p>) с текстом: “Меня можно спрятать” (id: hideText)
// Условие:
// При клике на “Скрыть” — абзац исчезает.
// При клике на “Показать” — снова появляется.

const btn1 = document.getElementById("showBtn")
const btn2 = document.getElementById("hideBtn")
const p = document.getElementById("hideText")

btn1.addEventListener("click", () => {
    p.style.display = "block"
})

btn2.addEventListener("click", () => {
    p.style.display = "none"
})