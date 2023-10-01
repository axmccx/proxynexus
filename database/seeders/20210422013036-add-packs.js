module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'packs',
    [
      {
        "id": 1,
        "pack_code": "ref",
        "name": "Reference",
        "is_core": false,
        "is_visible": false
      },
      {
        "id": 2,
        "pack_code": "core",
        "name": "Core Set",
        "is_core": true,
        "is_visible": true
      },
      {
        "id": 3,
        "pack_code": "wla",
        "name": "What Lies Ahead",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 4,
        "pack_code": "ta",
        "name": "Trace Amount",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 5,
        "pack_code": "ce",
        "name": "Cyber Exodus",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 6,
        "pack_code": "asis",
        "name": "A Study in Static",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 7,
        "pack_code": "hs",
        "name": "Humanity's Shadow",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 8,
        "pack_code": "fp",
        "name": "Future Proof",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 9,
        "pack_code": "cac",
        "name": "Creation and Control",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 10,
        "pack_code": "om",
        "name": "Opening Moves",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 11,
        "pack_code": "st",
        "name": "Second Thoughts",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 12,
        "pack_code": "mt",
        "name": "Mala Tempora",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 13,
        "pack_code": "tc",
        "name": "True Colors",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 14,
        "pack_code": "dt",
        "name": "Double Time",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 15,
        "pack_code": "fal",
        "name": "Fear and Loathing",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 16,
        "pack_code": "draft",
        "name": "Draft",
        "is_core": false,
        "is_visible": false
      },
      {
        "id": 17,
        "pack_code": "hap",
        "name": "Honor and Profit",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 18,
        "pack_code": "up",
        "name": "Upstalk",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 19,
        "pack_code": "tsb",
        "name": "The Spaces Between",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 20,
        "pack_code": "fc",
        "name": "First Contact",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 21,
        "pack_code": "uao",
        "name": "Up and Over",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 22,
        "pack_code": "atr",
        "name": "All That Remains",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 23,
        "pack_code": "ts",
        "name": "The Source",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 24,
        "pack_code": "oac",
        "name": "Order and Chaos",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 25,
        "pack_code": "val",
        "name": "The Valley",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 26,
        "pack_code": "bb",
        "name": "Breaker Bay",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 27,
        "pack_code": "cc",
        "name": "Chrome City",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 28,
        "pack_code": "uw",
        "name": "The Underway",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 29,
        "pack_code": "oh",
        "name": "Old Hollywood",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 30,
        "pack_code": "uot",
        "name": "The Universe of Tomorrow",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 31,
        "pack_code": "dad",
        "name": "Data and Destiny",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 32,
        "pack_code": "kg",
        "name": "Kala Ghoda",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 33,
        "pack_code": "bf",
        "name": "Business First",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 34,
        "pack_code": "dag",
        "name": "Democracy and Dogma",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 35,
        "pack_code": "si",
        "name": "Salsette Island",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 36,
        "pack_code": "tlm",
        "name": "The Liberated Mind",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 37,
        "pack_code": "ftm",
        "name": "Fear the Masses",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 38,
        "pack_code": "23s",
        "name": "23 Seconds",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 39,
        "pack_code": "bm",
        "name": "Blood Money",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 40,
        "pack_code": "es",
        "name": "Escalation",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 41,
        "pack_code": "in",
        "name": "Intervention",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 42,
        "pack_code": "ml",
        "name": "Martial Law",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 43,
        "pack_code": "qu",
        "name": "Quorum",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 44,
        "pack_code": "dc",
        "name": "Daedalus Complex",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 45,
        "pack_code": "so",
        "name": "Station One",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 46,
        "pack_code": "eas",
        "name": "Earth's Scion",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 47,
        "pack_code": "td",
        "name": "Terminal Directive",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 48,
        "pack_code": "baw",
        "name": "Blood and Water",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 49,
        "pack_code": "fm",
        "name": "Free Mars",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 50,
        "pack_code": "cd",
        "name": "Crimson Dust",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 51,
        "pack_code": "core2",
        "name": "Revised Core Set",
        "is_core": true,
        "is_visible": true
      },
      {
        "id": 52,
        "pack_code": "ss",
        "name": "Sovereign Sight",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 53,
        "pack_code": "dtwn",
        "name": "Down the White Nile",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 54,
        "pack_code": "cotc",
        "name": "Council of the Crest",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 55,
        "pack_code": "tdatd",
        "name": "The Devil and the Dragon",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 56,
        "pack_code": "win",
        "name": "Whispers in Nalubaale",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 57,
        "pack_code": "ka",
        "name": "Kampala Ascendent",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 58,
        "pack_code": "rar",
        "name": "Reign and Reverie",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 59,
        "pack_code": "mo",
        "name": "Magnum Opus",
        "is_core": false,
        "is_visible": true
      },
      {
        "id": 60,
        "pack_code": "napd",
        "name": "NAPD Multiplayer",
        "is_core": false,
        "is_visible": false
      },
      {
        "id": 61,
        "pack_code": "sc19",
        "name": "System Core 2019",
        "is_core": true,
        "is_visible": true
      },
      {
        "id": 62,
        "pack_code": "df",
        "name": "Downfall",
        "is_core": false,
        "is_visible": false
      },
      {
        "id": 63,
        "pack_code": "ur",
        "name": "Uprising",
        "is_core": false,
        "is_visible": false
      },
      {
        "id": 64,
        "pack_code": "urbp",
        "name": "Uprising Booster Pack",
        "is_core": false,
        "is_visible": false
      },
      {
        "id": 65,
        "pack_code": "mor",
        "name": "Magnum Opus Reprint",
        "is_core": false,
        "is_visible": false
      },
      {
        "id": 66,
        "pack_code": "sm",
        "name": "Salvaged Memories",
        "is_core": false,
        "is_visible": false
      },
      {
        "id": 67,
        "pack_code": "sg",
        "name": "System Gateway",
        "is_core": false,
        "is_visible": false
      },
      {
        "id": 68,
        "pack_code": "su21",
        "name": "System Update 2021",
        "is_core": false,
        "is_visible": false
      },
      {
        "pack_code": "ms",
        "name": "Midnight Sun",
        "is_core": false,
        "is_visible": false,
        "id": 69
      },
      {
        "pack_code": "msbp",
        "name": "Midnight Sun Booster Pack",
        "is_core": false,
        "is_visible": false,
        "id": 70
      },
      {
        "pack_code": "ph",
        "name": "Parhelion",
        "is_core": false,
        "is_visible": false,
        "id": 71
      },
      {
        "pack_code": "tai",
        "name": "The Automata Initiative",
        "is_core": false,
        "is_visible": false,
        "id": 72
      },
      {
        "pack_code": "altpack1",
        "name": "2013 Regional Championship",
        "is_core": false,
        "is_visible": false,
        "id": 73
      },
      {
        "pack_code": "altpack2",
        "name": "2014 National Championship",
        "is_core": false,
        "is_visible": false,
        "id": 74
      },
      {
        "pack_code": "altpack3",
        "name": "2016 World Champ Deck",
        "is_core": false,
        "is_visible": false,
        "id": 75
      },
      {
        "pack_code": "altpack4",
        "name": "2017 World Champ Deck",
        "is_core": false,
        "is_visible": false,
        "id": 76
      },
      {
        "pack_code": "altpack5",
        "name": "Winter 2015 Tournament Kit",
        "is_core": false,
        "is_visible": false,
        "id": 77
      },
      {
        "pack_code": "altpack6",
        "name": "Season Three 2013 GNK",
        "is_core": false,
        "is_visible": false,
        "id": 78
      },
      {
        "pack_code": "altpack7",
        "name": "2014 Season One GNK",
        "is_core": false,
        "is_visible": false,
        "id": 79
      },
      {
        "pack_code": "altpack8",
        "name": "2013 Plugged-in Tour",
        "is_core": false,
        "is_visible": false,
        "id": 80
      },
      {
        "pack_code": "altpack9",
        "name": "Magnum Opus",
        "is_core": false,
        "is_visible": false,
        "id": 81
      },
      {
        "pack_code": "altpack10",
        "name": "Magnum Opus (Corrected)",
        "is_core": false,
        "is_visible": false,
        "id": 82
      },
      {
        "pack_code": "altpack11",
        "name": "2015 World Champ Deck",
        "is_core": false,
        "is_visible": false,
        "id": 83
      },
      {
        "pack_code": "altpack12",
        "name": "Summer 2015 Tournament Kit",
        "is_core": false,
        "is_visible": false,
        "id": 84
      },
      {
        "pack_code": "altpack13",
        "name": "Summer 2016 Tournament Kit",
        "is_core": false,
        "is_visible": false,
        "id": 85
      },
      {
        "pack_code": "altpack14",
        "name": "Season Two 2013 GNK",
        "is_core": false,
        "is_visible": false,
        "id": 86
      },
      {
        "pack_code": "altpack15",
        "name": "Spring 2015 Tournament Kit",
        "is_core": false,
        "is_visible": false,
        "id": 87
      },
      {
        "pack_code": "altpack16",
        "name": "2017 Icebreaker Kit",
        "is_core": false,
        "is_visible": false,
        "id": 88
      },
      {
        "pack_code": "altpack17",
        "name": "Summer 2014 Tournament Kit",
        "is_core": false,
        "is_visible": false,
        "id": 89
      },
      {
        "pack_code": "altpack18",
        "name": "Season One 2013 GNK",
        "is_core": false,
        "is_visible": false,
        "id": 90
      },
      {
        "pack_code": "altpack19",
        "name": "2014 Regional Championship",
        "is_core": false,
        "is_visible": false,
        "id": 91
      },
      {
        "pack_code": "altpack20",
        "name": "2017 Quarter 4 Tournament Kit",
        "is_core": false,
        "is_visible": false,
        "id": 92
      },
      {
        "pack_code": "altpack21",
        "name": "Chronos Protocol Tour",
        "is_core": false,
        "is_visible": false,
        "id": 93
      },
      {
        "pack_code": "altpack22",
        "name": "2017 Quarter 2 Tournament Kit",
        "is_core": false,
        "is_visible": false,
        "id": 94
      },
      {
        "pack_code": "altpack23",
        "name": "Winter 2014 Tournament Kit",
        "is_core": false,
        "is_visible": false,
        "id": 95
      },
      {
        "pack_code": "altpack24",
        "name": "2013 NA Championship",
        "is_core": false,
        "is_visible": false,
        "id": 96
      },
      {
        "pack_code": "altpack25",
        "name": "2016 Store Championship",
        "is_core": false,
        "is_visible": false,
        "id": 97
      },
      {
        "pack_code": "altpack26",
        "name": "2016 World Championship",
        "is_core": false,
        "is_visible": false,
        "id": 98
      },
      {
        "pack_code": "altpack27",
        "name": "2016 NA Championship",
        "is_core": false,
        "is_visible": false,
        "id": 99
      },
      {
        "pack_code": "altpack28",
        "name": "2018 Season Two GNK",
        "is_core": false,
        "is_visible": false,
        "id": 100
      },
      {
        "pack_code": "altpack29",
        "name": "2015 Store Championship",
        "is_core": false,
        "is_visible": false,
        "id": 101
      },
      {
        "pack_code": "altpack30",
        "name": "2018 Euro/NA Championship",
        "is_core": false,
        "is_visible": false,
        "id": 102
      },
      {
        "pack_code": "altpack31",
        "name": "2014 Store Championship",
        "is_core": false,
        "is_visible": false,
        "id": 103
      },
      {
        "pack_code": "altpack32",
        "name": "2013 World Championship",
        "is_core": false,
        "is_visible": false,
        "id": 104
      },
      {
        "pack_code": "altpack33",
        "name": "2014 World Championship",
        "is_core": false,
        "is_visible": false,
        "id": 105
      },
      {
        "pack_code": "altpack34",
        "name": "2016 Regional Championship",
        "is_core": false,
        "is_visible": false,
        "id": 106
      },
      {
        "pack_code": "altpack35",
        "name": "2016 Store Championships",
        "is_core": false,
        "is_visible": false,
        "id": 107
      },
      {
        "pack_code": "altpack36",
        "name": "2015 Regional Championship",
        "is_core": false,
        "is_visible": false,
        "id": 108
      },
      {
        "pack_code": "altpack37",
        "name": "2018 National Championship",
        "is_core": false,
        "is_visible": false,
        "id": 109
      },
      {
        "pack_code": "altpack38",
        "name": "2018 National Champ (Top 4)",
        "is_core": false,
        "is_visible": false,
        "id": 110
      },
      {
        "pack_code": "altpack39",
        "name": "2015 World Championship ",
        "is_core": false,
        "is_visible": false,
        "id": 111
      },
      {
        "pack_code": "altpack40",
        "name": "2017 Quarter 1 Tournament Kit",
        "is_core": false,
        "is_visible": false,
        "id": 112
      },
      {
        "pack_code": "altpack41",
        "name": "2015 National Championship",
        "is_core": false,
        "is_visible": false,
        "id": 113
      },
      {
        "pack_code": "altpack42",
        "name": "2015 PAX Prime",
        "is_core": false,
        "is_visible": false,
        "id": 114
      },
      {
        "pack_code": "altpack43",
        "name": "Spring 2016 Tournament Kit",
        "is_core": false,
        "is_visible": false,
        "id": 115
      },
      {
        "pack_code": "altpack44",
        "name": "2018 World Championship",
        "is_core": false,
        "is_visible": false,
        "id": 116
      },
      {
        "pack_code": "altpack45",
        "name": "2017 Store Championship",
        "is_core": false,
        "is_visible": false,
        "id": 117
      },
      {
        "pack_code": "altpack46",
        "name": "2017 Quarter 3 Tournament Kit",
        "is_core": false,
        "is_visible": false,
        "id": 118
      },
      {
        "pack_code": "altpack47",
        "name": "2017 NA Championship",
        "is_core": false,
        "is_visible": false,
        "id": 119
      },
      {
        "pack_code": "altpack48",
        "name": "2018 Season One GNK",
        "is_core": false,
        "is_visible": false,
        "id": 120
      },
      {
        "pack_code": "altpack49",
        "name": "2018 Season Three GNK",
        "is_core": false,
        "is_visible": false,
        "id": 121
      },
      {
        "pack_code": "altpack50",
        "name": "2017 National Championship",
        "is_core": false,
        "is_visible": false,
        "id": 122
      },
      {
        "pack_code": "altpack51",
        "name": "2017 Regional Championship",
        "is_core": false,
        "is_visible": false,
        "id": 123
      },
      {
        "pack_code": "altpack52",
        "name": "Terminal Directive Event Kit",
        "is_core": false,
        "is_visible": false,
        "id": 124
      },
      {
        "pack_code": "altpack53",
        "name": "2017 World Championship",
        "is_core": false,
        "is_visible": false,
        "id": 125
      },
      {
        "pack_code": "altpack54",
        "name": "2018 Regional Championship",
        "is_core": false,
        "is_visible": false,
        "id": 126
      }
    ],
    {},
  ),
  down: (queryInterface) => queryInterface.bulkDelete('packs', null, {}),
};
