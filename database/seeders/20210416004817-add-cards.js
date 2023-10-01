module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'cards',
    [
      {
        "id": 1,
        "title": "Corp Basic Actions",
        "side": "corp",
        "type": "basic_action"
      },
      {
        "id": 2,
        "title": "Runner Basic Actions",
        "side": "runner",
        "type": "basic_action"
      },
      {
        "id": 3,
        "title": "Corp Click Tracker",
        "side": "corp",
        "type": "click_tracker"
      },
      {
        "id": 4,
        "title": "Runner Click Tracker",
        "side": "runner",
        "type": "click_tracker"
      },
      {
        "id": 5,
        "title": "The Shadow: Pulling the Strings",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 6,
        "title": "The Masque: Cyber General",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 7,
        "title": "Wyvern: Chemically Enhanced",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 8,
        "title": "Boris \"Syfr\" Kovac: Crafty Veteran",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 9,
        "title": "Jamie \"Bzzz\" Micken: Techno Savant",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 10,
        "title": "Strategic Innovations: Future Forward",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 11,
        "title": "Synthetic Systems: The World Re-imagined",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 12,
        "title": "Information Dynamics: All You Need To Know",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 13,
        "title": "Fringe Applications: Tomorrow, Today",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 14,
        "title": "Noise: Hacker Extraordinaire",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 15,
        "title": "Déjà Vu",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 16,
        "title": "Demolition Run",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 17,
        "title": "Stimhack",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 18,
        "title": "Cyberfeeder",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 19,
        "title": "Grimoire",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 20,
        "title": "Corroder",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 21,
        "title": "Datasucker",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 22,
        "title": "Djinn",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 23,
        "title": "Medium",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 24,
        "title": "Mimic",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 25,
        "title": "Parasite",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 26,
        "title": "Wyrm",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 27,
        "title": "Yog.0",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 28,
        "title": "Ice Carver",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 29,
        "title": "Wyldside",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 30,
        "title": "Gabriel Santiago: Consummate Professional",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 31,
        "title": "Account Siphon",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 32,
        "title": "Easy Mark",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 33,
        "title": "Forged Activation Orders",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 34,
        "title": "Inside Job",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 35,
        "title": "Special Order",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 36,
        "title": "Lemuria Codecracker",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 37,
        "title": "Desperado",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 38,
        "title": "Aurora",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 39,
        "title": "Femme Fatale",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 40,
        "title": "Ninja",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 41,
        "title": "Sneakdoor Beta",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 42,
        "title": "Bank Job",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 43,
        "title": "Crash Space",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 44,
        "title": "Data Dealer",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 45,
        "title": "Decoy",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 46,
        "title": "Kate \"Mac\" McCaffrey: Digital Tinker",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 47,
        "title": "Diesel",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 48,
        "title": "Modded",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 49,
        "title": "The Maker's Eye",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 50,
        "title": "Tinkering",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 51,
        "title": "Akamatsu Mem Chip",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 52,
        "title": "Rabbit Hole",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 53,
        "title": "The Personal Touch",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 54,
        "title": "The Toolbox",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 55,
        "title": "Battering Ram",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 56,
        "title": "Gordian Blade",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 57,
        "title": "Magnum Opus",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 58,
        "title": "Net Shield",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 59,
        "title": "Pipeline",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 60,
        "title": "Aesop's Pawnshop",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 61,
        "title": "Sacrificial Construct",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 62,
        "title": "Infiltration",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 63,
        "title": "Sure Gamble",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 64,
        "title": "Crypsis",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 65,
        "title": "Access to Globalsec",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 66,
        "title": "Armitage Codebusting",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 67,
        "title": "Haas-Bioroid: Engineering the Future",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 68,
        "title": "Accelerated Beta Test",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 69,
        "title": "Adonis Campaign",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 70,
        "title": "Aggressive Secretary",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 71,
        "title": "Archived Memories",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 72,
        "title": "Biotic Labor",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 73,
        "title": "Shipment from MirrorMorph",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 74,
        "title": "Heimdall 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 75,
        "title": "Ichi 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 76,
        "title": "Viktor 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 77,
        "title": "Rototurret",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 78,
        "title": "Corporate Troubleshooter",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 79,
        "title": "Experiential Data",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 80,
        "title": "Jinteki: Personal Evolution",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 81,
        "title": "Nisei MK II",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 82,
        "title": "Project Junebug",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 83,
        "title": "Snare!",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 84,
        "title": "Zaibatsu Loyalty",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 85,
        "title": "Neural EMP",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 86,
        "title": "Precognition",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 87,
        "title": "Cell Portal",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 88,
        "title": "Chum",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 89,
        "title": "Data Mine",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 90,
        "title": "Neural Katana",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 91,
        "title": "Wall of Thorns",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 92,
        "title": "Akitaro Watanabe",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 93,
        "title": "NBN: Making News",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 94,
        "title": "AstroScript Pilot Program",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 95,
        "title": "Breaking News",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 96,
        "title": "Anonymous Tip",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 97,
        "title": "Closed Accounts",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 98,
        "title": "Psychographics",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 99,
        "title": "SEA Source",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 100,
        "title": "Ghost Branch",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 101,
        "title": "Data Raven",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 102,
        "title": "Matrix Analyzer",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 103,
        "title": "Tollbooth",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 104,
        "title": "Red Herrings",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 105,
        "title": "SanSan City Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 106,
        "title": "Weyland Consortium: Building a Better World",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 107,
        "title": "Hostile Takeover",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 108,
        "title": "Posted Bounty",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 109,
        "title": "Security Subcontract",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 110,
        "title": "Aggressive Negotiation",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 111,
        "title": "Beanstalk Royalties",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 112,
        "title": "Scorched Earth",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 113,
        "title": "Shipment from Kaguya",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 114,
        "title": "Archer",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 115,
        "title": "Hadrian's Wall",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 116,
        "title": "Ice Wall",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 117,
        "title": "Shadow",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 118,
        "title": "Research Station",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 119,
        "title": "Priority Requisition",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 120,
        "title": "Private Security Force",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 121,
        "title": "Melange Mining Corp.",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 122,
        "title": "PAD Campaign",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 123,
        "title": "Hedge Fund",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 124,
        "title": "Enigma",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 125,
        "title": "Hunter",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 126,
        "title": "Wall of Static",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 127,
        "title": "Whizzard: Master Gamer",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 128,
        "title": "Spinal Modem",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 129,
        "title": "Imp",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 130,
        "title": "Morning Star",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 131,
        "title": "Cortez Chip",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 132,
        "title": "Peacock",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 133,
        "title": "ZU.13 Key Master",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 134,
        "title": "The Helpful AI",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 135,
        "title": "Plascrete Carapace",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 136,
        "title": "Haas-Bioroid: Stronger Together",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 137,
        "title": "Mandatory Upgrades",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 138,
        "title": "Janus 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 139,
        "title": "Ash 2X3ZB9CY",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 140,
        "title": "Braintrust",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 141,
        "title": "Snowflake",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 142,
        "title": "Restructured Datapool",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 143,
        "title": "TMI",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 144,
        "title": "Project Atlas",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 145,
        "title": "Caduceus",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 146,
        "title": "Dracō",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 147,
        "title": "Vamp",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 148,
        "title": "Liberated Account",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 149,
        "title": "Satellite Uplink",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 150,
        "title": "e3 Feedback Implants",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 151,
        "title": "Compromised Employee",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 152,
        "title": "Notoriety",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 153,
        "title": "Snowball",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 154,
        "title": "Dyson Mem Chip",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 155,
        "title": "Encryption Protocol",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 156,
        "title": "Sherlock 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 157,
        "title": "Jinteki: Replicating Perfection",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 158,
        "title": "Fetal AI",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 159,
        "title": "Trick of Light",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 160,
        "title": "Sensei",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 161,
        "title": "Big Brother",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 162,
        "title": "ChiLo City Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 163,
        "title": "Power Grid Overload",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 164,
        "title": "Amazon Industrial Zone",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 165,
        "title": "Executive Retreat",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 166,
        "title": "Freelancer",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 167,
        "title": "Nerve Agent",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 168,
        "title": "Joshua B.",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 169,
        "title": "Emergency Shutdown",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 170,
        "title": "Muresh Bodysuit",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 171,
        "title": "Snitch",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 172,
        "title": "Chaos Theory: Wünderkind",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 173,
        "title": "Test Run",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 174,
        "title": "Dinosaurus",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 175,
        "title": "Personal Workshop",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 176,
        "title": "Public Sympathy",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 177,
        "title": "Project Vitruvius",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 178,
        "title": "Viper",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 179,
        "title": "Edge of World",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 180,
        "title": "Sunset",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 181,
        "title": "Marked Accounts",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 182,
        "title": "Pop-up Window",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 183,
        "title": "Woodcutter",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 184,
        "title": "Commercialization",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 185,
        "title": "Private Contracts",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 186,
        "title": "Chimera",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 187,
        "title": "Disrupter",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 188,
        "title": "Force of Nature",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 189,
        "title": "Scrubber",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 190,
        "title": "Doppelgänger",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 191,
        "title": "Crescentus",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 192,
        "title": "Deus X",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 193,
        "title": "All-nighter",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 194,
        "title": "Inside Man",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 195,
        "title": "Underworld Contact",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 196,
        "title": "Green Level Clearance",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 197,
        "title": "Hourglass",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 198,
        "title": "Dedicated Server",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 199,
        "title": "Bullfrog",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 200,
        "title": "Uroboros",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 201,
        "title": "Net Police",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 202,
        "title": "Weyland Consortium: Because We Built It",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 203,
        "title": "Government Contracts",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 204,
        "title": "Tyrant",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 205,
        "title": "Oversight AI",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 206,
        "title": "False Lead",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 207,
        "title": "Surge",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 208,
        "title": "Xanadu",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 209,
        "title": "Andromeda: Dispossessed Ristie",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 210,
        "title": "Networking",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 211,
        "title": "HQ Interface",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 212,
        "title": "Pheromones",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 213,
        "title": "Quality Time",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 214,
        "title": "Replicator",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 215,
        "title": "Creeper",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 216,
        "title": "Kraken",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 217,
        "title": "Kati Jones",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 218,
        "title": "Eve Campaign",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 219,
        "title": "Rework",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 220,
        "title": "Whirlpool",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 221,
        "title": "Hokusai Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 222,
        "title": "Data Hound",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 223,
        "title": "Bernice Mai",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 224,
        "title": "Salvage",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 225,
        "title": "Simone Diego",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 226,
        "title": "Foxfire",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 227,
        "title": "Retrieval Run",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 228,
        "title": "Darwin",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 229,
        "title": "Data Leak Reversal",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 230,
        "title": "Faerie",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 231,
        "title": "Mr. Li",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 232,
        "title": "Indexing",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 233,
        "title": "R&D Interface",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 234,
        "title": "Deep Thought",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 235,
        "title": "New Angeles City Hall",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 236,
        "title": "Eli 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 237,
        "title": "Ruhr Valley",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 238,
        "title": "Ronin",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 239,
        "title": "Midori",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 240,
        "title": "NBN: The World is Yours*",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 241,
        "title": "Project Beale",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 242,
        "title": "Midseason Replacements",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 243,
        "title": "Flare",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 244,
        "title": "Dedicated Response Team",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 245,
        "title": "Burke Bugs",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 246,
        "title": "Corporate War",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 247,
        "title": "Cerebral Imaging: Infinite Frontiers",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 248,
        "title": "Custom Biotics: Engineered for Success",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 249,
        "title": "NEXT Design: Guarding the Net",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 250,
        "title": "Director Haas' Pet Project",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 251,
        "title": "Efficiency Committee",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 252,
        "title": "Project Wotan",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 253,
        "title": "Sentinel Defense Program",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 254,
        "title": "Alix T4LB07",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 255,
        "title": "Cerebral Overwriter",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 256,
        "title": "Director Haas",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 257,
        "title": "Haas Arcology AI",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 258,
        "title": "Thomas Haas",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 259,
        "title": "Bioroid Efficiency Research",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 260,
        "title": "Successful Demonstration",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 261,
        "title": "Heimdall 2.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 262,
        "title": "Howler",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 263,
        "title": "Ichi 2.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 264,
        "title": "Minelayer",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 265,
        "title": "Viktor 2.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 266,
        "title": "Zed 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 267,
        "title": "Awakening Center",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 268,
        "title": "Tyr's Hand",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 269,
        "title": "Gila Hands Arcology",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 270,
        "title": "Levy University",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 271,
        "title": "Server Diagnostics",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 272,
        "title": "Bastion",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 273,
        "title": "Datapike",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 274,
        "title": "Rielle \"Kit\" Peddler: Transhuman",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 275,
        "title": "The Professor: Keeper of Knowledge",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 276,
        "title": "Exile: Streethawk",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 277,
        "title": "Escher",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 278,
        "title": "Exploratory Romp",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 279,
        "title": "Freelance Coding Contract",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 280,
        "title": "Scavenge",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 281,
        "title": "Levy AR Lab Access",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 282,
        "title": "Monolith",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 283,
        "title": "Feedback Filter",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 284,
        "title": "Clone Chip",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 285,
        "title": "Omni-drive",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 286,
        "title": "Atman",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 287,
        "title": "Cloak",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 288,
        "title": "Dagger",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 289,
        "title": "Chakana",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 290,
        "title": "Cyber-Cypher",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 291,
        "title": "Paricia",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 292,
        "title": "Self-modifying Code",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 293,
        "title": "Sahasrara",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 294,
        "title": "Inti",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 295,
        "title": "Professional Contacts",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 296,
        "title": "Borrowed Satellite",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 297,
        "title": "Ice Analyzer",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 298,
        "title": "Dirty Laundry",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 299,
        "title": "Daily Casts",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 300,
        "title": "Same Old Thing",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 301,
        "title": "The Source",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 302,
        "title": "Frame Job",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 303,
        "title": "Pawn",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 304,
        "title": "Rook",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 305,
        "title": "Hostage",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 306,
        "title": "Gorman Drip v1",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 307,
        "title": "Lockpick",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 308,
        "title": "False Echo",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 309,
        "title": "Motivation",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 310,
        "title": "John Masanori",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 311,
        "title": "Project Ares",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 312,
        "title": "NEXT Bronze",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 313,
        "title": "Celebrity Gift",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 314,
        "title": "Himitsu-Bako",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 315,
        "title": "Character Assassination",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 316,
        "title": "Jackson Howard",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 317,
        "title": "Invasion of Privacy",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 318,
        "title": "Geothermal Fracking",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 319,
        "title": "Swarm",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 320,
        "title": "Cyberdex Trial",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 321,
        "title": "Grim",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 322,
        "title": "Bishop",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 323,
        "title": "Scheherazade",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 324,
        "title": "Hard at Work",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 325,
        "title": "Recon",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 326,
        "title": "Copycat",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 327,
        "title": "Leviathan",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 328,
        "title": "Eureka!",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 329,
        "title": "Record Reconstructor",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 330,
        "title": "Prepaid VoicePAD",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 331,
        "title": "Wotan",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 332,
        "title": "Hellion Alpha Test",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 333,
        "title": "Clone Retirement",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 334,
        "title": "Swordsman",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 335,
        "title": "Shipment from SanSan",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 336,
        "title": "Muckraker",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 337,
        "title": "The Cleaners",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 338,
        "title": "Elizabeth Mills",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 339,
        "title": "Off the Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 340,
        "title": "Profiteering",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 341,
        "title": "Restructure",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 342,
        "title": "Reina Roja: Freedom Fighter",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 343,
        "title": "Deep Red",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 344,
        "title": "Knight",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 345,
        "title": "Running Interference",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 346,
        "title": "Expert Schedule Analyzer",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 347,
        "title": "Grifter",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 348,
        "title": "Torch",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 349,
        "title": "Woman in the Red Dress",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 350,
        "title": "Raymond Flint",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 351,
        "title": "Isabel McGuire",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 352,
        "title": "Hudson 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 353,
        "title": "Accelerated Diagnostics",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 354,
        "title": "Unorthodox Predictions",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 355,
        "title": "Sundew",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 356,
        "title": "City Surveillance",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 357,
        "title": "Snoop",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 358,
        "title": "Ireress",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 359,
        "title": "Power Shutdown",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 360,
        "title": "Paper Wall",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 361,
        "title": "Interns",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 362,
        "title": "Keyhole",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 363,
        "title": "Activist Support",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 364,
        "title": "Lawyer Up",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 365,
        "title": "Leverage",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 366,
        "title": "Garrote",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 367,
        "title": "LLDS Processor",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 368,
        "title": "Sharpshooter",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 369,
        "title": "Capstone",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 370,
        "title": "Starlight Crusade Funding",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 371,
        "title": "Rex Campaign",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 372,
        "title": "Fenris",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 373,
        "title": "Panic Button",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 374,
        "title": "Shock!",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 375,
        "title": "Tsurugi",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 376,
        "title": "TGTBT",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 377,
        "title": "Sweeps Week",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 378,
        "title": "RSVP",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 379,
        "title": "Curtain Wall",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 380,
        "title": "Punitive Counterstrike",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 381,
        "title": "Veterans Program",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 382,
        "title": "Quest Completed",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 383,
        "title": "Hemorrhage",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 384,
        "title": "Tallie Perrault",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 385,
        "title": "Executive Wiretaps",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 386,
        "title": "Blackguard",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 387,
        "title": "CyberSolutions Mem Chip",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 388,
        "title": "Alpha",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 389,
        "title": "Omega",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 390,
        "title": "Blackmail",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 391,
        "title": "Blue Level Clearance",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 392,
        "title": "Strongbox",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 393,
        "title": "Toshiyuki Sakai",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 394,
        "title": "Yagura",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 395,
        "title": "Restoring Face",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 396,
        "title": "Market Research",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 397,
        "title": "Wraparound",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 398,
        "title": "GRNDL: Power Unleashed",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 399,
        "title": "Vulcan Coverup",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 400,
        "title": "GRNDL Refinery",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 401,
        "title": "Subliminal Messaging",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 402,
        "title": "Singularity",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 403,
        "title": "Queen's Gambit",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 404,
        "title": "Dyson Fractal Generator",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 405,
        "title": "Silencer",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 406,
        "title": "Savoir-faire",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 407,
        "title": "Fall Guy",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 408,
        "title": "Power Nap",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 409,
        "title": "Paintbrush",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 410,
        "title": "Lucky Find",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 411,
        "title": "Gyri Labyrinth",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 412,
        "title": "Reclamation Order",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 413,
        "title": "Broadcast Square",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 414,
        "title": "Corporate Shuffle",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 415,
        "title": "Caprice Nisei",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 416,
        "title": "Shinobi",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 417,
        "title": "Marker",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 418,
        "title": "Hive",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 419,
        "title": "Witness Tampering",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 420,
        "title": "NAPD Contract",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 421,
        "title": "Quandary",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 422,
        "title": "Harmony Medtech: Biomedical Pioneer",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 423,
        "title": "Nisei Division: The Next Generation",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 424,
        "title": "Tennin Institute: The Secrets Within",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 425,
        "title": "House of Knives",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 426,
        "title": "Medical Breakthrough",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 427,
        "title": "Philotic Entanglement",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 428,
        "title": "The Future Perfect",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 429,
        "title": "Chairman Hiro",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 430,
        "title": "Mental Health Clinic",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 431,
        "title": "Psychic Field",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 432,
        "title": "Shi.Kyū",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 433,
        "title": "Tenma Line",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 434,
        "title": "Cerebral Cast",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 435,
        "title": "Medical Research Fundraiser",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 436,
        "title": "Mushin No Shin",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 437,
        "title": "Inazuma",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 438,
        "title": "Komainu",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 439,
        "title": "Pup",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 440,
        "title": "Shiro",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 441,
        "title": "Susanoo-no-Mikoto",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 442,
        "title": "NeoTokyo Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 443,
        "title": "Tori Hanzō",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 444,
        "title": "Plan B",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 445,
        "title": "Guard",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 446,
        "title": "Rainbow",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 447,
        "title": "Diversified Portfolio",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 448,
        "title": "Fast Track",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 449,
        "title": "Iain Stirling: Retired Spook",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 450,
        "title": "Ken \"Express\" Tenma: Disappeared Clone",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 451,
        "title": "Silhouette: Stealth Operative",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 452,
        "title": "Calling in Favors",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 453,
        "title": "Early Bird",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 454,
        "title": "Express Delivery",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 455,
        "title": "Feint",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 456,
        "title": "Legwork",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 457,
        "title": "Planned Assault",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 458,
        "title": "Logos",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 459,
        "title": "Public Terminal",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 460,
        "title": "Unregistered S&W '35",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 461,
        "title": "Window",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 462,
        "title": "Alias",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 463,
        "title": "Breach",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 464,
        "title": "Bug",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 465,
        "title": "Gingerbread",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 466,
        "title": "Grappling Hook",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 467,
        "title": "Passport",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 468,
        "title": "Push Your Luck",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 469,
        "title": "Security Testing",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 470,
        "title": "Theophilius Bagbiter",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 471,
        "title": "Tri-maf Contact",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 472,
        "title": "Mass Install",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 473,
        "title": "Q-Coherence Chip",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 474,
        "title": "Overmind",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 475,
        "title": "Oracle May",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 476,
        "title": "Donut Taganes",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 477,
        "title": "Domestic Sleepers",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 478,
        "title": "NEXT Silver",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 479,
        "title": "Lotus Field",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 480,
        "title": "Mutate",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 481,
        "title": "Near-Earth Hub: Broadcast Center",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 482,
        "title": "Primary Transmission Dish",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 483,
        "title": "Midway Station Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 484,
        "title": "The Root",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 485,
        "title": "Taurus",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 486,
        "title": "Mother Goddess",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 487,
        "title": "Galahad",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 488,
        "title": "Bad Times",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 489,
        "title": "Cyber Threat",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 490,
        "title": "Lamprey",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 491,
        "title": "Paper Tripping",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 492,
        "title": "Power Tap",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 493,
        "title": "Nasir Meidan: Cyber Explorer",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 494,
        "title": "Social Engineering",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 495,
        "title": "Leprechaun",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 496,
        "title": "Eden Shard",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 497,
        "title": "The Foundry: Refining the Process",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 498,
        "title": "Enhanced Login Protocol",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 499,
        "title": "Heinlein Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 500,
        "title": "Encrypted Portals",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 501,
        "title": "Cerebral Static",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 502,
        "title": "Targeted Marketing",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 503,
        "title": "Information Overload",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 504,
        "title": "Paywall Implementation",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 505,
        "title": "Sealed Vault",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 506,
        "title": "Eden Fragment",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 507,
        "title": "Lag Time",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 508,
        "title": "Will-o'-the-Wisp",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 509,
        "title": "D4v1d",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 510,
        "title": "Scrubbed",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 511,
        "title": "Three Steps Ahead",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 512,
        "title": "Unscheduled Maintenance",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 513,
        "title": "Cache",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 514,
        "title": "Net Celebrity",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 515,
        "title": "LLDS Energy Regulator",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 516,
        "title": "Ghost Runner",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 517,
        "title": "IQ",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 518,
        "title": "Eliza's Toybox",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 519,
        "title": "Kitsune",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 520,
        "title": "Port Anson Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 521,
        "title": "The News Now Hour",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 522,
        "title": "Manhunt",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 523,
        "title": "Wendigo",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 524,
        "title": "Crisium Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 525,
        "title": "Chronos Project",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 526,
        "title": "Shattered Remains",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 527,
        "title": "Lancelot",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 528,
        "title": "Quetzal: Free Spirit",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 529,
        "title": "BlacKat",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 530,
        "title": "Duggar's",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 531,
        "title": "Box-E",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 532,
        "title": "The Supplier",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 533,
        "title": "Refractor",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 534,
        "title": "Order of Sol",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 535,
        "title": "Hades Shard",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 536,
        "title": "Rachel Beckman",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 537,
        "title": "Architect",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 538,
        "title": "Peak Efficiency",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 539,
        "title": "Labyrinthine Servers",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 540,
        "title": "Ashigaru",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 541,
        "title": "Mamba",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 542,
        "title": "Reversed Accounts",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 543,
        "title": "Universal Connectivity Fee",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 544,
        "title": "Blue Sun: Powering the Future",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 545,
        "title": "Changeling",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 546,
        "title": "Reuse",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 547,
        "title": "Hades Fragment",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 548,
        "title": "Docklands Crackdown",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 549,
        "title": "Inject",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 550,
        "title": "Origami",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 551,
        "title": "Fester",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 552,
        "title": "Autoscripter",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 553,
        "title": "Switchblade",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 554,
        "title": "Trade-In",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 555,
        "title": "Astrolabe",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 556,
        "title": "Angel Arena",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 557,
        "title": "Bifrost Array",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 558,
        "title": "Sagittarius",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 559,
        "title": "Hostile Infrastructure",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 560,
        "title": "Gemini",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 561,
        "title": "License Acquisition",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 562,
        "title": "Daily Business Show",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 563,
        "title": "Superior Cyberwalls",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 564,
        "title": "Executive Boot Camp",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 565,
        "title": "Lycan",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 566,
        "title": "Snatch and Grab",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 567,
        "title": "Merlin",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 568,
        "title": "Shell Corporation",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 569,
        "title": "Ekomind",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 570,
        "title": "Cerberus \"Cuj.0\" H3",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 571,
        "title": "Leela Patel: Trained Pragmatist",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 572,
        "title": "Cerberus \"Rex\" H2",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 573,
        "title": "Zona Sul Shipping",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 574,
        "title": "Cybsoft MacroDrive",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 575,
        "title": "Cerberus \"Lady\" H1",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 576,
        "title": "Utopia Shard",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 577,
        "title": "Helium-3 Deposit",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 578,
        "title": "Errand Boy",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 579,
        "title": "IT Department",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 580,
        "title": "Markus 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 581,
        "title": "Industrial Genomics: Growing Solutions",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 582,
        "title": "Turtlebacks",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 583,
        "title": "Shoot the Moon",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 584,
        "title": "Troll",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 585,
        "title": "Virgo",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 586,
        "title": "Utopia Fragment",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 587,
        "title": "Excalibur",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 588,
        "title": "Self-destruct",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 589,
        "title": "Incubator",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 590,
        "title": "Ixodidae",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 591,
        "title": "Code Siphon",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 592,
        "title": "Collective Consciousness",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 593,
        "title": "Sage",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 594,
        "title": "Bribery",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 595,
        "title": "Au Revoir",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 596,
        "title": "Earthrise Hotel",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 597,
        "title": "Argus Security: Protection Guaranteed",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 598,
        "title": "Gagarin Deep Space: Expanding the Horizon",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 599,
        "title": "Titan Transnational: Investing In Your Future",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 600,
        "title": "Firmware Updates",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 601,
        "title": "Glenn Station",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 602,
        "title": "Government Takeover",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 603,
        "title": "High-Risk Investment",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 604,
        "title": "Constellation Protocol",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 605,
        "title": "Mark Yale",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 606,
        "title": "Space Camp",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 607,
        "title": "The Board",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 608,
        "title": "Asteroid Belt",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 609,
        "title": "Wormhole",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 610,
        "title": "Nebula",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 611,
        "title": "Orion",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 612,
        "title": "Builder",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 613,
        "title": "Checkpoint",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 614,
        "title": "Fire Wall",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 615,
        "title": "Searchlight",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 616,
        "title": "Housekeeping",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 617,
        "title": "Patch",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 618,
        "title": "Traffic Accident",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 619,
        "title": "Satellite Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 620,
        "title": "The Twins",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 621,
        "title": "Sub Boost",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 622,
        "title": "Dedicated Technician Team",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 623,
        "title": "Cyberdex Virus Suite",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 624,
        "title": "Edward Kim: Humanity's Hammer",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 625,
        "title": "MaxX: Maximum Punk Rock",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 626,
        "title": "Valencia Estevez: The Angel of Cayambe",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 627,
        "title": "Amped Up",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 628,
        "title": "I've Had Worse",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 629,
        "title": "Itinerant Protesters",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 630,
        "title": "Showing Off",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 631,
        "title": "Wanton Destruction",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 632,
        "title": "Day Job",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 633,
        "title": "Forked",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 634,
        "title": "Knifed",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 635,
        "title": "Spooned",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 636,
        "title": "Eater",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 637,
        "title": "Gravedigger",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 638,
        "title": "Hivemind",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 639,
        "title": "Progenitor",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 640,
        "title": "Archives Interface",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 641,
        "title": "Chop Bot 3000",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 642,
        "title": "MemStrips",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 643,
        "title": "Vigil",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 644,
        "title": "Human First",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 645,
        "title": "Investigative Journalism",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 646,
        "title": "Sacrificial Clone",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 647,
        "title": "Stim Dealer",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 648,
        "title": "Virus Breeding Ground",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 649,
        "title": "Uninstall",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 650,
        "title": "Qianju PT",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 651,
        "title": "Data Folding",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 652,
        "title": "Clot",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 653,
        "title": "Paige Piper",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 654,
        "title": "Adjusted Chronotype",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 655,
        "title": "Spike",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 656,
        "title": "Enhanced Vision",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 657,
        "title": "Gene Conditioning Shoppe",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 658,
        "title": "Synthetic Blood",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 659,
        "title": "Traffic Jam",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 660,
        "title": "Symmetrical Visage",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 661,
        "title": "Brain-Taping Warehouse",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 662,
        "title": "NEXT Gold",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 663,
        "title": "Jinteki Biotech: Life Imagined",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 664,
        "title": "Genetic Resequencing",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 665,
        "title": "Cortex Lock",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 666,
        "title": "Valley Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 667,
        "title": "Bandwidth",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 668,
        "title": "Predictive Algorithm",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 669,
        "title": "Capital Investors",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 670,
        "title": "Negotiator",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 671,
        "title": "Tech Startup",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 672,
        "title": "Hacktivist Meeting",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 673,
        "title": "Off-Campus Apartment",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 674,
        "title": "Career Fair",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 675,
        "title": "Dorm Computer",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 676,
        "title": "Hayley Kaplan: Universal Scholar",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 677,
        "title": "Game Day",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 678,
        "title": "Comet",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 679,
        "title": "Study Guide",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 680,
        "title": "London Library",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 681,
        "title": "Tyson Observatory",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 682,
        "title": "Beach Party",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 683,
        "title": "Research Grant",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 684,
        "title": "Turing",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 685,
        "title": "Crick",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 686,
        "title": "Recruiting Trip",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 687,
        "title": "Blacklist",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 688,
        "title": "Gutenberg",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 689,
        "title": "Student Loans",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 690,
        "title": "Meru Mati",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 691,
        "title": "Breaker Bay Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 692,
        "title": "Immolation Script",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 693,
        "title": "Skulljack",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 694,
        "title": "Turntable",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 695,
        "title": "Chrome Parlor",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 696,
        "title": "Titanium Ribs",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 697,
        "title": "Crowbar",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 698,
        "title": "Net-Ready Eyes",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 699,
        "title": "Analog Dreamers",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 700,
        "title": "Brain Cage",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 701,
        "title": "Cybernetics Division: Humanity Upgraded",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 702,
        "title": "Self-Destruct Chips",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 703,
        "title": "Lab Dog",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 704,
        "title": "Oaktown Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 705,
        "title": "Ryon Knight",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 706,
        "title": "Clairvoyant Monitor",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 707,
        "title": "Lockdown",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 708,
        "title": "Little Engine",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 709,
        "title": "Oaktown Renovation",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 710,
        "title": "Corporate Town",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 711,
        "title": "Quicksand",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 712,
        "title": "Faust",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 713,
        "title": "Street Peddler",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 714,
        "title": "Armand \"Geist\" Walker: Tech Lord",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 715,
        "title": "Drive By",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 716,
        "title": "Forger",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 717,
        "title": "Shiv",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 718,
        "title": "Gang Sign",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 719,
        "title": "Muertos Gang Member",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 720,
        "title": "Chameleon",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 721,
        "title": "Hyperdriver",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 722,
        "title": "Test Ground",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 723,
        "title": "Defective Brainchips",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 724,
        "title": "Allele Repression",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 725,
        "title": "Marcus Batty",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 726,
        "title": "Exposé",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 727,
        "title": "Pachinko",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 728,
        "title": "Underway Renovation",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 729,
        "title": "Contract Killer",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 730,
        "title": "Spiderweb",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 731,
        "title": "Underway Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 732,
        "title": "Trope",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 733,
        "title": "Spoilers",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 734,
        "title": "Drug Dealer",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 735,
        "title": "Rolodex",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 736,
        "title": "Fan Site",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 737,
        "title": "Film Critic",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 738,
        "title": "Paparazzi",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 739,
        "title": "Ronald Five",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 740,
        "title": "Enforcer 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 741,
        "title": "It's a Trap!",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 742,
        "title": "An Offer You Can't Refuse",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 743,
        "title": "Haarpsichord Studios: Entertainment Unleashed",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 744,
        "title": "Award Bait",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 745,
        "title": "Explode-a-palooza",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 746,
        "title": "Early Premiere",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 747,
        "title": "Casting Call",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 748,
        "title": "Old Hollywood Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 749,
        "title": "Hollywood Renovation",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 750,
        "title": "Back Channels",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 751,
        "title": "Vanity Project",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 752,
        "title": "Power to the People",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 753,
        "title": "Surfer",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 754,
        "title": "DDoS",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 755,
        "title": "Laramy Fisk: Savvy Investor",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 756,
        "title": "Fisk Investment Seminar",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 757,
        "title": "Bookmark",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 758,
        "title": "DaVinci",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 759,
        "title": "Wireless Net Pavilion",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 760,
        "title": "Cybernetics Court",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 761,
        "title": "Team Sponsorship",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 762,
        "title": "Chronos Protocol: Selective Mind-mapping",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 763,
        "title": "Ancestral Imager",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 764,
        "title": "Genetics Pavilion",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 765,
        "title": "Franchise City",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 766,
        "title": "Product Placement",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 767,
        "title": "Worlds Plaza",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 768,
        "title": "Public Support",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 769,
        "title": "Tour Guide",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 770,
        "title": "Expo Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 771,
        "title": "The Future is Now",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 772,
        "title": "SYNC: Everything, Everywhere",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 773,
        "title": "New Angeles Sol: Your News",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 774,
        "title": "Spark Agency: Worldswide Reach",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 775,
        "title": "15 Minutes",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 776,
        "title": "Improved Tracers",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 777,
        "title": "Rebranding Team",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 778,
        "title": "Quantum Predictive Model",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 779,
        "title": "Lily Lockwell",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 780,
        "title": "News Team",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 781,
        "title": "Shannon Claire",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 782,
        "title": "Victoria Jenkins",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 783,
        "title": "Reality Threedee",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 784,
        "title": "Archangel",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 785,
        "title": "News Hound",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 786,
        "title": "Resistor",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 787,
        "title": "Special Offer",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 788,
        "title": "TL;DR",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 789,
        "title": "Turnpike",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 790,
        "title": "24/7 News Cycle",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 791,
        "title": "Ad Blitz",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 792,
        "title": "Media Blitz",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 793,
        "title": "The All-Seeing I",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 794,
        "title": "Surveillance Sweep",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 795,
        "title": "Keegan Lane",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 796,
        "title": "Rutherford Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 797,
        "title": "Global Food Initiative",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 798,
        "title": "Launch Campaign",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 799,
        "title": "Assassin",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 800,
        "title": "Apex: Invasive Predator",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 801,
        "title": "Apocalypse",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 802,
        "title": "Prey",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 803,
        "title": "Heartbeat",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 804,
        "title": "Endless Hunger",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 805,
        "title": "Harbinger",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 806,
        "title": "Hunting Grounds",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 807,
        "title": "Wasteland",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 808,
        "title": "Adam: Compulsive Hacker",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 809,
        "title": "Independent Thinking",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 810,
        "title": "Brain Chip",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 811,
        "title": "Multithreader",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 812,
        "title": "Always Be Running",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 813,
        "title": "Dr. Lovegood",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 814,
        "title": "Neutralize All Threats",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 815,
        "title": "Safety First",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 816,
        "title": "Sunny Lebeau: Security Specialist",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 817,
        "title": "Security Chip",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 818,
        "title": "Security Nexus",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 819,
        "title": "GS Striker M1",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 820,
        "title": "GS Shrike M2",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 821,
        "title": "GS Sherman M3",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 822,
        "title": "Globalsec Security Clearance",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 823,
        "title": "Jak Sinclair",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 824,
        "title": "Employee Strike",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 825,
        "title": "Windfall",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 826,
        "title": "Technical Writer",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 827,
        "title": "Run Amok",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 828,
        "title": "Ramujan-reliant 550 BMI",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 829,
        "title": "Street Magic",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 830,
        "title": "High-Stakes Job",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 831,
        "title": "Mongoose",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 832,
        "title": "Jesminder Sareen: Girl Behind the Curtain",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 833,
        "title": "Maya",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 834,
        "title": "Panchatantra",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 835,
        "title": "Artist Colony",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 836,
        "title": "Chatterjee University",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 837,
        "title": "Advanced Concept Hopper",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 838,
        "title": "Vikram 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 839,
        "title": "Heritage Committee",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 840,
        "title": "Mumbad City Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 841,
        "title": "Kala Ghoda Real TV",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 842,
        "title": "Interrupt 0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 843,
        "title": "Dedication Ceremony",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 844,
        "title": "Mumba Temple",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 845,
        "title": "Museum of History",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 846,
        "title": "EMP Device",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 847,
        "title": "Diwan",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 848,
        "title": "CBI Raid",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 849,
        "title": "Tech Trader",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 850,
        "title": "NetChip",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 851,
        "title": "Corporate Scandal",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 852,
        "title": "Populist Rally",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 853,
        "title": "Advanced Assembly Lines",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 854,
        "title": "Lakshmi Smartfabrics",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 855,
        "title": "Product Recall",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 856,
        "title": "Pālanā Foods: Sustainable Growth",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 857,
        "title": "Pālanā Agroplex",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 858,
        "title": "Harvester",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 859,
        "title": "Remote Data Farm",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 860,
        "title": "Disposable HQ",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 861,
        "title": "New Construction",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 862,
        "title": "Mumbad Construction Co.",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 863,
        "title": "Corporate Sales Team",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 864,
        "title": "PAD Factory",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 865,
        "title": "Political Graffiti",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 866,
        "title": "Nero Severn: Information Broker",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 867,
        "title": "Reflection",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 868,
        "title": "Spy Camera",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 869,
        "title": "Political Operative",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 870,
        "title": "Sadyojata",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 871,
        "title": "\"Freedom Through Equality\"",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 872,
        "title": "Akshara Sareen",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 873,
        "title": "Councilman",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 874,
        "title": "Voting Machine Initiative",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 875,
        "title": "Clone Suffrage Movement",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 876,
        "title": "Bio-Ethics Association",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 877,
        "title": "Political Dealings",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 878,
        "title": "\"Clones are not People\"",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 879,
        "title": "Sensie Actors Union",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 880,
        "title": "Commercial Bankers Group",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 881,
        "title": "Mumbad City Hall",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 882,
        "title": "Bailiff",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 883,
        "title": "Surat City Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 884,
        "title": "Making an Entrance",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 885,
        "title": "Salsette Slums",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 886,
        "title": "Exclusive Party",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 887,
        "title": "Vamadeva",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 888,
        "title": "Brahman",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 889,
        "title": "Patron",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 890,
        "title": "Sports Hopper",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 891,
        "title": "Bazaar",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 892,
        "title": "Personality Profiles",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 893,
        "title": "Jeeves Model Bioroids",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 894,
        "title": "Raman Rai",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 895,
        "title": "Upayoga",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 896,
        "title": "Aryabhata Tech",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 897,
        "title": "Salem's Hospitality",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 898,
        "title": "Executive Search Firm",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 899,
        "title": "Indian Union Stock Exchange",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 900,
        "title": "Cobra",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 901,
        "title": "Localized Product Line",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 902,
        "title": "Mumbad Virtual Tour",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 903,
        "title": "The Noble Path",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 904,
        "title": "Emptied Mind",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 905,
        "title": "Information Sifting",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 906,
        "title": "Out of the Ashes",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 907,
        "title": "Liberated Chela",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 908,
        "title": "Temple of the Liberated Mind",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 909,
        "title": "Rebirth",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 910,
        "title": "Guru Davinder",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 911,
        "title": "The Turning Wheel",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 912,
        "title": "Brainstorm",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 913,
        "title": "Ravana 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 914,
        "title": "Dedicated Neural Net",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 915,
        "title": "Chetana",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 916,
        "title": "Puppet Master",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 917,
        "title": "Waiver",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 918,
        "title": "Exchange of Information",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 919,
        "title": "Red Tape",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 920,
        "title": "Consulting Visit",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 921,
        "title": "Vanilla",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 922,
        "title": "Fear the Masses",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 923,
        "title": "Aghora",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 924,
        "title": "Bhagat",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 925,
        "title": "The Black File",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 926,
        "title": "The Price of Freedom",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 927,
        "title": "Ankusa",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 928,
        "title": "Rigged Results",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 929,
        "title": "Magnet",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 930,
        "title": "Lateral Growth",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 931,
        "title": "Improved Protein Source",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 932,
        "title": "Voter Intimidation",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 933,
        "title": "Harishchandra Ent.: Where You're the Star",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 934,
        "title": "Full Immersion RecStudio",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 935,
        "title": "Ibrahim Salem",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 936,
        "title": "Navi Mumbai City Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 937,
        "title": "Zealous Judge",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 938,
        "title": "Election Day",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 939,
        "title": "Subcontract",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 940,
        "title": "Merger",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 941,
        "title": "System Outage",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 942,
        "title": "Null: Whistleblower",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 943,
        "title": "GPI Net Tap",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 944,
        "title": "Hernando Cortez",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 945,
        "title": "Mirror",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 946,
        "title": "Dai V",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 947,
        "title": "Another Day, Another Paycheck",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 948,
        "title": "Deuces Wild",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 949,
        "title": "Injection Attack",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 950,
        "title": "Fairchild 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 951,
        "title": "Sherlock 2.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 952,
        "title": "Hyoubu Research Facility",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 953,
        "title": "Chrysalis",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 954,
        "title": "Georgia Emelyov",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 955,
        "title": "Watchdog",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 956,
        "title": "Hard-Hitting News",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 957,
        "title": "NBN: Controlling the Message",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 958,
        "title": "Crisis Management",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 959,
        "title": "Stock Buy-Back",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 960,
        "title": "Sandburg",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 961,
        "title": "Credit Crash",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 962,
        "title": "Rumor Mill",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 963,
        "title": "Nfr",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 964,
        "title": "Paperclip",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 965,
        "title": "Golden",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 966,
        "title": "Temüjin Contract",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 967,
        "title": "Khan: Savvy Skiptracer",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 968,
        "title": "Data Breach",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 969,
        "title": "Algo Trading",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 970,
        "title": "Beth Kilrain-Chang",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 971,
        "title": "Fairchild 2.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 972,
        "title": "Aiki",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 973,
        "title": "Enforcing Loyalty",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 974,
        "title": "Hatchet Job",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 975,
        "title": "Special Report",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 976,
        "title": "C.I. Fund",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 977,
        "title": "Liquidation",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 978,
        "title": "Weyland Consortium: Builder of Nations",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 979,
        "title": "Financial Collapse",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 980,
        "title": "Prisec",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 981,
        "title": "Obelus",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 982,
        "title": "Black Orchestra",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 983,
        "title": "Omar Keung: Conspiracy Theorist",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 984,
        "title": "Peregrine",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 985,
        "title": "Houdini",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 986,
        "title": "Net Mercur",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 987,
        "title": "Find the Truth",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 988,
        "title": "First Responders",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 989,
        "title": "Fairchild 3.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 990,
        "title": "Ark Lockdown",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 991,
        "title": "Hellion Beta Test",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 992,
        "title": "Project Kusanagi",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 993,
        "title": "DNA Tracker",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 994,
        "title": "Jinteki: Potential Unleashed",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 995,
        "title": "Alexa Belsky",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 996,
        "title": "Observe and Destroy",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 997,
        "title": "Service Outage",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 998,
        "title": "BOOM!",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 999,
        "title": "Door to Door",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1000,
        "title": "Scarcity of Resources",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1001,
        "title": "En Passant",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1002,
        "title": "Frantic Coding",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1003,
        "title": "The Gauntlet",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1004,
        "title": "Saker",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1005,
        "title": "Blockade Runner",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1006,
        "title": "Ele \"Smoke\" Scovak: Cynosure of the Net",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1007,
        "title": "Top Hat",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1008,
        "title": "Blackstone",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1009,
        "title": "Government Investigations",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1010,
        "title": "Citadel Sanctuary",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1011,
        "title": "Wetwork Refit",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1012,
        "title": "Haas-Bioroid: Architects of Tomorrow",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1013,
        "title": "Fumiko Yamamori",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1014,
        "title": "Hasty Relocation",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1015,
        "title": "Data Ward",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1016,
        "title": "Drone Screen",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1017,
        "title": "Chief Slee",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1018,
        "title": "Bulwark",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1019,
        "title": "Best Defense",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1020,
        "title": "Preemptive Action",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1021,
        "title": "MKUltra",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1022,
        "title": "On the Lam",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1023,
        "title": "Cold Read",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1024,
        "title": "Equivocation",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1025,
        "title": "Misdirection",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1026,
        "title": "Reaver",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1027,
        "title": "Interdiction",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1028,
        "title": "Baba Yaga",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1029,
        "title": "Fairchild",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1030,
        "title": "Friends in High Places",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1031,
        "title": "Manta Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1032,
        "title": "Mind Game",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1033,
        "title": "Nihongai Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1034,
        "title": "IP Block",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1035,
        "title": "Thoth",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1036,
        "title": "Anson Rose",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1037,
        "title": "Mausolus",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1038,
        "title": "Sapper",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1039,
        "title": "Show of Force",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1040,
        "title": "Enforced Curfew",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1041,
        "title": "Şifr",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1042,
        "title": "Sūnya",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1043,
        "title": "Recon Drone",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1044,
        "title": "Tapwrm",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1045,
        "title": "Tracker",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1046,
        "title": "Aaron Marrón",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1047,
        "title": "Encore",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1048,
        "title": "Fawkes",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1049,
        "title": "Peace in Our Time",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1050,
        "title": "Sensor Net Activation",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1051,
        "title": "Violet Level Clearance",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1052,
        "title": "Chiyashi",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1053,
        "title": "Psychokinesis",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1054,
        "title": "Net Quarantine",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1055,
        "title": "Herald",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1056,
        "title": "Veritas",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1057,
        "title": "Bryan Stinson",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1058,
        "title": "NASX",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1059,
        "title": "Macrophage",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1060,
        "title": "Tribunal",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1061,
        "title": "Pushing the Envelope",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1062,
        "title": "Maw",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1063,
        "title": "The Archivist",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1064,
        "title": "Exploit",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1065,
        "title": "Spot the Prey",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1066,
        "title": "Bio-Modeled Network",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1067,
        "title": "Network Exchange",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1068,
        "title": "Mad Dash",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1069,
        "title": "NEXT Wave 2",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1070,
        "title": "Zed 2.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1071,
        "title": "Defense Construct",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1072,
        "title": "Synth DNA Modification",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1073,
        "title": "Kakugo",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1074,
        "title": "Net Analytics",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1075,
        "title": "SYNC BRE",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1076,
        "title": "Jemison Astronautics: Sacrifice. Audacity. Success.",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1077,
        "title": "Quarantine System",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1078,
        "title": "Oberth Protocol",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1079,
        "title": "Khondi Plaza",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1080,
        "title": "Signal Jamming",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1081,
        "title": "Severnius Stim Implant",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1082,
        "title": "Clan Vengeance",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1083,
        "title": "Counter Surveillance",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1084,
        "title": "Möbius",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1085,
        "title": "Los: Data Hijacker",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1086,
        "title": "System Seizure",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1087,
        "title": "Customized Secretary",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1088,
        "title": "Build Script",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1089,
        "title": "Seidr Adaptive Barrier",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1090,
        "title": "Nerine 2.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1091,
        "title": "Load Testing",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1092,
        "title": "Bloom",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1093,
        "title": "Replanting",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1094,
        "title": "CPC Generator",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1095,
        "title": "Free Lunch",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1096,
        "title": "MCA Informant",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1097,
        "title": "Clyde Van Rite",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1098,
        "title": "Watchtower",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1099,
        "title": "Sacrifice",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1100,
        "title": "Self-Adapting Code Wall",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1101,
        "title": "Berserker",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1102,
        "title": "Persephone",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1103,
        "title": "Rubicon Switch",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1104,
        "title": "Aeneas Informant",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1105,
        "title": "Rosetta 2.0",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1106,
        "title": "Adjusted Matrix",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1107,
        "title": "Dedicated Processor",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1108,
        "title": "Inversificator",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1109,
        "title": "Dadiana Chacon",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1110,
        "title": "NEXT Opal",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1111,
        "title": "Bioroid Work Crew",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1112,
        "title": "AgInfusion: New Miracles for a New World",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1113,
        "title": "Bamboo Dome",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1114,
        "title": "Ben Musashi",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1115,
        "title": "Authenticator",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1116,
        "title": "Henry Phillips",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1117,
        "title": "Battlement",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1118,
        "title": "Audacity",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1119,
        "title": "Red Planet Couriers",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1120,
        "title": "Owl",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1121,
        "title": "Alice Merchant: Clan Agitator",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1122,
        "title": "Jarogniew Mercs",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1123,
        "title": "Māui",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1124,
        "title": "Bug Out Bag",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1125,
        "title": "Keros Mcintyre",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1126,
        "title": "Daredevil",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1127,
        "title": "Mass-Driver",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1128,
        "title": "Warroid Tracker",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1129,
        "title": "Loki",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1130,
        "title": "Obokata Protocol",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1131,
        "title": "Mirāju",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1132,
        "title": "Shipment from Tennin",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1133,
        "title": "Escalate Vitriol",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1134,
        "title": "Reeducation",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1135,
        "title": "Traffic Analyzer",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1136,
        "title": "Meteor Mining",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1137,
        "title": "Standoff",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1138,
        "title": "Success",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1139,
        "title": "Whampoa Reclamation",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1140,
        "title": "Mass Commercialization",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1141,
        "title": "Mars for Martians",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1142,
        "title": "God of War",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1143,
        "title": "Leave No Trace",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1144,
        "title": "Rip Deal",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1145,
        "title": "Flashbang",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1146,
        "title": "Lean and Mean",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1147,
        "title": "Maven",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1148,
        "title": "Na'Not'K",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1149,
        "title": "Bloo Moose",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1150,
        "title": "O₂ Shortage",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1151,
        "title": "Helheim Servers",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1152,
        "title": "Mandatory Seed Replacement",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1153,
        "title": "Water Monopoly",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1154,
        "title": "Metamorph",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1155,
        "title": "Data Loop",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1156,
        "title": "Biased Reporting",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1157,
        "title": "Open Forum",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1158,
        "title": "Tithonium",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1159,
        "title": "Transparency Initiative",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1160,
        "title": "Rover Algorithm",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1161,
        "title": "Mining Accident",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1162,
        "title": "Respirocytes",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1163,
        "title": "Salvaged Vanadis Armory",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1164,
        "title": "Aumakua",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1165,
        "title": "Caldera",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1166,
        "title": "Diana's Hunt",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1167,
        "title": "Reshape",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1168,
        "title": "Dummy Box",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1169,
        "title": "Corporate Defector",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1170,
        "title": "CFC Excavation Contract",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1171,
        "title": "MCA Austerity Policy",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1172,
        "title": "Restore",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1173,
        "title": "Breached Dome",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1174,
        "title": "Sand Storm",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1175,
        "title": "AR-Enhanced Security",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1176,
        "title": "Rolling Brownout",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1177,
        "title": "Threat Level Alpha",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1178,
        "title": "Priority Construction",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1179,
        "title": "Fractal Threat Matrix",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1180,
        "title": "Conundrum",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1181,
        "title": "Steve Cambridge: Master Grifter",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1182,
        "title": "Brute-Force-Hack",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1183,
        "title": "Spear Phishing",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1184,
        "title": "SYN Attack",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1185,
        "title": "Polyhistor",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1186,
        "title": "Abagnale",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1187,
        "title": "Lustig",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1188,
        "title": "Demara",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1189,
        "title": "Mammon",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1190,
        "title": "Charlatan",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1191,
        "title": "Maxwell James",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1192,
        "title": "Ayla \"Bios\" Rahim: Simulant Specialist",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1193,
        "title": "Careful Planning",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1194,
        "title": "Deep Data Mining",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1195,
        "title": "LLDS Memory Diamond",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1196,
        "title": "Ubax",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1197,
        "title": "Adept",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1198,
        "title": "Savant",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1199,
        "title": "Egret",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1200,
        "title": "Dhegdheer",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1201,
        "title": "Levy Advanced Research Lab",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1202,
        "title": "Laguna Velasco District",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1203,
        "title": "Process Automation",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1204,
        "title": "Officer Frank",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1205,
        "title": "Dean Lister",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1206,
        "title": "Biometric Spoofing",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1207,
        "title": "The Shadow Net",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1208,
        "title": "Seidr Laboratories: Destiny Defined",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1209,
        "title": "Brain Rewiring",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1210,
        "title": "Elective Upgrade",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1211,
        "title": "Successful Field Test",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1212,
        "title": "Estelle Moon",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1213,
        "title": "Marilyn Campaign",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1214,
        "title": "Eli 2.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1215,
        "title": "Executive Functioning",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1216,
        "title": "Holmegaard",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1217,
        "title": "Tapestry",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1218,
        "title": "Ultraviolet Clearance",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1219,
        "title": "Black Level Clearance",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1220,
        "title": "Mason Bellamy",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1221,
        "title": "Skorpios Defense Systems: Persuasive Power",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1222,
        "title": "Armored Servers",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1223,
        "title": "Illicit Sales",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1224,
        "title": "Graft",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1225,
        "title": "Illegal Arms Factory",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1226,
        "title": "Mr. Stone",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1227,
        "title": "Bloodletter",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1228,
        "title": "Colossus",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1229,
        "title": "Hailstorm",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1230,
        "title": "Hortum",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1231,
        "title": "Hunter Seeker",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1232,
        "title": "K. P. Lynn",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1233,
        "title": "Paper Trail",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1234,
        "title": "Honeyfarm",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1235,
        "title": "Long-Term Investment",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1236,
        "title": "Weir",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1237,
        "title": "IPO",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1370,
        "title": "By Any Means",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1371,
        "title": "Yusuf",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1372,
        "title": "Zamba",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1373,
        "title": "Puffer",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1374,
        "title": "Lewi Guilherme",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1375,
        "title": "Cyberdelia",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1376,
        "title": "Upya",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1377,
        "title": "Assimilator",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1378,
        "title": "Asa Group: Security Through Vigilance",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1379,
        "title": "Ikawah Project",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1380,
        "title": "Najja 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1381,
        "title": "Gene Splicer",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1382,
        "title": "Mganga",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1383,
        "title": "Genotyping",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1384,
        "title": "Echo Chamber",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1385,
        "title": "Self-Growth Program",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1386,
        "title": "Calibration Testing",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1387,
        "title": "Urban Renewal",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1388,
        "title": "Wake Up Call",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1389,
        "title": "Reconstruction Contract",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1390,
        "title": "Acacia",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1391,
        "title": "Plague",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1392,
        "title": "Credit Kiting",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1393,
        "title": "Wari",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1394,
        "title": "Kabonesa Wu: Netspace Thrillseeker",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1395,
        "title": "Takobi",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1396,
        "title": "Kongamato",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1397,
        "title": "Emergent Creativity",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1398,
        "title": "RNG Key",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1399,
        "title": "Nightdancer",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1400,
        "title": "Jinja City Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1401,
        "title": "Aimor",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1402,
        "title": "Bacterial Programming",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1403,
        "title": "Jua",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1404,
        "title": "Threat Assessment",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1405,
        "title": "Economic Warfare",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1406,
        "title": "Forced Connection",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1407,
        "title": "SSL Endorsement",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1408,
        "title": "NGO Front",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1409,
        "title": "Distract the Masses",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1410,
        "title": "eXer",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1411,
        "title": "Friday Chip",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1412,
        "title": "Crypt",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1413,
        "title": "Corporate \"Grant\"",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1414,
        "title": "No One Home",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1415,
        "title": "Marathon",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1416,
        "title": "Gbahali",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1417,
        "title": "White Hat",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1418,
        "title": "Kuwinda K4H1U3",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1419,
        "title": "NEXT Sapphire",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1420,
        "title": "Anansi",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1421,
        "title": "Code Replicator",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1422,
        "title": "Reverse Infection",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1423,
        "title": "Azmari EdTech: Shaping the Future",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1424,
        "title": "Degree Mill",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1425,
        "title": "Personalized Portal",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1426,
        "title": "Armed Intimidation",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1427,
        "title": "Death and Taxes",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1428,
        "title": "Trojan Horse",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1429,
        "title": "TechnoCo",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1430,
        "title": "Glut Cipher",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1431,
        "title": "Knobkierie",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1432,
        "title": "419: Amoral Scammer",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1433,
        "title": "Falsified Credentials",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1434,
        "title": "Rogue Trading",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1435,
        "title": "Because I Can",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1436,
        "title": "Nyashia",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1437,
        "title": "Consume",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1438,
        "title": "Malia Z0L0K4",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1439,
        "title": "Kill Switch",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1440,
        "title": "Tempus",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1441,
        "title": "Bio Vault",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1442,
        "title": "Sadaka",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1443,
        "title": "Endless EULA",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1444,
        "title": "Sandman",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1445,
        "title": "Amani Senai",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1446,
        "title": "SSO Industries: Fueling Innovation",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1447,
        "title": "City Works Project",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1448,
        "title": "Oduduwa",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1449,
        "title": "Rashida Jaheem",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1450,
        "title": "Freedom Khumalo: Crypto-Anarchist",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1451,
        "title": "Trypano",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1452,
        "title": "Contaminate",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1453,
        "title": "Embezzle",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1454,
        "title": "Slipstream",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1455,
        "title": "Laamb",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1456,
        "title": "Gebrselassie",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1457,
        "title": "Compile",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1458,
        "title": "Logic Bomb",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1459,
        "title": "Jackpot!",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1460,
        "title": "Remote Enforcement",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1461,
        "title": "Kamali 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1462,
        "title": "Warden Fatuma",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1463,
        "title": "Viral Weaponization",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1464,
        "title": "Envelope",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1465,
        "title": "Mwanza City Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1466,
        "title": "Standard Procedure",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1467,
        "title": "Intake",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1468,
        "title": "Masvingo",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1469,
        "title": "Overseer Matrix",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1470,
        "title": "Zer0",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1471,
        "title": "Musaazi",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1472,
        "title": "Hippo",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1473,
        "title": "Amina",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1474,
        "title": "Diversion of Funds",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1475,
        "title": "PAD Tap",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1476,
        "title": "Reclaim",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1477,
        "title": "Engolo",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1478,
        "title": "Flame-out",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1479,
        "title": "Black Hat",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1480,
        "title": "Kasi String",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1481,
        "title": "NEXT Diamond",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1482,
        "title": "Riot Suppression",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1483,
        "title": "Mti Mwekundu: Life Improved",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1484,
        "title": "Mlinzi",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1485,
        "title": "Better Citizen Program",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1486,
        "title": "Market Forces",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1487,
        "title": "Surveyor",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1488,
        "title": "High-Profile Target",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1489,
        "title": "False Flag",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1490,
        "title": "Nathaniel \"Gnat\" Hall: One-of-a-Kind",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1491,
        "title": "Divide and Conquer",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1492,
        "title": "Guinea Pig",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1493,
        "title": "Patchwork",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1494,
        "title": "Hijacked Router",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1495,
        "title": "Cradle",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1496,
        "title": "District 99",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1497,
        "title": "Liza Talking Thunder: Prominent Legislator",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1498,
        "title": "Hot Pursuit",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1499,
        "title": "Paragon",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1500,
        "title": "Bankroll",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1501,
        "title": "Tycoon",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1502,
        "title": "Thunder Art Gallery",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1503,
        "title": "Miss Bones",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1504,
        "title": "Akiko Nisei: Head Case",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1505,
        "title": "Insight",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1506,
        "title": "Mind's Eye",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1507,
        "title": "Mâché",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1508,
        "title": "Ika",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1509,
        "title": "Kyuban",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1510,
        "title": "Psych Mike",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1511,
        "title": "Algernon",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1512,
        "title": "Reboot",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1513,
        "title": "Office Supplies",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1514,
        "title": "DJ Fenris",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1515,
        "title": "Sportsmetal: Go Big or Go Home",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1516,
        "title": "Hyperloop Extension",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1517,
        "title": "Meridian",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1518,
        "title": "Gatekeeper",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1519,
        "title": "Divert Power",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1520,
        "title": "Fast Break",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1521,
        "title": "Game Changer",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1522,
        "title": "Giordano Memorial Field",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1523,
        "title": "Saraswati Mnemonics: Endless Exploration",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1524,
        "title": "Jumon",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1525,
        "title": "API-S Keeper Isobel",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1526,
        "title": "Neurostasis",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1527,
        "title": "Otoroshi",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1528,
        "title": "Thimblerig",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1529,
        "title": "Hangeki",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1530,
        "title": "Daruma",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1531,
        "title": "Acme Consulting: The Truth You Need",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1532,
        "title": "Fly on the Wall",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1533,
        "title": "SIU",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1534,
        "title": "Peeping Tom",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1535,
        "title": "Hydra",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1536,
        "title": "Eavesdrop",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1537,
        "title": "Attitude Adjustment",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1538,
        "title": "Arella Salvatore",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1539,
        "title": "The Outfit: Family Owned and Operated",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1540,
        "title": "Broad Daylight",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1541,
        "title": "Drudge Work",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1542,
        "title": "Blockchain",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1543,
        "title": "Formicary",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1544,
        "title": "Building Blocks",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1545,
        "title": "Too Big to Fail",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1546,
        "title": "Under the Bus",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1547,
        "title": "Lady Liberty",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1548,
        "title": "Labor Rights",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1549,
        "title": "Embolus",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1550,
        "title": "Crowdfunding",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1551,
        "title": "Timely Public Release",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1552,
        "title": "Slot Machine",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1553,
        "title": "Border Control",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1554,
        "title": "Watch the World Burn",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1555,
        "title": "Hired Help",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1556,
        "title": "Cyber Bureau: Keeping the Peace",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1704,
        "title": "Isolation",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1705,
        "title": "Demolisher",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1706,
        "title": "Chisel",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1707,
        "title": "Stargate",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1708,
        "title": "Utae",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1709,
        "title": "Climactic Showdown",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1710,
        "title": "Fencer Fueno",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1711,
        "title": "The Nihilist",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1712,
        "title": "Trickster Taka",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1713,
        "title": "Az McCaffrey: Mechanical Prodigy",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1714,
        "title": "Always Have a Backup Plan",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1715,
        "title": "Blueberry!™ Diesel",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1716,
        "title": "Flip Switch",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1717,
        "title": "Lucky Charm",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1718,
        "title": "Masterwork (v37)",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1719,
        "title": "Bukhgalter",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1720,
        "title": "\"Baklan\" Bochkin",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1721,
        "title": "The Class Act",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1722,
        "title": "Lat: Ethical Freelancer",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1723,
        "title": "In the Groove",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1724,
        "title": "Khusyuk",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1725,
        "title": "Spec Work",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1726,
        "title": "Supercorridor",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1727,
        "title": "Gauss",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1728,
        "title": "Pelangi",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1729,
        "title": "Rezeki",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1730,
        "title": "The Artist",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1731,
        "title": "Direct Access",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1732,
        "title": "Rejig",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1733,
        "title": "Whistleblower",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1734,
        "title": "MirrorMorph: Endless Iteration",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1735,
        "title": "Architect Deployment Test",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1736,
        "title": "Calvin B4L3Y",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1737,
        "title": "Nanoetching Matrix",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1738,
        "title": "Hagen",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1739,
        "title": "Fully Operational",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1740,
        "title": "Red Level Clearance",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1741,
        "title": "Cold Site Server",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1742,
        "title": "Hyoubu Institute: Absolute Clarity",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1743,
        "title": "Project Yagi-Uda",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1744,
        "title": "Sting!",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1745,
        "title": "Public Health Portal",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1746,
        "title": "Storgotic Resonator",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1747,
        "title": "Saisentan",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1748,
        "title": "Complete Image",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1749,
        "title": "Letheia Nisei",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1750,
        "title": "Remastered Edition",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1751,
        "title": "Daily Quest",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1752,
        "title": "Tiered Subscription",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1753,
        "title": "Congratulations!",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1754,
        "title": "Loot Box",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1755,
        "title": "Focus Group",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1756,
        "title": "Game Over",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1757,
        "title": "Increased Drop Rates",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1758,
        "title": "Divested Trust",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1759,
        "title": "SDS Drone Deployment",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1760,
        "title": "Roughneck Repair Squad",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1761,
        "title": "Afshar",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1762,
        "title": "Sandstone",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1763,
        "title": "Trebuchet",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1764,
        "title": "Secure and Protect",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1765,
        "title": "Reduced Service",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1766,
        "title": "Vulnerability Audit",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1767,
        "title": "CSR Campaign",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1768,
        "title": "Rime",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1769,
        "title": "Hoshiko Shiro: Untold Protagonist",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1770,
        "title": "Moshing",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1771,
        "title": "Devil Charm",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1772,
        "title": "Gachapon",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1773,
        "title": "Keiko",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1774,
        "title": "Odore",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1775,
        "title": "Mystic Maemi",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1776,
        "title": "Paladin Poemu",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1777,
        "title": "Bravado",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1778,
        "title": "Boomerang",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1779,
        "title": "Mu Safecracker",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1780,
        "title": "Prognostic Q-Loop",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1781,
        "title": "Swift",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1782,
        "title": "Afterimage",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1783,
        "title": "Makler",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1784,
        "title": "Penumbral Toolkit",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1785,
        "title": "The Back",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1786,
        "title": "Harmony AR Therapy",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1787,
        "title": "Aniccam",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1788,
        "title": "Simulchip",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1789,
        "title": "Cordyceps",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1790,
        "title": "Euler",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1791,
        "title": "Mantle",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1792,
        "title": "Penrose",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1794,
        "title": "Cybertrooper Talut",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1795,
        "title": "Paule's Café",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1796,
        "title": "Buffer Drive",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1798,
        "title": "DreamNet",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1799,
        "title": "Megaprix Qualifier",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1800,
        "title": "Project Vacheron",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1801,
        "title": "Bass CH1R180G4",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1803,
        "title": "Vaporframe Fabricator",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1804,
        "title": "Drafter",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1805,
        "title": "Týr",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1806,
        "title": "NEXT Activation Command",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1807,
        "title": "Scapenet",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1808,
        "title": "Tranquility Home Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1809,
        "title": "Flower Sermon",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1810,
        "title": "Prāna Condenser",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1811,
        "title": "Engram Flush",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1812,
        "title": "Konjin",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1813,
        "title": "Hyoubu Precog Manifold",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1814,
        "title": "Kakurenbo",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1815,
        "title": "La Costa Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1816,
        "title": "GameNET: Where Dreams are Real",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1817,
        "title": "Bellona",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1818,
        "title": "F2P",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1819,
        "title": "Gold Farmer",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1820,
        "title": "Digital Rights Management",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1821,
        "title": "SYNC Rerouting",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1822,
        "title": "Ganked!",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1823,
        "title": "Earth Station: SEA Headquarters",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1824,
        "title": "Transport Monopoly",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1825,
        "title": "Wall to Wall",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1826,
        "title": "Akhet",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1828,
        "title": "Winchester",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1829,
        "title": "Argus Crackdown",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1830,
        "title": "Cayambe Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1831,
        "title": "Cyberdex Sandbox",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1833,
        "title": "NAPD Cordon",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1865,
        "title": "René \"Loup\" Arcemont: Party Animal",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1866,
        "title": "Wildcat Strike",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1867,
        "title": "Carnivore",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1868,
        "title": "Botulus",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1869,
        "title": "Buzzsaw",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1870,
        "title": "Cleaver",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1871,
        "title": "Fermenter",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1872,
        "title": "Leech",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1873,
        "title": "Cookbook",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1874,
        "title": "Zahya Sadeghi: Versatile Smuggler",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1875,
        "title": "Mutual Favor",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1876,
        "title": "Tread Lightly",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1877,
        "title": "Docklands Pass",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1878,
        "title": "Pennyshaver",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1879,
        "title": "Carmen",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1880,
        "title": "Marjanah",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1881,
        "title": "Tranquilizer",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1882,
        "title": "Red Team",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1883,
        "title": "Tāo Salonga: Telepresence Magician",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1884,
        "title": "Creative Commission",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1885,
        "title": "VRcation",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1886,
        "title": "DZMZ Optimizer",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1887,
        "title": "Pantograph",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1888,
        "title": "Conduit",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1889,
        "title": "Echelon",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1890,
        "title": "Unity",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1891,
        "title": "Telework Contract",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1892,
        "title": "Jailbreak",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1893,
        "title": "Overclock",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 1895,
        "title": "T400 Memory Diamond",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 1896,
        "title": "Mayfly",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 1897,
        "title": "Smartware Distributor",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1898,
        "title": "Verbal Plasticity",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 1899,
        "title": "Haas-Bioroid: Precision Design",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1900,
        "title": "Luminal Transubstantiation",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1901,
        "title": "Nico Campaign",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1902,
        "title": "Ansel 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1903,
        "title": "Brân 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1904,
        "title": "Seamless Launch",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1905,
        "title": "Sprint",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1906,
        "title": "Manegarm Skunkworks",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1907,
        "title": "Jinteki: Restoring Humanity",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1908,
        "title": "Longevity Serum",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1909,
        "title": "Urtica Cipher",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1910,
        "title": "Diviner",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1911,
        "title": "Karunā",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1912,
        "title": "Hansei Review",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1913,
        "title": "Neurospike",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1914,
        "title": "Anoetic Void",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1915,
        "title": "NBN: Reality Plus",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1916,
        "title": "Tomorrow's Headline",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1917,
        "title": "Spin Doctor",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1918,
        "title": "Funhouse",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1919,
        "title": "Ping",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1920,
        "title": "Predictive Planogram",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1921,
        "title": "Public Trail",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1922,
        "title": "AMAZE Amusements",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1923,
        "title": "Weyland Consortium: Built to Last",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 1924,
        "title": "Above the Law",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1925,
        "title": "Clearinghouse",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1926,
        "title": "Ballista",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1927,
        "title": "Pharos",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1928,
        "title": "Government Subsidy",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1929,
        "title": "Retribution",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 1930,
        "title": "Malapert Data Vault",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 1931,
        "title": "Offworld Office",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1932,
        "title": "Orbital Superiority",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1933,
        "title": "Send a Message",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1934,
        "title": "Superconducting Hub",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 1935,
        "title": "Regolith Mining License",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 1936,
        "title": "Palisade",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1937,
        "title": "Tithe",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1938,
        "title": "Whitespace",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 1940,
        "title": "The Catalyst: Convention Breaker",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 1941,
        "title": "The Syndicate: Profit over Principle",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 2024,
        "title": "Light the Fire!",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2025,
        "title": "Revolver",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2026,
        "title": "Deep Dive",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2027,
        "title": "Hákarl 1.0",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2028,
        "title": "Anemone",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2029,
        "title": "Vladisibirsk City Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 2030,
        "title": "Azef Protocol",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2031,
        "title": "Esâ Afontov: Eco-Insurrectionist",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 2032,
        "title": "Chastushka",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2033,
        "title": "Running Hot",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2034,
        "title": "Steelskin Scarring",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2035,
        "title": "Ghosttongue",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2036,
        "title": "Marrow",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2037,
        "title": "Begemot",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2038,
        "title": "Avgustina Ivanovskaya",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2040,
        "title": "The Twinning",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2041,
        "title": "Nyusha \"Sable\" Sintashta: Symphonic Prodigy",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 2042,
        "title": "Carpe Diem",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2043,
        "title": "Pinhole Threading",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2044,
        "title": "PAN-Weave",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2045,
        "title": "Virtuoso",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2046,
        "title": "Cat's Cradle",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2047,
        "title": "Cezve",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2049,
        "title": "Backstitching",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2050,
        "title": "No Free Lunch",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2051,
        "title": "Captain Padma Isbister: Intrepid Explorer",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 2053,
        "title": "Into the Depths",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2054,
        "title": "Rigging Up",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2055,
        "title": "Endurance",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2056,
        "title": "Hyperbaric",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2057,
        "title": "Propeller",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2058,
        "title": "Daeg, First Net-Cat",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2059,
        "title": "Environmental Testing",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2060,
        "title": "Stoneship Chart Room",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2061,
        "title": "Élivágar Bifurcation",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2062,
        "title": "Midnight-3 Arcology",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2063,
        "title": "Refuge Campaign",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2064,
        "title": "Trieste Model Bioroids",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2065,
        "title": "Echo",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2067,
        "title": "Wave",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2068,
        "title": "Big Deal",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2069,
        "title": "Blood in the Water",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2070,
        "title": "Regenesis",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2071,
        "title": "Bladderwort",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2072,
        "title": "Moon Pool",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2074,
        "title": "Bathynomus",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2075,
        "title": "Ivik",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2076,
        "title": "Mitosis",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2077,
        "title": "Mavirus",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 2078,
        "title": "Pravdivost Consulting: Political Solutions",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 2079,
        "title": "Artificial Cryptocrash",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2080,
        "title": "Chekist Scion",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2081,
        "title": "Drago Ivanov",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2082,
        "title": "Ubiquitous Vig",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2083,
        "title": "Mestnichestvo",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2084,
        "title": "Vasilisa",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2085,
        "title": "Backroom Machinations",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2087,
        "title": "Ob Superheavy Logistics: Extract. Export. Excel.",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 2089,
        "title": "Svyatogor Excavator",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2090,
        "title": "Envelopment",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2091,
        "title": "Maskirovka",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2092,
        "title": "Stavka",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2093,
        "title": "Extract",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2094,
        "title": "Mutually Assured Destruction",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2095,
        "title": "Trust Operation",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2096,
        "title": "Finality",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2097,
        "title": "Katorga Breakout",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2098,
        "title": "Raindrops Cut Stone",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2099,
        "title": "Time Bomb",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2100,
        "title": "Abaasy",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2101,
        "title": "Hush",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2102,
        "title": "Nga",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2103,
        "title": "Num",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2104,
        "title": "Tsakhia \"Bankhar\" Gantulga",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2105,
        "title": "Concerto",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2106,
        "title": "Reprise",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2107,
        "title": "Poison Vial",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2108,
        "title": "WAKE Implant v2A-JRJ",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2109,
        "title": "Zenit Chip JZ-2MJ",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2110,
        "title": "Tremolo",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2111,
        "title": "Tunnel Vision",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2112,
        "title": "Asmund Pudlat",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2113,
        "title": "Info Bounty",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2114,
        "title": "Spark of Inspiration",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2115,
        "title": "Hippocampic Mechanocytes",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2116,
        "title": "Basilar Synthgland 2KVJ",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2117,
        "title": "Flux Capacitor",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2118,
        "title": "Nanuq",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2119,
        "title": "Orca",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2120,
        "title": "K2CP Turbine",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2121,
        "title": "World Tree",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2122,
        "title": "Dr. Nuka Vrolyck",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2123,
        "title": "Nova Initiumia: Catalyst & Impetus",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 2124,
        "title": "Matryoshka",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2125,
        "title": "Thule Subsea: Safety Below",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 2126,
        "title": "Ontological Dependence",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2127,
        "title": "Nightmare Archive",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2128,
        "title": "Bloop",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2129,
        "title": "Pulse",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2130,
        "title": "Distributed Tracing",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2131,
        "title": "Hypoxia",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2132,
        "title": "Djupstad Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 2133,
        "title": "Mr. Hendrik",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 2134,
        "title": "Issuaq Adaptics: Sustaining Diversity",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 2135,
        "title": "Hybrid Release",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2136,
        "title": "Dr. Vientiane Keeling",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2137,
        "title": "Reaper Function",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2138,
        "title": "Hafrún",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2139,
        "title": "Vampyronassa",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2140,
        "title": "Simulation Reset",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2141,
        "title": "Nanisivik Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 2142,
        "title": "Freedom of Information",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2143,
        "title": "Post-Truth Dividend",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2144,
        "title": "Gaslight",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2145,
        "title": "Vera Ivanovna Shuyskaya",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2146,
        "title": "Klevetnik",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2147,
        "title": "Unsmiling Tsarevna",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2148,
        "title": "Nonequivalent Exchange",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2149,
        "title": "Shipment from Vladisibirsk",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2150,
        "title": "Regulatory Capture",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2151,
        "title": "Kimberlite Field",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2152,
        "title": "Hostile Architecture",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2153,
        "title": "Superdeep Borehole",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2154,
        "title": "Anvil",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2155,
        "title": "End of the Line",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2156,
        "title": "Yakov Erikovich Avdakov",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 2157,
        "title": "ZATO City Grid",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 2158,
        "title": "Ampère: Cybernetics For Anyone",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 2159,
        "title": "Strike Fund",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2160,
        "title": "The Price",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2161,
        "title": "Solidarity Badge",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2162,
        "title": "Audrey v2",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2163,
        "title": "Banner",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2164,
        "title": "Monkeywrench",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2165,
        "title": "Eru Ayase-Pessoa",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2166,
        "title": "Hannah \"Wheels\" Pilintra",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2167,
        "title": "Lago Paranoá Shelter",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2168,
        "title": "Mercury: Chrome Libertador",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 2169,
        "title": "Chrysopoeian Skimming",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2170,
        "title": "S-Dobrado",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2171,
        "title": "Capybara",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2172,
        "title": "Hermes",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2173,
        "title": "Curupira",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2174,
        "title": "Laser Pointer",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2175,
        "title": "Saci",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2176,
        "title": "Shibboleth",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2177,
        "title": "Debbie \"Downtown\" Moreira",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2178,
        "title": "Arissana Rocha Nahu: Street Artist",
        "side": "runner",
        "type": "identity"
      },
      {
        "id": 2179,
        "title": "Joy Ride",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2180,
        "title": "AirbladeX (JSRF Ed.)",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2181,
        "title": "LilyPAD",
        "side": "runner",
        "type": "hardware"
      },
      {
        "id": 2182,
        "title": "Living Mural",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2183,
        "title": "Pichação",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2184,
        "title": "Slap Vandal",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2185,
        "title": "Umbrella",
        "side": "runner",
        "type": "program"
      },
      {
        "id": 2186,
        "title": "Beatriz Friere Gonzalez",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2187,
        "title": "Urban Art Vernissage",
        "side": "runner",
        "type": "resource"
      },
      {
        "id": 2188,
        "title": "Bahia Bands",
        "side": "runner",
        "type": "event"
      },
      {
        "id": 2189,
        "title": "Salvo Testing",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2190,
        "title": "Stegodon MK IV",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2191,
        "title": "Wage Workers",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2192,
        "title": "Ablative Barrier",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2193,
        "title": "Jaguarundi",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2194,
        "title": "M.I.C.",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2195,
        "title": "Greasing the Palm",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2196,
        "title": "Vovô Ozetti",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 2197,
        "title": "A Teia: IP Recovery",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 2198,
        "title": "Fujii Asset Retrieval",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2199,
        "title": "Front Company",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2200,
        "title": "Attini",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2201,
        "title": "Phoneutria",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2202,
        "title": "Tatu-Bola",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2203,
        "title": "Mindscaping",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2204,
        "title": "Adrian Seis",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 2205,
        "title": "Daniela Jorge Inácio",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 2206,
        "title": "Epiphany Analytica: Nations Undivided",
        "side": "corp",
        "type": "identity"
      },
      {
        "id": 2207,
        "title": "Oracle Thinktank",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2208,
        "title": "Balanced Coverage",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2209,
        "title": "Behold!",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2210,
        "title": "Federal Fundraising",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2211,
        "title": "Starlit Knight",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2212,
        "title": "Virtual Service Agent",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2213,
        "title": "Oppo Research",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2214,
        "title": "Your Digital Life",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2215,
        "title": "Slash and Burn Agriculture",
        "side": "corp",
        "type": "agenda"
      },
      {
        "id": 2216,
        "title": "Cybersand Harvester",
        "side": "corp",
        "type": "asset"
      },
      {
        "id": 2217,
        "title": "Tree Line",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2218,
        "title": "Valentão",
        "side": "corp",
        "type": "ice"
      },
      {
        "id": 2219,
        "title": "Armed Asset Protection",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2220,
        "title": "Pivot",
        "side": "corp",
        "type": "operation"
      },
      {
        "id": 2221,
        "title": "Angelique Garza Correa",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 2222,
        "title": "Tucana",
        "side": "corp",
        "type": "upgrade"
      },
      {
        "id": 2223,
        "title": "B-1001",
        "side": "corp",
        "type": "asset"
      }
    ],
    {},
  ),
  down: (queryInterface) => queryInterface.bulkDelete('cards', null, {}),
};
