const races = {
    2: 'Anthran (Badger)',
    4: 'Anthran (Deer)',
    6: 'Anthran (Dog)',
    8: 'Anthran (Goat)',
    10: 'Anthran (Rat)',
    12: 'Anthran (Weasel)',
    15: {
        'race': 'Enting (Oaken)',
        'sex': 'personality',
        'gender': 'nonReproductive',
    },
    17: {
        'race': 'Enting (Pinemar)',
        'sex': 'personality',
        'gender': 'nonReproductive',
    },
    19: {
        'race': 'Enting (Willoweth)',
        'sex': 'personality',
        'gender': 'nonReproductive',
    },
    24: 'Firbolg',
    47: 'Human',
    55: 'Lizardfolk',
    61: 'Loggart',
    66: 'Minotaur',
    78: {
        'race': 'Morphensi',
        'sex': 'fluid',
        'gender': 'fluid',
    },
    79: {
        'race': 'Shardmind',
        'sex': 'personality',
        'gender': 'nonReproductive',
    },
    81: 'Syrinx',
    88: 'Tabaxi',
    91: 'Trollkin',
    100: {
        'race': 'Trox',
        'sex': 'hive',
        'gender': 'hive',
    }
};

const sexes = {
    'standard': {
        49: 'female',
        98: 'male',
        100: 'undertermined',
    },
    'personality': {
        35: 'female',
        70: 'male',
        100: 'undetermined',
    },
    'hive': {
        15: 'female',
        95: 'male',
        100: 'undetermined',
    },
    'fluid': {
        37: 'male',
        74: 'female',
        100: 'undetermined',
    }
};

const genders = {
    'standard': {
        60: 'straight',
        85: 'gay',
        93: 'bi',
        100: 'other',
    },
    'nonReproductive': {
        100: 'undetermined',
    },
    'hive': {
        20: 'asexual',
        90: 'straight',
        93: 'gay',
        98: 'bi',
        100: 'other',
    },
    'fluid': {
        20: 'straight',
        40: 'bi',
        60: 'gay',
        100: 'other',
    }
};

const classes = {
    4: 'Artificer',
    11: 'Barbarian',
    15: 'Bard',
    19: 'Blood Hunter',
    24: 'Cleric',
    28: 'Dragon Knight',
    32: 'Druid',
    41: 'Fighter',
    45: 'Lacer',
    49: 'Monk',
    53: 'Mystic',
    57: 'Paladin',
    63: 'Pugilist',
    68: 'Ranger',
    74: 'Rogue',
    78: 'Samsari',
    82: 'Scholar',
    86: 'Shaman',
    90: 'Sorcerer',
    92: 'Truespeaker',
    97: 'Warlock',
    100: 'Wizard',
};

const fateChance = {
    'impossible': {1: -20, 2: 0, 3: 0, 4: 5, 5: 5, 6: 10, 7: 15, 8: 25, 9: 50},
    'noWay': {1: 0, 2: 5, 3: 5, 4: 10, 5: 15, 6: 25, 7: 35, 8: 50, 9: 75},
    'veryUnlikely': {1: 5, 2: 5, 3: 10, 4: 15, 5: 25, 6: 45, 7: 50, 8: 65, 9: 85},
    'unlikely': {1: 5, 2: 10, 3: 15, 4: 20, 5: 35, 6: 50, 7: 55, 8: 75, 9: 90},
    'fiftyfifty': {1: 10, 2: 15, 3: 25, 4: 30, 5: 50, 6: 65, 7: 75, 8: 85, 9: 95},
    'somewhatLikely': {1: 20, 2: 25, 3: 45, 4: 50, 5: 65, 6: 80, 7: 85, 8: 90, 9: 95},
    'likely': {1: 25, 2: 35, 3: 50, 4: 55, 5: 75, 6: 85, 7: 90, 8: 95, 9: 100},
    'veryLikely': {1: 45, 2: 50, 3: 65, 4: 75, 5: 85, 6: 90, 7: 95, 8: 95, 9: 105},
    'nearSureThing': {1: 50, 2: 55, 3: 75, 4: 80, 5: 90, 6: 95, 7: 95, 8: 100, 9: 115},
    'aSureThing': {1: 55, 2: 65, 3: 80, 4: 85, 5: 90, 6: 95, 7: 95, 8: 110, 9: 125},
    'hasToBe': {1: 80, 2: 85, 3: 90, 4: 95, 5: 95, 6: 100, 7: 100, 8: 130, 9: 145},
};

const event = {
    'focus': {
        7: "Remote event",
        28: "NPC action",
        35: "Introduce a new NPC",
        45: "Move toward a thread",
        52: "Move away from a thread",
        55: "Close a thread",
        67: "PC negative",
        75: "PC positive",
        83: "Ambuguous event",
        92: "NPC negative",
        100: "NPC positive"
    },
    'action': {
        1: "Attainment",
        2: "Starting",
        3: "Neglect",
        4: "Fight",
        5: "Recruit",
        6: "Triumph",
        7: "Violate",
        8: "Oppose",
        9: "Malice",
        10: "Communicate",
        11: "Persecute",
        12: "Increase",
        13: "Decrease",
        14: "Abandon",
        15: "Gratify",
        16: "Inquire",
        17: "Antagonise",
        18: "Move",
        19: "Waste",
        20: "Truce",
        21: "Release",
        22: "Befriend",
        23: "Judge",
        24: "Desert",
        25: "Dominate",
        26: "Procrastinate",
        27: "Praise",
        28: "Separate",
        29: "Take",
        30: "Break",
        31: "Heal",
        32: "Delay",
        33: "Stop",
        34: "Lie",
        35: "Return",
        36: "Immitate",
        37: "Struggle",
        38: "Inform",
        39: "Bestow",
        40: "Postpone",
        41: "Expose",
        42: "Haggle",
        43: "Imprison",
        44: "Release",
        45: "Celebrate",
        46: "Develop",
        47: "Travel",
        48: "Block",
        49: "Harm",
        50: "Debase",
        51: "Overindulge",
        52: "Adjourn",
        53: "Adversity",
        54: "Kill",
        55: "Disrupt",
        56: "Usurp",
        57: "Create",
        58: "Betray",
        59: "Agree",
        60: "Abuse",
        61: "Oppress",
        62: "Inspect",
        63: "Ambush",
        64: "Spy",
        65: "Attach",
        66: "Carry",
        67: "Open",
        68: "Carelessness",
        69: "Ruin",
        70: "Extravagance",
        71: "Trick",
        72: "Arrive",
        73: "Propose",
        74: "Divide",
        75: "Refuse",
        76: "Mistrust",
        77: "Deceive",
        78: "Cruelty",
        79: "Intolerance",
        80: "Trust",
        81: "Excitement",
        82: "Activity",
        83: "Assist",
        84: "Care",
        85: "Negligence",
        86: "Passion",
        87: "Work hard",
        88: "Control",
        89: "Attract",
        90: "Failure",
        91: "Pursue",
        92: "Vengeance",
        93: "Proceedings",
        94: "Dispute",
        95: "Punish",
        96: "Guide",
        97: "Transform",
        98: "Overthrow",
        99: "Oppress",
        100: "Change",
    },
    'subject': {
        1: "Goals",
        2: "Dreams",
        3: "Environment",
        4: "Outside",
        5: "Inside",
        6: "Reality",
        7: "Allies",
        8: "Enemies",
        9: "Evil",
        10: "Good",
        11: "Emotions",
        12: "Opposition",
        13: "War",
        14: "Peace",
        15: "The innocent",
        16: "Love",
        17: "The spiritual",
        18: "The intellectual",
        19: "New ideas",
        20: "Joy",
        21: "Messages",
        22: "Energy",
        23: "Balance",
        24: "Tension",
        25: "Friendship",
        26: "The physical",
        27: "A project",
        28: "Pleasures",
        29: "Pain",
        30: "Possessions",
        31: "Benefits",
        32: "Plans",
        33: "Lies",
        34: "Expectations",
        35: "Legal matters",
        36: "Bureaucracy",
        37: "Business",
        38: "A path",
        39: "News",
        40: "Exterior factors",
        41: "Advice",
        42: "A plot",
        43: "Competition",
        44: "Prison",
        45: "Illness",
        46: "Food",
        47: "Attention",
        48: "Success",
        49: "Failure",
        50: "Travel",
        51: "Jealousy",
        52: "Dispute",
        53: "Home",
        54: "Investment",
        55: "Suffering",
        56: "Wishes",
        57: "Tactics",
        58: "Stalemate",
        59: "Randomness",
        60: "Misfortune",
        61: "Death",
        62: "Disruption",
        63: "Power",
        64: "A burden",
        65: "Intrigues",
        66: "Fears",
        67: "Ambush",
        68: "Rumor",
        69: "Wounds",
        70: "Extravagance",
        71: "A representative",
        72: "Adversities",
        73: "Opulence",
        74: "Liberty",
        75: "Military",
        76: "The mundane",
        77: "Trials",
        78: "Masses",
        79: "Vehicle",
        80: "Art",
        81: "Victory",
        82: "Dispute",
        83: "Riches",
        84: "Status quo",
        85: "Technology",
        86: "Hope",
        87: "Magic",
        88: "Illusions",
        89: "Portals",
        90: "Danger",
        91: "Weapons",
        92: "Animals",
        93: "Weather",
        94: "Elements",
        95: "Nature",
        96: "The public",
        97: "Leadership",
        98: "Fame",
        99: "Anger",
        100: "Information",
    },
};

const encounterDistances = {
    'desert': '6d6*20',
    'dunes': '6d6*10',
    'dforest': '2d6*10',
    'mforest': '2d8*10',
    'sforest': '3d6*10',
    'ghills': '2d10*10',
    'rhills': '2d6*10',
    'moor': '6d6*10',
    'swamp': '2d8*10',
    'mountains': '4d10*10',
    'plains': '6d6*40',
    'urban': '1d12*5',
    'cwater': '4d8*10',
    'mwater': '1d8*10',
};

const innComponents = {
    'order': [
        'adjective noun',
        'adjective noun title',
        '/The/ adjective noun',
        '/The/ adjective noun title',
        'noun /&/ noun',
        'noun /&/ noun title',
        '/The/ noun /&/ noun',
        '/The/ noun /&/ noun title',
        'adjective title',
        '/The/ adjective title',
    ],
    'noun': [
        'Dog',
        'Wolf',
        'Fox',
        'Pug',
        'Cat',
        'Lion',
        'Tiger',
        'Kitten',
        'Ox',
        'Cow',
        'Sow',
        'Bull',
        'Calf',
        'Horse',
        'Stallion',
        'Mare',
        'Feal',
        'Owl',
        'Eagle',
        'Falcon',
        'Hawk',
        'Raven',
        'Crow',
        'Gull',
        'Fish',
        'Whale',
        'Shark',
        'Octopus',
        'Squid',
        'Goat',
        'Sheep',
        'Ewe',
        'Fly',
        'Imp',
        'Dragon',
        'Beetle',
        'Ant',
        'Wasp',
        'Termite',
        'Wizard',
        'Worm',
        'Lizard',
        'Frog',
        'Toad',
        'Snake',
        'Drake',
        'Unicorn',
        'Wyvern',
        'Dragon',
        'Wyvern',
        'Roc',
        'Clam',
        'Oyster',
        'Starfish',
        'Slug',
        'Snail',
        'Mouse',
        'Rat',
        'Beaver',
        'Rogue',
        'Elf',
        'Otter',
        'Seal',
        'Eel',
        'Monk',
        'Rascal',
        'Gopher',
        'Tower',
        'Castle',
        'Dagger',
        'Sword',
        'Bow',
        'Arrow',
        'Hat',
        'Boot',
        'Trophy',
        'Goose',
        'Duck',
        'Boat',
        'Ship',
        'River',
        'Falls',
        'Forest',
        'Goblin',
        'Wench',
        'Wraith',
        'Witch',
        'Wench',
        'Lady',
        'Lord',
        'Knight',
        'Page',
        'Drunk',
        'Shield',
        'Wand',
        'Helm',
        'Flask',
        'Flagon',
        'Pint',
        'Shot',
    ],
    'adjective': [
        'Red',
        'Orange',
        'Yellow',
        'Green',
        'Blue',
        'Purple',
        'Rainbow',
        'Electric',
        'Ochre',
        'Puce',
        'Navy',
        'Maroon',
        'Pink',
        'Peach',
        'Cyan',
        'Violet',
        'Brown',
        'Black',
        'Gray',
        'White',
        'Silver',
        'Gold',
        'Jumping',
        'Sleeping',
        'Running',
        'Rolling',
        'Laughing',
        'Singing',
        'Flying',
        'Burning',
        'Swimming',
        'Crying',
        'Roaring',
        'Screaming',
        'Silent',
        'Petrified',
        'Hiding',
        'Hidden',
        'List',
        'Forgotten',
        'Shiny',
        'Drowning',
        'Giant',
        'Tiny',
        'Fat',
        'Skinny',
        'Humorous',
        'Lonely',
        'Drunken',
        'Slimy',
        'Undead',
        'Dark',
        'Bright',
        'Magical',
        'Enchanted',
        'Poor',
        'Wealthy',
        'Lucky',
        'Unfortunate',
        'Angry',
        'Happy',
        'Sad',
        'Thieving',
        'Desperate',
        'Divine',
        'Arcane',
        'Profane',
        'Discrete',
        'Burled',
        'False',
        'Foolish',
        'Flatulent',
        'Hypnotic',
        'Haunted',
        'Special',
        'Fun',
        'Drab',
        'Daring',
        'Stubborn',
        'Sober',
        'Talking',
        'Naked',
        'Suffering',
        'Cheap',
        'Smelly',
        'Easy',
        'Heroic',
        'Hovering',
        'MArried',
        'Pious',
        'Pompous',
        'Illegal',
        'Sacred',
        'Defiled',
        'Spilt',
        'Wooden',
        'Bloody',
        'Yawning',
        'Sleepy',
        'Hungry',
    ],
    'title': [
        'Bar',
        'Beer Hall',
        'Ale House',
        'Pub',
        'Lounge',
        'Brewery',
        'Loft',
        'Club',
        'Inn',
        'Tavern',
        'Den',
        'Lodge',
    ]
};
