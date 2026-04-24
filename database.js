const database = {
  drafts: [

    {
      id: 1,
      startDate: "2024-06-02",
      endDate: "2024-06-08",
      mode: "Classic (Stary System punktów)",
      presetCard: null,
      playersCount: 6,
      winner: "Hahke",
      bans: ["Kang","Loki"],

      players: [
    {
name: "Budiso",
deck: [
"Luke Cage",
"Cyclops",
"Carnage",
"Human Torch",
"Juggernaut",
"Domino",
"Rogue",
"Crystal",
"Magneto",
"Kraven",
"Medusa",
"Shanna"
]
},

{
name: "Hardkor",
deck: [
"Elektra",
"Proxima Midnight",
"Namor",
"Kingpin",
"Rockslide",
"Kang",
"Corvus Glaive",
"Alioth",
"Nick Fury",
"Quinjet",
"Hellcow",
"Black Knight"
]
},

{
name: "Hahke",
deck: [
"Grand Master",
"Mysterio",
"Nico Minoru",
"Elektra",
"White Tiger",
"Ultron",
"Wolfsbane",
"Destroyer",
"Rescue",
"Black Bolt",
"Rockslide",
"Armor"
]
},

{
name: "Dawid ak. Void",
deck: [
"Psylocke",
"Hazmat",
"Elsa Bloodstone",
"Death",
"Hawkeye",
"Abomination",
"Wong",
"Magik",
"Bast",
"Black Swann",
"America Chavez",
"Knull"
]
},

{
name: "Marek",
deck: [
"Medusa",
"Hellcow",
"Bishop",
"Martyr",
"Ravonna Renslayer",
"Attuma",
"Morph",
"Titania",
"Ironheart",
"Spider-Ham",
"Groot",
"Human Torch"
]
},

{
name: "Dejwidgakure",
deck: [
"Juggernaut",
"Howard the Duck",
"Rocket Raccoon",
"Moon Knight",
"Valentina",
"Quicksilver",
"Werewolf By Night",
"Warpath",
"Maximus",
"Korg",
"Doctor Doom",
"Carnage"
]
}
        
      ],

      matches: [

    // Void vs Budiso
    { p1: "Dawid ak. Void", p2: "Budiso", pts1: 20, pts2: 0 },

    // Void vs Hardkor
    { p1: "Hardkor", p2: "Dawid ak. Void", pts1: 20, pts2: 0 },

    // Void vs Dejwidgakure
    { p1: "Dejwidgakure", p2: "Dawid ak. Void", pts1: 18, pts2: 0 },

    // Void vs Marek
    { p1: "Marek", p2: "Dawid ak. Void", pts1: 15, pts2: 0 },

    // Void vs Hahke
    { p1: "Hahke", p2: "Dawid ak. Void", pts1: 14, pts2: 0 },


    // Budiso vs Hardkor
    { p1: "Hardkor", p2: "Budiso", pts1: 14, pts2: 0 },

    // Budiso vs Dejwidgakure
    { p1: "Dejwidgakure", p2: "Budiso", pts1: 16, pts2: 0 },

    // Budiso vs Marek
    { p1: "Budiso", p2: "Marek", pts1: 14, pts2: 0 },

    // Budiso vs Hahke
    { p1: "Hahke", p2: "Budiso", pts1: 16, pts2: 0 },


    // Hardkor vs Dejwidgakure
    { p1: "Hardkor", p2: "Dejwidgakure", pts1: 17, pts2: 0 },

    // Hardkor vs Marek
    { p1: "Marek", p2: "Hardkor", pts1: 18, pts2: 0 },

    // Hardkor vs Hahke
    { p1: "Hahke", p2: "Hardkor", pts1: 20, pts2: 0 },


    // Dejwidgakure vs Marek
    { p1: "Dejwidgakure", p2: "Marek", pts1: 18, pts2: 0 },

    // Dejwidgakure vs Hahke
    { p1: "Dejwidgakure", p2: "Hahke", pts1: 14, pts2: 0 },

    // Marek vs Hahke
    { p1: "Hahke", p2: "Marek", pts1: 20, pts2: 0 }

  ]
},

    {
id: 2,
startDate: "2024-06-09",
endDate: "2024-06-14",
mode: "Classic (Stary System Punktów)",
presetCard: null,
playersCount: 9,
winner: "Dejwidgakure",
bans: ["Kang","Loki"],

players: [

{
name: "kb",
deck: [
"Silver Samurai",
"Mantis",
"Red Guardian",
"Galactus",
"Warpath",
"Korg",
"White Queen",
"Heimdall",
"Wolverine",
"Black Cat",
"Blink",
"Martyr"
]
},

{
name: "Xevo",
deck: [
"Lady Deathstrike",
"M'baku",
"Sentinel",
"Knull",
"Hope Summers",
"Arnim Zola",
"Mister Negative",
"Strong Guy",
"Corvus Glaive",
"Ravonna Renslayer",
"Howard the Duck",
"Devil Dinosaur"
]
},

{
name: "Budiso",
deck: [
"Leader",
"Apocalypse",
"Echo",
"Misty Knight",
"Mobius M. Mobius",
"Wolverine",
"Multiple Man",
"Nakia",
"Black Cat",
"White Queen",
"Baron Mordo",
"Leech"
]
},

{
name: "Dawid ak. Void",
deck: [
"Professor X",
"Spectrum",
"Psylocke",
"Sandman",
"Juggernaut",
"Black Swann",
"Quinjet",
"Namora",
"Armor",
"Namor",
"Thor",
"Quicksilver"
]
},

{
name: "Hahke",
deck: [
"Grand Master",
"Rocket Raccoon",
"Captain Marvel",
"Aero",
"Star-Lord",
"Spectrum",
"Ms. Marvel",
"Proxima Midnight",
"Blade",
"Brood",
"Alioth",
"Vision"
]
},

{
name: "FizjoRadek",
deck: [
"Beta Ray Bill",
"Havok",
"Jane Foster",
"Invisible Woman",
"Rogue",
"Jubilee",
"Debrii",
"Spectrum",
"Lockjaw",
"Cerebro",
"Quinjet",
"Silver Surfer"
]
},

{
name: "LukeTrustsGod",
deck: [
"Korg",
"Shocker",
"Juggernaut",
"Mantis",
"Absorbing Man",
"Forge",
"Jane Foster",
"Hulk",
"Beta Ray Bill",
"Apocalypse",
"Enchantress",
"Vulture"
]
},

{
name: "Dejwidgakure",
deck: [
"Shuri",
"The Infinaut",
"Sasquatch",
"Titania",
"Angela",
"Cull Obsidian",
"Spider-Man",
"Multiple Man",
"Rocket Raccoon",
"Goose",
"Zero",
"Deadpool"
]
},

{
name: "99iant",
deck: [
"Namora",
"The Living Tribunal",
"Gilgamesh",
"The Hood",
"Valkyrie",
"Scorpion",
"Attuma",
"Yellowjacket",
"Shang-Chi",
"Selene",
"Odin",
"Okoye"
]
}

],

matches: [

{ p1:"99iant", p2:"Budiso", pts1:19, pts2:0 },
{ p1:"Hahke", p2:"99iant", pts1:18, pts2:0 },
{ p1:"99iant", p2:"kb", pts1:18, pts2:0 },
{ p1:"99iant", p2:"LukeTrustsGod", pts1:12, pts2:0 },
{ p1:"Dawid ak. Void", p2:"99iant", pts1:14, pts2:0 },
{ p1:"99iant", p2:"Xevo", pts1:14, pts2:0 },
{ p1:"Dejwidgakure", p2:"99iant", pts1:17, pts2:0 },
{ p1:"99iant", p2:"FizjoRadek", pts1:18, pts2:0 },

{ p1:"Hahke", p2:"Budiso", pts1:16, pts2:0 },
{ p1:"kb", p2:"Budiso", pts1:20, pts2:0 },
{ p1:"LukeTrustsGod", p2:"Budiso", pts1:14, pts2:0 },
{ p1:"Dawid ak. Void", p2:"Budiso", pts1:12, pts2:0 },
{ p1:"Budiso", p2:"Xevo", pts1:14, pts2:0 },
{ p1:"Dejwidgakure", p2:"Budiso", pts1:14, pts2:0 },
{ p1:"Budiso", p2:"FizjoRadek", pts1:14, pts2:0 },

{ p1:"Hahke", p2:"kb", pts1:20, pts2:0 },
{ p1:"LukeTrustsGod", p2:"Hahke", pts1:16, pts2:0 },
{ p1:"Dawid ak. Void", p2:"Hahke", pts1:12, pts2:0 },
{ p1:"Hahke", p2:"Xevo", pts1:16, pts2:0 },
{ p1:"Dejwidgakure", p2:"Hahke", pts1:14, pts2:0 },
{ p1:"Hahke", p2:"FizjoRadek", pts1:20, pts2:0 },

{ p1:"LukeTrustsGod", p2:"kb", pts1:14, pts2:0 },
{ p1:"kb", p2:"Dawid ak. Void", pts1:17, pts2:0 },
{ p1:"Xevo", p2:"kb", pts1:13, pts2:0 },
{ p1:"Dejwidgakure", p2:"kb", pts1:11, pts2:0 },
{ p1:"kb", p2:"FizjoRadek", pts1:14, pts2:0 },

{ p1:"LukeTrustsGod", p2:"Dawid ak. Void", pts1:14, pts2:0 },
{ p1:"Xevo", p2:"LukeTrustsGod", pts1:16, pts2:0 },
{ p1:"Dejwidgakure", p2:"LukeTrustsGod", pts1:16, pts2:0 },
{ p1:"LukeTrustsGod", p2:"FizjoRadek", pts1:14, pts2:0 },

{ p1:"Dawid ak. Void", p2:"Xevo", pts1:12, pts2:0 },
{ p1:"Dejwidgakure", p2:"Dawid ak. Void", pts1:20, pts2:0 },
{ p1:"Dawid ak. Void", p2:"FizjoRadek", pts1:17, pts2:0 },

{ p1:"Xevo", p2:"Dejwidgakure", pts1:16, pts2:0 },
{ p1:"Xevo", p2:"FizjoRadek", pts1:14, pts2:0 },

{ p1:"Dejwidgakure", p2:"FizjoRadek", pts1:20, pts2:0 }

]
},

    {
id: 3,
startDate: "2024-06-15",
endDate: "2024-06-22",
mode:"Classic",
presetCard:null,
playersCount:10,
winner:"kb",
bans:["Kang","Loki"],

players:[

{
    "name": "Marek",
    "deck": [
      "Spider-Ham",
      "White Widow",
      "Sentinel",
      "Ironheart",
      "Crystal",
      "Groot",
      "Nakia",
      "Thor",
      "Nocturne",
      "Devil Dinosaur",
      "Valkyrie",
      "Lady Deathstrike"
    ]
  },
{
    "name": "Dawid ak. Void",
    "deck": [
      "Morbius",
      "Invisible Woman",
      "Swarm",
      "Caiera",
      "Corvus Glaive",
      "Lady Sif",
      "Polaris",
      "Silver Samurai",
      "Hellcow",
      "Black Cat",
      "Adam Warlock",
      "Hela"
    ]
  },
 {
    "name": "99iant",
    "deck": [
      "Ant-Man",
      "America Chavez",
      "Yondu",
      "Brood",
      "Negasonic Teenage Warhead",
      "Agent Coulson",
      "White Tiger",
      "Devil Dinosaur",
      "Nimrod",
      "Sersi",
      "Red Hulk",
      "Agatha Harkness"
    ]
      },
{name:"Budiso",deck:["Nova","Selene","Baron Mordo","Scarlet Witch","Electro","Strong Guy","Viper","Ka-Zar","Silver Samurai","Blink","Sersi","She-Hulk"]},
{name:"kb",deck:["Kitty Pryde","Angel","Iron Fist","U.S. Agent","Cloak","Hit-Monkey","Rhino","Rock Slide","Attuma","Cannonball","Spider-Man 2099","Hulk"]},
{name:"Killjoy",deck:["Hazmat","Cloak","Ironheart","Brood","Killmonger","Mister Negative","Wong","Valkyrie","Black Panther","Blink","Spectrum","Onslaught"]},
{name:"kolo313",deck:["Sunspot","Scorpion","Storm","Cyclops","Spider-Man","Iron Lad","White Queen","Hell Cow","Sandman","Heimdall","She-Hulk","Magneto"]},
{name:"LukeTrustsGod",deck:["The Hood","Quicksilver","Beast","Falcon","Thor","Viper","Mister Negative","Supergiant","Attuma","Abomination","Spider-Man 2099","Orka"]},
{name:"Dejwidgakure",deck:["Yellowjacket","Hawkeye","Human Torch","Iron Fist","Snowguard","Falcon","Sage","Bishop","Nakia","Caiera","Jessica Jones","The Living Tribunal"]},
{name:"FizjoRadek",deck:["Howard the Duck","Master Mold","Black Widow","Killmonger","Mobius M. Mobius","Moon Knight","Rescue","Phoenix Force","White Queen","Cannonball","Vision","Helicarrier"]}

],

matches:[

{ p1:"Dawid ak. Void", p2:"Marek", pts1:22, pts2:3 },
{ p1:"Marek", p2:"99iant", pts1:24, pts2:1 },
{ p1:"Marek", p2:"Budiso", pts1:25, pts2:0 },
{ p1:"kb", p2:"Marek", pts1:17, pts2:8 },
{ p1:"Killjoy", p2:"Marek", pts1:20, pts2:5 },
{ p1:"Marek", p2:"kolo313", pts1:25, pts2:0 },
{ p1:"Marek", p2:"LukeTrustsGod", pts1:19, pts2:6 },
{ p1:"Marek", p2:"Dejwidgakure", pts1:18, pts2:7 },
{ p1:"Marek", p2:"FizjoRadek", pts1:16, pts2:9 },

{ p1:"Dawid ak. Void", p2:"99iant", pts1:21, pts2:4 },
{ p1:"Dawid ak. Void", p2:"Budiso", pts1:24, pts2:1 },
{ p1:"kb", p2:"Dawid ak. Void", pts1:16, pts2:9 },
{ p1:"Killjoy", p2:"Dawid ak. Void", pts1:4, pts2:21 },
{ p1:"kolo313", p2:"Dawid ak. Void", pts1:18, pts2:7 },
{ p1:"LukeTrustsGod", p2:"Dawid ak. Void", pts1:18, pts2:7 },
{ p1:"Dejwidgakure", p2:"Dawid ak. Void", pts1:22, pts2:3 },
{ p1:"Dawid ak. Void", p2:"FizjoRadek", pts1:21, pts2:4 },

{ p1:"Budiso", p2:"99iant", pts1:24, pts2:1 },
{ p1:"kb", p2:"99iant", pts1:23, pts2:2 },
{ p1:"Killjoy", p2:"99iant", pts1:20, pts2:5 },
{ p1:"kolo313", p2:"99iant", pts1:23, pts2:2 },
{ p1:"LukeTrustsGod", p2:"99iant", pts1:19, pts2:6 },
{ p1:"Dejwidgakure", p2:"99iant", pts1:17, pts2:8 },
{ p1:"99iant", p2:"FizjoRadek", pts1:24, pts2:1 },

{ p1:"kb", p2:"Budiso", pts1:22, pts2:3 },
{ p1:"Killjoy", p2:"Budiso", pts1:25, pts2:0 },
{ p1:"Budiso", p2:"kolo313", pts1:25, pts2:0 },
{ p1:"LukeTrustsGod", p2:"Budiso", pts1:23, pts2:2 },
{ p1:"Budiso", p2:"Dejwidgakure", pts1:25, pts2:0 },
{ p1:"FizjoRadek", p2:"Budiso", pts1:23, pts2:2 },

{ p1:"kb", p2:"Killjoy", pts1:25, pts2:0 },
{ p1:"kb", p2:"kolo313", pts1:24, pts2:1 },
{ p1:"kb", p2:"LukeTrustsGod", pts1:22, pts2:3 },
{ p1:"Dejwidgakure", p2:"kb", pts1:23, pts2:2 },
{ p1:"kb", p2:"FizjoRadek", pts1:25, pts2:0 },

{ p1:"Killjoy", p2:"kolo313", pts1:23, pts2:2 },
{ p1:"LukeTrustsGod", p2:"Killjoy", pts1:23, pts2:2 },
{ p1:"Dejwidgakure", p2:"Killjoy", pts1:17, pts2:8 },
{ p1:"Killjoy", p2:"FizjoRadek", pts1:21, pts2:4 },

{ p1:"LukeTrustsGod", p2:"kolo313", pts1:7, pts2:18 },
{ p1:"Dejwidgakure", p2:"kolo313", pts1:19, pts2:6 },
{ p1:"FizjoRadek", p2:"kolo313", pts1:6, pts2:19 },

{ p1:"Dejwidgakure", p2:"LukeTrustsGod", pts1:23, pts2:2 },
{ p1:"LukeTrustsGod", p2:"FizjoRadek", pts1:6, pts2:19 },

{ p1:"FizjoRadek", p2:"Dejwidgakure", pts1:25, pts2:0 }

]
},
    {
      id: 4,
      startDate: "2024-06-23",
      endDate: "2024-06-30",
      mode: "Classic + Bany",
      presetCard: null,
      playersCount: 7,
      winner: "Dejwidgakure",
      bans: [
        "Arishem",
        "Loki",
        "Kang"
        
      ],

      players: [
        { name: "Dejwidgakure", deck: ["Ant-Man","Nightcrawler","Pixie","Quake","Maximus","Mystique","Cyclops","Super Skrull","Ms. Marvel","Beta Ray Bill","Ronan","Thor"] },
        { name: "Dawid ak. Void", deck: ["America Chavez","Misty Knight","Uatu","Pixie","Elsa Bloodstone","Kazar","Adam Warlock","Sasquatch","Invisible Woman","Captain America","Thanos","The Infinaut"] },
        { name: "Hardkor", deck: ["Maria Hill","Quinjet","Zabu","Rock Slide","Lady Silk","Rescure","Captain Marvel","Man-Thing","Omega Red","Beta Ray Bill","Spider-Woman","Heimdall"] },
        { name: "99iant", deck: ["Hawkaye","Iron Fist","Korg","Baron Mordo","Quake","Storm","Spider-Man","Mockingbird","Darkhawk","Annihilus","Modok","Doctor Doom"] },
        { name: "LukeTrustsGod", deck: ["Spider-Ham","Elektra","Zero","Beast","Ghost","Omega Red","Typhoid Mary","Sandman","Mojo","Green Goblin","Blob","Giganto"] },
        { name: "Killjoy", deck: ["Yondu","Bucky Barnes","Shadow King","Multiple Man","Magik","Gambit","Venom","Viper","Phoenix Force","Knull","Orka","Death"] },
        { name: "FizjoRadek", deck: ["Rocket Raccon","Ebony Maw","Grand Master","Mojo","Electro","Absorbing Man","Captain Marvel","White Queen","Wolverine","Cloak","Hobgoblin","Black Panther"] },
      ],

      matches: [
        { p1: "Dejwidgakure", p2: "99iant", pts1: 18, pts2: 5 },
        { p1: "Dejwidgakure", p2: "Dawid ak. Void", pts1: 18, pts2: 5 },
        { p1: "Dawid ak. Void", p2: "99iant", pts1: 5, pts2: 18 },
        { p1: "Hardkor", p2: "99iant", pts1: 14, pts2: 9 },
        { p1: "Dawid ak. Void", p2: "Hardkor", pts1: 5, pts2: 18 },
        { p1: "Hardkor", p2: "FizjoRadek", pts1: 6, pts2: 17 },
        { p1: "99iant", p2: "Killjoy", pts1: 9, pts2: 14 },
        { p1: "FizjoRadek", p2: "99iant", pts1: 20, pts2: 3 },
        { p1: "99iant", p2: "LukeTrustsGod", pts1: 20, pts2: 3 },
        { p1: "FizjoRadek", p2: "Dawid ak. Void", pts1: 16, pts2: 7 },
        { p1: "Hardkor", p2: "Killjoy", pts1: 22, pts2: 1 },
        { p1: "Hardkor", p2: "LukeTrustsGod", pts1: 18, pts2: 5 },
        { p1: "Hardkor", p2: "Dejwidgakure", pts1: 18, pts2: 5 },
        { p1: "FizjoRadek", p2: "Killjoy", pts1: 4, pts2: 19 },
        { p1: "FizjoRadek", p2: "LukeTrustsGod", pts1: 6, pts2: 17 },
        { p1: "Killjoy", p2: "LukeTrustsGod", pts1: 9, pts2: 14 },
        { p1: "Dejwidgakure", p2: "Killjoy", pts1: 21, pts2: 2 },
        { p1: "Killjoy", p2: "Dawid ak. Void", pts1: 4, pts2: 19 },
        { p1: "LukeTrustsGod", p2: "Dejwidgakure", pts1: 4, pts2: 19 },
        { p1: "LukeTrustsGod", p2: "Dawid ak. Void", pts1: 20, pts2: 3 },
        { p1: "Dejwidgakure", p2: "FizjoRadek", pts1: 21, pts2: 2 }
        
]
        },

	  {
      id: 15,
      startDate: "2025-02-08",
      endDate: "2025-02-22",
      mode: "Bany",
      presetCard: null,
      playersCount: 8,
      winner: "Supcio",
      bans: [
        "Arishem",
        "Loki",
        "Kang",
      ],

      players: [
        { name: "Pluton32", deck: ["Quicksilver","Domino","Scarlet Witch","Silver Surfer","Mobius M. Mobius","Megasonic","Red Guardian","Makkari","Leech","Stature","Galactus","Red Hulk"] },
        { name: "Weregesu", deck: ["Hawkeye","Black Knight","Cerebro","Swarm","Colleen Wing","Morphy","Sabretooth","Sword Master","Blackcat","Crossbones","Klaw","Red Hulk"] },
        { name: "Raciatek", deck: ["echo","King Eitri","Squirrel Girl","Forge","Grandmaster","Iron Patriot","Brood","Silver Surfer","Strong Guy","Corvus Glave","Red Skull","Taskmaster"] },
		{ name: "Dejwidgakure", deck: ["Ghost Spider","Human Torch","Iron Fist","Bucky Barnes","Falcon","USA Agent","Valentina","Werewolf","Groot","Phoenix Force","Klaw","Destroyer"] },
        { name: "Polop", deck: ["Mister Sinister","Colossus","Sentinel","Victoria Hand","Silk","Bishop","Storm","Supergiant","Jane Foster Thor","Mockingbird","Thanos","Death"] },
        { name: "Supcio", deck: ["Zero","Titania","Mirage","Baron Mordo","Cable","Victoria Hand","Maximus","Jean Grey","Man-Thing","Typhoid Mary","Namora","Doctor Doom"] },
        { name: "Skaje", deck: ["Sunspot","Mantis","Dazzler","Colossus","Daredevil","Iron Fist","Cyclops","Malekith","Crossbones","Cull Obsidian","Gamora","Thanos"] },
        { name: "Dawid ak. Void", deck: ["Nico Minoru","Bruce Banner","Angela","Spider-Man","Wolfsbane","Luna Snow","Mister Negative","Kazar","Moon Girl","Iron Lad","Black Panther","Arnim Zola"] },
      ],

      matches: [
        { p1: "Dejwidgakure", p2: "Raciatek", pts1: 21, pts2: 4 },
        { p1: "Weregesu", p2: "Raciatek", pts1: 20, pts2: 5 },
        { p1: "Raciatek", p2: "Pluton32", pts1: 4, pts2: 21 },
	    { p1: "Raciatek", p2: "Polop", pts1: 8, pts2: 17 },
	    { p1: "Raciatek", p2: "Dawid ak. Void", pts1: 20, pts2: 0 },
	    { p1: "Raciatek", p2: "Supcio", pts1: 5, pts2: 20 },
	    { p1: "Raciatek", p2: "Skaje", pts1: 6, pts2: 19 },
	    { p1: "Supcio", p2: "Skaje", pts1: 22, pts2: 3 },
	    { p1: "Supcio", p2: "Polop", pts1: 2, pts2: 23 },
		{ p1: "Supcio", p2: "Weregesu", pts1: 24, pts2: 1 },
		{ p1: "Supcio", p2: "Dejwidgakure", pts1: 20, pts2: 0 },
		{ p1: "Supcio", p2: "Dawid ak. Void", pts1: 23, pts2: 2 },
		{ p1: "Supcio", p2: "Pluton32", pts1: 25, pts2: 0 },
		{ p1: "Skaje", p2: "Polop", pts1: 4, pts2: 21 },
		{ p1: "Skaje", p2: "Weregesu", pts1: 4, pts2: 21 },
		{ p1: "Skaje", p2: "Dejwidgakure", pts1: 20, pts2: 0 },
		{ p1: "Skaje", p2: "Dawid ak. Void", pts1: 20, pts2: 0 },
		{ p1: "Skaje", p2: "Pluton32", pts1: 19, pts2: 6 },
		{ p1: "Dawid ak. Void", p2: "Dejwidgakure", pts1: 0, pts2: 0 },
		{ p1: "Polop", p2: "Dejwidgakure", pts1: 2, pts2: 23 },
		{ p1: "Dawid ak. Void", p2: "Polop", pts1: 0, pts2: 20 },
		{ p1: "Pluton32", p2: "Polop", pts1: 4, pts2: 21 },
		{ p1: "Raciatek", p2: "Polop", pts1: 8, pts2: 17 },
		{ p1: "Weregesu", p2: "Dejwidgakure", pts1: 20, pts2: 0 },
		{ p1: "Weregesu", p2: "Dawid ak. Void", pts1: 20, pts2: 0 },
		{ p1: "Weregesu", p2: "Pluton32", pts1: 9, pts2: 16 },
		{ p1: "Dejwidgakure", p2: "Pluton32", pts1: 0, pts2: 25 },
		{ p1: "Dawid ak. Void", p2: "Pluton32", pts1: 0, pts2: 25 },
]
},
    {
      id: 16,
      startDate: "2025-02-22",
      endDate: "2025-03-5",
      mode: "Bany + Jokery + Save & Steal",
      presetCard: null,
      playersCount: 5,
      winner: "Weregesu",
      bans: [
        "Arishem",
        "Loki",
        "Kang",
      ],

      players: [
        { name: "Pluton", deck: ["Black King","Squirrel Girl","Zabu","Scorpion","Caiera","Nocturne","Dracula","Silver Samurai","Professor X","Stature","Galactus","Giganto"] },
        { name: "Weregesu", deck: ["Scorn","Ebony Maw","Lasher","Maximus","Silver Surfer","Sebastina Shaw","Baron Zemo","Wave","Drax","Scarlet Spider","Ronan","Heimdall"] },
        { name: "Raciatek", deck: ["America Chavez","Mantis","Misty Knight","Forge","Beast","Deathlok","Lockjaw","Beta Ray Bill","Iron Man","Stature","Arnim Zola","Heimdall"] },
		{ name: "Dejwidgakure", deck: ["Blade","Angela","Sam Wilson Captain America","Captain America","Red Guardian","Shanna","Sword Master","Kazar","Cull Obsidian","Professor X","Heimdall","Red Hulk"] },
        { name: "Polop", deck: ["Sunspot","Iceman","Forge","Hulk Buster","Morphy","Black Widow","Baron Zemo","Gladiator","Supergiant","Blink","Gamora","Blob"] },
      ],

      matches: [
        { p1: "Dejwidgakure", p2: "Raciatek", pts1: 18, pts2: 7 },
        { p1: "Weregesu", p2: "Raciatek", pts1: 21, pts2: 4 },
        { p1: "Raciatek", p2: "Pluton", pts1: 17, pts2: 8 },
		{ p1: "Raciatek", p2: "Polop", pts1: 2, pts2: 23 },
		{ p1: "Weregesu", p2: "Pluton", pts1: 7, pts2: 18 },
		{ p1: "Raciatek", p2: "Polop", pts1: 25, pts2: 0 },
		{ p1: "Polop", p2: "Pluton", pts1: 23, pts2: 2 },
]
        },
    {
      id: 17,
      startDate: "2025-03-22",
      endDate: "2025-04-4",
      mode: "Bany",
      presetCard: null,
      playersCount: 3,
      winner: "Supcio",
      bans: [
        "Arishem",
        "Loki",
        "Kang",
      ],

      players: [
        { name: "Supcio", deck: ["Squireel Girl","Doctor Strange","Patriot","Groot","Rocket Raccon And Groot","Beast","Surtur","Doctor Octopus","Ronan","Knull","Doctor Doom","Death"] },
        { name: "Weregesu", deck: ["Misty Knight","Scorn","Hazmat","Swarm","Colleen Wing","Cassandra Nova","Debrii","Werewolf","Corvus Glaive","Devil Dinosaur","Nimrod","Abomination"] },
        { name: "Raciatek", deck: ["Yondu","Hazmat","Shadow King","Armor","Rocket Raccon And Groot","Elsa Bloodstone","Jean Grey","Proxima Midnight","Symbiote Spider-Man","Lady Deathstrike","Abomination","Odin"] },
      ],

      matches: [
        { p1: "Supcio", p2: "Weregesu", pts1: 22, pts2: 3 },
        { p1: "Supcio", p2: "Raciatek", pts1: 25, pts2: 0 },
        { p1: "Raciatek", p2: "Weregesu", pts1: 19, pts2: 6 },
]
        },
    {
      id: 18,
      startDate: "2026-02-21",
      endDate: "2026-03-06",
      mode: "Bany + Jokery + Save & Steal",
      presetCard: null,
      playersCount: 11,
      winner: "Kmythic",
      bans: [
        "Arishem",
        "Shang-Chi",
        "Cosmo",
        "Echo",
        "Fin Fang Foom",
        "Hela",
        "Klaw",
        "Shadow King",
        "Shou-Lao the Undying",
        "Star-Lord, Master of the Sun"
      ],

      players: [
        { name: "Dejwidgakure", deck: ["Black Knight","Uatu the Watcher","Nova Frankie Raye","Nocturne","Prodigy","Omega Sentinel","Miles Morales Spider-Man","Doctor Octopus","Crossbones","Cosmic Ghost Rider","Mockingbird","Thanos"] },
        { name: "Dawid ak. Void", deck: ["Nova","X-23","Carnage","Weapon X Wolverine","Ironheart","Venom","Adamantium Infusion","Danger","Nimrod","Blob","Destroyer","Death"] },
        { name: "Budiso", deck: ["Clea","Bruce Banner","Merlin","Master Mold","Doctor Strange","Bishop","Silver Surfer First Steps","Gwenpool","Moon Girl","Silver Samurai","Professor X","Doctor Doom"] },
        { name: "Pluton32", deck: ["Sauron","Ghost-Spider","Vulture","Merlin","U.S. Agent","Brood","Nocturne","Prodigy","Dracula","Misery","Galactus","The Infinaut"] },
        { name: "Raciatek", deck: ["Agony","Fastball Special","Morbius","Lasher","The First Ghost Rider","Human Torch","Gambit","Silver Surfer First Steps","Cull Obsidian","Legion","Blob","Hulk"] },
        { name: "Supcio", deck: ["Martyr","Domino","Carnage","Mojo","Debrii","Phastos","Sword Master","Sandman","Crossbones","Black Bolt","Hobgoblin","Thanos"] },
        { name: "Weregesu", deck: ["Arana","Nico Minoru","Squirrel Girl","Hydra Bob","Mister Sinister","Scarlet Witch","Colossus","Marvel Boy","Copycat","Redwing","Sword Master","Giganto"] },
        { name: "Matixmgg", deck: ["Vulture","Forge","Lockjaw","Domino","Brood","Human Torch First Steps","Black Widow","Gladiator","Jessica Jones","Laufey","Stardust","Hellion"] },
        { name: "FizjoRadek", deck: ["Elektra","Misty Knight","Victoria Hand","Jennifer Kale","Crystal","Kang The Conqueror","Zombie Scarlet Witch","Fan Fei","Negasonic Teenage Warhead","Anti-Venom","Cosmic Ghost Rider","Ajax"] },
        { name: "Kmythic", deck: ["Forge","Jennifer Kale","Red Shift","Toxie Doxie","Kraglin","Mister Negative","Ghost Rider","Darkhawk","M.O.D.O.K.","Apocalypse","Agatha Harkness","Zombie Galacti"] },
        { name: "Maniek", deck: ["Ghost-Spider","Grand Master","Sentinel","Cable","Captain America","Rogue","Mole Man","Nakia","Gladiator","Namor","Mockingbird","Odin"] }
      ],

      matches: [
        { p1: "Dejwidgakure", p2: "Maniek", pts1: 22, pts2: 3 },
        { p1: "Dejwidgakure", p2: "Dawid ak. Void", pts1: 6, pts2: 19 },
        { p1: "Dawid ak. Void", p2: "Budiso", pts1: 24, pts2: 1 },
        { p1: "Raciatek", p2: "Budiso", pts1: 18, pts2: 7 },
        { p1: "Dawid ak. Void", p2: "Maniek", pts1: 21, pts2: 4 },
        { p1: "Raciatek", p2: "FizjoRadek", pts1: 21, pts2: 4 },
        { p1: "Kmythic", p2: "Weregesu", pts1: 25, pts2: 0 },
        { p1: "FizjoRadek", p2: "Maniek", pts1: 17, pts2: 8 },
        { p1: "Weregesu", p2: "Maniek", pts1: 24, pts2: 1 },
        { p1: "FizjoRadek", p2: "Dawid ak. Void", pts1: 21, pts2: 4 },
        { p1: "Kmythic", p2: "Maniek", pts1: 23, pts2: 2 },
        { p1: "Weregesu", p2: "Raciatek", pts1: 21, pts2: 4 },
        { p1: "Kmythic", p2: "Dawid ak. Void", pts1: 21, pts2: 4 },
        { p1: "FizjoRadek", p2: "Kmythic", pts1: 21, pts2: 4 },
        { p1: "FizjoRadek", p2: "Weregesu", pts1: 22, pts2: 3 },
        { p1: "Kmythic", p2: "Raciatek", pts1: 18, pts2: 7 },
        { p1: "Dejwidgakure", p2: "Kmythic", pts1: 22, pts2: 3 },
        { p1: "Weregesu", p2: "Budiso", pts1: 23, pts2: 2 },
        { p1: "Kmythic", p2: "Budiso", pts1: 25, pts2: 0 },
        { p1: "Kmythic", p2: "Pluton32", pts1: 25, pts2: 0 },
        { p1: "Budiso", p2: "Maniek", pts1: 20, pts2: 5 },
        { p1: "Pluton32", p2: "Maniek", pts1: 17, pts2: 8 },
        { p1: "FizjoRadek", p2: "Budiso", pts1: 25, pts2: 0 },
        { p1: "Dejwidgakure", p2: "FizjoRadek", pts1: 24, pts2: 1 },
        { p1: "Dejwidgakure", p2: "Pluton32", pts1: 19, pts2: 6 },
        { p1: "Dawid ak. Void", p2: "Pluton32", pts1: 8, pts2: 17 },
        { p1: "Weregesu", p2: "Pluton32", pts1: 23, pts2: 2 },
        { p1: "Weregesu", p2: "Dawid ak. Void", pts1: 19, pts2: 6 },
        { p1: "Raciatek", p2: "Dawid ak. Void", pts1: 2, pts2: 23 },
        { p1: "Raciatek", p2: "Dejwidgakure", pts1: 1, pts2: 24 },
        { p1: "Raciatek", p2: "Maniek", pts1: 20, pts2: 5 },
        { p1: "Dejwidgakure", p2: "Matixmgg", pts1: 25, pts2: 0 },
        { p1: "Dejwidgakure", p2: "Weregesu", pts1: 0, pts2: 25 },
        { p1: "Raciatek", p2: "Matixmgg", pts1: 25, pts2: 0 },
        { p1: "Weregesu", p2: "Matixmgg", pts1: 4, pts2: 21 },
        { p1: "Kmythic", p2: "Matixmgg", pts1: 25, pts2: 0 },
        { p1: "Dawid ak. Void", p2: "Matixmgg", pts1: 2, pts2: 23 },
        { p1: "Maniek", p2: "Matixmgg", pts1: 0, pts2: 25 },
        { p1: "Dejwidgakure", p2: "Budiso", pts1: 24, pts2: 1 },
        { p1: "FizjoRadek", p2: "Matixmgg", pts1: 16, pts2: 9 },
        { p1: "Budiso", p2: "Matixmgg", pts1: 8, pts2: 17 },
        { p1: "Pluton32", p2: "Matixmgg", pts1: 2, pts2: 23 },
        { p1: "FizjoRadek", p2: "Pluton32", pts1: 6, pts2: 19 },
        { p1: "Pluton32", p2: "Raciatek", pts1: 1, pts2: 24 },
        { p1: "Dawid ak. Void", p2: "Supcio", pts1: 20, pts2: 0 },
        { p1: "Dejwidgakure", p2: "Supcio", pts1: 20, pts2: 0 },
        { p1: "Kmythic", p2: "Supcio", pts1: 20, pts2: 0 },
        { p1: "Raciatek", p2: "Supcio", pts1: 20, pts2: 0 },
        { p1: "Pluton32", p2: "Supcio", pts1: 20, pts2: 0 },
        { p1: "Maniek", p2: "Supcio", pts1: 23, pts2: 0 },
        { p1: "Budiso", p2: "Supcio", pts1: 20, pts2: 0 },
        { p1: "Matixmgg", p2: "Supcio", pts1: 20, pts2: 0 },
        { p1: "Weregesu", p2: "Supcio", pts1: 20, pts2: 0 },
        { p1: "FizjoRadek", p2: "Supcio", pts1: 20, pts2: 0 },
        { p1: "Budiso", p2: "Pluton32", pts1: 0, pts2: 0 }
        
]

      },
    {
      id: 19,
      startDate: "2026-03-06",
      endDate: "2026-03-20",
      mode: "Poker Draft",
      presetCard: null,
      playersCount: 10,
      winner: null,
      bans: [],

      players: [
        { name: "Dejwidgakure", deck: ["Sam Wilson Captain America","Speed","Miles Morales Spider-Man","Mister Fantastic First Steps","Web Sling","Thor","Maria Hill","Aurora","Superior Spider-Man","Hit-Monkey","Gilgamesh","Zombie Mister Fantastic"] },
        { name: "Raciatek", deck: ["Killmonger","Terrax the Tamer","Sabretooth","Khonshu","Gwenpool","Firehair","The Hood","Silk","Knull","Gambit","Silver Surfer First Steps","Uncle Ben"] },
        { name: "Dawid ak. Void", deck: ["Dazzler","Titania","Infinity Ultron","Blue Marvel","Sentinel","Captain America","Human Torch First Steps","Baron Zemo","Polaris","Kitty Pryde","America Chavez","Diamondback"] },
        { name: "Supcio", deck: ["Orka","Mister Fantastic First Steps","Sam Wilson Captain America","Hydra Bob","Fan Fei","Surtur","Silver Surfer","Dazzler","Kitty Pryde","Namora","Mister Sinister","Captain America"] },
        { name: "Jacusinski", deck: ["Daredevil","Rogue","Gamora","Majestic Wingbeat","Shuri","Snowguard","Major Victory","Negasonic Teenage Warhead","Silver Surfer First Steps","Sandman","Magus","H.E.R.B.I.E."] },
        { name: "Weregesu", deck: ["Angela","Supergiant","Black Bolt","Lockjaw","Giganto","Warpath","Stature","Hulkbuster","Kitty Pryde","Thena","Laufey","Stegron"] },
        { name: "Budiso", deck: ["Leader","Sparky","Black Bolt","Odin","Ms. Marvel","Cobra","Batroc the Leaper","Hulkbuster","Mantis","Wolfsbane","Agent Coulson","Cloak"] },
        { name: "Pluton32", deck: ["Knull","White Widow","The Living Tribunal","Mystique","Cannonball","Dragon Lord","Quicksilver","Jubilee","Warlock","Spider-Woman","Agony","Omega Red"] },
        { name: "Maniek", deck: ["Selene","Rogue","Legion","Grand Master","The Infinaut","Dragon Lord","Skaar","Zombie Giant-Man","Iron Lad","Zombie Scarlet Witch","Majestic Wingbeat","Hazmat"] },
        { name: "Kmythic", deck: ["Captain Carter","Lady Sif","Khonshu","White Queen","Zombie Power Man","M.O.D.O.K.","Chamber","Gambit","Morbius","Helicarrier","Silver Samurai","Thaddeus Ross"] }
      ],

      matches: [{"p1":"Dejwidgakure","p2":"Maniek","pts1":24,"pts2":1},{"p1":"Kmythic","p2":"Raciatek","pts1":19,"pts2":6},{"p1":"Raciatek","p2":"Maniek","pts1":23,"pts2":2},
                {"p1":"Kmythic","p2":"Maniek","pts1":20,"pts2":5},{"p1":"Weregesu","p2":"Kmythic","pts1":17,"pts2":8},{"p1":"Maniek","p2":"Weregesu","pts1":17,"pts2":8},
                {"p1":"Weregesu","p2":"Raciatek","pts1":19,"pts2":6},{"p1":"Maniek","p2":"Budiso","pts1":22,"pts2":3},{"p1":"Dejwidgakure","p2":"Weregesu","pts1":25,"pts2":0},
                {"p1":"Dejwidgakure","p2":"Kmythic","pts1":20,"pts2":5},{"p1":"Supcio","p2":"Kmythic","pts1":19,"pts2":6},{"p1":"Supcio","p2":"Maniek","pts1":25,"pts2":0},
                {"p1":"Supcio","p2":"Raciatek","pts1":16,"pts2":9},{"p1":"Supcio","p2":"Weregesu","pts1":20,"pts2":5},{"p1":"Supcio","p2":"Jacusinski","pts1":4,"pts2":21},
                {"p1":"Weregesu","p2":"Jacusinski","pts1":23,"pts2":2},{"p1":"Maniek","p2":"Jacusinski","pts1":1,"pts2":24},{"p1":"Pluton32","p2":"Maniek","pts1":21,"pts2":4},
                {"p1":"Kmythic","p2":"Budiso","pts1":25,"pts2":0},{"p1":"Raciatek","p2":"Budiso","pts1":21,"pts2":4},
                {"p1":"Weregesu","p2":"Pluton32","pts1":25,"pts2":0}, {"p1":"Weregesu","p2":"Budiso","pts1":2,"pts2":23},
                {"p1":"Raciatek","p2":"Pluton32","pts1":21,"pts2":4},{"p1":"Supcio","p2":"Budiso","pts1":20,"pts2":5},{"p1":"Dejwidgakure","p2":"Pluton32","pts1":24,"pts2":1},
                {"p1":"Dejwidgakure","p2":"Budiso","pts1":25,"pts2":0},{"p1":"Dejwidgakure","p2":"Raciatek","pts1":22,"pts2":3},
                {"p1":"Dejwidgakure","p2":"Dawid ak. Void","pts1":20,"pts2":0},{"p1":"Budiso","p2":"Dawid ak. Void","pts1":20,"pts2":0},
                {"p1":"Pluton32","p2":"Dawid ak. Void","pts1":20,"pts2":0},{"p1":"Raciatek","p2":"Dawid ak. Void","pts1":20,"pts2":0},
                {"p1":"Maniek","p2":"Dawid ak. Void","pts1":20,"pts2":0},{"p1":"Supcio","p2":"Dawid ak. Void","pts1":20,"pts2":0},
                {"p1":"Jacusinski","p2":"Dawid ak. Void","pts1":20,"pts2":0},{"p1":"Weregesu","p2":"Dawid ak. Void","pts1":20,"pts2":0},
                {"p1":"Kmythic","p2":"Dawid ak. Void","pts1":20,"pts2":0},{"p1":"Jacusinski","p2":"Raciatek","pts1":2,"pts2":23},
                {"p1":"Jacusinski","p2":"Kmythic","pts1":2,"pts2":23},{"p1":"Pluton32","p2":"Supcio","pts1":0,"pts2":20},
                {"p1":"Pluton32","p2":"Budiso","pts1":0,"pts2":20},{"p1":"Pluton32","p2":"Kmythic","pts1":0,"pts2":20},
                {"p1":"Pluton32","p2":"Jacusinski","pts1":0,"pts2":20},{"p1":"Dejwidgakure","p2":"Supcio","pts1":7,"pts2":18},
                {"p1":"Dejwidgakure","p2":"Jacusinski","pts1":20,"pts2":0},{"p1":"Budiso","p2":"Jacusinski","pts1":20,"pts2":0}
              ]
      },
    
{
  "id": 20,
  "startDate": "20.03.2026",
  "endDate": "03.04.2026",
  "mode": "Bany + Custom Paczki + Mulligan",
  "presetCard": null,
  "playersCount": 15,
  "winner": null,
  "bans": [],
  "players": [
    {
      "name": "Supcio",
      "deck": [
        "Hydra Bob",
        "Blade",
        "Lizard",
        "Black Widow",
        "Sasquatch",
        "Rescue",
        "Super-Skrull",
        "Ronan the Accuser",
        "Laufey",
        "Squirrel Girl",
        "Zero",
        "Victoria Hand"
      ]
    },
    {
      "name": "Skaje",
      "deck": [
        "Iron Lad",
        "Mister Sinister",
        "Copycat",
        "Mercury",
        "Elektra",
        "Goose",
        "Beta Ray Bill",
        "Jane Foster Mighty Thor",
        "Iron Man",
        "Forge",
        "Titania",
        "Jean Grey"
      ]
    },
    {
      "name": "Raciatek",
      "deck": [
        "Negasonic Teenage Warhead",
        "Sabretooth",
        "Wild Child",
        "Fastball Special",
        "Grand Master",
        "Blob",
        "Quicksilver",
        "Colleen Wing",
        "Adamantium Infusion",
        "M.O.D.O.K.",
        "Scorn",
        "Misery"
      ]
    },
    {
      "name": "Matixmgg",
      "deck": [
        "Gorr",
        "Doctor Octopus",
        "Thor",
        "Drax Avatar of Life",
        "Shuri",
        "Zero",
        "Quake",
        "Crystal",
        "Red Shift",
        "Agatha Harkness",
        "Ebony Maw",
        "Drax"
      ]
    },
    {
      "name": "MatiMyHair",
      "deck": [
        "Nightcrawler",
        "Spider-Man",
        "Miles Morales Spider-Man",
        "Gilgamesh",
        "Nico Minoru",
        "Xorn",
        "Iron Fist",
        "Hit-Monkey",
        "Rocket and Groot",
        "Merlin",
        "Misty Knight",
        "Namora"
      ]
    },
    {
      "name": "Maniek",
      "deck": [
        "Leader",
        "Black Bolt",
        "Blue Marvel",
        "Leech",
        "Marvel Boy",
        "Alioth",
        "Cannonball",
        "Hulk",
        "En Sabah Nur",
        "Apocalypse",
        "Doctor Doom",
        "Ronan the Accuser"
      ]
    },
    {
      "name": "kolo313",
      "deck": [
        "White Queen",
        "Armor",
        "Leader",
        "Hellcow",
        "White Tiger",
        "Destroyer",
        "Iceman",
        "Magneto",
        "Forge",
        "Ghost Rider",
        "Nebula",
        "Wave"
      ]
    },
    {
      "name": "Kmythic",
      "deck": [
        "Morph",
        "Sebastian Shaw",
        "Baron Zemo",
        "Firelord",
        "Ultron",
        "Sandman",
        "Ant-Man",
        "Awesome Andy",
        "Patriot",
        "Ronan the Accuser",
        "Maximus",
        "Hellion"
      ]
    },
    {
      "name": "John Skrull",
      "deck": [
        "Cable",
        "Zombie Giant-Man",
        "Zombie Mister Fantastic",
        "Speed",
        "Cull Obsidian",
        "Deadpool",
        "Emperor Hulkling",
        "Rockslide",
        "Darkhawk",
        "Surtur",
        "Captain Marvel",
        "Baron Zemo"
      ]
    },
    {
      "name": "Jacusinski",
      "deck": [
        "Esme Cuckoo",
        "Korg",
        "Mister Fantastic First Steps",
        "Juggernaut Horseman of War",
        "Angela",
        "Wolfsbane",
        "Kitty Pryde",
        "Ms. Marvel",
        "Doctor Doom",
        "Eson",
        "Cable",
        "Sebastian Shaw"
      ]
    },
    {
      "name": "Hardkor",
      "deck": [
        "Ms. Marvel",
        "Psylocke",
        "Medusa",
        "Enchantress",
        "Armor",
        "Rockslide",
        "Maximus",
        "Mad Thinker",
        "Kraglin",
        "Red Skull",
        "Mirage",
        "Mystique"
      ]
    },
    {
      "name": "Dawid ak. Void",
      "deck": [
        "Sage",
        "Sasquatch",
        "Hit-Monkey",
        "Agony",
        "Titania",
        "America Chavez",
        "Nightcrawler",
        "Angel",
        "Beast",
        "Groot",
        "Shocker",
        "Clea"
      ]
    },
    {
      "name": "Budiso",
      "deck": [
        "Sersi",
        "Luna Snow",
        "Maria Hill",
        "Bruce Banner",
        "Mysterio",
        "Black Bolt",
        "Pixie",
        "U.S. Agent",
        "Toxie Doxie",
        "Jessica Jones",
        "Baron Zemo",
        "Namor"
      ]
    },
    {
      "name": "Dejwidgakure",
      "deck": [
        "Iron Man",
        "Ancient One",
        "Surge",
        "Elektra",
        "Ms. Marvel",
        "Rocket Raccoon",
        "Rhino",
        "Mystique",
        "Jennifer Kale",
        "Mister Negative",
        "Scarlet Spider",
        "Mockingbird"
      ]
    },
    {
      "name": "Weregesu",
      "deck": [
        "Legion",
        "Nocturne",
        "Ghost-Spider",
        "Cyclops",
        "Miles Morales Spider-Man",
        "Spider-Man",
        "Cloak",
        "Spider-Man 2099",
        "Doctor Strange",
        "Doctor Octopus",
        "Heimdall",
        "Baron Mordo"
      ]
    }
  ],
  "matches": [{"p1":"Dejwidgakure","p2":"kolo313","pts1":21,"pts2":4},{"p1":"Dawid ak. Void","p2":"Raciatek","pts1":22,"pts2":3},{"p1":"Raciatek","p2":"MatiMyHair","pts1":4,"pts2":21},
                {"p1":"kolo313","p2":"Raciatek","pts1":20,"pts2":5},{"p1":"Hardkor","p2":"Jacusinski","pts1":21,"pts2":4},{"p1":"John Skrull","p2":"kolo313","pts1":25,"pts2":0},
                {"p1":"John Skrull","p2":"MatiMyHair","pts1":22,"pts2":3},{"p1":"MatiMyHair","p2":"kolo313","pts1":25,"pts2":0},{"p1":"Jacusinski","p2":"kolo313","pts1":23,"pts2":2},
                {"p1":"Maniek","p2":"Kmythic","pts1":0,"pts2":25},{"p1":"Supcio","p2":"Maniek","pts1":24,"pts2":1},{"p1":"Raciatek","p2":"Maniek","pts1":25,"pts2":0},
                {"p1":"Weregesu","p2":"Kmythic","pts1":25,"pts2":0},{"p1":"Supcio","p2":"Kmythic","pts1":1,"pts2":24},{"p1":"Supcio","p2":"Weregesu","pts1":23,"pts2":2},
                {"p1":"Budiso","p2":"Kmythic","pts1":0,"pts2":25},{"p1":"Kmythic","p2":"Hardkor","pts1":25,"pts2":0},{"p1":"Budiso","p2":"Hardkor","pts1":21,"pts2":4},
                {"p1":"Skaje","p2":"Jacusinski","pts1":24,"pts2":1},{"p1":"MatiMyHair","p2":"Skaje","pts1":23,"pts2":2},{"p1":"Skaje","p2":"Hardkor","pts1":0,"pts2":25},
                {"p1":"Supcio","p2":"Hardkor","pts1":20,"pts2":5},{"p1":"Supcio","p2":"Budiso","pts1":23,"pts2":2},{"p1":"MatiMyHair","p2":"Kmythic","pts1":19,"pts2":6},
                {"p1":"MatiMyHair","p2":"Hardkor","pts1":25,"pts2":0},{"p1":"MatiMyHair","p2":"Supcio","pts1":23,"pts2":2},{"p1":"Matixmgg","p2":"Weregesu","pts1":21,"pts2":4},
                {"p1":"Kmythic","p2":"Matixmgg","pts1":25,"pts2":0},{"p1":"Weregesu","p2":"John Skrull","pts1":19,"pts2":6},{"p1":"John Skrull","p2":"Dawid ak. Void","pts1":25,"pts2":0},
                {"p1":"MatiMyHair","p2":"Weregesu","pts1":21,"pts2":4},{"p1":"Kmythic","p2":"John Skrull","pts1":25,"pts2":0},{"p1":"MatiMyHair","p2":"Matixmgg","pts1":25,"pts2":0},
                {"p1":"John Skrull","p2":"Matixmgg","pts1":24,"pts2":1},{"p1":"Supcio","p2":"Dejwidgakure","pts1":24,"pts2":1},{"p1":"Dejwidgakure","p2":"Budiso","pts1":22,"pts2":3},
                {"p1":"John Skrull","p2":"Budiso","pts1":25,"pts2":0},{"p1":"Kmythic","p2":"Dejwidgakure","pts1":23,"pts2":2},{"p1":"Raciatek","p2":"Budiso","pts1":0,"pts2":25},
                {"p1":"John Skrull","p2":"Raciatek","pts1":23,"pts2":2},{"p1":"Supcio","p2":"Raciatek","pts1":24,"pts2":1},{"p1":"Raciatek","p2":"Kmythic","pts1":0,"pts2":25},
                {"p1":"Dejwidgakure","p2":"Weregesu","pts1":20,"pts2":5},{"p1":"Kmythic","p2":"Skaje","pts1":23,"pts2":2},{"p1":"John Skrull","p2":"Skaje","pts1":25,"pts2":0},
                {"p1":"Supcio","p2":"Dawid ak. Void","pts1":22,"pts2":3},{"p1":"Hardkor","p2":"Raciatek","pts1":20,"pts2":5},{"p1":"Weregesu","p2":"Raciatek","pts1":19,"pts2":6},
			    {"p1":"Matixmgg","p2":"Raciatek","pts1":24,"pts2":1},{"p1":"Dejwidgakure","p2":"Raciatek","pts1":5,"pts2":20},{"p1":"Dejwidgakure","p2":"John Skrull","pts1":24,"pts2":1},
			    {"p1":"Supcio","p2":"John Skrull","pts1":18,"pts2":7},{"p1":"Hardkor","p2":"John Skrull","pts1":23,"pts2":2},{"p1":"Hardkor","p2":"Weregesu","pts1":16,"pts2":9},
			    {"p1":"Hardkor","p2":"Dejwidgakure","pts1":4,"pts2":21},{"p1":"MatiMyHair","p2":"Budiso","pts1":22,"pts2":3},{"p1":"Dejwidgakure","p2":"MatiMyHair","pts1":18,"pts2":7},
			    {"p1":"Hardkor","p2":"Matixmgg","pts1":25,"pts2":0},{"p1":"Supcio","p2":"Matixmgg","pts1":25,"pts2":0},{"p1":"Skaje","p2":"Weregesu","pts1":23,"pts2":2},
			    {"p1":"Weregesu","p2":"Budiso","pts1":21,"pts2":4},{"p1":"Skaje","p2":"Raciatek","pts1":19,"pts2":6},{"p1":"Skaje","p2":"Supcio","pts1":20,"pts2":5},
			    {"p1":"Skaje","p2":"Budiso","pts1":4,"pts2":21},{"p1":"Matixmgg","p2":"Budiso","pts1":25,"pts2":0},{"p1":"Dejwidgakure","p2":"Matixmgg","pts1":23,"pts2":2},
			    {"p1":"Skaje","p2":"Matixmgg","pts1":24,"pts2":1},{"p1":"Skaje","p2":"Dejwidgakure","pts1":23,"pts2":2},
			    {"p1":"kolo313","p2":"Supcio","pts1":0,"pts2":20},{"p1":"kolo313","p2":"Skaje","pts1":0,"pts2":20},{"p1":"kolo313","p2":"Matixmgg","pts1":0,"pts2":23},
			    {"p1":"kolo313","p2":"Kmythic","pts1":0,"pts2":20},{"p1":"kolo313","p2":"Hardkor","pts1":0,"pts2":20},{"p1":"kolo313","p2":"Budiso","pts1":0,"pts2":23},
			    {"p1":"kolo313","p2":"Weregesu","pts1":0,"pts2":20},{"p1":"kolo313","p2":"Maniek","pts1":0,"pts2":0},{"p1":"kolo313","p2":"Dawid ak. Void","pts1":0,"pts2":0},
			    {"p1":"Maniek","p2":"Dejwidgakure","pts1":0,"pts2":20},{"p1":"Maniek","p2":"MatiMyHair","pts1":0,"pts2":20},{"p1":"Maniek","p2":"Skaje","pts1":0,"pts2":20},
			    {"p1":"Maniek","p2":"Matixmgg","pts1":0,"pts2":20},{"p1":"Maniek","p2":"John Skrull","pts1":0,"pts2":20},{"p1":"Maniek","p2":"Jacusinski","pts1":0,"pts2":20},
			    {"p1":"Maniek","p2":"Hardkor","pts1":0,"pts2":20},{"p1":"Maniek","p2":"Dawid ak. Void","pts1":0,"pts2":0},{"p1":"Maniek","p2":"Budiso","pts1":0,"pts2":20},
			    {"p1":"Dawid ak. Void","p2":"Weregesu","pts1":0,"pts2":20},{"p1":"Dawid ak. Void","p2":"Skaje","pts1":0,"pts2":20},{"p1":"Dawid ak. Void","p2":"MatiMyHair","pts1":0,"pts2":20},
			    {"p1":"Dawid ak. Void","p2":"Matixmgg","pts1":0,"pts2":20},{"p1":"Dawid ak. Void","p2":"Kmythic","pts1":0,"pts2":20},{"p1":"Dawid ak. Void","p2":"Jacusinski","pts1":0,"pts2":0},
			    {"p1":"Dawid ak. Void","p2":"Hardkor","pts1":0,"pts2":20},{"p1":"Dawid ak. Void","p2":"Budiso","pts1":0,"pts2":20},{"p1":"Dawid ak. Void","p2":"Dejwidgakure","pts1":0,"pts2":20},
			    {"p1":"Jacusinski","p2":"Raciatek","pts1":0,"pts2":20},{"p1":"Jacusinski","p2":"Budiso","pts1":0,"pts2":20},{"p1":"Jacusinski","p2":"Dejwidgakure","pts1":0,"pts2":20},{"p1":"Maniek","p2":"Weregesu","pts1":0,"pts2":20},
			    {"p1":"Jacusinski","p2":"Supcio","pts1":0,"pts2":20},{"p1":"Jacusinski","p2":"Matixmgg","pts1":0,"pts2":20},{"p1":"Jacusinski","p2":"Kmythic","pts1":0,"pts2":20},
			    {"p1":"Jacusinski","p2":"John Skrull","pts1":0,"pts2":20},{"p1":"Jacusinski","p2":"Weregesu","pts1":0,"pts2":20},{"p1":"Jacusinski","p2":"MatiMyHair","pts1":0,"pts2":20}]

},
	  {

  "id": 21,
  "startDate": "12.04.2026",
  "endDate": "24.04.2026",
  "mode": "Classic + Bany + Jokery + Mulligan",
  "presetCard": null,
  "playersCount": 11,
  "winner": null,
  "bans": [],
  "players": [
    {
      "name": "Dejwidgakure",
      "deck": [
        "Major Victory",
        "U.S. Agent",
        "Clea",
        "Maria Hill",
        "Quake",
        "Eson",
        "Frigga",
        "Prowler",
        "Agamotto",
        "Nicholas Scratch",
        "Luna Snow",
        "Drax Avatar of Life"
      ]
    },
    {
      "name": "Raciatek",
      "deck": [
        "Quicksilver",
        "Eson",
        "Agent 13",
        "Scorpion",
        "Domino",
        "Esme Cuckoo",
        "Agent Coulson",
        "Peni Parker",
        "Astral Projection",
        "Prowler",
        "Jubilee",
        "Lockjaw"
      ]
    },
    {
      "name": "BSTHPRO",
      "deck": [
        "Groot",
        "Onslaught",
        "Elektra",
        "Spider-Woman",
        "Mantis",
        "Helicarrier",
        "Agent 13",
        "Nick Fury",
        "Maria Hill",
        "White Queen",
        "Captain America",
        "Ant-Man"
      ]
    },
    {
      "name": "Budiso",
      "deck": [
        "Hope Summers",
        "Batroc the Leaper",
        "Nico Minoru",
        "The Hunger",
        "Emperor Hulkling",
        "Daken",
        "Mirage",
        "Sera",
        "Majestic Wingbeat",
        "Clea",
        "Agatha Harkness",
        "Bruce Banner"
      ]
    },
    {
      "name": "Kmythic",
      "deck": [
        "Odin",
        "Abomination",
        "Techno-Organic Virus",
        "Scorn",
        "Galactus",
        "Angel",
        "Bastion",
        "Ancient One",
        "Fastball Special",
        "Adamantium Infusion",
        "Jim Hammond Human Torch",
        "Air-Walker"
      ]
    },
    {
      "name": "Weregesu",
      "deck": [
        "Agent Coulson",
        "Annihilus",
        "Selene",
        "Moira X",
        "Araña",
        "Grand Master",
        "Snowguard",
        "Infinity Ultron",
        "Frigga",
        "The Hunger",
        "H.E.R.B.I.E.",
        "Angel"
      ]
    },
    {
      "name": "Maniek",
      "deck": [
        "Galactus",
        "Havok",
        "King Eitri",
        "Agony",
        "Nakia",
        "Abomination",
        "Nico Minoru",
        "Master Mold",
        "Daredevil",
        "Merlin",
        "Green Goblin",
        "Captain Carter"
      ]
    },
    {
      "name": "MatiMyHair",
      "deck": [
        "Prowler",
        "Scream",
        "Ghost-Spider",
        "Vulture",
        "Cannonball",
        "Xorn",
        "Valentina",
        "The Hood",
        "Merlin",
        "Leader",
        "Madame Web",
        "Legion"
      ]
    },
    {
      "name": "Matixmgg",
      "deck": [
        "Agony",
        "Aero",
        "Quicksilver",
        "Hawkeye",
        "Black Panther",
        "Absorbing Man",
        "Black Widow",
        "Major Victory",
        "Legion",
        "Web Sling",
        "Forge",
        "Hellion"
      ]
    },
    {
      "name": "Supcio",
      "deck": [
        "Peni Parker",
        "Angel",
        "Zero",
        "Ebony Maw",
        "Sentry",
        "She-Hulk",
        "Cable",
        "Mantis",
        "Techno-Organic Virus",
        "Ghost",
        "Attuma",
        "Yellowjacket"
      ]
    },
    {
      "name": "FizjoRadek",
      "deck": [
        "Bruce Banner",
        "Caiera",
        "Sunspot",
        "Wasp",
        "Fantasticar",
        "Elektra",
        "Moon Girl",
        "Helicarrier",
        "Medusa",
        "Infinity Ultron",
        "Jocasta",
        "Lady Sif"
      ]
    }
  ],
   "matches": [{"p1":"Raciatek","p2":"Budiso","pts1":22,"pts2":3},{"p1":"Weregesu","p2":"Budiso","pts1":25,"pts2":0},{"p1":"Weregesu","p2":"MatiMyHair","pts1":23,"pts2":2},
			   {"p1":"MatiMyHair","p2":"Maniek","pts1":24,"pts2":1},{"p1":"Maniek","p2":"Kmythic","pts1":24,"pts2":1},{"p1":"Weregesu","p2":"Maniek","pts1":25,"pts2":0},
			   {"p1":"Raciatek","p2":"Kmythic","pts1":19,"pts2":6},{"p1":"MatiMyHair","p2":"Raciatek","pts1":17,"pts2":8},{"p1":"Raciatek","p2":"Maniek","pts1":25,"pts2":0},
			   {"p1":"Raciatek","p2":"FizjoRadek","pts1":16,"pts2":9},{"p1":"FizjoRadek","p2":"Maniek","pts1":22,"pts2":3},{"p1":"FizjoRadek","p2":"Kmythic","pts1":8,"pts2":17},
			   {"p1":"MatiMyHair","p2":"Kmythic","pts1":17,"pts2":8},{"p1":"Weregesu","p2":"Kmythic","pts1":25,"pts2":0},{"p1":"Budiso","p2":"Maniek","pts1":21,"pts2":4},
			   {"p1":"MatiMyHair","p2":"Budiso","pts1":8,"pts2":17},{"p1":"MatiMyHair","p2":"Supcio","pts1":6,"pts2":18},{"p1":"Weregesu","p2":"FizjoRadek","pts1":25,"pts2":0},
			   {"p1":"Dejwidgakure","p2":"Maniek","pts1":25,"pts2":0},{"p1":"Maniek","p2":"Supcio","pts1":4,"pts2":21},{"p1":"MatiMyHair","p2":"FizjoRadek","pts1":23,"pts2":2},
			   {"p1":"Supcio","p2":"FizjoRadek","pts1":24,"pts2":1},{"p1":"Kmythic","p2":"Supcio","pts1":0,"pts2":25},{"p1":"Matixmgg","p2":"Weregesu","pts1":0,"pts2":25},
			   {"p1":"Budiso","p2":"Kmythic","pts1":23,"pts2":2},{"p1":"Weregesu","p2":"Supcio","pts1":0,"pts2":25},{"p1":"Dejwidgakure","p2":"Weregesu","pts1":23,"pts2":2},
			   {"p1":"Budiso","p2":"Supcio","pts1":23,"pts2":2},{"p1":"Dejwidgakure","p2":"Budiso","pts1":24,"pts2":1},{"p1":"FizjoRadek","p2":"Budiso","pts1":20,"pts2":5},
			   {"p1":"Dejwidgakure","p2":"FizjoRadek","pts1":24,"pts2":1},{"p1":"Matixmgg","p2":"Maniek","pts1":17,"pts2":8},{"p1":"MatiMyHair","p2":"Matixmgg","pts1":19,"pts2":6},
			   {"p1":"Weregesu","p2":"Raciatek","pts1":21,"pts2":4},{"p1":"Matixmgg","p2":"Dejwidgakure","pts1":1,"pts2":24},{"p1":"Dejwidgakure","p2":"Kmythic","pts1":25,"pts2":0},
			   {"p1":"BSTHPRO","p2":"Dejwidgakure","pts1":0,"pts2":20},{"p1":"Matixmgg","p2":"BSTHPRO","pts1":20,"pts2":0},{"p1":"BSTHPRO","p2":"Kmythic","pts1":0,"pts2":20},
			   {"p1":"BSTHPRO","p2":"Weregesu","pts1":0,"pts2":20},{"p1":"Budiso","p2":"BSTHPRO","pts1":20,"pts2":0},{"p1":"BSTHPRO","p2":"MatiMyHair","pts1":0,"pts2":20},
			   {"p1":"BSTHPRO","p2":"Supcio","pts1":0,"pts2":20},{"p1":"FizjoRadek","p2":"BSTHPRO","pts1":20,"pts2":0},{"p1":"BSTHPRO","p2":"Maniek","pts1":0,"pts2":20},
			   {"p1":"BSTHPRO","p2":"Raciatek","pts1":0,"pts2":20},{"p1":"Supcio","p2":"Raciatek","pts1":19,"pts2":6},{"p1":"Dejwidgakure","p2":"Supcio","pts1":21,"pts2":4},
			   {"p1":"Matixmgg","p2":"Raciatek","pts1":2,"pts2":23},{"p1":"Matixmgg","p2":"Budiso","pts1":19,"pts2":6},{"p1":"Matixmgg","p2":"Supcio","pts1":1,"pts2":24},
			   {"p1":"MatimyHair","p2":"Dejwidgakure","pts1":25,"pts2":0},{"p1":"Dejwidgakure","p2":"Raciatek","pts1":22,"pts2":3},{"p1":"Matixmgg","p2":"FizjoRadek","pts1":0,"pts2":20},
			   {"p1":"Matixmgg","p2":"Kmythic","pts1":0,"pts2":20}
				
              ]

}
    
  
    

  ]
};
