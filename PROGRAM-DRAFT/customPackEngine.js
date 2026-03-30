// ===============================
// 🔀 SHUFFLE
// ===============================

function shuffleArray(arr){
    return [...arr].sort(() => Math.random() - 0.5);
}



// ===============================
// 🎴 CUSTOM PACK GENERATOR
// ===============================

function generateCustomPack(packConfig, packSize, fillMode = "random") {

    // 1️⃣ FILTR PO TAGACH (OR LOGIC)
   let pool = cardDatabase.filter(card => {

    // 🎯 TAGI (jeśli są)
    if(packConfig.tags && packConfig.tags.length > 0){
        if(!card.tags || !packConfig.tags.some(tag => card.tags.includes(tag))){
            return false;
        }
    }

    // ⚡ COST
    if(packConfig.minCost != null){
        if(card.cost < packConfig.minCost) return false;
    }

    if(packConfig.maxCost != null){
        if(card.cost > packConfig.maxCost) return false;
    }

    // 💪 POWER
    if(packConfig.minPower != null){
        if(card.power < packConfig.minPower) return false;
    }

    if(packConfig.maxPower != null){
        if(card.power > packConfig.maxPower) return false;
    }

    // 🔍 NAZWA
    if(packConfig.nameIncludes && packConfig.nameIncludes.trim() !== ""){
        if(!card.name.toLowerCase().includes(packConfig.nameIncludes.toLowerCase())){
            return false;
        }
    }

    return true;
});

    // 2️⃣ SHUFFLE
    pool = shuffleArray(pool);

    // 3️⃣ WYBIERZ KARTY
    let pack = [];

// 🌓 TRYB 50/50
if(fillMode === "half"){

    const halfSize = Math.floor(packSize / 2);

    // połowa z tagów
    pack = pool.slice(0, halfSize);

    // reszta z randoma (bez duplikatów)
    const usedNames = new Set(pack.map(c => c.name));

    const remainingPool = shuffleArray(
        cardDatabase.filter(c => !usedNames.has(c.name))
    );

    pack = pack.concat(remainingPool.slice(0, packSize - pack.length));

}else{

    pack = pool.slice(0, packSize);

    // 🔥 jeśli brakuje kart → uzupełniamy zależnie od trybu
    if(pack.length < packSize){

        const missing = packSize - pack.length;

        // 🅰 RANDOM FILL
        if(fillMode === "random"){

            const usedNames = new Set(pack.map(c => c.name));

            const remainingPool = shuffleArray(
                cardDatabase.filter(c => !usedNames.has(c.name))
            );

            pack = pack.concat(remainingPool.slice(0, missing));
        }

        // 🅱 DUPLICATE FILL
        if(fillMode === "duplicate"){

            for(let i = 0; i < missing; i++){
                const randomCard = pool[Math.floor(Math.random() * pool.length)];
                if(randomCard){
                    pack.push(randomCard);
                }
            }
        }
    }
}

    return pack;
}