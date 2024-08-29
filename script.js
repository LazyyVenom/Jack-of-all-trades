// Started Working on the Cards showing up using JS

const jackCardsTrigger = document.getElementById('jack_cards_trigger');
const jackCards = document.getElementById('jack_cards');
const cards = document.querySelectorAll(".jack_of_all_trades .card");
const goldenCardTrigger = document.getElementById("golden_card");
const goldenCardScreen = document.getElementById("golden_card_screen");
const goldenCard = document.getElementById("big_golden_card");

var cards_opened = true;

jackCardsTrigger.addEventListener('click', function () {
    jackCards.classList.add('animate');
});

document.addEventListener('keydown', function (event) {
    if (cards_opened === true) {
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
    }
    else {
        if (event.key === 'Escape') {
            goldenCardScreen.classList.remove('animate');
        }
    }
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


goldenCardTrigger.addEventListener('click', function () {
    goldenCardScreen.classList.add('animate');
});