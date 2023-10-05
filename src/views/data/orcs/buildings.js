export const altarUpgrades = [
    {
        name: "Rage", // Main upgrade category
        hotkey: "Q",
        description: "Increase the movement speed and attack rate of your unit.",
        upgrades: [
            {
                lvl: 1,
                img: "/images/orcs/upgrades/altar/rage.png",
                gold: 20,
                changes: [
                    {
                        name: "Unit",
                        stats: [
                            {
                                name: "Move speed",
                                new: "+10",
                            },
                            {
                                name: "Attack speed",
                                new: "+4%"
                            }
                        ]
                    },
                ]
            },
            {
                lvl: 2,
                img: "/images/orcs/upgrades/altar/rage.png",
                gold: 40,
                changes: [
                    {
                        name: "Unit",
                        stats: [
                            {
                                name: "Move speed",
                                new: "+15",
                            },
                            {
                                name: "Attack speed",
                                new: "+8%"
                            }
                        ]
                    },
                ]
            },
            {
                lvl: 3,
                img: "/images/orcs/upgrades/altar/rage.png",
                gold: 60,
                changes: [
                    {
                        name: "Unit",
                        stats: [
                            {
                                name: "Move speed",
                                new: "+15",
                            },
                            {
                                name: "Attack speed",
                                new: "+8%"
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Weapon",
        hotkey: "W",
        description: "Upgrade the damage of your unit.",
        hasRequires: true,
        upgrades: [
            {
                lvl: 1,
                img: "/images/orcs/upgrades/altar/weapon/weapon1.png",
                gold: 35,
                changes: [
                    {
                        name: "Grunt/Berserker/Tauren",
                        stats: [
                            {
                                name: "Damage",
                                new: "+3",
                            },
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Damage",
                                new: "+4"
                            },
                        ]
                    },
                    {
                        name: "Shaman/Tracker",
                        stats: [
                            {
                                name: "Damage",
                                new: "+5"
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 2,
                img: "/images/orcs/upgrades/altar/weapon/weapon2.png",
                gold: 50,
                changes: [
                    {
                        name: "Grunt/Berserker/Tauren",
                        stats: [
                            {
                                name: "Damage",
                                new: "+3",
                            },
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Damage",
                                new: "+4"
                            },
                        ]
                    },
                    {
                        name: "Shaman/Tracker",
                        stats: [
                            {
                                name: "Damage",
                                new: "+5"
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 3,
                img: "/images/orcs/upgrades/altar/weapon/weapon3.png",
                gold: 65,
                requires: "&/orcs/buildings/morph/#Morph&",
                changes: [
                    {
                        name: "Grunt/Berserker/Tauren",
                        stats: [
                            {
                                name: "Damage",
                                new: "+3",
                            },
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Damage",
                                new: "+4"
                            },
                        ]
                    },
                    {
                        name: "Shaman/Tracker",
                        stats: [
                            {
                                name: "Damage",
                                new: "+5"
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 4,
                img: "/images/orcs/upgrades/altar/weapon/weapon4.png",
                gold: 80,
                changes: [
                    {
                        name: "Grunt/Berserker/Tauren",
                        stats: [
                            {
                                name: "Damage",
                                new: "+3",
                            },
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Damage",
                                new: "+4"
                            },
                        ]
                    },
                    {
                        name: "Shaman/Tracker",
                        stats: [
                            {
                                name: "Damage",
                                new: "+5"
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 5,
                img: "/images/orcs/upgrades/altar/weapon/weapon5.png",
                gold: 95,
                changes: [
                    {
                        name: "Grunt/Berserker/Tauren",
                        stats: [
                            {
                                name: "Damage",
                                new: "+3",
                            },
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Damage",
                                new: "+4"
                            },
                        ]
                    },
                    {
                        name: "Shaman/Tracker",
                        stats: [
                            {
                                name: "Damage",
                                new: "+5"
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 6,
                img: "/images/orcs/upgrades/altar/weapon/weapon6.png",
                gold: 110,
                changes: [
                    {
                        name: "Grunt/Berserker/Tauren",
                        stats: [
                            {
                                name: "Damage",
                                new: "+3",
                            },
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Damage",
                                new: "+4"
                            },
                        ]
                    },
                    {
                        name: "Shaman/Tracker",
                        stats: [
                            {
                                name: "Damage",
                                new: "+5"
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 7,
                img: "/images/orcs/upgrades/altar/weapon/weapon7.webp",
                imgR: "/images/orcs/upgrades/altar/weapon/weapon7R.webp",
                gold: 125,
                requires: "&/orcs/buildings/morph/#Morph& *2*",
                changes: [
                    {
                        name: "Grunt/Berserker/Tauren",
                        stats: [
                            {
                                name: "Damage",
                                new: "+3",
                            },
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Damage",
                                new: "+4"
                            },
                        ]
                    },
                    {
                        name: "Shaman/Tracker",
                        stats: [
                            {
                                name: "Damage",
                                new: "+5"
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 8,
                img: "/images/orcs/upgrades/altar/weapon/weapon8.webp",
                imgR: "/images/orcs/upgrades/altar/weapon/weapon8R.webp",
                gold: 140,
                changes: [
                    {
                        name: "Grunt/Berserker/Tauren",
                        stats: [
                            {
                                name: "Damage",
                                new: "+3",
                            },
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Damage",
                                new: "+4"
                            },
                        ]
                    },
                    {
                        name: "Shaman/Tracker",
                        stats: [
                            {
                                name: "Damage",
                                new: "+5"
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 9,
                img: "/images/orcs/upgrades/altar/weapon/weapon9.webp",
                imgR: "/images/orcs/upgrades/altar/weapon/weapon9R.webp",
                gold: 155,
                changes: [
                    {
                        name: "Grunt/Berserker/Tauren",
                        stats: [
                            {
                                name: "Damage",
                                new: "+3",
                            },
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Damage",
                                new: "+4"
                            },
                        ]
                    },
                    {
                        name: "Shaman/Tracker",
                        stats: [
                            {
                                name: "Damage",
                                new: "+5"
                            },
                        ]
                    }
                ]
            },
            {
                lvl: 10,
                img: "/images/orcs/upgrades/altar/weapon/weapon10.webp",
                imgR: "/images/orcs/upgrades/altar/weapon/weapon10R.webp",
                gold: 170,
                changes: [
                    {
                        name: "Grunt/Berserker/Tauren",
                        stats: [
                            {
                                name: "Damage",
                                new: "+3",
                            },
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Damage",
                                new: "+4"
                            },
                        ]
                    },
                    {
                        name: "Shaman/Tracker",
                        stats: [
                            {
                                name: "Damage",
                                new: "+5"
                            },
                        ]
                    }
                ]
            },
        ]
    },
    {
        name: "Armor",
        hotkey: "E",
        description: "Increase the health and armor of your unit, making you tanky and harder to kill when invading bases.",
        hasRequires: true,
        upgrades: [
            {
                lvl: 1,
                img: "/images/orcs/upgrades/altar/armor/armor1.webp",
                imgR: "/images/orcs/upgrades/altar/armor/armor1R.webp",
                gold: 30,
                changes: [
                    {
                        name: "Grunt/Shaman/Tracker",
                        stats: [
                            {
                                name: "Health",
                                new: "+550",
                            },
                            {
                                name: "Armor",
                                old: 0,
                                new: 1,
                                parenthesesVal: "+1",
                            }
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Health",
                                new: "+650"
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
                        name: "Berserker/Tauren",
                        stats: [
                            {
                                name: "Health",
                                new: "+750"
                            },
                            {
                                name: "Armor",
                                old: 0,
                                new: "2/3",
                                parenthesesVal: "+2/+3",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 2,
                img: "/images/orcs/upgrades/altar/armor/armor2.webp",
                imgR: "/images/orcs/upgrades/altar/armor/armor2R.webp",
                gold: 45,
                changes: [
                    {
                        name: "Grunt/Shaman/Tracker",
                        stats: [
                            {
                                name: "Health",
                                new: "+825",
                            },
                            {
                                name: "Armor",
                                old: 1,
                                new: 2,
                                parenthesesVal: "+1",
                            }
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Health",
                                new: "+975"
                            },
                            {
                                name: "Armor",
                                old: 2,
                                new: 4,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Berserker/Tauren",
                        stats: [
                            {
                                name: "Health",
                                new: "+1125"
                            },
                            {
                                name: "Armor",
                                old: "2/3",
                                new: "4/6",
                                parenthesesVal: "+2/+3",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 3,
                img: "/images/orcs/upgrades/altar/armor/armor3.webp",
                imgR: "/images/orcs/upgrades/altar/armor/armor3R.webp",
                gold: 60,
                requires: "&/orcs/buildings/morph/#Morph&",
                changes: [
                    {
                        name: "Grunt/Shaman/Tracker",
                        stats: [
                            {
                                name: "Health",
                                new: "+1100",
                            },
                            {
                                name: "Armor",
                                old: 2,
                                new: 3,
                                parenthesesVal: "+1",
                            }
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Health",
                                new: "+1300"
                            },
                            {
                                name: "Armor",
                                old: 4,
                                new: 6,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Berserker/Tauren",
                        stats: [
                            {
                                name: "Health",
                                new: "+1500"
                            },
                            {
                                name: "Armor",
                                old: "4/6",
                                new: "6/9",
                                parenthesesVal: "+2/+3",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 4,
                img: "/images/orcs/upgrades/altar/armor/armor4.webp",
                imgR: "/images/orcs/upgrades/altar/armor/armor4R.webp",
                gold: 75,
                changes: [
                    {
                        name: "Grunt/Shaman/Tracker",
                        stats: [
                            {
                                name: "Health",
                                new: "+1375",
                            },
                            {
                                name: "Armor",
                                old: 3,
                                new: 4,
                                parenthesesVal: "+1",
                            }
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Health",
                                new: "+1625"
                            },
                            {
                                name: "Armor",
                                old: 6,
                                new: 8,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Berserker/Tauren",
                        stats: [
                            {
                                name: "Health",
                                new: "+1875"
                            },
                            {
                                name: "Armor",
                                old: "6/9",
                                new: "8/11",
                                parenthesesVal: "+2/+3",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 5,
                img: "/images/orcs/upgrades/altar/armor/armor5.webp",
                imgR: "/images/orcs/upgrades/altar/armor/armor5R.webp",
                gold: 90,
                changes: [
                    {
                        name: "Grunt/Shaman/Tracker",
                        stats: [
                            {
                                name: "Health",
                                new: "+1650",
                            },
                            {
                                name: "Armor",
                                old: 4,
                                new: 5,
                                parenthesesVal: "+1",
                            }
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Health",
                                new: "+1950"
                            },
                            {
                                name: "Armor",
                                old: 8,
                                new: 10,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Berserker/Tauren",
                        stats: [
                            {
                                name: "Health",
                                new: "+2250"
                            },
                            {
                                name: "Armor",
                                old: "8/11",
                                new: "10/14",
                                parenthesesVal: "+2/+3",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 6,
                img: "/images/orcs/upgrades/altar/armor/armor6.webp",
                imgR: "/images/orcs/upgrades/altar/armor/armor6R.webp",
                gold: 105,
                changes: [
                    {
                        name: "Grunt/Shaman/Tracker",
                        stats: [
                            {
                                name: "Health",
                                new: "+1925",
                            },
                            {
                                name: "Armor",
                                old: 5,
                                new: 6,
                                parenthesesVal: "+1",
                            }
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Health",
                                new: "+2275"
                            },
                            {
                                name: "Armor",
                                old: 10,
                                new: 12,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Berserker/Tauren",
                        stats: [
                            {
                                name: "Health",
                                new: "+2625"
                            },
                            {
                                name: "Armor",
                                old: "10/14",
                                new: "12/17",
                                parenthesesVal: "+2/+3",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 7,
                img: "/images/orcs/upgrades/altar/armor/armor7.webp",
                imgR: "/images/orcs/upgrades/altar/armor/armor7R.webp",
                gold: 120,
                requires: "&/orcs/buildings/morph/#Morph& *2*",
                changes: [
                    {
                        name: "Grunt/Shaman/Tracker",
                        stats: [
                            {
                                name: "Health",
                                new: "+2200",
                            },
                            {
                                name: "Armor",
                                old: 6,
                                new: 7,
                                parenthesesVal: "+1",
                            }
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Health",
                                new: "+2600"
                            },
                            {
                                name: "Armor",
                                old: 12,
                                new: 14,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Berserker/Tauren",
                        stats: [
                            {
                                name: "Health",
                                new: "+3000"
                            },
                            {
                                name: "Armor",
                                old: "12/17",
                                new: "14/20",
                                parenthesesVal: "+2/+3",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 8,
                img: "/images/orcs/upgrades/altar/armor/armor8.webp",
                imgR: "/images/orcs/upgrades/altar/armor/armor8R.webp",
                gold: 135,
                changes: [
                    {
                        name: "Grunt/Shaman/Tracker",
                        stats: [
                            {
                                name: "Health",
                                new: "+2475",
                            },
                            {
                                name: "Armor",
                                old: 7,
                                new: 8,
                                parenthesesVal: "+1",
                            }
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Health",
                                new: "+2925"
                            },
                            {
                                name: "Armor",
                                old: 14,
                                new: 16,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Berserker/Tauren",
                        stats: [
                            {
                                name: "Health",
                                new: "+3375"
                            },
                            {
                                name: "Armor",
                                old: "14/20",
                                new: "16/23",
                                parenthesesVal: "+2/+3",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 9,
                img: "/images/orcs/upgrades/altar/armor/armor9.webp",
                imgR: "/images/orcs/upgrades/altar/armor/armor9R.webp",
                gold: 150,
                changes: [
                    {
                        name: "Grunt/Shaman/Tracker",
                        stats: [
                            {
                                name: "Health",
                                new: "+2750",
                            },
                            {
                                name: "Armor",
                                old: 8,
                                new: 9,
                                parenthesesVal: "+1",
                            }
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Health",
                                new: "+3250"
                            },
                            {
                                name: "Armor",
                                old: 16,
                                new: 18,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Berserker/Tauren",
                        stats: [
                            {
                                name: "Health",
                                new: "+3750"
                            },
                            {
                                name: "Armor",
                                old: "16/23",
                                new: "18/26",
                                parenthesesVal: "+2/+3",
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 10,
                img: "/images/orcs/upgrades/altar/armor/armor10.webp",
                imgR: "/images/orcs/upgrades/altar/armor/armor10R.webp",
                gold: 165,
                changes: [
                    {
                        name: "Grunt/Shaman/Tracker",
                        stats: [
                            {
                                name: "Health",
                                new: "+3025",
                            },
                            {
                                name: "Armor",
                                old: 9,
                                new: 10,
                                parenthesesVal: "+1",
                            }
                        ]
                    },
                    {
                        name: "Inventor/Medic",
                        stats: [
                            {
                                name: "Health",
                                new: "+3575"
                            },
                            {
                                name: "Armor",
                                old: 18,
                                new: 20,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Berserker/Tauren",
                        stats: [
                            {
                                name: "Health",
                                new: "+4125"
                            },
                            {
                                name: "Armor",
                                old: "18/26",
                                new: "20/29",
                                parenthesesVal: "+2/+3",
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        name: "Conjurer",
        hotkey: "R",
        description: "Unlock skill points that can be spent on abilities. You can learn new abilities if you have available skill points by pressing (%%F2%%) or typing %%-sb%% in the chat.",
        upgrades: [
            {
                lvl: 1,
                img: "/images/orcs/upgrades/altar/conjurer.png",
                gold: 25,
                changes: [
                    {
                        name: "Unit",
                        stats: [
                            {
                                name: "Skill points",
                                old: 0,
                                new: 2,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Mana regeneration",
                                new: "+0.4"
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
                img: "/images/orcs/upgrades/altar/conjurer.png",
                gold: 50,
                changes: [
                    {
                        name: "Unit",
                        stats: [
                            {
                                name: "Skill points",
                                old: 2,
                                new: 4,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Mana regeneration",
                                new: "+0.1"
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 3,
                img: "/images/orcs/upgrades/altar/conjurer.png",
                gold: 75,
                changes: [
                    {
                        name: "Unit",
                        stats: [
                            {
                                name: "Skill points",
                                old: 4,
                                new: 6,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Mana regeneration",
                                new: "+0.1"
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 4,
                img: "/images/orcs/upgrades/altar/conjurer.png",
                gold: 100,
                changes: [
                    {
                        name: "Unit",
                        stats: [
                            {
                                name: "Skill points",
                                old: 6,
                                new: 8,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Mana regeneration",
                                new: "+0.1"
                            }
                        ]
                    }
                ]
            },
            {
                lvl: 5,
                img: "/images/orcs/upgrades/altar/conjurer.png",
                gold: 150,
                changes: [
                    {
                        name: "Unit",
                        stats: [
                            {
                                name: "Skill points",
                                old: 8,
                                new: 10,
                                parenthesesVal: "+2",
                            },
                            {
                                name: "Mana regeneration",
                                new: "+0.1"
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        name: "Recover",
        hotkey: "A",
        description: "Increase health regeneration for your unit.",
        upgrades: [
            {
                lvl: 1,
                img: "/images/orcs/upgrades/altar/recover.webp",
                imgR: "/images/orcs/upgrades/altar/recoverR.webp",
                gold: 20,
                changes: [
                    {
                        name: "Unit",
                        stats: [
                            {
                                name: "Health regeneration",
                                new: "1%/second"
                            },
                            {
                                name: "Max health regenerated",
                                new: "15%"
                            },
                            {
                                name: "Time to regenerate",
                                new: "90 seconds",
                                description: "<p>@This effect is disabled for ^5^ seconds if the user takes damage.@</p>"
                            }
                        ]
                    },
                ]
            },
            {
                lvl: 2,
                img: "/images/orcs/upgrades/altar/recover.webp",
                imgR: "/images/orcs/upgrades/altar/recoverR.webp",
                gold: 40,
                changes: [
                    {
                        name: "Unit",
                        stats: [
                            {
                                name: "Health regeneration",
                                new: "2%/second"
                            },
                            {
                                name: "Max health regenerated",
                                new: "30%"
                            },
                            {
                                name: "Time to regenerate",
                                new: "80 seconds",
                                description: "<p>@This effect is disabled for ^5^ seconds if the user takes damage.@</p>"
                            }
                        ]
                    },
                ]
            },
            {
                lvl: 3,
                img: "/images/orcs/upgrades/altar/recover.webp",
                imgR: "/images/orcs/upgrades/altar/recoverR.webp",
                gold: 60,
                changes: [
                    {
                        name: "Unit",
                        stats: [
                            {
                                name: "Health regeneration",
                                new: "3%/second"
                            },
                            {
                                name: "Max health regenerated",
                                new: "45%"
                            },
                            {
                                name: "Time to regenerate",
                                new: "70 seconds",
                                description: "<p>@This effect is disabled for ^5^ seconds if the user takes damage.@</p>"
                            }
                        ]
                    },
                ]
            },
            {
                lvl: 4,
                img: "/images/orcs/upgrades/altar/recover.webp",
                imgR: "/images/orcs/upgrades/altar/recoverR.webp",
                gold: 80,
                changes: [
                    {
                        name: "Unit",
                        stats: [
                            {
                                name: "Health regeneration",
                                new: "4%/second"
                            },
                            {
                                name: "Max health regenerated",
                                new: "60%"
                            },
                            {
                                name: "Time to regenerate",
                                new: "60 seconds",
                                description: "<p>@This effect is disabled for ^5^ seconds if the user takes damage.@</p>"
                            }
                        ]
                    },
                ]
            },
        ]
    }
];

export const orcsBuildings = [
    {
        img: "/images/orcs/buildings/altar.webp",
        imgR: "/images/orcs/buildings/altarR.webp",
        name: "Altar",
        team: "orcs",
        type: "buildings",
        description: "*The Altar* is used to research upgrades for your unit. Located in the top-left corner of the map.",
        upgradesSeparated: altarUpgrades
    },
    {
        img: "/images/orcs/buildings/morph.webp",
        imgR: "/images/orcs/buildings/morphR.webp",
        name: "Morph",
        team: "orcs",
        type: "buildings",
        description: "This building is used to morph your unit into a stronger unit with more abilities. Located in the top-left corner of the map.",
    }
];