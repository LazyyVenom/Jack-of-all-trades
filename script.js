// Started Working on the Cards showing up using JS

const jackCardsTrigger = document.getElementById('jack_cards_trigger');
const jackCards = document.getElementById('jack_cards');

jackCardsTrigger.addEventListener('click', function () {
    jackCards.classList.add('animate');
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        jackCards.classList.remove('animate');
    }
});