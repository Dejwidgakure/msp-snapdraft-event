const jokers = [

  // =========================
  // CHOICE JOKERS
  // =========================

  {
    id:"choice_any_1_cost",
    type:"choice",
    rarity:"common",

    name:"Mini Madness",

    desc:"Dowolny 1-cost",

    tags:[],

    minCost:1,
    maxCost:1,

    minPower:null,
    maxPower:null
  },

  {
    id:"choice_any_2_cost",
    type:"choice",
    rarity:"common",

    name:"Double Trouble",

    desc:"Dowolny 2-cost",

    tags:[],

    minCost:2,
    maxCost:2,

    minPower:null,
    maxPower:null
  },

  {
    id:"choice_any_3_4_cost",
    type:"choice",
    rarity:"common",

    name:"Midrange Chaos",

    desc:"Dowolny 3/4-cost",

    tags:[],

    minCost:3,
    maxCost:4,

    minPower:null,
    maxPower:null
  },

  {
    id:"choice_any_5_plus",
    type:"choice",
    rarity:"rare",

    name:"Omega Drop",

    desc:"Dowolny 5+ cost",

    tags:[],

    minCost:5,
    maxCost:99,

    minPower:null,
    maxPower:null
  },

  {
    id:"choice_any_card",
    type:"choice",
    rarity:"legendary",

    name:"Ultimate Chaos",

    desc:"Dowolna karta",

    tags:["any"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"choice_move",
    type:"choice",
    rarity:"common",

    name:"Move Protocol",

    desc:'Dowolna karta z "Move"',

    tags:["move"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"choice_destroy",
    type:"choice",
    rarity:"common",

    name:"Destruction.exe",

    desc:'Dowolna karta z "Destroy"',

    tags:["destroy"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"choice_ongoing",
    type:"choice",
    rarity:"common",

    name:"Infinity Loop",

    desc:'Dowolna karta z "Ongoing"',

    tags:["ongoing"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"choice_discard",
    type:"choice",
    rarity:"common",

    name:"Discard Dimension",

    desc:'Dowolna karta z "Discard"',

    tags:["discard"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"choice_bounce",
    type:"choice",
    rarity:"common",

    name:"Bounce Glitch",

    desc:'Dowolna karta z "Bounce"',

    tags:["bounce"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"choice_tech",
    type:"choice",
    rarity:"epic",

    name:"Tech Override",

    desc:"Dowolny Tech",

    tags:["tech"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"choice_negative_power",
    type:"choice",
    rarity:"common",

    name:"Void Signal",

    desc:"Karta 0 i mniej siły",

    tags:[],

    minCost:null,
    maxCost:null,

    minPower:-999,
    maxPower:0
  },

  {
    id:"choice_high_power",
    type:"choice",
    rarity:"rare",

    name:"Titan Core",

    desc:"Karta 10+ siły",

    tags:[],

    minCost:null,
    maxCost:null,

    minPower:10,
    maxPower:999
  },

  {
    id:"choice_animal",
    type:"choice",
    rarity:"common",

    name:"Wild Protocol",

    desc:"Dowolny Zwierzak",

    tags:["animal"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"choice_spell",
    type:"choice",
    rarity:"rare",

    name:"Arcane Overflow",

    desc:"Dowolna Karta Spellowa",

    tags:["spell"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  // =========================
  // SURPRISE JOKERS
  // =========================

  {
    id:"surprise_any_1_cost",
    type:"surprise",
    rarity:"common",

    name:"Glitched Mini",

    desc:"Losowy 1-cost",

    tags:[],

    minCost:1,
    maxCost:1,

    minPower:null,
    maxPower:null
  },

  {
    id:"surprise_any_2_cost",
    type:"surprise",
    rarity:"common",

    name:"Random Trouble",

    desc:"Losowy 2-cost",

    tags:[],

    minCost:2,
    maxCost:2,

    minPower:null,
    maxPower:null
  },

  {
    id:"surprise_any_3_4_cost",
    type:"surprise",
    rarity:"common",

    name:"Chaos Midrange",

    desc:"Losowy 3/4-cost",

    tags:[],

    minCost:3,
    maxCost:4,

    minPower:null,
    maxPower:null
  },

  {
    id:"surprise_any_5_plus",
    type:"surprise",
    rarity:"rare",

    name:"Omega Glitch",

    desc:"Losowy 5+ cost",

    tags:[],

    minCost:5,
    maxCost:99,

    minPower:null,
    maxPower:null
  },

  {
    id:"surprise_any_card",
    type:"surprise",
    rarity:"legendary",

    name:"Ultimate Glitch",

    desc:"Losowa karta",

    tags:["any"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"surprise_move",
    type:"surprise",
    rarity:"common",

    name:"Move Corruption",

    desc:'Losowa karta z "Move"',

    tags:["move"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"surprise_destroy",
    type:"surprise",
    rarity:"common",

    name:"Destroy Corruption",

    desc:'Losowa karta z "Destroy"',

    tags:["destroy"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"surprise_ongoing",
    type:"surprise",
    rarity:"common",

    name:"Infinite Glitch",

    desc:'Losowa karta z "Ongoing"',

    tags:["ongoing"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"surprise_discard",
    type:"surprise",
    rarity:"common",

    name:"Discard Virus",

    desc:'Losowa karta z "Discard"',

    tags:["discard"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"surprise_bounce",
    type:"surprise",
    rarity:"common",

    name:"Bounce Error",

    desc:'Losowa karta z "Bounce"',

    tags:["bounce"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"surprise_tech",
    type:"surprise",
    rarity:"epic",

    name:"Tech Corruption",

    desc:"Losowy Tech",

    tags:["tech"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"surprise_negative_power",
    type:"surprise",
    rarity:"common",

    name:"Void Infection",

    desc:"Losowa karta 0 i mniej siły",

    tags:[],

    minCost:null,
    maxCost:null,

    minPower:-999,
    maxPower:0
  },

  {
    id:"surprise_high_power",
    type:"surprise",
    rarity:"rare",

    name:"Titan Glitch",

    desc:"Losowa karta 10+ siły",

    tags:[],

    minCost:null,
    maxCost:null,

    minPower:10,
    maxPower:999
  },

  {
    id:"surprise_animal",
    type:"surprise",
    rarity:"common",

    name:"Wild Corruption",

    desc:"Losowy Zwierzak",

    tags:["animal"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },

  {
    id:"surprise_spell",
    type:"surprise",
    rarity:"rare",

    name:"Arcane Corruption",

    desc:"Losowa Karta Spellowa",

    tags:["spell"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
  },
  {
    id:"glass_cannon",
    type:"surprise",
    rarity:"epic",

    name:"Glass Cannon",

    desc:"Losowa karta 1-3 Cost z 8+ Power",

    tags:[],

    minCost:1,
    maxCost:3,

    minPower:8,
    maxPower:null
},

{
    id:"mini_titan",
    type:"surprise",
    rarity:"rare",

    name:"Mini Titan",

    desc:"Losowa karta 1-2 Cost z 6+ Power",

    tags:[],

    minCost:1,
    maxCost:2,

    minPower:6,
    maxPower:null
},

{
    id:"heavy_brick",
    type:"surprise",
    rarity:"common",

    name:"Heavy Brick",

    desc:"Losowa karta 5+ Cost z maks 4 Power",

    tags:[],

    minCost:5,
    maxCost:null,

    minPower:null,
    maxPower:4
},

{
    id:"collapsed_star",
    type:"surprise",
    rarity:"common",

    name:"Collapsed Star",

    desc:"Losowa karta z większym Cost niż Power",

    tags:["cost-greater-than-power"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
},

{
    id:"overcharged",
    type:"surprise",
    rarity:"rare",

    name:"Overcharged",

    desc:"Losowa karta z większym Power niż Cost",

    tags:["power-greater-than-cost"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
},

{
    id:"perfect_balance",
    type:"surprise",
    rarity:"epic",

    name:"Perfect Balance",

    desc:"Losowa karta z równym Cost i Power",

    tags:["equal-cost-power"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
},

{
    id:"negative_entity",
    type:"surprise",
    rarity:"rare",

    name:"Negative Entity",

    desc:"Losowa karta z 0 lub mniej Power",

    tags:[],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:0
},

{
    id:"energy_collapse",
    type:"surprise",
    rarity:"rare",

    name:"Energy Collapse",

    desc:"Losowa karta 6 Cost z maks 6 Power",

    tags:[],

    minCost:6,
    maxCost:6,

    minPower:null,
    maxPower:6
},

{
    id:"duelist",
    type:"surprise",
    rarity:"common",

    name:"Duelist",

    desc:"Losowa karta 3 Cost z 3-6 Power",

    tags:[],

    minCost:3,
    maxCost:3,

    minPower:3,
    maxPower:6
},

{
    id:"frozen_core",
    type:"surprise",
    rarity:"rare",

    name:"Frozen Core",

    desc:"Losowa karta 4-6 Cost z dokładnie 2 Power",

    tags:["exact-2-power"],

    minCost:4,
    maxCost:6,

    minPower:2,
    maxPower:2
},

{
    id:"singularity",
    type:"surprise",
    rarity:"epic",

    name:"Singularity",

    desc:"Losowa karta 0 Cost",

    tags:[],

    minCost:0,
    maxCost:0,

    minPower:null,
    maxPower:null
},

{
    id:"triple_six",
    type:"surprise",
    rarity:"legendary",

    name:"Triple Six",

    desc:"Losowa karta 6/6",

    tags:["exact-6-6"],

    minCost:6,
    maxCost:6,

    minPower:6,
    maxPower:6
},

{
    id:"unstoppable_force",
    type:"surprise",
    rarity:"legendary",

    name:"Unstoppable Force",

    desc:"Losowa karta 10+ Power",

    tags:[],

    minCost:null,
    maxCost:null,

    minPower:10,
    maxPower:null
},

{
    id:"cheap_trick",
    type:"surprise",
    rarity:"common",

    name:"Cheap Trick",

    desc:"Losowa karta 1 Cost z maks 2 Power",

    tags:[],

    minCost:1,
    maxCost:1,

    minPower:null,
    maxPower:2
},

{
    id:"stat_monster",
    type:"surprise",
    rarity:"epic",

    name:"Stat Monster",

    desc:"Losowa karta z minimum 4 większym Power niż Cost",

    tags:["power-4-above-cost"],

    minCost:null,
    maxCost:null,

    minPower:null,
    maxPower:null
},

];
