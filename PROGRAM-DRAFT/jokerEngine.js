function getRandomJoker(){

    return jokers[
        Math.floor(Math.random() * jokers.length)
    ];

}

function isChoiceJoker(joker){

    return joker.type === "choice";

}

function isSurpriseJoker(joker){

    return joker.type === "surprise";

}
