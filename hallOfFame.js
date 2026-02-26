function calculateHallOfFame(database){

let players = {};
let cleanWins = {};
let fighterPoints = {};

let biggestWin = {
player:null,
diff:0,
score:""
};


/* ==== ZBIERANIE DANYCH ==== */

database.drafts.forEach(draft=>{

draft.players.forEach(p=>{

if(!players[p.name]){
players[p.name]={
name:p.name,
draftWins:0,
points:0,
drafts:0,
matches:0,
wins:0,
losses:0
};

cleanWins[p.name]=0;
fighterPoints[p.name]=0;
}

players[p.name].drafts++;

});


/* ==== ZWYCIĘZCA DRAFTU ==== */

let draftPoints={};

draft.players.forEach(p=>draftPoints[p.name]=0);

draft.matches.forEach(m=>{
draftPoints[m.p1]+=m.pts1;
draftPoints[m.p2]+=m.pts2;
});

let winner = Object.keys(draftPoints)
.sort((a,b)=>draftPoints[b]-draftPoints[a])[0];

players[winner].draftWins++;


/* ==== MECZE ==== */

draft.matches.forEach(m=>{

let diff = Math.abs(m.pts1-m.pts2);

let winnerPlayer;
let loserPlayer;
let loserPts;

if(m.pts1>m.pts2){
winnerPlayer=m.p1;
loserPlayer=m.p2;
loserPts=m.pts2;
}else{
winnerPlayer=m.p2;
loserPlayer=m.p1;
loserPts=m.pts1;
}

players[m.p1].points+=m.pts1;
players[m.p2].points+=m.pts2;

players[m.p1].matches++;
players[m.p2].matches++;

players[winnerPlayer].wins++;
players[loserPlayer].losses++;

if(loserPts===0)
cleanWins[winnerPlayer]++;

fighterPoints[loserPlayer]+=loserPts;

if(diff>biggestWin.diff){
biggestWin.diff=diff;
biggestWin.player=winnerPlayer;
biggestWin.score=`${m.pts1}-${m.pts2}`;
}

});

});


/* ==== RANKING ==== */

let ranking = Object.values(players)

.sort((a,b)=>{
if(b.draftWins!==a.draftWins)
return b.draftWins-a.draftWins;
return b.points-a.points;
});


ranking.forEach(p=>{
p.avg = Math.round(p.points/p.drafts);
});


let cleanRanking = Object.keys(cleanWins)
.map(n=>({name:n,val:cleanWins[n]}))
.sort((a,b)=>b.val-a.val)
.slice(0,3);


let fighterRanking = Object.keys(fighterPoints)
.map(n=>({name:n,val:fighterPoints[n]}))
.sort((a,b)=>b.val-a.val)
.slice(0,3);


return{
ranking,
cleanRanking,
fighterRanking,
biggestWin
};

}
