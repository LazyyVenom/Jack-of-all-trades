// Started Working on the Cards showing up using JS

const jackCardsTrigger = document.getElementById('jack_cards_trigger');
const jackCards = document.getElementById('jack_cards');
const cards = document.querySelectorAll(".jack_of_all_trades .card");

jackCardsTrigger.addEventListener('click', function () {
    jackCards.classList.add('animate');
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        jackCards.classList.remove('animate');
    }
    cards.forEach(card => {
        const cardFlip = card.querySelector(".card_flip");
        if (cardFlip.style.display == "flex") {
            cardFlip.classList.add('animate');
            cardFlip.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const cardFlip = this.querySelector(".card_flip");
            if (cardFlip.style.display == "flex") {
                cardFlip.classList.add('animate');
                cardFlip.style.display = "none";
            }
            else {
                cardFlip.classList.add('animate');
                cardFlip.style.display = "flex";
            }
        });
    });
});
