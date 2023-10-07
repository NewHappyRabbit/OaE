
export const treeOfWarUpgrades = { //TODO Do like treeOfTechnology
    "Owl Scout": [
        {
            img: "/images/elves/upgrades/treeOfWar/owlSpecialist.webp",
            imgR: "/images/elves/upgrades/treeOfWar/owlSpecialistR.webp",
            name: "Owl Specialist 1",
            hotkey: "A",
            description: `&/elves/units/Owl Scout& <ul><li>Vision range: 600 -> ^750^ (^+150^)</li><li>Health: 40 -> ^60^ (^+20^)</li><li>Unlocks &/elves/units/OwlScout#Night Vision& (passive) - reveal invisible units within 600 range.</li></ul>`,
            gold: 50
        },
        {
            img: "/images/elves/upgrades/treeOfWar/owlSpecialist.webp",
            imgR: "/images/elves/upgrades/treeOfWar/owlSpecialistR.webp",
            name: "Owl Specialist 2",
            hotkey: "A",
            description: `&/elves/units/Owl Scout& <ul><li>Vision range: 750 -> ^900^ (^+150^)</li><li>Move speed: 325 -> ^406.25^ (^+25%^)</li></ul>&/elves/units/Owl Scout#Scout& ability<ul><li>Duration: 10 -> ^15^ seconds (^+5 seconds^)</li><li>Cooldown: 75 -> ^45^ seconds (^-30 seconds^)</li></ul>`,
            gold: 125
        },
        {
            img: "/images/elves/units/hippogryph/hippogryph.webp",
            imgR: "/images/elves/units/hippogryph/hippogryphR.webp",
            name: "Bird Training 1",
            hotkey: "Z",
            description: "Allow the &/elves/units/Owl Scout& to morph into a &/elves/units/Hippogryph&.",
            gold: 300
        },
        {
            img: "/images/elves/units/hippogryphRider/hippogryphRider.webp",
            imgR: "/images/elves/units/hippogryphRider/hippogryphRiderR.webp",
            name: "Bird Training 2",
            hotkey: "Z",
            description: "Allow the &/elves/units/Archer& to mount a &/elves/units/Hippogryph&, creating a &/elves/units/Hippogryph Rider&.",
            gold: 200
        }
    ],
    "Archer": [
        {
            img: "/images/elves/upgrades/treeOfWar/marksmanshipR.png",
            imgR: "/images/elves/upgrades/treeOfWar/marksmanshipR.png",
            name: "Marksmanship",
            hotkey: "S",
            description: "&/elves/units/Archer&<ul><li>Attack range: 600 -> ^750^ (^+150^)</li></ul>&/elves/units/Hippogryph Rider&<ul><li>Attack range: 600 -> ^750^ (^+150^)</li></ul>",
            gold: 100
        },
    ],
    "Ent": [
        {
            img: "/images/elves/upgrades/treeOfWar/sprouts.webp",
            imgR: "/images/elves/upgrades/treeOfWar/sproutsR.webp",
            name: "Sprout",
            hotkey: "D",
            description: "Unlocks the &/elves/units/Ent& unit.",
            gold: 100
        },
        {
            img: "/images/elves/upgrades/treeOfWar/burrowR.png",
            imgR: "/images/elves/upgrades/treeOfWar/burrowR.png",
            name: "Burrow",
            hotkey: "D",
            description: "&/elves/units/Ent&<ul><li>Unlocks &/elves/units/Ent#Burrow& ability</li></ul>",
            gold: 100
        },
    ],
    "Druid": [
        {
            img: "/images/elves/upgrades/treeOfWar/druidTraining1.webp",
            imgR: "/images/elves/upgrades/treeOfWar/druidTraining1R.webp",
            name: "Druid Training 1",
            hotkey: "F",
            description: "Unlocks the &/elves/units/Druid&.",
            gold: 100
        },
        {
            img: "/images/elves/upgrades/treeOfWar/druidTraining2.webp",
            imgR: "/images/elves/upgrades/treeOfWar/druidTraining2R.webp",
            name: "Druid Training 2",
            hotkey: "F",
            description: "&/elves/units/Druid&<ul><li>Mana regeneration ^+0.15^/second</li><li>Unlocks the &/elves/units/Druid#Faerie Fire& ability</li></ul></ul>",
            gold: 150
        },
        {
            img: "/images/elves/upgrades/treeOfWar/druidTraining3.webp",
            imgR: "/images/elves/upgrades/treeOfWar/druidTraining3R.webp",
            name: "Druid Training 3",
            hotkey: "F",
            description: "&/elves/units/Druid&<ul><li>Mana regeneration ^+0.15^/second</li><li>Unlocks the &/elves/units/Druid#Cleanse& ability</li><li>Unlocks the &/elves/units/Druid#Drain Mana& ability</li></ul></ul>",
            gold: 150
        },
        {
            img: "/images/elves/upgrades/treeOfWar/druidTraining4.webp",
            imgR: "/images/elves/upgrades/treeOfWar/druidTraining4R.webp",
            name: "Druid Training 4",
            hotkey: "F",
            description: "&/elves/units/Druid&<ul><li>Mana regeneration ^+0.15^/second</li><li>Unlocks the &/elves/units/Druid#Slumber& ability</li><li>Unlocks the &/elves/units/Druid#Healing Rain& ability</li></ul></ul>",
            gold: 250
        },
    ]
};

// Convert all Object.values(treeOfWarUpgrades) to 1 array
const treeOfWarUpgradesArray = [];
Object.values(treeOfWarUpgrades).forEach(upgrades => {
    treeOfWarUpgradesArray.push(...upgrades);
});


const treeOfTechnologyUpgrades = [
    {
        name: "Speed", // Main upgrade category
        hotkey: "Q",
        description: "This upgrade lets you increase the movement speed of your &/elves/units/Elven Worker&. Useful for scouting, trapping and running away from enemies.",
        hasRequires: false, // if any of the levels requires another upgrade to progress (NO NEED TO USE FALSE, THIS IS HERE JUST TO SHOW HIERARCHY)
        upgrades: [ // All levels of the upgrade
            {
                lvl: 1,
                img: "/images/elves/upgrades/treeOfTechnology/speed/speed1.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/speed/speed1R.webp",
                gold: 20,
                changes: [ // Each change to unit/building
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves", // can be "unit", "building" or not initialize  at all
                        team: "elves",
                        stats: [ // Each change to specific stat of unit/building
                            {
                                name: "Move speed",
                                old: 250, // Old value
                                new: 262, // New value CAN ALSO BE STRING!!!!
                                parenthesesVal: "+12", // Value to display between brackets "(parenthesesVal)",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 2,
                img: "/images/elves/upgrades/treeOfTechnology/speed/speed2.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/speed/speed2R.webp",
                gold: 50,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Move speed",
                                old: 262,
                                new: 274,
                                parenthesesVal: "+12",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 3,
                img: "/images/elves/upgrades/treeOfTechnology/speed/speed3.png",
                gold: 80,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Move speed",
                                old: 274,
                                new: 286,
                                parenthesesVal: "+12",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 4,
                img: "/images/elves/upgrades/treeOfTechnology/speed/speed4.png",
                gold: 110,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Move speed",
                                old: 286,
                                new: 298,
                                parenthesesVal: "+12",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 5,
                img: "/images/elves/upgrades/treeOfTechnology/speed/speed5.png",
                gold: 140,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Move speed",
                                old: 298,
                                new: 310,
                                parenthesesVal: "+12",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Life",
        hotkey: "W",
        description: "This upgrade lets you increase the health points of your &/elves/units/Elven Worker&.",
        upgrades: [
            {
                lvl: 1,
                img: "/images/elves/upgrades/treeOfTechnology/life/life1.png",
                gold: 80,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Health",
                                old: 20,
                                new: 26,
                                parenthesesVal: "+6",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 2,
                img: "/images/elves/upgrades/treeOfTechnology/life/life2.png",
                gold: 100,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Health",
                                old: 26,
                                new: 32,
                                parenthesesVal: "+6",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 3,
                img: "/images/elves/upgrades/treeOfTechnology/life/life3.png",
                gold: 120,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Health",
                                old: 32,
                                new: 38,
                                parenthesesVal: "+6",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 4,
                img: "/images/elves/upgrades/treeOfTechnology/life/life4.png",
                gold: 140,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Health",
                                old: 38,
                                new: 44,
                                parenthesesVal: "+6",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 5,
                img: "/images/elves/upgrades/treeOfTechnology/life/life5.png",
                gold: 160,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Health",
                                old: 44,
                                new: 50,
                                parenthesesVal: "+6",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Magic",
        hotkey: "E",
        description: "Skill points can be spent in the &/elves/buildings/Spell Book& (%%F2%%) to unlock powerful abilities for your &/elves/units/Elven Worker&.",
        upgrades: [
            {
                lvl: 1,
                img: "/images/elves/upgrades/treeOfTechnology/magic.png",
                gold: 50,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Skill points",
                                old: 0,
                                new: 2,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Mana regeneration",
                                new: "+0.4/second",
                            },
                            {
                                name: "Max mana",
                                old: 0,
                                new: 100,
                                parenthesesVal: "+100",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 2,
                img: "/images/elves/upgrades/treeOfTechnology/magic.png",
                gold: 125,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Skill points",
                                old: 2,
                                new: 4,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Mana regeneration",
                                new: "+0.1/second",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 3,
                img: "/images/elves/upgrades/treeOfTechnology/magic.png",
                gold: 200,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Skill points",
                                old: 4,
                                new: 6,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Mana regeneration",
                                new: "+0.1/second",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 4,
                img: "/images/elves/upgrades/treeOfTechnology/magic.png",
                gold: 275,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Skill points",
                                old: 6,
                                new: 8,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Mana regeneration",
                                new: "+0.1/second",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 5,
                img: "/images/elves/upgrades/treeOfTechnology/magic.png",
                gold: 350,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Skill points",
                                old: 8,
                                new: 10,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Mana regeneration",
                                new: "+0.1/second",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Nourishment",
        hotkey: "R",
        description: "Used to make your buildings stronger.",
        upgrades: [
            {
                lvl: 1,
                img: "/images/elves/upgrades/treeOfTechnology/nourishment.png",
                gold: 50,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *2*",
                changes: [
                    {
                        name: "Buildings",
                        stats: [
                            {
                                name: "Health regeneration",
                                new: "+0.6/second",
                            },
                            {
                                name: "Construction starting health",
                                new: "+10%",
                            },
                            {
                                name: "Armor",
                                new: "+2",
                                description: "@(disappears ^2^ seconds after construction is finished)@"
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 2,
                img: "/images/elves/upgrades/treeOfTechnology/nourishment.png",
                gold: 100,
                changes: [
                    {
                        name: "Buildings",
                        stats: [
                            {
                                name: "Health regeneration",
                                new: "+0.7/second",
                            },
                            {
                                name: "Construction starting health",
                                new: "+30%",
                            },
                            {
                                name: "Armor",
                                new: "+5",
                                description: "@(disappears ^2^ seconds after construction is finished)@"
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 3,
                img: "/images/elves/upgrades/treeOfTechnology/nourishment.png",
                gold: 150,
                changes: [
                    {
                        name: "Buildings",
                        stats: [
                            {
                                name: "Health regeneration",
                                new: "+0.7/second",
                            },
                            {
                                name: "Construction starting health",
                                new: "+50%",
                            },
                            {
                                name: "Armor",
                                new: "+10",
                                description: "@(disappears ^2^ seconds after construction is finished)@"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Architecture",
        hotkey: "A",
        description: "Lets you build more units and blockers.",
        upgrades: [
            {
                lvl: 1,
                img: "/images/elves/upgrades/treeOfTechnology/architecture/architecture1.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/architecture/architecture1R.webp",
                gold: 50,
                changes: [
                    {
                        name: "Supply Cap",
                        stats: [
                            {
                                name: "Limit",
                                old: 3,
                                new: 8,
                                parenthesesVal: "+5",
                            }
                        ]
                    },
                    {
                        name: "Blocker",
                        type: "buildings",
                        stats: [
                            {
                                name: "Limit",
                                old: 4,
                                new: 6,
                                parenthesesVal: "+2",
                            }
                        ]
                    }
                ],
            },
            {
                lvl: 2,
                img: "/images/elves/upgrades/treeOfTechnology/architecture/architecture2.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/architecture/architecture2R.webp",
                gold: 150,
                changes: [
                    {
                        name: "Supply Cap",
                        stats: [
                            {
                                name: "Limit",
                                old: 8,
                                new: 12,
                                parenthesesVal: "+4",
                            }
                        ]
                    },
                    {
                        name: "Blocker",
                        type: "buildings",
                        stats: [
                            {
                                name: "Limit",
                                old: 6,
                                new: 8,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                new: "+55",
                            },
                            {
                                name: "Range",
                                new: "+50",
                            },
                            {
                                name: "Attack speed",
                                new: "+15%"
                            }
                        ]
                    }
                ],
            },
            {
                lvl: 3,
                img: "/images/elves/upgrades/treeOfTechnology/architecture/architecture3.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/architecture/architecture3R.webp",
                gold: 250,
                changes: [
                    {
                        name: "Supply Cap",
                        stats: [
                            {
                                name: "Limit",
                                old: 12,
                                new: 18,
                                parenthesesVal: "+6",
                            }
                        ]
                    },
                    {
                        name: "Blocker",
                        type: "buildings",
                        stats: [
                            {
                                name: "Limit",
                                old: 8,
                                new: 10,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                new: "+55",
                            },
                            {
                                name: "Range",
                                new: "+50",
                            },
                            {
                                name: "Attack speed",
                                new: "+15%"
                            }
                        ]
                    }
                ],
            },
            {
                lvl: 4,
                img: "/images/elves/upgrades/treeOfTechnology/architecture/architecture4.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/architecture/architecture4R.webp",
                gold: 350,
                changes: [
                    {
                        name: "Supply Cap",
                        stats: [
                            {
                                name: "Limit",
                                old: 18,
                                new: 24,
                                parenthesesVal: "+6",
                            }
                        ]
                    },
                    {
                        name: "Blocker",
                        type: "buildings",
                        stats: [
                            {
                                name: "Limit",
                                old: 10,
                                new: 12,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                new: "+55",
                            },
                            {
                                name: "Range",
                                new: "+50",
                            },
                            {
                                name: "Attack speed",
                                new: "+15%"
                            }
                        ]
                    }
                ],
            },
            {
                lvl: 5,
                img: "/images/elves/upgrades/treeOfTechnology/architecture/architecture5.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/architecture/architecture5R.webp",
                gold: 450,
                changes: [
                    {
                        name: "Supply Cap",
                        stats: [
                            {
                                name: "Limit",
                                old: 24,
                                new: 28,
                                parenthesesVal: "+4",
                            }
                        ]
                    },
                    {
                        name: "Blocker",
                        type: "buildings",
                        stats: [
                            {
                                name: "Limit",
                                old: 12,
                                new: 15,
                                parenthesesVal: "+3",
                            }
                        ]
                    },
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                new: "+55",
                            },
                            {
                                name: "Range",
                                new: "+50",
                            },
                            {
                                name: "Attack speed",
                                new: "+15%"
                            }
                        ]
                    }
                ],
            }
        ]
    },
    {
        name: "Armor",
        hotkey: "S",
        description: "Useful early game to prevent 1 hit kills from the enemy.",
        upgrades: [
            {
                lvl: 1,
                img: "/images/elves/upgrades/treeOfTechnology/armor.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/armorR.webp",
                gold: 40,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Armor",
                                old: 0,
                                new: 3,
                                parenthesesVal: "+3",
                            }
                        ]
                    }
                ],
            }
        ]
    },
    {
        name: "Tenacity",
        hotkey: "D",
        description: "Used for upgrading your &/elves/units/Ent& and &/elves/units/Druid&.",
        hasRequires: true,
        upgrades: [
            {
                lvl: 1,
                img: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity1.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity1R.webp",
                gold: 55,
                changes: [
                    {
                        name: "Ent",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 18,
                                new: 25,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 50,
                                new: 67,
                                parenthesesVal: "+17",
                            },
                            {
                                name: "Wrath Damage",
                                old: "50-200",
                                new: "55-219",
                                parenthesesVal: "+5/+19",
                            }
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 42,
                                new: 51,
                                parenthesesVal: "+9",
                            },
                            {
                                name: "Health",
                                old: 40,
                                new: 46,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Blizzard Damage",
                                old: 400,
                                new: 760,
                                parenthesesVal: "+360",
                            }
                        ]
                    },
                ]
            },
            {
                lvl: 2,
                img: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity2.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity2R.webp",
                gold: 65,
                changes: [
                    {
                        name: "Ent",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 25,
                                new: 32,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 67,
                                new: 84,
                                parenthesesVal: "+17",
                            },
                            {
                                name: "Wrath Damage",
                                old: "55-219",
                                new: "74-296",
                                parenthesesVal: "+19/+77",
                            },
                            {
                                name: "Armor",
                                old: 0,
                                new: 2,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 51,
                                new: 60,
                                parenthesesVal: "+9",
                            },
                            {
                                name: "Health",
                                old: 46,
                                new: 52,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Blizzard Damage",
                                old: 760,
                                new: 1120,
                                parenthesesVal: "+360",
                            },
                            {
                                name: "Armor",
                                old: 0,
                                new: 2,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Max mana",
                                old: 50,
                                new: 75,
                                parenthesesVal: "+25",
                            }
                        ]
                    },
                ]
            },
            {
                lvl: 3,
                img: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity3.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity3R.webp",
                gold: 75,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *2*",
                changes: [
                    {
                        name: "Ent",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 32,
                                new: 39,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 84,
                                new: 101,
                                parenthesesVal: "+17",
                            },
                            {
                                name: "Wrath Damage",
                                old: "74-296",
                                new: "108-431",
                                parenthesesVal: "+34/+135",
                            },
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 60,
                                new: 69,
                                parenthesesVal: "+9",
                            },
                            {
                                name: "Health",
                                old: 52,
                                new: 58,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Blizzard Damage",
                                old: 1120,
                                new: 1480,
                                parenthesesVal: "+360",
                            },
                        ]
                    },
                ]
            },
            {
                lvl: 4,
                img: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity4.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity4R.webp",
                gold: 85,
                changes: [
                    {
                        name: "Ent",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 39,
                                new: 46,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 101,
                                new: 118,
                                parenthesesVal: "+17",
                            },
                            {
                                name: "Wrath Damage",
                                old: "108-431",
                                new: "156-624",
                                parenthesesVal: "+48/+193",
                            },
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 69,
                                new: 78,
                                parenthesesVal: "+9",
                            },
                            {
                                name: "Health",
                                old: 58,
                                new: 64,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Blizzard Damage",
                                old: 1480,
                                new: 1840,
                                parenthesesVal: "+360",
                            },
                            {
                                name: "Max mana",
                                old: 75,
                                new: 100,
                                parenthesesVal: "+25",
                            }
                        ]
                    },
                ]
            },
            {
                lvl: 5,
                img: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity5.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity5R.webp",
                gold: 95,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *3*",
                changes: [
                    {
                        name: "Ent",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 46,
                                new: 53,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 118,
                                new: 135,
                                parenthesesVal: "+17",
                            },
                            {
                                name: "Wrath Damage",
                                old: "156-624",
                                new: "219-875",
                                parenthesesVal: "+63/+251",
                            },
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 78,
                                new: 87,
                                parenthesesVal: "+9",
                            },
                            {
                                name: "Health",
                                old: 64,
                                new: 70,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Blizzard Damage",
                                old: 1840,
                                new: 2200,
                                parenthesesVal: "+360",
                            },
                        ]
                    },
                ]
            },
            {
                lvl: 6,
                img: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity6.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity6R.webp",
                gold: 105,
                changes: [
                    {
                        name: "Ent",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 53,
                                new: 60,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 135,
                                new: 152,
                                parenthesesVal: "+17",
                            },
                            {
                                name: "Wrath Damage",
                                old: "219-875",
                                new: "295-1181",
                                parenthesesVal: "+76/+306",
                            },
                            {
                                name: "Armor",
                                old: 2,
                                new: 5,
                                parenthesesVal: "+3",
                            }
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 87,
                                new: 96,
                                parenthesesVal: "+9",
                            },
                            {
                                name: "Health",
                                old: 70,
                                new: 76,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Blizzard Damage",
                                old: 2200,
                                new: 2560,
                                parenthesesVal: "+360",
                            },
                            {
                                name: "Max mana",
                                old: 100,
                                new: 125,
                                parenthesesVal: "+25",
                            },
                            {
                                name: "Armor",
                                old: 2,
                                new: 5,
                                parenthesesVal: "+3",
                            }
                        ]
                    },
                ]
            },
            {
                lvl: 7,
                img: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity7.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity7R.webp",
                gold: 115,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *4*",
                changes: [
                    {
                        name: "Ent",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 60,
                                new: 67,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 152,
                                new: 169,
                                parenthesesVal: "+17",
                            },
                            {
                                name: "Wrath Damage",
                                old: "295-1181",
                                new: "388-1551",
                                parenthesesVal: "+93/+370",
                            },
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 96,
                                new: 105,
                                parenthesesVal: "+9",
                            },
                            {
                                name: "Health",
                                old: 76,
                                new: 82,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Blizzard Damage",
                                old: 2560,
                                new: 2920,
                                parenthesesVal: "+360",
                            },
                        ]
                    },
                ]
            },
            {
                lvl: 8,
                img: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity8.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity8R.webp",
                gold: 125,
                changes: [
                    {
                        name: "Ent",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 67,
                                new: 74,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 169,
                                new: 186,
                                parenthesesVal: "+17",
                            },
                            {
                                name: "Wrath Damage",
                                old: "388-1551",
                                new: "494-1976",
                                parenthesesVal: "+106/+425",
                            },
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 105,
                                new: 114,
                                parenthesesVal: "+9",
                            },
                            {
                                name: "Health",
                                old: 82,
                                new: 88,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Blizzard Damage",
                                old: 2920,
                                new: 3280,
                                parenthesesVal: "+360",
                            },
                            {
                                name: "Max mana",
                                old: 125,
                                new: 150,
                                parenthesesVal: "+25",
                            },
                        ]
                    },
                ]
            },
            {
                lvl: 9,
                img: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity9.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity9R.webp",
                gold: 135,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *5*",
                changes: [
                    {
                        name: "Ent",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 74,
                                new: 81,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 186,
                                new: 203,
                                parenthesesVal: "+17",
                            },
                            {
                                name: "Wrath Damage",
                                old: "494-1976",
                                new: "615-2459",
                                parenthesesVal: "+121/+483",
                            },
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 114,
                                new: 123,
                                parenthesesVal: "+9",
                            },
                            {
                                name: "Health",
                                old: 88,
                                new: 94,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Blizzard Damage",
                                old: 3280,
                                new: 3640,
                                parenthesesVal: "+360",
                            },
                        ]
                    },
                ]
            },
            {
                lvl: 10,
                img: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity10.webp",
                imgR: "/images/elves/upgrades/treeOfTechnology/tenacity/tenacity10R.webp",
                gold: 145,
                changes: [
                    {
                        name: "Ent",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 81,
                                new: 88,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 203,
                                new: 220,
                                parenthesesVal: "+17",
                            },
                            {
                                name: "Wrath Damage",
                                old: "615-2459",
                                new: "750-3000",
                                parenthesesVal: "+135/+541",
                            },
                            {
                                name: "Attack speed",
                                new: "+25%",
                            }
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 123,
                                new: 132,
                                parenthesesVal: "+9",
                            },
                            {
                                name: "Health",
                                old: 94,
                                new: 100,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Blizzard Damage",
                                old: 3640,
                                new: 4000,
                                parenthesesVal: "+360",
                            },
                            {
                                name: "Attack speed",
                                new: "+25%",
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        name: "Construction",
        hotkey: "F",
        description: "Upgrades for your towers.",
        hasRequires: true,
        upgrades: [
            {
                lvl: 1,
                img: "/images/elves/buildings/magicTower.webp",
                imgR: "/images/elves/buildings/magicTowerR.webp",
                gold: 55,
                changes: [
                    {
                        name: "Magic Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 14,
                                new: 18,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 20,
                                new: 28,
                                parenthesesVal: "+8",
                            }
                        ]
                    },
                    {
                        name: "Fire Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 12,
                                new: 16,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 20,
                                new: 28,
                                parenthesesVal: "+8",
                            }
                        ]
                    },
                    {
                        name: "Earth Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 14,
                                new: 18,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 20,
                                new: 28,
                                parenthesesVal: "+8",
                            }
                        ]
                    },
                    {
                        name: "Frost Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 32,
                                new: 48,
                                parenthesesVal: "+16",
                            },
                            {
                                name: "Health",
                                old: 20,
                                new: 28,
                                parenthesesVal: "+8",
                            }
                        ]
                    },
                    {
                        name: "Lightning Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 65,
                                new: 89,
                                parenthesesVal: "+24",
                            },
                            {
                                name: "Health",
                                old: 20,
                                new: 28,
                                parenthesesVal: "+8",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 2,
                img: "/images/elves/buildings/magicTower.webp",
                imgR: "/images/elves/buildings/magicTowerR.webp",
                gold: 65,
                changes: [
                    {
                        name: "Magic Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 18,
                                new: 22,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 28,
                                new: 36,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Armor",
                                old: 0,
                                new: 5,
                                parenthesesVal: "+5",
                            }
                        ]
                    },
                    {
                        name: "Fire Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 16,
                                new: 20,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 28,
                                new: 36,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Armor",
                                old: 0,
                                new: 5,
                                parenthesesVal: "+5",
                            }
                        ]
                    },
                    {
                        name: "Earth Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 18,
                                new: 22,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 28,
                                new: 36,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Armor",
                                old: 0,
                                new: 5,
                                parenthesesVal: "+5",
                            }
                        ]
                    },
                    {
                        name: "Frost Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 48,
                                new: 64,
                                parenthesesVal: "+16",
                            },
                            {
                                name: "Health",
                                old: 28,
                                new: 36,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Armor",
                                old: 0,
                                new: 5,
                                parenthesesVal: "+5",
                            }
                        ]
                    },
                    {
                        name: "Lightning Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 89,
                                new: 113,
                                parenthesesVal: "+24",
                            },
                            {
                                name: "Health",
                                old: 28,
                                new: 36,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Armor",
                                old: 0,
                                new: 5,
                                parenthesesVal: "+5",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 3,
                img: "/images/elves/buildings/fireTower/fireTower.webp",
                imgR: "/images/elves/buildings/fireTower/fireTowerR.webp",
                gold: 75,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *2*",
                changes: [
                    {
                        name: "Magic Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 22,
                                new: 26,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 36,
                                new: 44,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Fire Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 20,
                                new: 24,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 36,
                                new: 44,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Earth Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 22,
                                new: 26,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 36,
                                new: 44,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Frost Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 64,
                                new: 80,
                                parenthesesVal: "+16",
                            },
                            {
                                name: "Health",
                                old: 36,
                                new: 44,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Lightning Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 113,
                                new: 137,
                                parenthesesVal: "+24",
                            },
                            {
                                name: "Health",
                                old: 36,
                                new: 44,
                                parenthesesVal: "+8",
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 4,
                img: "/images/elves/buildings/fireTower/fireTower.webp",
                imgR: "/images/elves/buildings/fireTower/fireTowerR.webp",
                gold: 85,
                changes: [
                    {
                        name: "Magic Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 26,
                                new: 30,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 44,
                                new: 52,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Mana regen",
                                old: 0.2,
                                new: 0.5,
                                parenthesesVal: "+0.3",
                            }
                        ]
                    },
                    {
                        name: "Fire Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 24,
                                new: 28,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 44,
                                new: 52,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Mana regen",
                                old: 0.2,
                                new: 0.5,
                                parenthesesVal: "+0.3",
                            }
                        ]
                    },
                    {
                        name: "Earth Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 26,
                                new: 30,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 44,
                                new: 52,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Mana regen",
                                old: 0.2,
                                new: 0.5,
                                parenthesesVal: "+0.3",
                            }
                        ]
                    },
                    {
                        name: "Frost Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 80,
                                new: 96,
                                parenthesesVal: "+16",
                            },
                            {
                                name: "Health",
                                old: 44,
                                new: 52,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Mana regen",
                                old: 0.2,
                                new: 0.5,
                                parenthesesVal: "+0.3",
                            }
                        ]
                    },
                    {
                        name: "Lightning Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 137,
                                new: 161,
                                parenthesesVal: "+24",
                            },
                            {
                                name: "Health",
                                old: 44,
                                new: 52,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Mana regen",
                                old: 0.2,
                                new: 0.5,
                                parenthesesVal: "+0.3",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 5,
                img: "/images/elves/buildings/frostTower/frostTower.webp",
                imgR: "/images/elves/buildings/frostTower/frostTowerR.webp",
                gold: 95,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *3*",
                changes: [
                    {
                        name: "Magic Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 30,
                                new: 34,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 52,
                                new: 60,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Fire Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 28,
                                new: 32,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 52,
                                new: 60,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Earth Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 30,
                                new: 34,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 52,
                                new: 60,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Frost Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 96,
                                new: 112,
                                parenthesesVal: "+16",
                            },
                            {
                                name: "Health",
                                old: 52,
                                new: 60,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Lightning Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 161,
                                new: 185,
                                parenthesesVal: "+24",
                            },
                            {
                                name: "Health",
                                old: 52,
                                new: 60,
                                parenthesesVal: "+8",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 6,
                img: "/images/elves/buildings/frostTower/frostTower.webp",
                imgR: "/images/elves/buildings/frostTower/frostTowerR.webp",
                gold: 105,
                changes: [
                    {
                        name: "Magic Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 34,
                                new: 38,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 60,
                                new: 68,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Build speed",
                                new: "+66%",
                            },
                            {
                                name: "Upgrade speed",
                                new: "+50%",
                            }
                        ]
                    },
                    {
                        name: "Fire Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 32,
                                new: 36,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 60,
                                new: 68,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Build speed",
                                new: "+66%",
                            },
                            {
                                name: "Upgrade speed",
                                new: "+50%",
                            }
                        ]
                    },
                    {
                        name: "Earth Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 34,
                                new: 38,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 60,
                                new: 68,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Build speed",
                                new: "+66%",
                            },
                            {
                                name: "Upgrade speed",
                                new: "+50%",
                            }
                        ]
                    },
                    {
                        name: "Frost Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 112,
                                new: 128,
                                parenthesesVal: "+16",
                            },
                            {
                                name: "Health",
                                old: 60,
                                new: 68,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Build speed",
                                new: "+66%",
                            },
                            {
                                name: "Upgrade speed",
                                new: "+50%",
                            }
                        ]
                    },
                    {
                        name: "Lightning Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 185,
                                new: 209,
                                parenthesesVal: "+24",
                            },
                            {
                                name: "Health",
                                old: 60,
                                new: 68,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Build speed",
                                new: "+66%",
                            },
                            {
                                name: "Upgrade speed",
                                new: "+50%",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 7,
                img: "/images/elves/buildings/earthTower/earthTower.webp",
                imgR: "/images/elves/buildings/earthTower/earthTowerR.webp",
                gold: 115,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *4*",
                changes: [
                    //only damage and health upg
                    {
                        name: "Magic Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 38,
                                new: 42,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 68,
                                new: 76,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Fire Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 36,
                                new: 40,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 68,
                                new: 76,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Earth Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 38,
                                new: 42,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 68,
                                new: 76,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Frost Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 128,
                                new: 144,
                                parenthesesVal: "+16",
                            },
                            {
                                name: "Health",
                                old: 68,
                                new: 76,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Lightning Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 209,
                                new: 233,
                                parenthesesVal: "+24",
                            },
                            {
                                name: "Health",
                                old: 68,
                                new: 76,
                                parenthesesVal: "+8",
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 8,
                img: "/images/elves/buildings/earthTower/earthTower.webp",
                imgR: "/images/elves/buildings/earthTower/earthTowerR.webp",
                gold: 125,
                changes: [
                    {
                        name: "Magic Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 42,
                                new: 46,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 76,
                                new: 84,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Fire Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 40,
                                new: 44,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 76,
                                new: 84,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Max mana",
                                old: 50,
                                new: 100,
                                parenthesesVal: "+100%",
                            }
                        ]
                    },
                    {
                        name: "Earth Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 42,
                                new: 46,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 76,
                                new: 84,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Frost Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 144,
                                new: 160,
                                parenthesesVal: "+16",
                            },
                            {
                                name: "Health",
                                old: 76,
                                new: 84,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Max mana",
                                old: 50,
                                new: 100,
                                parenthesesVal: "+100%",
                            }
                        ]
                    },
                    {
                        name: "Lightning Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 233,
                                new: 257,
                                parenthesesVal: "+24",
                            },
                            {
                                name: "Health",
                                old: 76,
                                new: 84,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Max mana",
                                old: 50,
                                new: 100,
                                parenthesesVal: "+100%",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 9,
                img: "/images/elves/buildings/lightningTower/lightningTower.webp",
                imgR: "/images/elves/buildings/lightningTower/lightningTowerR.webp",
                gold: 135,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *5*",
                changes: [
                    {
                        name: "Magic Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 46,
                                new: 50,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 84,
                                new: 92,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Fire Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 44,
                                new: 48,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 84,
                                new: 92,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Earth Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 46,
                                new: 50,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 84,
                                new: 92,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Frost Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 160,
                                new: 176,
                                parenthesesVal: "+16",
                            },
                            {
                                name: "Health",
                                old: 84,
                                new: 92,
                                parenthesesVal: "+8",
                            },
                        ]
                    },
                    {
                        name: "Lightning Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 257,
                                new: 281,
                                parenthesesVal: "+24",
                            },
                            {
                                name: "Health",
                                old: 84,
                                new: 92,
                                parenthesesVal: "+8",
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 10,
                img: "/images/elves/buildings/lightningTower/lightningTower.webp",
                imgR: "/images/elves/buildings/lightningTower/lightningTowerR.webp",
                gold: 145,
                changes: [
                    {
                        name: "Magic Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 50,
                                new: 54,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 92,
                                new: 100,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Spell damage taken",
                                new: "-100%",
                            }
                        ]
                    },
                    {
                        name: "Fire Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 48,
                                new: 52,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 92,
                                new: 100,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Spell damage taken",
                                new: "-100%",
                            }
                        ]
                    },
                    {
                        name: "Earth Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 50,
                                new: 54,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 92,
                                new: 100,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Spell damage taken",
                                new: "-100%",
                            }
                        ]
                    },
                    {
                        name: "Frost Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 176,
                                new: 192,
                                parenthesesVal: "+16",
                            },
                            {
                                name: "Health",
                                old: 92,
                                new: 100,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Spell damage taken",
                                new: "-100%",
                            }
                        ]
                    },
                    {
                        name: "Lightning Tower",
                        type: "buildings",
                        stats: [
                            {
                                name: "Damage",
                                old: 281,
                                new: 305,
                                parenthesesVal: "+24",
                            },
                            {
                                name: "Health",
                                old: 92,
                                new: 100,
                                parenthesesVal: "+8",
                            },
                            {
                                name: "Spell damage taken",
                                new: "-100%",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Leadership",
        hotkey: "Z",
        description: "Upgrades for your attack units.",
        hasRequires: true,
        upgrades: [
            {
                lvl: 1,
                img: "/images/elves/upgrades/treeOfTechnology/leadership/leadership1.png",
                gold: 55,
                changes: [
                    {
                        name: "Archer",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 8,
                                new: 12,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 20,
                                new: 22,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Hippogryph",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 4,
                                new: 5,
                                parenthesesVal: "+1",
                            },
                            {
                                name: "Health",
                                old: 50,
                                new: 63,
                                parenthesesVal: "+13",
                            }
                        ]
                    },
                    {
                        name: "Hippogryph Rider",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 20,
                                new: 27,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 40,
                                new: 46,
                                parenthesesVal: "+6",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 2,
                img: "/images/elves/upgrades/treeOfTechnology/leadership/leadership2.png",
                gold: 65,
                changes: [
                    {
                        name: "Archer",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 12,
                                new: 16,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 22,
                                new: 24,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Life regeneration",
                                new: "+0.2"
                            }
                        ]
                    },
                    {
                        name: "Hippogryph",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 5,
                                new: 6,
                                parenthesesVal: "+1",
                            },
                            {
                                name: "Health",
                                old: 63,
                                new: 76,
                                parenthesesVal: "+13",
                            },
                            {
                                name: "Life regeneration",
                                new: "+0.2"
                            }
                        ]
                    },
                    {
                        name: "Hippogryph Rider",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 27,
                                new: 34,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 46,
                                new: 52,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Life regeneration",
                                new: "+0.2"
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 3,
                img: "/images/elves/upgrades/treeOfTechnology/leadership/leadership3.png",
                gold: 75,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *2*",
                changes: [
                    {
                        name: "Archer",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 16,
                                new: 20,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 24,
                                new: 26,
                                parenthesesVal: "+2",
                            },
                        ]
                    },
                    {
                        name: "Hippogryph",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 6,
                                new: 7,
                                parenthesesVal: "+1",
                            },
                            {
                                name: "Health",
                                old: 76,
                                new: 89,
                                parenthesesVal: "+13",
                            },
                        ]
                    },
                    {
                        name: "Hippogryph Rider",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 34,
                                new: 41,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 52,
                                new: 58,
                                parenthesesVal: "+6",
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 4,
                img: "/images/elves/upgrades/treeOfTechnology/leadership/leadership4.png",
                gold: 85,
                changes: [
                    {
                        name: "Archer",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 20,
                                new: 24,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 26,
                                new: 28,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Move speed",
                                old: 250,
                                new: 275,
                                parenthesesVal: "+10%",
                            }
                        ]
                    },
                    {
                        name: "Hippogryph",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 7,
                                new: 8,
                                parenthesesVal: "+1",
                            },
                            {
                                name: "Health",
                                old: 89,
                                new: 102,
                                parenthesesVal: "+13",
                            },
                            {
                                name: "Move speed",
                                old: 300,
                                new: 330,
                                parenthesesVal: "+10%",
                            }
                        ]
                    },
                    {
                        name: "Hippogryph Rider",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 41,
                                new: 48,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 58,
                                new: 64,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Move speed",
                                old: 300,
                                new: 330,
                                parenthesesVal: "+10%",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 5,
                img: "/images/elves/upgrades/treeOfTechnology/leadership/leadership5.png",
                gold: 95,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *3*",
                changes: [
                    {
                        name: "Archer",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 24,
                                new: 28,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 28,
                                new: 30,
                                parenthesesVal: "+2",
                            },
                        ]
                    },
                    {
                        name: "Hippogryph",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 8,
                                new: 9,
                                parenthesesVal: "+1",
                            },
                            {
                                name: "Health",
                                old: 102,
                                new: 115,
                                parenthesesVal: "+13",
                            },
                        ]
                    },
                    {
                        name: "Hippogryph Rider",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 48,
                                new: 55,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 64,
                                new: 70,
                                parenthesesVal: "+6",
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 6,
                img: "/images/elves/upgrades/treeOfTechnology/leadership/leadership6.png",
                gold: 105,
                changes: [
                    {
                        name: "Archer",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 28,
                                new: 32,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 30,
                                new: 32,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Armor",
                                old: 0,
                                new: 2,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Hippogryph",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 9,
                                new: 10,
                                parenthesesVal: "+1",
                            },
                            {
                                name: "Health",
                                old: 115,
                                new: 128,
                                parenthesesVal: "+13",
                            },
                            {
                                name: "Armor",
                                old: 0,
                                new: 2,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Hippogryph Rider",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 55,
                                new: 62,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 70,
                                new: 76,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Armor",
                                old: 0,
                                new: 2,
                                parenthesesVal: "+2",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 7,
                img: "/images/elves/upgrades/treeOfTechnology/leadership/leadership7.png",
                gold: 115,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *4*",
                changes: [
                    {
                        name: "Archer",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 32,
                                new: 36,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 32,
                                new: 34,
                                parenthesesVal: "+2",
                            },
                        ]
                    },
                    {
                        name: "Hippogryph",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 10,
                                new: 11,
                                parenthesesVal: "+1",
                            },
                            {
                                name: "Health",
                                old: 128,
                                new: 141,
                                parenthesesVal: "+13",
                            },
                        ]
                    },
                    {
                        name: "Hippogryph Rider",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 62,
                                new: 69,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 76,
                                new: 82,
                                parenthesesVal: "+6",
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 8,
                img: "/images/elves/upgrades/treeOfTechnology/leadership/leadership8.png",
                gold: 125,
                changes: [
                    {
                        name: "Archer",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 36,
                                new: 40,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 34,
                                new: 36,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Move speed",
                                old: 275,
                                new: 316,
                                parenthesesVal: "+15%",
                            }
                        ]
                    },
                    {
                        name: "Hippogryph",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 11,
                                new: 12,
                                parenthesesVal: "+1",
                            },
                            {
                                name: "Health",
                                old: 141,
                                new: 154,
                                parenthesesVal: "+13",
                            },
                            {
                                name: "Move speed",
                                old: 330,
                                new: 380,
                                parenthesesVal: "+15%",
                            }
                        ]
                    },
                    {
                        name: "Hippogryph Rider",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 69,
                                new: 76,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 82,
                                new: 88,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Move speed",
                                old: 330,
                                new: 380,
                                parenthesesVal: "+15%",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 9,
                img: "/images/elves/upgrades/treeOfTechnology/leadership/leadership9.png",
                gold: 135,
                requires: "&/elves/buildings/treeOfTechnology/#Architecture& *5*",
                changes: [
                    {
                        name: "Archer",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 40,
                                new: 44,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 36,
                                new: 38,
                                parenthesesVal: "+2",
                            },
                        ]
                    },
                    {
                        name: "Hippogryph",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 12,
                                new: 13,
                                parenthesesVal: "+1",
                            },
                            {
                                name: "Health",
                                old: 154,
                                new: 167,
                                parenthesesVal: "+13",
                            },
                        ]
                    },
                    {
                        name: "Hippogryph Rider",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 76,
                                new: 83,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 88,
                                new: 94,
                                parenthesesVal: "+6",
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 10,
                img: "/images/elves/upgrades/treeOfTechnology/leadership/leadership10.png",
                gold: 145,
                changes: [
                    {
                        name: "Archer",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 44,
                                new: 48,
                                parenthesesVal: "+4",
                            },
                            {
                                name: "Health",
                                old: 38,
                                new: 40,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Armor",
                                old: 2,
                                new: 5,
                                parenthesesVal: "+3",
                            }
                        ]
                    },
                    {
                        name: "Hippogryph",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 13,
                                new: 14,
                                parenthesesVal: "+1",
                            },
                            {
                                name: "Health",
                                old: 167,
                                new: 180,
                                parenthesesVal: "+13",
                            },
                            {
                                name: "Armor",
                                old: 2,
                                new: 5,
                                parenthesesVal: "+3",
                            }
                        ]
                    },
                    {
                        name: "Hippogryph Rider",
                        type: "units", team: "elves",
                        stats: [
                            {
                                name: "Damage",
                                old: 83,
                                new: 90,
                                parenthesesVal: "+7",
                            },
                            {
                                name: "Health",
                                old: 94,
                                new: 100,
                                parenthesesVal: "+6",
                            },
                            {
                                name: "Armor",
                                old: 2,
                                new: 5,
                                parenthesesVal: "+3",
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

export const treeOfLifeUpgrades = [
    {
        img: "/images/elves/upgrades/treeOfLife/regeneration.webp",
        imgR: "/images/elves/upgrades/treeOfLife/regenerationR.webp",
        name: "Regeneration",
        hotkey: "Q",
        description: "The &/elves/units/Elven Worker& health regenerates ^+3%^ life per second."
    },
    {
        img: "/images/elves/upgrades/treeOfLife/wildGrowth.webp",
        imgR: "/images/elves/upgrades/treeOfLife/wildGrowthR.webp",
        name: "Wild Growth",
        hotkey: "W",
        description: "Allows you to build structures without a &/elves/buildings/Gold Mine&."
    },
    {
        img: "/images/elves/buildings/techCenter.webp",
        imgR: "/images/elves/buildings/techCenterR.webp",
        name: "Tech Center",
        hotkey: "E",
        description: "<p>Replace the &/elves/buildings/Tree Of Technology& with the &/elves/buildings/Tech Center&.</p><p>The &/elves/buildings/Tech Center& has ^2x2^ size and is built ^+33%^ faster.</p><p class='text-danger'>All player owned &/elves/buildings/Tree Of Technology& are destroyed and refunded when you choose this talent.</p>"
    },
    {
        img: "/images/elves/buildings/barracks.webp",
        imgR: "/images/elves/buildings/barracksR.webp",
        name: "Barracks",
        hotkey: "R",
        description: "<p>Replace the &/elves/buildings/Tree Of War& with the &/elves/buildings/Barracks&.</p><p>The &/elves/buildings/Barracks& has ^2x2^ size and is built ^+33%^ faster.</p><p class='text-danger'>All player owned &/elves/buildings/Tree Of War& are destroyed and refunded when you choose this talent.</p>"
    },
    {
        img: "/images/elves/upgrades/treeOfLife/persistence.webp",
        imgR: "/images/elves/upgrades/treeOfLife/persistenceR.webp",
        name: "Persistence",
        hotkey: "A",
        description: "<p>Your next revive is free (0g) and without death penalty (%gold).</p><p class='text-danger'>If you are dead when you select this talent, then it takes effect immediately but the charge is consumed.</p>"
    },
    {
        img: "/images/elves/upgrades/treeOfLife/savior.webp",
        imgR: "/images/elves/upgrades/treeOfLife/saviorR.webp",
        name: "Savior",
        hotkey: "S",
        description: "When resurrecting other players ^30%^ of the gold you send is also added to their bonus pool and reduced from the cost of their next revive."
    },
    {
        img: "/images/elves/upgrades/treeOfLife/trickery.webp",
        imgR: "/images/elves/upgrades/treeOfLife/trickeryR.webp",
        name: "Trickery",
        hotkey: "D",
        description: "<p>Reduce the &/elves/units/Elven Worker& abilities cooldown by ^-15%^.</p><p>You also respawn with ^50%^ of your maximum mana when returning to the map after a resurrection.</p>"
    },
    {
        img: "/images/elves/upgrades/treeOfLife/naturalBond.webp",
        imgR: "/images/elves/upgrades/treeOfLife/naturalBondR.webp",
        name: "Natural Bond",
        hotkey: "F",
        description: "<p>Reduce resurrection time by ^-50%^.</p><p>Spawn a free &/elves/units/Owl Scout& when you return to the map after resurrecting.</p>"
    },
    {
        img: "/images/elves/upgrades/treeOfLife/shatter.webp",
        imgR: "/images/elves/upgrades/treeOfLife/shatterR.webp",
        name: "Shatter",
        hotkey: "Z",
        description: "The &/elves/units/Elven Worker& deals ^+1^ additional damage per hit to destructible objects."
    },
    {
        img: "/images/elves/upgrades/treeOfLife/resurrection.png",
        imgR: "/images/elves/upgrades/treeOfLife/resurrection.png",
        name: "Resurrection",
        hotkey: "V",
        description: "Resurrect your &/elves/units/Elven Worker&."
    }
];

export const elvesBuildings = [
    {
        img: "/images/elves/buildings/goldMine.webp",
        imgR: "/images/elves/buildings/goldMineR.webp",
        name: "Gold Mine",
        team: "elves",
        type: "buildings",
        hotkey: "G",
        feed: "0-3",
        stats: {
            "Health": 40,
        },
        description: "Entangle a &/elves/buildings/Gold Mine& so that the &/elves/units/Elven Worker& can harvest gold.<p>@This structure feeds gold only when killed after the ^10^ minute mark.@</p>",
    },
    {
        img: "/images/elves/buildings/blocker/blocker.webp",
        imgR: "/images/elves/buildings/blocker/blockerR.webp",
        name: "Blocker",
        team: "elves",
        type: "buildings",
        hotkey: "B",
        gold: 8,
        externalUpgrades: [
            {
                name: "Tree of Technology",
                url: "/elves/buildings/treeOfTechnology",
            }
        ],
        hasRequires: true,
        feed: "3-6",
        description: "The &/elves/buildings/Blocker& has ^80^ health and can be used to wall off sections of the map to restrict the mobility of the opposing team.<p>You can use the blocker as a ruler to measure the distance between objects. If there is ^1^ blocker space between any obstacle either horizontally, vertically or diagonally the enemy cannot walk in.</p>",
        stats: {
            "Health": 80,
        },
        upgrades: [
            {
                img: "/images/elves/buildings/blocker/blocker.webp",
                imgR: "/images/elves/buildings/blocker/blockerR.webp",
                hotkey: "U",
                gold: 6,
                feed: "6-12",
                name: "Big Blocker",
                requires: "&/elves/buildings/treeOfTechnology#Architecture& *1*",
                description: `Upgrade &/elves/buildings/Blocker& to &/elves/buildings/Blocker#Big Blocker&<ul><li>Health: 80 -> ^154^ (^+74^)</li><li>Feed: 3-6 -> @6-12@</li></ul>`
            },
            {
                img: "/images/elves/buildings/blocker/stoneBlocker.webp",
                imgR: "/images/elves/buildings/blocker/stoneBlockerR.webp",
                hotkey: "U",
                gold: 8,
                feed: "9-18",
                name: "Stone Blocker",
                description: "Upgrade &/elves/buildings/Blocker#Big Blocker& to &/elves/buildings/Blocker#Stone Blocker&<ul><li>Health: 154 -> ^264^ (^+110^)</li><li>Feed: 6-12 -> @9-18@</li></ul>"
            },
            {
                img: "/images/elves/buildings/blocker/redStoneBlocker.webp",
                imgR: "/images/elves/buildings/blocker/redStoneBlockerR.webp",
                hotkey: "U",
                gold: 13,
                feed: "14-28",
                name: "Red Stone Blocker",
                description: "Upgrade &/elves/buildings/Blocker#Stone Blocker& to &/elves/buildings/Blocker#Red Stone Blocker&<ul><li>Health: 264 -> ^455^ (^+191^)</li><li>Feed: 9-18 -> @14-28@</li></ul>"
            },
            {
                img: "/images/elves/buildings/blocker/crystalBlocker.webp",
                imgR: "/images/elves/buildings/blocker/crystalBlockerR.webp",
                hotkey: "U",
                gold: 19,
                feed: "22-44",
                name: "Crystal Blocker",
                description: "Upgrade &/elves/buildings/Blocker#Red Stone Blocker& to &/elves/buildings/Blocker#Crystal Blocker&<ul><li>Health: 455 -> ^756^ (^+301^)</li><li>Feed: 14-28 -> @22-44@</li></ul>"
            },
            {
                img: "/images/elves/buildings/blocker/magicBlocker.webp",
                imgR: "/images/elves/buildings/blocker/magicBlockerR.webp",
                hotkey: "U",
                gold: 26,
                feed: "32-64",
                name: "Magic Blocker",
                description: "Upgrade &/elves/buildings/Blocker#Crystal Blocker& to &/elves/buildings/Blocker#Magic Blocker&<ul><li>Health: 756 -> ^1200^ (^+444^)</li><li>Feed: 22-44 -> @32-64@</li></ul>"
            },
        ]
    },
    {
        img: "/images/elves/buildings/treeOfWar.webp",
        imgR: "/images/elves/buildings/treeOfWarR.webp",
        name: "Tree Of War",
        team: "elves",
        type: "buildings",
        hotkey: "R",
        gold: 30,
        feed: "12-24",
        stats: {
            "Health": 40,
        },
        description: "A structure that can train and upgrade units. Build this structure behind upgraded blockers or inside a strong base to get more time to produce an army.",
        upgrades: treeOfWarUpgradesArray,
    },
    {
        img: "/images/elves/buildings/treeOfTechnology.webp",
        imgR: "/images/elves/buildings/treeOfTechnologyR.webp",
        name: "Tree Of Technology",
        team: "elves",
        type: "buildings",
        hotkey: "C",
        description: "A research facility that offer upgrades for units and structures. Build this when the enemies are far away to get enough time to research time-consuming upgrades, or place it inside a strong base.",
        gold: 40,
        feed: "16-32",
        stats: {
            "Health": 40,
        },
        upgradesSeparated: treeOfTechnologyUpgrades
    },
    {
        img: "/images/elves/buildings/treeOfLife.webp",
        imgR: "/images/elves/buildings/treeOfLifeR.webp",
        name: "Tree Of Life",
        team: "elves",
        type: "buildings",
        description: "A structure that can unlock talents. It's located in the top-left corner of the map.",
        upgrades: treeOfLifeUpgrades
    },
    {
        img: "/images/elves/buildings/magicTower.webp",
        imgR: "/images/elves/buildings/magicTowerR.webp",
        name: "Magic Tower",
        team: "elves",
        type: "buildings",
        requires: "&/elves/buildings/treeOfTechnology#Architecture& *1*",
        description: "<p>^Requires &/elves/buildings/TreeOfTechnology#Architecture& *1*.^</p>A balanced tower with moderate damage output, range and attack speed.",
        gold: 20,
        feed: "8-16",
        supply: 2,
        stats: {
            "Attack Damage": 14,
            "Attack Speed": 1.0,
            "Attack Range": 600,
            "Health": 20,
            "Mana regeneration": 0.2,
        },
        externalUpgrades: [
            {
                name: "Tree of Technology",
                url: "/elves/buildings/treeOfTechnology",
            }
        ],
        upgrades: [
            {
                img: "/images/elves/upgrades/magicTower/pathOfFire.webp",
                imgR: "/images/elves/upgrades/magicTower/pathOfFireR.webp",
                name: "Path of Fire",
                hotkey: "Z",
                gold: 100,
                description: "Unlock the &/elves/buildings/Fire Tower&."
            },
            {
                img: "/images/elves/upgrades/magicTower/pathOfEarth.webp",
                imgR: "/images/elves/upgrades/magicTower/pathOfEarthR.webp",
                name: "Path of Earth",
                hotkey: "X",
                gold: 100,
                description: "Unlock the &/elves/buildings/Earth Tower&."
            },
            {
                img: "/images/elves/upgrades/magicTower/pathOfFrost.webp",
                imgR: "/images/elves/upgrades/magicTower/pathOfFrostR.webp",
                name: "Path of Frost",
                hotkey: "C",
                gold: 100,
                description: "Unlock the &/elves/buildings/Frost Tower&."
            },
            {
                img: "/images/elves/upgrades/magicTower/pathOfLightning.webp",
                imgR: "/images/elves/upgrades/magicTower/pathOfLightningR.webp",
                name: "Path of Lightning",
                hotkey: "V",
                gold: 300,
                description: "Unlock the &/elves/buildings/Lightning Tower&."
            },
            {
                img: "/images/elves/buildings/fireTower/fireTower.webp",
                imgR: "/images/elves/buildings/fireTower/fireTowerR.webp",
                name: "Fire Tower",
                hotkey: "Z",
                gold: 30,
                supply: 3,
                description: "Upgrade to &/elves/buildings/Fire Tower&."
            },
            {
                img: "/images/elves/buildings/earthTower/earthTower.webp",
                imgR: "/images/elves/buildings/earthTower/earthTowerR.webp",
                name: "Earth Tower",
                hotkey: "X",
                gold: 20,
                supply: 2,
                description: "Upgrade to &/elves/buildings/Earth Tower&."
            },
            {
                img: "/images/elves/buildings/frostTower/frostTower.webp",
                imgR: "/images/elves/buildings/frostTower/frostTowerR.webp",
                name: "Frost Tower",
                hotkey: "C",
                gold: 10,
                supply: 1,
                description: "Upgrade to &/elves/buildings/Frost Tower&."
            },
            {
                img: "/images/elves/buildings/lightningTower/lightningTower.webp",
                imgR: "/images/elves/buildings/lightningTower/lightningTowerR.webp",
                name: "Lightning Tower",
                hotkey: "V",
                gold: 55,
                supply: 3,
                description: "Upgrade to &/elves/buildings/Lightning Tower&."
            },
        ]
    },
    {
        img: "/images/elves/buildings/fireTower/fireTower.webp",
        imgR: "/images/elves/buildings/fireTower/fireTowerR.webp",
        name: "Fire Tower",
        team: "elves",
        type: "buildings",
        description: "A short-range tower with high burst damage and fast attack speed. Good positioning is required to utilize this tower to its fullest potential.",
        gold: 30,
        feed: "20-40",
        supply: 3,
        stats: {
            "Attack Damage": 12,
            "Attack Speed": 0.33,
            "Attack Range": 450,
            "Health": 20,
            "Mana regeneration": 0.2,
        },
        externalUpgrades: [
            {
                name: "Tree of Technology",
                url: "/elves/buildings/treeOfTechnology",
            }
        ],
        abilities: [
            {
                img: "/images/elves/buildings/fireTower/abilities/blaze.png",
                imgR: "/images/elves/buildings/fireTower/abilities/blaze.png",
                name: "Blaze",
                hotkey: "E",
                mana: 25,
                cooldown: 5,
                description: "Increase attack damage by ^50%^ for ^5^ seconds."
            }
        ]
    },
    {
        img: "/images/elves/buildings/earthTower/earthTower.webp",
        imgR: "/images/elves/buildings/earthTower/earthTowerR.webp",
        name: "Earth Tower",
        team: "elves",
        type: "buildings",
        description: "A mid-range tower that can attack up to ^4^ enemies at once. This tower is excellent at defending small bases from multiple attackers, but is very weak against duo and solo attacks.",
        gold: 20,
        feed: "16-32",
        supply: 2,
        stats: {
            "Attack Damage": 14,
            "Attack Speed": 1.0,
            "Attack Range": 600,
            "Health": 20,
            "Mana regeneration": 0.2,
        },
        externalUpgrades: [
            {
                name: "Tree of Technology",
                url: "/elves/buildings/treeOfTechnology",
            }
        ],
    },
    {
        img: "/images/elves/buildings/frostTower/frostTower.webp",
        imgR: "/images/elves/buildings/frostTower/frostTowerR.webp",
        name: "Frost Tower",
        team: "elves",
        type: "buildings",
        description: "A mid-range tower with moderate damage output and slow attack rate.", //TODO Its same as Magic Tower
        gold: 10,
        feed: "12-24",
        supply: 1,
        stats: {
            "Attack Damage": 32,
            "Attack Speed": 2.0,
            "Attack Range": 600,
            "Health": 20,
            "Mana regeneration": 0.2,
        },
        externalUpgrades: [
            {
                name: "Tree of Technology",
                url: "/elves/buildings/treeOfTechnology",
            }
        ],
        abilities: [
            {
                img: "/images/elves/buildings/frostTower/abilities/chill.webp",
                imgR: "/images/elves/buildings/frostTower/abilities/chillR.webp",
                name: "Chill",
                hotkey: "E",
                mana: 35,
                cooldown: 12,
                description: "When active, attacks reduce the target move speed scaling from ^2%^ to ^10%^ over ^6^ seconds. The slow lasts for ^2^ seconds. The total effect duration is ^12^ seconds."
            }
        ]
    },
    {
        img: "/images/elves/buildings/lightningTower/lightningTower.webp",
        imgR: "/images/elves/buildings/lightningTower/lightningTowerR.webp",
        name: "Lightning Tower",
        team: "elves",
        type: "buildings",
        description: "A long-range tower with high damage output and slow attack rate.",
        gold: 55,
        feed: "30-60",
        supply: 3,
        stats: {
            "Attack Damage": 65,
            "Attack Speed": 2.0,
            "Attack Range": 900,
            "Health": 20,
            "Mana regeneration": 0.2,
        },
        externalUpgrades: [
            {
                name: "Tree of Technology",
                url: "/elves/buildings/treeOfTechnology",
            }
        ],
        abilities: [
            {
                img: "/images/elves/buildings/lightningTower/abilities/stormStrike.png",
                imgR: "/images/elves/buildings/lightningTower/abilities/stormStrike.png",
                name: "Storm Strike",
                hotkey: "E",
                mana: 35,
                cooldown: 12,
                description: "Activate to increase attack range by ^300^ for ^12^ seconds."
            }
        ]
    },
    {
        img: "/images/elves/buildings/barracks.webp",
        imgR: "/images/elves/buildings/barracksR.webp",
        name: "Barracks",
        team: "elves",
        type: "buildings",
        hotkey: "R",
        gold: 30,
        feed: "12-24",
        stats: {
            "Health": 40,
        },
        description: "Replaces the &/elves/buildings/Tree Of War&, has *2x2* size and is built ^33%^ faster. Visit the &/elves/buildings/Tree Of War& page for more information.",
    },
    {
        img: "/images/elves/buildings/techCenter.webp",
        imgR: "/images/elves/buildings/techCenterR.webp",
        name: "Tech Center",
        team: "elves",
        type: "buildings",
        hotkey: "C",
        description: "Replaces the &/elves/buildings/Tree Of Technology&, has *2x2* size and is built ^33%^ faster. Visit the &/elves/buildings/Tree Of Technology& page for more information.",
        gold: 40,
        feed: "16-32",
        stats: {
            "Health": 40,
        },
    },
];