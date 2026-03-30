// ==============================
// 🌌 SAVE N STEAL – COSMIC 7.0 (JEFF PHASED)
// ==============================

let savedCards = {};
let stealOrder = [];
let stealMap = {};
let pendingSteals = [];
let currentStealIndex = 0;

// ==============================
// 🌌 MODAL
// ==============================

function openSaveStealModal(){

    savedCards = {};
    stealOrder = [];
    stealMap = {};
    pendingSteals = [];
    currentStealIndex = 0;

    const modal = document.createElement("div");
    modal.id = "cosmicSaveStealModal";
    modal.classList.add("save-phase");

    modal.innerHTML = `
        <div class="cosmicStarOverlay"></div>

        <div class="cosmicPanel">
            <div class="cosmicTitle">⚔ SAVE N STEAL ⚔</div>
            <div id="cosmicBody"></div>
            <button id="cosmicNextBtn" class="cosmicBtn">DALEJ</button>
        </div>

        <img id="saveStealJeff" src="jeff_save.png">
    `;

    document.body.appendChild(modal);
    injectStyles();
    renderSavePhase();
}

// ==============================
// SAVE PHASE
// ==============================

function renderSavePhase(){

    setPhase("save");

    const body = document.getElementById("cosmicBody");
    body.innerHTML = "<h3>Każdy gracz wybiera 1 kartę do SAVE</h3>";

    players.forEach((player, pIndex)=>{

        const section = document.createElement("div");
        section.className = "cosmicSection";
        section.innerHTML = `<h4>${player}</h4>`;

        decks[pIndex].forEach((card, cIndex)=>{

            const div = document.createElement("div");
            div.className = "saveCard";
            div.innerText = `${card.name} (${card.cost}/${card.power})`;

            div.onclick = ()=>{
                savedCards[pIndex] = cIndex;
                renderSavePhase();
            };

            if(savedCards[pIndex] === cIndex){
                div.classList.add("saveSelected");
            }

            section.appendChild(div);
        });

        body.appendChild(section);
    });

    document.getElementById("cosmicNextBtn").onclick = ()=>{
        if(Object.keys(savedCards).length !== players.length){
            alert("Każdy gracz musi wybrać 1 kartę.");
            return;
        }
        generateStealMap();
    };
}

// ==============================
// STEAL MAP
// ==============================

function generateStealMap(){

    stealOrder = [...Array(players.length).keys()];
    stealOrder.sort(()=>Math.random()-0.5);

    stealMap = {};
    for(let i=0;i<stealOrder.length;i++){
        stealMap[stealOrder[i]] = stealOrder[(i+1)%stealOrder.length];
    }

    renderStealPhase();
}

function renderStealPhase(){
    currentStealIndex = 0;
    setPhase("steal");
    nextStealTurn();
}

function nextStealTurn(){

    if(currentStealIndex >= players.length){
        applySteals();
        return;
    }

    const thief = stealOrder[currentStealIndex];
    const victim = stealMap[thief];

    const body = document.getElementById("cosmicBody");
    body.innerHTML = `
        <h3>${players[thief]} kradnie od ${players[victim]}</h3>
    `;

    const section = document.createElement("div");
    section.className = "stealGrid";

    decks[victim].forEach((card, cIndex)=>{

        if(savedCards[victim] === cIndex) return;

        const btn = document.createElement("button");
        btn.className = "pack-card-btn steal-card";

        btn.innerHTML = `
            <div class="pack-card-inner">
                <div class="pack-icon pack-planet">${card.cost}</div>
                <div class="pack-card-name">${card.name}</div>
                <div class="pack-icon pack-star">${card.power}</div>
            </div>
        `;

        btn.onclick = ()=>{
            pendingSteals.push({
                from: victim,
                to: thief,
                cardIndex: cIndex
            });

            currentStealIndex++;
            nextStealTurn();
        };

        section.appendChild(btn);
    });

    body.appendChild(section);
}

function applySteals(){

    pendingSteals.forEach(s=>{
        const card = decks[s.from][s.cardIndex];
        decks[s.to].push(card);
    });

    pendingSteals
        .sort((a,b)=>b.cardIndex-a.cardIndex)
        .forEach(s=>{
            decks[s.from].splice(s.cardIndex,1);
        });

    closeModal();
    showDecks();
}

function closeModal(){
    const modal = document.getElementById("cosmicSaveStealModal");
    if(modal) modal.remove();
}

// ==============================
// PHASE HANDLER
// ==============================

function setPhase(phase){
    const modal = document.getElementById("cosmicSaveStealModal");
    const jeff = document.getElementById("saveStealJeff");

    if(!modal || !jeff) return;

    modal.classList.remove("save-phase","steal-phase");

    if(phase === "save"){
        modal.classList.add("save-phase");
        jeff.src = "jeff_save.png";
    }

    if(phase === "steal"){
        modal.classList.add("steal-phase");
        jeff.src = "jeff_thief.png";
    }
}

// ==============================
// STYLES (Twoje oryginalne)
// ==============================

function injectStyles(){

    if(document.getElementById("cosmicStyle")) return;

    const style = document.createElement("style");
    style.id = "cosmicStyle";

    style.innerHTML = `
#cosmicSaveStealModal{
    position:fixed;
    inset:0;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:9999;
    background:radial-gradient(circle at center, #1a0012 10%, #000008 85%);
    overflow:hidden;
}
#cosmicSaveStealModal::before{
    content:"";
    position:absolute;
    inset:0;
    background:url("save_steal_cosmic.png") center center / contain no-repeat;
    opacity:0.55;
    pointer-events:none;
    z-index:0;
}
.cosmicStarOverlay{
    position:absolute;
    inset:0;
    z-index:1;
    pointer-events:none;
}
.cosmicPanel{
    position:relative;
    z-index:2;
    width:95%;
    max-width:1300px;
    height:85vh;
    background:linear-gradient(160deg, rgba(21,0,18,0.65), rgba(0,0,24,0.70));
    border:2px solid rgba(255,0,119,0.8);
    border-radius:20px;
    padding:25px;
    box-shadow:0 0 60px rgba(255,0,150,0.8);
    display:flex;
    flex-direction:column;
    color:white;
    backdrop-filter:blur(3px);
}
.cosmicTitle{
    text-align:center;
    font-size:34px;
    font-weight:900;
    margin-bottom:10px;
    color:#ff0077;
    text-shadow:0 0 30px #ff0077;
}
#cosmicBody{
    flex:1;
    overflow-y:auto;
}
.saveCard{
    padding:6px;
    margin:4px 0;
    background:rgba(255,255,255,0.07);
    cursor:pointer;
}
.saveSelected{
    border:2px solid #00ff88;
    box-shadow:0 0 15px #00ff88;
}
.cosmicBtn{
    margin-top:10px;
    padding:12px;
    font-weight:900;
    background:#ff0077;
    border:none;
    color:white;
    border-radius:8px;
    cursor:pointer;
}
`;

    document.head.appendChild(style);
}