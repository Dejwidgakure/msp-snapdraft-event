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
  }

];
