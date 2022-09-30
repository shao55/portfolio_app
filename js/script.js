// Массив с фразами
const phrases = ["начинающий FrontEnd разработчик", "автолюбитель", "фотограф - любитель", "гражданин мира"];

// Дотягиваюсь к фразе на странице
let phrase = document.querySelector(".phrase");

// Начальный индекс для перебора
let phrasesStart = 0;

// Длина массива
let phrasesCount = phrases.length - 1;

// сетИнтервал, в которой меняем через smoothly фразу каждые 2 секунды
setInterval( function () {
    smoothly(phrase, "textContent", phrases[phrasesStart]);
    // phrase.textContent = phrases[phrasesStart];
    if(phrasesStart == phrasesCount) {
        phrasesStart = 0;
    } else {
        phrasesStart++;
    };
}, 2000);

let num = 1.36666;
let fixedNum = Number(num.toFixed(2));

console.log(fixedNum);
console.log(typeof(fixedNum));