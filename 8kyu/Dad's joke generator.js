const jokeBody = document.querySelector('p');
const btn = document.querySelector('button');
const jokes = [
    'Почему компьютеры не любят жареные колеса обозначения? Потому что у них плохое восприятие жары.',
    'Почему шоколадные конфеты лучше всего есть в машине? Потому что там они всегда в подарок.',
    'Почему кошки всегда приземляются на ноги? Потому что у них нет альтернативных вариантов.'
];

let num;
btn.addEventListener('click', generateJoke);

function generateJoke() {
    let randomNumber = Math.floor(Math.random() * (jokes.length));
    if (randomNumber === num) {
        generateJoke();
    } else {
        num = randomNumber;
        jokeBody.innerHTML = jokes[randomNumber];
    }    
}