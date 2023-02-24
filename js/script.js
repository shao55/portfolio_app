// *Поочередная замена текста*

// Массив с фразами
const phrases = ["I build things for the web", "Junior frontEnd developer", "Car lover", "World citizen"];

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

// *Плавный переход по секциям*

const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const targetOffsetTop = targetSection.offsetTop;

    window.scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth',
    });
  });
});