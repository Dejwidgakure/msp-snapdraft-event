/* ============================================================
   MSP SNAP DRAFT
   TAG DATABASE v1.0

   Centralna baza wszystkich tagów używanych w projekcie.

   Kategorie:
   - series
   - archetypes
   - subtypes
   - teams
   - themes
   - special

   Każdy tag posiada:
   id
   name
   description
============================================================ */

const TAGS = {

series: [

{
id:"series1",
name:"Series 1",
description:"Karty należące do Series 1."
},

{
id:"series2",
name:"Series 2",
description:"Karty należące do Series 2."
},

{
id:"series3",
name:"Series 3",
description:"Karty należące do Series 3."
},

{
id:"series4",
name:"Series 4",
description:"Karty należące do Series 4."
},

{
id:"series5",
name:"Series 5",
description:"Karty należące do Series 5."
}

],



archetypes:[

{
id:"destroy",
name:"Destroy",
description:"Archetyp oparty o niszczenie własnych kart."
},

{
id:"move",
name:"Move",
description:"Przesuwanie kart pomiędzy lokacjami."
},

{
id:"bounce",
name:"Bounce",
description:"Zwracanie kart do ręki."
},

{
id:"discard",
name:"Discard",
description:"Odrzucanie kart."
},

{
id:"zoo",
name:"Zoo",
description:"Duża liczba tanich kart."
},

{
id:"objective",
name:"Objective",
description:"Budowanie konkretnego planu gry."
},

{
id:"quickdraw",
name:"Quick Draw",
description:"Szybkie zagrywanie kart."
},

{
id:"gamestart",
name:"Game Start",
description:"Efekty aktywujące się przed rozpoczęciem gry."
},

{
id:"startturn",
name:"Start Turn",
description:"Efekty aktywujące się na początku tury."
},

{
id:"endturn",
name:"End Turn",
description:"Efekty aktywujące się na końcu tury."
},

{
id:"endgame",
name:"End Game",
description:"Efekty aktywujące się po zakończeniu gry."
},

{
id:"ongoing",
name:"Ongoing",
description:"Archetyp Ongoing."
},

{
id:"wongreveal",
name:"On Reveal",
description:"Archetyp On Reveal / Wong."
},

{
id:"activate",
name:"Activate",
description:"Archetyp Activate."
},

{
id:"afflict",
name:"Afflict",
description:"Nakładanie ujemnych statystyk."
},

{
id:"clog",
name:"Clog",
description:"Zapchanie planszy."
},

{
id:"mill",
name:"Mill",
description:"Manipulacja talią przeciwnika."
},

{
id:"patriot",
name:"Patriot",
description:"Archetyp Patriot / No Ability."
},

{
id:"highevo",
name:"High Evolutionary",
description:"Archetyp High Evolutionary."
},

{
id:"energy",
name:"Ramp / Energy Cheat",
description:"Generowanie lub oszukiwanie energii."
},

{
id:"merge",
name:"Merge",
description:"Łączenie kart."
},

{
id:"hawk",
name:"Darkhawk",
description:"Archetyp Darkhawk."
},

{
id:"negative",
name:"Negative",
description:"Archetyp Mr. Negative."
},

{
id:"hand-gen",
name:"Hand Generator",
description:"Generatorzy kart do ręki oraz karty wspierające ten archetyp."
}

],



subtypes:[

{
id:"card-generator",
name:"Card Generator",
description:"Generuje nowe karty."
},

{
id:"add-card",
name:"Add Card",
description:"Dodaje istniejącą kartę."
},

{
id:"card-copy",
name:"Card Copy",
description:"Kopiuje kartę."
},

{
id:"effect-duplicate",
name:"Effect Duplicate",
description:"Powiela lub kopiuje efekt."
},

{
id:"deck-generator",
name:"Deck Generator",
description:"Tworzy karty w talii."
},

{
id:"deck-interaction",
name:"Deck Interaction",
description:"Manipuluje talią."
},

{
id:"token-generator",
name:"Token Generator",
description:"Tworzy tokeny."
},

{
id:"trigger-card",
name:"Trigger Card",
description:"Uruchamia efekty innych kart."
},

{
id:"moveable",
name:"Moveable",
description:"Może zostać przesunięta."
},

{
id:"disruption",
name:"Disruption",
description:"Utrudnia grę przeciwnikowi."
}

],



teams:[

{
id:"avengers",
name:"Avengers",
description:"Członkowie Avengers."
},

{
id:"young-avengers",
name:"Young Avengers",
description:"Young Avengers."
},

{
id:"champions",
name:"Champions",
description:"Champions."
},

{
id:"xmen",
name:"X-Men",
description:"Mutanci należący do X-Men."
},

{
id:"inhumans",
name:"Inhumans",
description:"Inhumans."
},

{
id:"guardians",
name:"Guardians of the Galaxy",
description:"Strażnicy Galaktyki."
},

{
id:"fantastic4",
name:"Fantastic Four",
description:"Fantastyczna Czwórka."
},

{
id:"shield",
name:"S.H.I.E.L.D.",
description:"Agenci SHIELD."
},

{
id:"heroes-for-hire",
name:"Heroes for Hire",
description:"Luke Cage, Iron Fist, Jessica Jones i pozostali."
},

{
id:"spiderverse",
name:"Spider-Verse",
description:"Uniwersum Spider-Mana."
},

{
id:"sinister-six",
name:"Sinister Six",
description:"Sinister Six."
},

{
id:"thunderbolts",
name:"Thunderbolts",
description:"Thunderbolts."
},

{
id:"midnight-sons",
name:"Midnight Sons",
description:"Midnight Sons."
},

{
id:"asgardians",
name:"Asgardians",
description:"Bogowie Asgardu."
},

{
id:"symbiotes",
name:"Symbiotes",
description:"Symbionty."
},

{
id:"cosmic",
name:"Cosmic Entities",
description:"Kosmiczne byty Marvela."
}

],



themes:[

{
id:"scary",
name:"Scary",
description:"Horror i mroczne motywy."
},

{
id:"villains",
name:"Villains",
description:"Złoczyńcy."
},

{
id:"robots-tech",
name:"Robots & Tech",
description:"Roboty i technologia."
},

{
id:"witches",
name:"Witches",
description:"Magia i czarownice."
},

{
id:"magic",
name:"Magic",
description:"Ogólna magia."
},

{
id:"mutants",
name:"Mutants",
description:"Mutanci."
},

{
id:"animals",
name:"Animals",
description:"Zwierzęta."
},

{
id:"aliens",
name:"Aliens",
description:"Kosmici."
},

{
id:"monsters",
name:"Monsters",
description:"Potwory."
},

{
id:"military",
name:"Military",
description:"Wojsko i organizacje militarne."
},

{
id:"future",
name:"Future",
description:"Przyszłość i futurystyka."
},

{
id:"time-travel",
name:"Time Travel",
description:"Podróże w czasie."
}

],



special:[

{
id:"featured",
name:"Featured",
description:"Karty wyróżnione."
},



]

};

/* ============================================================

Każda karta może posiadać dowolną liczbę tagów.

Przykład:

tags: [
"destroy",
"villains",
"series5",
"symbiotes",
"card-generator"
]

Jeden tag należy tylko do jednej kategorii.

============================================================ */
