// 1. Создай и измени
// Задача:
// Создайте на странице:
// Абзац (<p>) с текстом: “Это простой текст” (id: simpleText)
// Кнопку “Изменить” (id: changeBtn)
// Условие:
// При клике на кнопку измените цвет текста абзаца на зеленый и размер на 24px.

const p = document.getElementById("simpleText")
const btn = document.getElementById("changeBtn")

btn.addEventListener("click", function() {
    p.style.color = "green";
    p.style.fontSize = "24px";
});