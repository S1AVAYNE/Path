// 1. Напишите программу на JavaScript, которая создаст массив с названиями 10 различных городов. Используя JavaScript, отобразите каждое название города в виде элемента списка внутри неупорядоченного списка (<ul>) в HTML-документе. Убедитесь, что список виден на веб-странице после выполнения скрипта.

const cities = ["Chisinau","London","Paris","Tokyo","Berlin","Madrid","Rome","New York","Moscow","Bucharest"];

const list = document.getElementById("citiesList");

cities.forEach(city => {
    const li = document.createElement("li");
    li.textContent = city;
    list.appendChild(li)
});