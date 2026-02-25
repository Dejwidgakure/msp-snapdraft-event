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
      bans: ["Kang"],

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
      id: 18,
      startDate: "2026-02-21",
      endDate: "2026-03-06",
      mode: "Classic + Bany + Jokery",
      presetCard: null,
      playersCount: 11,
      winner: null,
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
        { name: "Dawid ak. Void", deck: ["Nova","X-23","Carnage","Weapon X Wolverine","Ironheart","Venom","Adamantium Infiusion","Danger","Nimrod","Blob","Destroyer","Death"] },
        { name: "Budiso", deck: ["Clea","Bruce Bunner","Merlin","Master Mold","Doctor Strange","Bishop","Silver Surfer First Steps","Gwenpool","MoonGirl","Silver Samurai","Profesor X","Doctor Doom"] },
        { name: "Pluton32", deck: ["Sauron","Ghost-Spider","Vulture","Merlin","U.S. Agent","Brood","Nocturne","Prodigy","Dracula","Misery","Galactus","The Infinaut"] },
        { name: "Raciatek", deck: ["Agony","Fastball Special","Morbius","Lasher","The First Ghost Rider","Human Torch","Gambit","Silver Surfer First Steps","Cull Obsidian","Legion","Blob","Hulk"] },
        { name: "Supcio", deck: ["Martyr","Domino","Toxin","Air-Walker","Debrii","Phastos","Sword Master","Anti-Venom","Crossbones","Black Bolt","Hobgoblin","Thanos"] },
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
        { p1: "Dejwidgakure", p2: "FizjoRadek", pts1: 24, pts2: 1 }
]
    }

  ]
};
