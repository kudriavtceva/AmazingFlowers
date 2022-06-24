var page = document.querySelector(".body");
var themeButton = document.querySelector(".themeButton");
themeButton.onclick = function() {
    page.classList.toggle("lightTheme");
    page.classList.toggle("darkTheme");
};

var width = 200;
var list = document.querySelector(".orhideys");
var pictures = document.querySelectorAll("li");
var position = 0;

document.querySelector(".prev").onclick = function() {
    position += width; // вычисляем положение картинки
    // рассчитываем положение последней картинки
    position = Math.min(position, 0)
    list.style.marginLeft = position + "px";
};

document.querySelector(".next").onclick = function() {
    position -= width; // вычисляем положение картинки
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент 
    position = Math.max(position, -width * (pictures.length - 1));
    list.style.marginLeft = position + "px";
};