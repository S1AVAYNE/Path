// 2. Создайте массив в JavaScript, содержащий 5 URL-адресов изображений (это могут быть ссылки на любые изображения из Интернета). Затем, используя JavaScript, динамически создайте 5 элементов <img> в HTML-документе. Установите атрибут src каждого элемента <img> на один из URL-адресов изображений из вашего массива. Добавьте каждый элемент изображения в тело HTML-документа, чтобы все 5 изображений отображались на странице.

const images = [
    "https://picsum.photos/id/10/300/200",
    "https://picsum.photos/id/20/300/200",
    "https://picsum.photos/id/30/300/200",
    "https://picsum.photos/id/40/300/200",
    "https://picsum.photos/id/50/300/200"
];

images.forEach(link => {
    const img = document.createElement("img");
    img.src = link;
    document.body.appendChild(img)
})