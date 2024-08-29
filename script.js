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

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".jack_of_all_trades .card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const cardFlip = this.querySelector(".card_flip");

            if (cardFlip && cardFlip.style.display == "flex") {
                cardFlip.style.display = "none";
            }
            else {
                if (cardFlip) {
                    cardFlip.style.display = "flex";
                }
            }
        });
    });
});
