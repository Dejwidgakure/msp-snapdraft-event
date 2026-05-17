const jokerSettings = {

    enabled: false,

    mode: "classic", // classic / rare / madness

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
        j.rarity === rarity

    );

    /* fallback */

    if(pool.length === 0){

        pool = jokers.filter(j =>
            jokerSettings.allowedTypes.includes(j.type)
        );

    }

    return structuredClone(
        pool[Math.floor(Math.random()*pool.length)]
    );

}

/* =========================
   DODAWANIE DO PACZKI
========================= */

function injectJokersIntoPack(pack){

    const newPack = [...pack];

    let jokerCount = 0;

    /* CLASSIC */

    if(jokerSettings.mode === "classic"){

        if(Math.random() < 0.5){
            jokerCount = 1;
        }

        if(Math.random() < 0.1){
            jokerCount = 2;
        }

    }

    /* RARE */

    else if(jokerSettings.mode === "rare"){

        if(Math.random() < 0.75){
            jokerCount = 1;
        }

        if(Math.random() < 0.25){
            jokerCount = 2;
        }

    }

    /* MADNESS */

    else if(jokerSettings.mode === "madness"){

        jokerCount =
            Math.ceil(pack.length / 2);

    }

    for(let i=0;i<jokerCount;i++){

        const index =
            Math.floor(Math.random()*newPack.length);

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

    let pool = [...cardDatabase];

    /* COST FILTER */

    if(joker.minCost !== null){

        pool = pool.filter(card =>
            card.cost >= joker.minCost
        );

    }

    if(joker.maxCost !== null){

        pool = pool.filter(card =>
            card.cost <= joker.maxCost
        );

    }

    /* POWER FILTER */

    if(joker.minPower !== null){

        pool = pool.filter(card =>
            card.power >= joker.minPower
        );

    }

    if(joker.maxPower !== null){

        pool = pool.filter(card =>
            card.power <= joker.maxPower
        );

    }

    /* TODO:
       TAG FILTERS
       move / destroy / etc
    */

    /* REMOVE DUPLICATES */

    pool = [...new Map(
        pool.map(card => [card.name, card])
    ).values()];

    /* RANDOM 2 */

    const shuffled =
        pool.sort(()=>Math.random()-0.5);

    return shuffled.slice(0,2);

}
