/* ========================= */
/* ===== JOKER ENGINE ====== */
/* ========================= */

/* RARITY ODDS */

const jokerRarityRates = {

    common: 60,
    rare: 25,
    epic: 10,
    legendary: 5

};

/* JOKER MODES */

const jokerModes = {

    rare: {
        packChance: 0.25,
        minJokers: 1,
        maxJokers: 1
    },

    classic: {
        packChance: 0.50,
        minJokers: 1,
        maxJokers: 2
    },

    madness: {
        packChance: 1,
        minJokers: 3,
        maxJokers: 5
    }

};

/* ACTIVE SETTINGS */

let jokerSettings = {

    enabled: false,

    mode: "classic",

    allowChoice: true,
    allowSurprise: true

};

/* ========================= */
/* ===== RANDOM HELPERS ==== */
/* ========================= */

function randomInt(min, max){

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

}

function weightedRandom(weights){

    let total = 0;

    for(let key in weights){
        total += weights[key];
    }

    let roll = Math.random() * total;

    let current = 0;

    for(let key in weights){

        current += weights[key];

        if(roll <= current){
            return key;
        }

    }

    return "common";

}

/* ========================= */
/* ===== GET RARITY ======== */
/* ========================= */

function getRandomJokerRarity(){

    return weightedRandom(jokerRarityRates);

}

/* ========================= */
/* ===== FILTER JOKERS ===== */
/* ========================= */

function getAvailableJokers(){

    return jokers.filter(joker => {

        /* TYPE FILTER */

        if(joker.type === "choice" && !jokerSettings.allowChoice){
            return false;
        }

        if(joker.type === "surprise" && !jokerSettings.allowSurprise){
            return false;
        }

        return true;

    });

}

/* ========================= */
/* ===== RANDOM JOKER ====== */
/* ========================= */

function getRandomJoker(){

    const rarity = getRandomJokerRarity();

    const available = getAvailableJokers();

    const filtered = available.filter(
        j => j.rarity === rarity
    );

    /* fallback */

    let pool = filtered;

    if(pool.length <= 0){
        pool = available;
    }

    const joker =
        pool[Math.floor(Math.random() * pool.length)];

    return {

        joker: true,

        id: joker.id,
        type: joker.type,
        rarity: joker.rarity,

        name: joker.name,
        desc: joker.desc,

        tags: joker.tags || [],

        minCost: joker.minCost,
        maxCost: joker.maxCost,

        minPower: joker.minPower,
        maxPower: joker.maxPower

    };

}

/* ========================= */
/* ===== INJECT JOKERS ===== */
/* ========================= */

function injectJokersIntoPack(pack){

    if(!jokerSettings.enabled){
        return pack;
    }

    const modeData =
        jokerModes[jokerSettings.mode];

    if(!modeData){
        return pack;
    }

    /* PACK ROLL */

    if(Math.random() > modeData.packChance){
        return pack;
    }

    /* HOW MANY */

    const jokerCount = randomInt(
        modeData.minJokers,
        modeData.maxJokers
    );

    for(let i = 0; i < jokerCount; i++){

        const randomIndex =
            Math.floor(Math.random() * pack.length);

        pack[randomIndex] = getRandomJoker();

    }

    return pack;

}
