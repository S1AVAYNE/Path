// 5. Поменяй текст на кнопке
// Задача:
// Создайте на странице:
// Кнопку “Нажми меня” (id: textBtn)
// Условие:
// При клике на кнопку измените её текст на “Спасибо!”

const btn = document.getElementById("textBtn")

btn.addEventListener("click", () => {
    btn.innerHTML = 'Спасибо!'
})