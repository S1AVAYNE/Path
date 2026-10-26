// 3. Поменяй фон
// Задача:
// Создайте на странице:
// Кнопку “Сделать фон синим” (id: blueBtn)
// Кнопку “Сделать фон желтым” (id: yellowBtn)
// Условие:
// При клике на первую кнопку фон страницы становится синим.
// При клике на вторую — желтым.

const blue = document.getElementById("blueBtn");
const yellow = document.getElementById("yellowBtn");

blue.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});

yellow.addEventListener("click", () => {
    document.body.style.backgroundColor = "yellow";
});