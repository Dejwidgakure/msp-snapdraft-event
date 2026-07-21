const jokerSettings = {

    enabled: false,

    mode: "classic", // classic / rare / madness / custom

    /*
       NOWY SYSTEM JOKERÓW
       jokerPackMode:
       - "fixed"  = dokładnie N paczek Jokerowych w drafcie
       - "chance" = każda standardowa paczka osobno losuje szansę

       Custom Packi mają priorytet. Joker może wejść tylko w STANDARD PACK.
    */
    jokerPackMode: "fixed",
    fixedJokerPacks: 2,
    packChance: 0.40,

    // Liczba Jokerów w paczce Jokerowej względem liczby graczy
    jokerIntensity: 0.5,

    // Maksymalny procent kart w paczce, które mogą zostać Jokerami
    maxJokerPackRatio: 0.60,

    surpriseOptionsCount: 3,
    minSurprisePoolSize: 3,

    modePresets: {
        classic: {
            jokerPackMode: "fixed",
            fixedJokerPacks: 2,
            packChance: 0.25,
            jokerIntensity: 0.5,
            maxJokerPackRatio: 0.60
        },
        rare: {
            jokerPackMode: "chance",
            fixedJokerPacks: 2,
            packChance: 0.40,
            jokerIntensity: 0.75,
            maxJokerPackRatio: 0.60
        },
        madness: {
            jokerPackMode: "fixed",
            fixedJokerPacks: 4,
            packChance: 0.55,
            jokerIntensity: 1.0,
            maxJokerPackRatio: 0.70
        }
    },

    allowedTypes: [
        "choice",
        "surprise"
    ],

    rarityChances: {

        common: 70,
        rare: 22,
        epic: 6,
        legendary: 2

    }

};

let jokerPackPlan = [];
let jokerPackPlanBuilt = false;
let jokerPackPlanInfo = null;

function clampNumber(value, min, max, fallback){
    const n = Number(value);
    if(!Number.isFinite(n)) return fallback;
    return Math.max(min, Math.min(max, n));
}

function getJokerPreset(){
    return jokerSettings.modePresets[jokerSettings.mode] || jokerSettings.modePresets.classic;
}

function getJokerPackMode(){
    return jokerSettings.jokerPackMode === "chance" ? "chance" : "fixed";
}

function getFixedJokerPacks(){
    return Math.round(clampNumber(jokerSettings.fixedJokerPacks, 0, 6, getJokerPreset().fixedJokerPacks || 2));
}

function getJokerPackChance(){
    return clampNumber(jokerSettings.packChance, 0, 1, getJokerPreset().packChance || 0.25);
}

function getJokerIntensity(){
    return clampNumber(jokerSettings.jokerIntensity, 0.1, 5, getJokerPreset().jokerIntensity || 0.5);
}

function getMaxJokerPackRatio(){
    return clampNumber(jokerSettings.maxJokerPackRatio, 0.1, 1, getJokerPreset().maxJokerPackRatio || 0.6);
}

function resetJokerPackPlan(){
    jokerPackPlan = [];
    jokerPackPlanBuilt = false;
    jokerPackPlanInfo = null;
}

function shuffleCopy(arr){
    const out = [...arr];
    for(let i = out.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
}

function prepareJokerPackPlan(totalPacks, customSlots){
    const count = Math.max(0, Number(totalPacks) || 0);
    const customPlan = Array.isArray(customSlots)
        ? customSlots.slice(0, count)
        : [];

    while(customPlan.length < count){
        customPlan.push(null);
    }

    const standardIndexes = [];

    for(let i = 0; i < count; i++){
        if(!customPlan[i]) standardIndexes.push(i);
    }

    const plan = new Array(count).fill(false);
    const mode = getJokerPackMode();

    if(mode === "fixed"){
        const desired = Math.min(getFixedJokerPacks(), standardIndexes.length);
        const picked = shuffleCopy(standardIndexes).slice(0, desired);
        picked.forEach(index => plan[index] = true);
    }else{
        const chance = getJokerPackChance();
        standardIndexes.forEach(index => {
            plan[index] = Math.random() < chance;
        });
    }

    jokerPackPlan = plan;
    jokerPackPlanBuilt = true;
    jokerPackPlanInfo = {
        totalPacks: count,
        customSlots: customPlan,
        standardSlots: standardIndexes,
        mode,
        fixedJokerPacks: getFixedJokerPacks(),
        packChance: getJokerPackChance(),
        jokerIntensity: getJokerIntensity(),
        maxJokerPackRatio: getMaxJokerPackRatio(),
        plan: [...plan]
    };

    console.log("[JOKER PLAN]", jokerPackPlanInfo);

    return jokerPackPlanInfo;
}

function shouldInjectJokersForPack(packIndex, isStandardPack){
    if(!jokerSettings.enabled) return false;
    if(!isStandardPack) return false;

    const index = Number(packIndex);
    if(!Number.isFinite(index)) return false;

    // Jeśli plan nie zdążył się zbudować, zachowujemy bezpieczny fallback: pojedynczy roll.
    if(!jokerPackPlanBuilt){
        return Math.random() < getJokerPackChance();
    }

    return !!jokerPackPlan[index];
}

function getJokerPackPlanDebug(){
    return jokerPackPlanInfo || {
        built: false,
        plan: [...jokerPackPlan]
    };
}

function cloneJokerObject(joker){
    if(typeof structuredClone === "function"){
        return structuredClone(joker);
    }

    return JSON.parse(JSON.stringify(joker));
}

function getDraftPlayersCountFallback(pack){
    if(typeof numPlayers === "number" && Number.isFinite(numPlayers) && numPlayers > 0){
        return numPlayers;
    }

    return Math.max(1, Math.floor(((pack && pack.length) || 1) / 2));
}

function getCardCostSafe(card){
    const value = Number(card && card.cost);
    return Number.isFinite(value) ? value : 0;
}

function getCardPowerSafe(card){
    const value = Number(card && card.power);
    return Number.isFinite(value) ? value : 0;
}

function normalizeTag(tag){
    return String(tag || "").trim().toLowerCase();
}

function cardHasTag(card, tag){
    const wanted = normalizeTag(tag);
    if(!wanted || wanted === "any") return true;

    const tags = Array.isArray(card && card.tags)
        ? card.tags.map(normalizeTag)
        : [];

    if(wanted === "spell" || wanted === "spells"){
        return tags.includes("spell") || tags.includes("spells");
    }

    return tags.includes(wanted);
}

function cardPassesVirtualJokerTag(card, tag){
    const cost = getCardCostSafe(card);
    const power = getCardPowerSafe(card);

    switch(normalizeTag(tag)){
        case "cost-greater-than-power":
            return cost > power;

        case "power-greater-than-cost":
            return power > cost;

        case "equal-cost-power":
            return cost === power;

        case "exact-2-power":
            return power === 2;

        case "exact-6-6":
            return cost === 6 && power === 6;

        case "power-4-above-cost":
            return power >= cost + 4;

        default:
            return null;
    }
}

function getLegalCardPool(){
    let pool = Array.isArray(cardDatabase) ? [...cardDatabase] : [];

    pool = pool.filter(card =>
        card &&
        card.name &&
        Number.isFinite(Number(card.cost)) &&
        Number.isFinite(Number(card.power))
    );

    if(Array.isArray(bannedCards) && bannedCards.length){
        const banned = new Set(bannedCards.map(name => String(name).trim().toLowerCase()));
        pool = pool.filter(card => !banned.has(String(card.name).trim().toLowerCase()));
    }

    return pool;
}

function applyJokerFilters(pool, joker){
    let filtered = Array.isArray(pool) ? [...pool] : [];

    /* COST FILTER */

    if(joker.minCost !== null && joker.minCost !== undefined){
        filtered = filtered.filter(card =>
            getCardCostSafe(card) >= Number(joker.minCost)
        );
    }

    if(joker.maxCost !== null && joker.maxCost !== undefined){
        filtered = filtered.filter(card =>
            getCardCostSafe(card) <= Number(joker.maxCost)
        );
    }

    /* POWER FILTER */

    if(joker.minPower !== null && joker.minPower !== undefined){
        filtered = filtered.filter(card =>
            getCardPowerSafe(card) >= Number(joker.minPower)
        );
    }

    if(joker.maxPower !== null && joker.maxPower !== undefined){
        filtered = filtered.filter(card =>
            getCardPowerSafe(card) <= Number(joker.maxPower)
        );
    }

    /* TAG FILTERS + VIRTUAL TAGS */

    const tags = Array.isArray(joker.tags)
        ? joker.tags.map(normalizeTag).filter(Boolean)
        : [];

    if(tags.length && !tags.includes("any")){
        filtered = filtered.filter(card => tags.every(tag => {
            const virtualResult = cardPassesVirtualJokerTag(card, tag);

            if(virtualResult !== null){
                return virtualResult;
            }

            return cardHasTag(card, tag);
        }));
    }

    /* REMOVE DUPLICATES */

    filtered = [...new Map(
        filtered.map(card => [card.name, card])
    ).values()];

    return filtered;
}

function getSurprisePoolSize(joker){
    if(!joker || joker.type !== "surprise") return Infinity;
    return applyJokerFilters(getLegalCardPool(), joker).length;
}

function isJokerPlayable(joker){
    if(!joker) return false;
    if(joker.type !== "surprise") return true;

    return getSurprisePoolSize(joker) >= (jokerSettings.minSurprisePoolSize || 3);
}

/* =========================
   LOSOWANIE RARITY
========================= */

function getRandomRarity(){

    const roll = Math.random()*100;

    let cumulative = 0;

    for(const rarity in jokerSettings.rarityChances){

        cumulative += jokerSettings.rarityChances[rarity];

        if(roll <= cumulative){
            return rarity;
        }

    }

    return "common";

}

/* =========================
   LOSOWANIE JOKERA
========================= */

function getRandomJoker(){

    const rarity =
        getRandomRarity();

    let pool = jokers.filter(j =>

        jokerSettings.allowedTypes.includes(j.type) &&
        j.rarity === rarity &&
        isJokerPlayable(j)

    );

    /* fallback rarity */

    if(pool.length === 0){

        pool = jokers.filter(j =>
            jokerSettings.allowedTypes.includes(j.type) &&
            isJokerPlayable(j)
        );

    }

    /* emergency fallback */

    if(pool.length === 0){
        pool = jokers.filter(j => j.type === "choice");
    }

    if(pool.length === 0){
        return {
            id:"emergency_choice_any",
            type:"choice",
            rarity:"common",
            name:"Emergency Joker",
            desc:"Dowolna karta",
            tags:["any"],
            minCost:null,
            maxCost:null,
            minPower:null,
            maxPower:null
        };
    }

    return cloneJokerObject(
        pool[Math.floor(Math.random()*pool.length)]
    );

}

/* =========================
   DODAWANIE DO PACZKI
========================= */

function injectJokersIntoPack(pack){

    const newPack = [...pack];

    if(!newPack.length) return newPack;

    const playersCount = getDraftPlayersCountFallback(newPack);
    const intensity = getJokerIntensity();

    let jokerCount = Math.round(playersCount * intensity);
    jokerCount = Math.max(1, jokerCount);

    const maxByRatio = Math.max(1, Math.floor(newPack.length * getMaxJokerPackRatio()));
    jokerCount = Math.min(jokerCount, maxByRatio, newPack.length);

    const usedIndexes = new Set();

    for(let i=0;i<jokerCount;i++){

        let index = -1;
        let guard = 0;

        while(guard < 200){
            const candidate = Math.floor(Math.random()*newPack.length);

            if(!usedIndexes.has(candidate)){
                index = candidate;
                usedIndexes.add(candidate);
                break;
            }

            guard++;
        }

        if(index < 0) break;

        newPack[index] = {

            joker: true,

            ...getRandomJoker()

        };

    }

    return newPack;

}

/* =========================
   SURPRISE JOKER
========================= */

function getCardsForSurpriseJoker(joker){

    const pool = applyJokerFilters(getLegalCardPool(), joker);

    if(pool.length < (jokerSettings.minSurprisePoolSize || 3)){
        console.warn(
            "Surprise Joker ma za małą pulę i nie powinien był zostać wylosowany:",
            joker && joker.id,
            joker && joker.desc,
            "pool:",
            pool.length
        );
    }

    const shuffled =
        pool.sort(()=>Math.random()-0.5);

    return shuffled.slice(0, jokerSettings.surpriseOptionsCount || 3);

}

/* =========================
   DEBUG / AUDYT
   Możesz odpalić w konsoli:
   auditSurpriseJokers()
   getJokerPackPlanDebug()
========================= */

function auditSurpriseJokers(){
    return jokers
        .filter(j => j.type === "surprise")
        .map(j => ({
            id: j.id,
            rarity: j.rarity,
            desc: j.desc,
            tags: j.tags || [],
            poolSize: getSurprisePoolSize(j),
            active: isJokerPlayable(j)
        }));
}
