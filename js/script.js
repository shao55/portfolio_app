// Массив с фразами
const phrases = [
    "Нургиса",
    "начинающий FrontEnd разработчик",
    "автолюбитель",
    "фотограф - любитель"
];

// Дотягиваюсь к фразе на странице
let phrase = document.querySelector(".phrase");

// Функция - рандомный текст
function getRandomElement (arr) {
    let randIndex = Math.floor(Math.random()*arr.length);
    return(arr[randIndex]);
};

// Кладем рандомную фразу в переменную
let randomElement = getRandomElement(phrases);

// Заменяю текст на странице рандомным элементом
// phrase.textContent = getRandomElement(phrases);

for (let i = 0; i <= 10; i = i + 1) {
    smoothly(phrase, "textContent", randomElement[i]);
}