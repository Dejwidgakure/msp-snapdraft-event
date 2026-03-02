function calculateHallOfFame(database){

const LEGEND_POINTS = {
1:7,
2:4,
3:3,
4:2,
5:1
};

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

/* obliczamy punkty draftowe */
let draftPoints = {};
draft.players.forEach(p=>{
draftPoints[p.name]=0;
});

/* inicjalizacja graczy */
draft.players.forEach(p=>{

if(!players[p.name]){
players[p.name]={
name:p.name,
legendPoints:0,
first:0,
second:0,
third:0,
fourth:0,
fifth:0,
drafts:0,
points:0,
matches:0,
wins:0,
losses:0
};

cleanWins[p.name]=0;
fighterPoints[p.name]=0;
}

players[p.name].drafts++;

});

/* punkty meczowe */
draft.matches.forEach(m=>{
draftPoints[m.p1]+=m.pts1;
draftPoints[m.p2]+=m.pts2;
});

/* ranking draftu */
let draftRanking = Object.keys(draftPoints)
.sort((a,b)=>draftPoints[b]-draftPoints[a]);

draftRanking.forEach((name,index)=>{

let place = index+1;

if(place<=5){
players[name].legendPoints += LEGEND_POINTS[place];
}

if(place===1) players[name].first++;
if(place===2) players[name].second++;
if(place===3) players[name].third++;
if(place===4) players[name].fourth++;
if(place===5) players[name].fifth++;

});

/* mecze */
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

/* ==== FILTR MIN 2 DRAFTY ==== */

let ranking = Object.values(players)
.filter(p=>p.drafts>=2)
.sort((a,b)=>{
if(b.legendPoints!==a.legendPoints)
return b.legendPoints-a.legendPoints;
return b.points-a.points;
});

/* średnia */
ranking.forEach(p=>{
p.avg = Math.round(p.points/p.drafts);
});

/* rekordy */
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

/* ========================= */
/* ===== RENDERING ========= */
/* ========================= */

document.addEventListener("DOMContentLoaded",()=>{

const data = calculateHallOfFame(database);

const tbody = document.querySelector("#rankingTable tbody");

data.ranking.forEach((p,i)=>{

tbody.innerHTML+=`
<tr>
<td>${i+1}</td>
<td>${p.name}</td>
<td><strong>${p.legendPoints}</strong></td>
<td>${p.first}</td>
<td>${p.second}</td>
<td>${p.third}</td>
<td>${p.fourth}</td>
<td>${p.fifth}</td>
<td>${p.drafts}</td>
<td>${p.points}</td>
<td>${p.avg}</td>
</tr>
`;

});

/* REKORDY */

const container = document.getElementById("recordsContainer");

container.innerHTML += `
<div class="record-box">
<h3>Najwięcej winów do 0</h3>
<p>${data.cleanRanking[0]?.name || "-"} (${data.cleanRanking[0]?.val || 0})</p>
</div>

<div class="record-box">
<h3>Największa wygrana</h3>
<p>${data.biggestWin.player || "-"} (${data.biggestWin.score || "-"})</p>
</div>

<div class="record-box">
<h3>Najwięcej punktów z porażek</h3>
<p>${data.fighterRanking[0]?.name || "-"} (${data.fighterRanking[0]?.val || 0})</p>
</div>
`;

});
