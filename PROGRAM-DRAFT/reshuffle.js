// ===============================
// 🎡 RESHUFFLE SYSTEM v7.0 FIXED
// ===============================

document.addEventListener("DOMContentLoaded", function(){

    const reshuffleJeff = document.getElementById("reshuffleJeff");

    if(!reshuffleJeff){
        console.log("❌ reshuffleJeff nie znaleziony");
        return;
    }

    reshuffleJeff.addEventListener("click", () => {

    const selected = document.querySelector(".selected");

        if (!selected) {
            alert("Zaznacz kartę w decku którą chcesz przelosować!");
            return;
        }

        openReshuffleModal(selected);
    });

});


// ===============================
// 🎡 MODAL
// ===============================

function openReshuffleModal(selectedCardDiv) {

    const overlay = document.createElement("div");
    overlay.id = "reshuffleOverlay";

    const modal = document.createElement("div");
    modal.id = "reshuffleModal";

    const title = document.createElement("h2");
    title.innerText = "WYBIERZ NOWĄ KARTĘ";
    modal.appendChild(title);

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "reshuffle-options";

    const options = [];

    while (options.length < 3) {
        const r = Math.floor(Math.random() * cardDatabase.length);
        options.push(cardDatabase[r]);
    }

    options.forEach(card => {

        const btn = document.createElement("button");
        btn.className = "reshuffle-card";

        btn.innerHTML = `
            <div class="reshuffle-card-inner">
                <div class="reshuffle-cost">${card.cost}</div>
                <div class="reshuffle-name">${card.name}</div>
                <div class="reshuffle-power">${card.power}</div>
            </div>
        `;

        btn.onclick = () => {
            applyReshuffle(card, selectedCardDiv);
            document.body.removeChild(overlay);
        };

        optionsContainer.appendChild(btn);
    });

    modal.appendChild(optionsContainer);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}


// ===============================
// 🎡 APPLY
// ===============================

function applyReshuffle(newCard, selectedCardDiv) {

    const deckDivs = document.querySelectorAll(".deck");

    deckDivs.forEach((deck, deckIndex) => {

        const cards = deck.children;

        for (let i = 0; i < cards.length; i++) {

            if (cards[i] === selectedCardDiv) {

                // 🔥 pobierz dane karty z tekstu
                const text = selectedCardDiv.innerText;
                const match = text.match(/(.+) \((\d+)\/(\d+)\)/);

                if(!match) return;

                const name = match[1];
                const cost = parseInt(match[2]);
                const power = parseInt(match[3]);

                // 🔥 znajdź prawdziwy indeks w decku (NIE ten z UI!)
                const realIndex = decks[deckIndex].findIndex(c =>
                    c.name === name &&
                    c.cost === cost &&
                    c.power === power
                );

                if(realIndex !== -1){
                    decks[deckIndex][realIndex] = newCard;
                }

                showDecks();

                // ✨ efekt
                setTimeout(() => {
                    const updatedDeck = document.querySelectorAll(".deck")[deckIndex];
                    const newCardDiv = updatedDeck.children[i];
                    if(newCardDiv){
                        newCardDiv.style.animation = "reshuffleFlash 0.6s ease";
                    }
                }, 50);

                return;
            }
        }
    });
}
