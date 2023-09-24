import { html, render } from 'lit-html'
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { container } from '../app';
import { markers, rmvSpc } from '../utilities';

export const allUnits = [
    {
        img: "/images/units/elvenWorker/elvenWorker.webp",
        imgR: "/images/units/elvenWorker/elvenWorkerR.webp",
        name: "Elven Worker",
        team: "elves",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", //TODO
        additionalUpgrades: true,
        stats: {
            "Damage": 80,
            "Move speed": 250,
            "Health": 20,
            //TODO
        },
        abilities: [
            //TODO
        ],
    },
    {
        img: "/images/units/owlScout/owlScout.webp",
        imgR: "/images/units/owlScout/owlScoutR.webp",
        name: "Owl Scout",
        team: "elves",
        hotkey: "Q",
        gold: 40,
        supply: 2,
        feed: "16-32",
        description: "<p>A flying scout with a large field of vision that can see over cliffs. The &/units/Owl Scout& can be used to spy on the enemy or to help you find safe passages through unexplored terrain.</p>",
        stats: {
            "Vision Range": 600,
            "Move speed": 325,
            "Health": 40
        },
        transformsTo: [
            "Hippogryph",
            "Hippogryph Rider"
        ],
        abilities: [
            {
                img: "/images/units/owlScout/abilities/scout.webp",
                imgR: "/images/units/owlScout/abilities/scoutR.webp",
                name: "Scout",
                hotkey: "C",
                description: "Increases the vision range by ^400^ for ^10^ seconds.",
                cooldown: 75,
            },
            {
                img: "/images/units/hippogryph/hippogryph.webp",
                imgR: "/images/units/hippogryph/hippogryphR.webp",
                name: "Transform to &/units/Hippogryph&",
                hotkey: "M",
                description: "Transforms the &/units/Owl Scout& into a &/units/Hippogryph&.",
                cooldown: 40,
            },
            {
                img: "/images/units/owlScout/abilities/nightVision.webp",
                imgR: "/images/units/owlScout/abilities/nightVisionR.webp",
                name: "Night Vision",
                passive: true,
                description: "Reveal invisible units within ^600^ range.",
            }
        ],
    },
    {
        img: "/images/units/archer/archer.webp",
        imgR: "/images/units/archer/archerR.webp",
        name: "Archer",
        team: "elves",
        hotkey: "W",
        gold: 20,
        supply: 2,
        feed: "8-16",
        additionalUpgrades: true,
        description: "<p>^Requires &/buildings/treeOfTechnology#Architecture& *1* upgrade to train.^</p><p>A ranged attacker with low health and damage. Archers are best used as a support unit to increase the damage output of a base. Put your archers behind upgraded blockers and enable hold position to prevent them from chasing the enemy.</p>",
        transformsTo: [
            "Hippogryph Rider"
        ],
        stats: {
            "Attack Damage": 8,
            "Attack Speed": 1.0,
            "Attack Range": 600,
            "Move speed": 250,
            "Health": 20
        },
        abilities: [
            {
                img: "/images/units/hippogryphRider/hippogryphRider.webp",
                imgR: "/images/units/hippogryphRider/hippogryphRiderR.webp",
                name: "Mount &/units/Hippogryph&",
                hotkey: "Q",
                description: "The &/units/Archer& mounts the &/units/Hippogryph& - forming a &/units/Hippogryph Rider&.",
            }
        ]
    },
    {
        img: "/images/units/ent/ent.webp",
        imgR: "/images/units/ent/entR.webp",
        name: "Ent",
        team: "elves",
        hotkey: "E",
        gold: 30,
        supply: 3,
        feed: "12-24",
        additionalUpgrades: true,
        description: "<p>^Requires &#Sprout& upgrade to train.^</p><p>The Ent is a slow and durable melee attacker that can be used to setup kills, but it is not strong enough to fight the enemy head-on. It is most effective when paired with a reliable damage source, but can be dangerous in large numbers.</p>",
        transformsTo: [
            "Ancient"
        ],
        stats: {
            "Attack Damage": 18,
            "Attack Speed": 2.0,
            "Attack Range": 128,
            "Move speed": 190,
            "Health": 50
        },
        abilities: [
            {
                img: "/images/units/ancient/ancient.webp",
                imgR: "/images/units/ancient/ancientR.webp",
                name: "Transform to &/units/Ancient&",
                hotkey: "Q",
                description: "Transform the &/units/Ent& into an &/units/Ancient&. The &/units/Ancient& is larger, slower and cannot &#Burrow&.",
                cooldown: 20
            },
            {
                img: "/images/units/ent/abilities/burrow.png",
                imgR: "/images/units/ent/abilities/burrow.png",
                name: "Burrow",
                hotkey: "W",
                description: "The &/units/Ent& burrow and becomes invisible.",
                cooldown: 8
            },
            {
                img: "/images/units/ent/abilities/wrath.png",
                imgR: "/images/units/ent/abilities/wrath.png",
                name: "Wrath",
                hotkey: "E",
                description: "Sacrifice the caster to release a projectile that travels in a straight line towards the selected direction. If the projectile collides with a hostile ground unit it will explode, dealing ^50^ to ^200^ damage to the target over ^6^ seconds. The projectile deals more damage the further it travels.<p>@The projectile is destroyed without any effect if it collides with a cliff or neutral object.@</p>",
            },
        ]
    },
    {
        img: "/images/units/druid/druid.webp",
        imgR: "/images/units/druid/druidR.webp",
        name: "Druid",
        team: "elves",
        hotkey: "R",
        gold: 60,
        supply: 3,
        feed: "24-48",
        additionalUpgrades: true,
        description: "^Requires &#Druid Training 1& upgrade.<p>You can only build one of this unit.</p>^<p>A spell-caster with powerful offensive and supportive abilities. The druid can be used to setup kills, to weaken the enemy or to shut-down power plays.</p>",
        stats: {
            "Attack Damage": 42,
            "Attack Speed": 2.0,
            "Attack Range": 600,
            "Move speed": 250,
            "Health": 40,
            "Mana": 50
        },
        abilities: [
            {
                img: "/images/units/druid/abilities/faerieFire.webp",
                imgR: "/images/units/druid/abilities/faerieFireR.webp",
                name: "Faerie Fire",
                hotkey: "F",
                mana: 50,
                description: "Remove all armor from the target and reveal it for ^5^ seconds. The effect duration is increased for each point of armor removed and can last up to ^15^ seconds in total.",
                cooldown: 15
            },
            {
                img: "/images/units/druid/abilities/blizzard.png",
                imgR: "/images/units/druid/abilities/blizzard.png",
                name: "Blizzard",
                hotkey: "E",
                mana: 35,
                description: "Call down shards of ice that deal up to ^400^ damage and reduce move speed by up to ^60%^ over ^8^ seconds. The damage and slow ramp up over time.<br><br><p>@The damage stack if layered, but not the slow.@</p>",
                cooldown: 4
            },
            {
                img: "/images/units/druid/abilities/cleanse.webp",
                imgR: "/images/units/druid/abilities/cleanseR.webp",
                name: "Cleanse",
                hotkey: "D",
                mana: 75,
                description: "Dispel most magical effects within ^200^ range that are harmful to allies or beneficial to enemies. This effect remains on the target for ^1^ second.",
                cooldown: 120
            },
            {
                img: "/images/units/druid/abilities/drainMana.webp",
                imgR: "/images/units/druid/abilities/drainManaR.webp",
                name: "Drain Mana",
                hotkey: "W",
                mana: 6,
                description: "Drain up to ^20^ mana over ^8^ seconds from the target and give it to the caster. The user must be within ^700^ range of the target to maintain the effect.",
                cooldown: 12
            },
            {
                img: "/images/units/druid/abilities/healingRain.webp",
                imgR: "/images/units/druid/abilities/healingRainR.webp",
                name: "Healing Rain",
                hotkey: "T",
                mana: 100,
                description: "Create a healing rain that restores ^100%^ life to allied units and structures within ^400^ range over ^20^ seconds.",
                cooldown: 180
            },
            {
                img: "/images/units/druid/abilities/slumber.webp",
                imgR: "/images/units/druid/abilities/slumberR.webp",
                name: "Slumber",
                hotkey: "R",
                mana: 75,
                description: "Sleep the target for ^4^ seconds. Sleeping units wake up if they take damage.",
                cooldown: 10
            }
        ]
    },
    {
        img: "/images/units/hippogryph/hippogryph.webp",
        imgR: "/images/units/hippogryph/hippogryphR.webp",
        name: "Hippogryph",
        team: "elves",
        description: "<p>@This unit is not trainable!@</p><p>$Morphs from &/units/Owl Scout&.$</p>The hippogryph is a ferocious flying predator that weakens the target by reducing its move speed.They are most effective when used in large packs to chase down injured foes or to kill isolated enemies.",
        feed: "16-32",
        stats: {
            "Attack Damage": 4,
            "Attack Speed": 1.0,
            "Attack Range": 750,
            "Move speed": 300,
            "Health": 50
        },
        abilities: [
            {
                img: "/images/units/hippogryph/abilities/deepWounds.webp",
                imgR: "/images/units/hippogryph/abilities/deepWoundsR.webp",
                name: "Deep Wounds",
                description: "Attacks deal ^100%^ extra damage as true damage to orcs and reduce the targets move speed by ^2%^ for ^4^ seconds. The slow is stackable, but are limited to one stack per unit.",
            },
            {
                img: "/images/units/owlScout/owlScout.webp",
                imgR: "/images/units/owlScout/owlScoutR.webp",
                name: "Transform to &/units/Owl Scout&",
                hotkey: "M",
                description: "Transforms the &/units/Hippogryph& into an &/units/Owl Scout&.",
                cooldown: 40,
            },
            {
                img: "/images/units/hippogryphRider/hippogryphRider.webp",
                imgR: "/images/units/hippogryphRider/hippogryphRiderR.webp",
                name: "Take &/units/Archer&",
                hotkey: "Q",
                description: "The hippogryph rider is a flying ranged attacker with high mobility. It can be used to defend large bases, to harass the enemy from a distance and to chase down isolated or injured foes.",
            }
        ]
    },
    {
        img: "/images/units/hippogryphRider/hippogryphRider.webp",
        imgR: "/images/units/hippogryphRider/hippogryphRiderR.webp",
        name: "Hippogryph Rider",
        description: "<p>@This unit is not trainable!@</p><p>$Morphs from combining &/units/Hippogryph& and &/units/Archer&.$</p>The hippogryph rider is a flying ranged attacker with high mobility. It can be used to defend large bases, to harass the enemy from a distance and to chase down isolated or injured foes.",
        feed: "24-48",
        team: "elves",
        stats: {
            "Attack Damage": 20,
            "Attack Speed": 1.0,
            "Attack Range": 750,
            "Move speed": 300,
            "Health": 40
        },
    }
]; // TODO ADD Ancient

export const treeOfWarUpgrades = { //TODO Do like treeOfTechnology
    "Owl Scout": [
        {
            img: "/images/upgrades/treeOfWar/owlSpecialist.webp",
            imgR: "/images/upgrades/treeOfWar/owlSpecialistR.webp",
            name: "Owl Specialist 1",
            hotkey: "A",
            from: "Tree Of War",
            description: `&/units/Owl Scout& <ul><li>Vision range: 600 -> ^750^ (^+150^)</li><li>Health: 40 -> ^60^ (^+20^)</li><li>Unlocks &/units/OwlScout#Night Vision& (passive) - reveal invisible units within 600 range.</li></ul>`,
            gold: 50
        },
        {
            img: "/images/upgrades/treeOfWar/owlSpecialist.webp",
            imgR: "/images/upgrades/treeOfWar/owlSpecialistR.webp",
            name: "Owl Specialist 2",
            hotkey: "A",
            from: "Tree Of War",
            description: `&/units/Owl Scout& <ul><li>Vision range: 750 -> ^900^ (^+150^)</li><li>Move speed: 325 -> ^406.25^ (^+25%^)</li></ul>&/units/Owl Scout#Scout& ability<ul><li>Duration: 10 -> ^15^ seconds (^+5 seconds^)</li><li>Cooldown: 75 -> ^45^ seconds (^-30 seconds^)</li></ul>`,
            gold: 125
        },
        {
            img: "/images/units/hippogryph/hippogryph.webp",
            imgR: "/images/units/hippogryph/hippogryphR.webp",
            name: "Bird Training 1",
            hotkey: "Z",
            from: "Tree Of War",
            description: "Allow the &/units/Owl Scout& to morph into a &/units/Hippogryph&.",
            gold: 300
        },
        {
            img: "/images/units/hippogryphRider/hippogryphRider.webp",
            imgR: "/images/units/hippogryphRider/hippogryphRiderR.webp",
            name: "Bird Training 2",
            hotkey: "Z",
            from: "Tree Of War",
            description: "Allow the &/units/Archer& to mount a &/units/Hippogryph&, creating a &/units/Hippogryph Rider&.",
            gold: 200
        }
    ],
    "Archer": [
        {
            img: "/images/upgrades/treeOfWar/marksmanshipR.png",
            imgR: "/images/upgrades/treeOfWar/marksmanshipR.png",
            name: "Marksmanship",
            hotkey: "S",
            description: "&/units/Archer&<ul><li>Attack range: 600 -> ^750^ (^+150^)</li></ul>&/units/Hippogryph Rider&<ul><li>Attack range: 600 -> ^750^ (^+150^)</li></ul>",
            gold: 100
        },
    ],
    "Ent": [
        {
            img: "/images/upgrades/treeOfWar/sprouts.webp",
            imgR: "/images/upgrades/treeOfWar/sproutsR.webp",
            name: "Sprout",
            hotkey: "D",
            description: "Unlocks the &/units/Ent& unit.",
            gold: 100
        },
        {
            img: "/images/upgrades/treeOfWar/burrowR.png",
            imgR: "/images/upgrades/treeOfWar/burrowR.png",
            name: "Burrow",
            hotkey: "D",
            description: "&/units/Ent&<ul><li>Unlocks &/units/Ent#Burrow& ability</li></ul>",
            gold: 100
        },
    ],
    "Druid": [
        {
            img: "/images/upgrades/treeOfWar/druidTraining1.webp",
            imgR: "/images/upgrades/treeOfWar/druidTraining1R.webp",
            name: "Druid Training 1",
            hotkey: "F",
            description: "Unlocks the &/units/Druid&.",
            gold: 100
        },
        {
            img: "/images/upgrades/treeOfWar/druidTraining2.webp",
            imgR: "/images/upgrades/treeOfWar/druidTraining2R.webp",
            name: "Druid Training 2",
            hotkey: "F",
            description: "&/units/Druid&<ul><li>Mana regeneration ^+0.15^/second</li><li>Unlocks the &/units/Druid#Faerie Fire& ability</li></ul></ul>",
            gold: 150
        },
        {
            img: "/images/upgrades/treeOfWar/druidTraining3.webp",
            imgR: "/images/upgrades/treeOfWar/druidTraining3R.webp",
            name: "Druid Training 3",
            hotkey: "F",
            description: "&/units/Druid&<ul><li>Mana regeneration ^+0.15^/second</li><li>Unlocks the &/units/Druid#Cleanse& ability</li><li>Unlocks the &/units/Druid#Drain Mana& ability</li></ul></ul>",
            gold: 150
        },
        {
            img: "/images/upgrades/treeOfWar/druidTraining4.webp",
            imgR: "/images/upgrades/treeOfWar/druidTraining4R.webp",
            name: "Druid Training 4",
            hotkey: "F",
            description: "&/units/Druid&<ul><li>Mana regeneration ^+0.15^/second</li><li>Unlocks the &/units/Druid#Slumber& ability</li><li>Unlocks the &/units/Druid#Healing Rain& ability</li></ul></ul>",
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
        description: "This upgrade lets you increase the movement speed of your &/units/Elven Worker&. Useful for scouting, trapping and running away from enemies.",
        hasRequires: false, // if any of the levels requires another upgrade to progress (NO NEED TO USE FALSE, THIS IS HERE JUST TO SHOW HIERARCHY)
        upgrades: [ // All levels of the upgrade
            {
                lvl: 1,
                img: "/images/upgrades/treeOfTechnology/speed/speed1.webp",
                imgR: "/images/upgrades/treeOfTechnology/speed/speed1R.webp",
                gold: 20,
                changes: [ // Each change to unit/building
                    {
                        name: "Elven Worker",
                        type: "units", // can be "unit", "building" or not initialize  at all
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
                img: "/images/upgrades/treeOfTechnology/speed/speed2.webp",
                imgR: "/images/upgrades/treeOfTechnology/speed/speed2R.webp",
                gold: 50,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/speed/speed3.png",
                gold: 80,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/speed/speed4.png",
                gold: 110,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/speed/speed5.png",
                gold: 140,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
        description: "This upgrade lets you increase the health points of your &/units/Elven Worker&.",
        upgrades: [
            {
                lvl: 1,
                img: "/images/upgrades/treeOfTechnology/life/life1.png",
                gold: 80,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/life/life2.png",
                gold: 100,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/life/life3.png",
                gold: 120,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/life/life4.png",
                gold: 140,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/life/life5.png",
                gold: 160,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
        description: "Skill points can be spent in the &/buildings/Spell Book& (%%F2%%) to unlock powerful abilities for your &/units/Elven Worker&.",
        upgrades: [
            {
                lvl: 1,
                img: "/images/upgrades/treeOfTechnology/magic.png",
                gold: 50,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/magic.png",
                gold: 125,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/magic.png",
                gold: 200,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/magic.png",
                gold: 275,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/magic.png",
                gold: 350,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/nourishment.png",
                gold: 50,
                requires: "&/buildings/treeOfTechnology/#Architecture& *2*",
                changes: [
                    {
                        name: "Buildings",
                        type: "buildings",
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
                img: "/images/upgrades/treeOfTechnology/nourishment.png",
                gold: 100,
                changes: [
                    {
                        name: "Buildings",
                        type: "buildings",
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
                img: "/images/upgrades/treeOfTechnology/nourishment.png",
                gold: 150,
                changes: [
                    {
                        name: "Buildings",
                        type: "buildings",
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
                img: "/images/upgrades/treeOfTechnology/architecture/architecture1.webp",
                imgR: "/images/upgrades/treeOfTechnology/architecture/architecture1R.webp",
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
                img: "/images/upgrades/treeOfTechnology/architecture/architecture2.webp",
                imgR: "/images/upgrades/treeOfTechnology/architecture/architecture2R.webp",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/architecture/architecture3.webp",
                imgR: "/images/upgrades/treeOfTechnology/architecture/architecture3R.webp",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/architecture/architecture4.webp",
                imgR: "/images/upgrades/treeOfTechnology/architecture/architecture4R.webp",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/architecture/architecture5.webp",
                imgR: "/images/upgrades/treeOfTechnology/architecture/architecture5R.webp",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/armor.webp",
                imgR: "/images/upgrades/treeOfTechnology/armorR.webp",
                gold: 40,
                changes: [
                    {
                        name: "Elven Worker",
                        type: "units",
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
        description: "Used for upgrading your &/units/Ent& and &/units/Druid&.",
        hasRequires: true,
        upgrades: [
            {
                lvl: 1,
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity1.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity1R.webp",
                gold: 55,
                changes: [
                    {
                        name: "Ent",
                        type: "units",
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
                            }
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units",
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
                            }
                        ]
                    },
                ]
            },
            {
                lvl: 2,
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity2.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity2R.webp",
                gold: 65,
                changes: [
                    {
                        name: "Ent",
                        type: "units",
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
                                name: "Armor",
                                old: 0,
                                new: 2,
                                parenthesesVal: "+2",
                            }
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity3.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity3R.webp",
                gold: 75,
                requires: "&/buildings/treeOfTechnology/#Architecture& *2*",
                changes: [
                    {
                        name: "Ent",
                        type: "units",
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
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units",
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
                        ]
                    },
                ]
            },
            {
                lvl: 4,
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity4.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity4R.webp",
                gold: 85,
                changes: [
                    {
                        name: "Ent",
                        type: "units",
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
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity5.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity5R.webp",
                gold: 95,
                requires: "&/buildings/treeOfTechnology/#Architecture& *3*",
                changes: [
                    {
                        name: "Ent",
                        type: "units",
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
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units",
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
                        ]
                    },
                ]
            },
            {
                lvl: 6,
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity6.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity6R.webp",
                gold: 105,
                changes: [
                    {
                        name: "Ent",
                        type: "units",
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
                                name: "Armor",
                                old: 2,
                                new: 5,
                                parenthesesVal: "+3",
                            }
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity7.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity7R.webp",
                gold: 115,
                requires: "&/buildings/treeOfTechnology/#Architecture& *4*",
                changes: [
                    {
                        name: "Ent",
                        type: "units",
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
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units",
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
                        ]
                    },
                ]
            },
            {
                lvl: 8,
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity8.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity8R.webp",
                gold: 125,
                changes: [
                    {
                        name: "Ent",
                        type: "units",
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
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity9.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity9R.webp",
                gold: 135,
                requires: "&/buildings/treeOfTechnology/#Architecture& *5*",
                changes: [
                    {
                        name: "Ent",
                        type: "units",
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
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units",
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
                        ]
                    },
                ]
            },
            {
                lvl: 10,
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity10.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity10R.webp",
                gold: 145,
                changes: [
                    {
                        name: "Ent",
                        type: "units",
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
                                name: "Attack speed",
                                new: "+25%",
                            }
                        ]
                    },
                    {
                        name: "Druid",
                        type: "units",
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
                img: "/images/buildings/magicTower.webp",
                imgR: "/images/buildings/magicTowerR.webp",
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
                img: "/images/buildings/magicTower.webp",
                imgR: "/images/buildings/magicTowerR.webp",
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
                img: "/images/buildings/fireTower.webp",
                imgR: "/images/buildings/fireTowerR.webp",
                gold: 75,
                requires: "&/buildings/treeOfTechnology/#Architecture& *2*",
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
                img: "/images/buildings/fireTower.webp",
                imgR: "/images/buildings/fireTowerR.webp",
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
                img: "/images/buildings/frostTower.webp",
                imgR: "/images/buildings/frostTowerR.webp",
                gold: 95,
                requires: "&/buildings/treeOfTechnology/#Architecture& *3*",
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
                img: "/images/buildings/frostTower.webp",
                imgR: "/images/buildings/frostTowerR.webp",
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
                img: "/images/buildings/earthTower.webp",
                imgR: "/images/buildings/earthTowerR.webp",
                gold: 115,
                requires: "&/buildings/treeOfTechnology/#Architecture& *4*",
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
                img: "/images/buildings/earthTower.webp",
                imgR: "/images/buildings/earthTowerR.webp",
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
                img: "/images/buildings/lightningTower.webp",
                imgR: "/images/buildings/lightningTowerR.webp",
                gold: 135,
                requires: "&/buildings/treeOfTechnology/#Architecture& *5*",
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
                img: "/images/buildings/lightningTower.webp",
                imgR: "/images/buildings/lightningTowerR.webp",
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
                img: "/images/upgrades/treeOfTechnology/leadership/leadership1.png",
                gold: 55,
                changes: [
                    {
                        name: "Archer",
                        type: "units",
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
                        type: "units",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/leadership/leadership2.png",
                gold: 65,
                changes: [
                    {
                        name: "Archer",
                        type: "units",
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
                        type: "units",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/leadership/leadership3.png",
                gold: 75,
                requires: "&/buildings/treeOfTechnology/#Architecture& *2*",
                changes: [
                    {
                        name: "Archer",
                        type: "units",
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
                        type: "units",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/leadership/leadership4.png",
                gold: 85,
                changes: [
                    {
                        name: "Archer",
                        type: "units",
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
                        type: "units",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/leadership/leadership5.png",
                gold: 95,
                requires: "&/buildings/treeOfTechnology/#Architecture& *3*",
                changes: [
                    {
                        name: "Archer",
                        type: "units",
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
                        type: "units",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/leadership/leadership6.png",
                gold: 105,
                changes: [
                    {
                        name: "Archer",
                        type: "units",
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
                        type: "units",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/leadership/leadership7.png",
                gold: 115,
                requires: "&/buildings/treeOfTechnology/#Architecture& *4*",
                changes: [
                    {
                        name: "Archer",
                        type: "units",
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
                        type: "units",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/leadership/leadership8.png",
                gold: 125,
                changes: [
                    {
                        name: "Archer",
                        type: "units",
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
                        type: "units",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/leadership/leadership9.png",
                gold: 135,
                requires: "&/buildings/treeOfTechnology/#Architecture& *5*",
                changes: [
                    {
                        name: "Archer",
                        type: "units",
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
                        type: "units",
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
                        type: "units",
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
                img: "/images/upgrades/treeOfTechnology/leadership/leadership10.png",
                gold: 145,
                changes: [
                    {
                        name: "Archer",
                        type: "units",
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
                        type: "units",
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
                        type: "units",
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

const treeOfLifeUpgrades = [
    {
        img: "/images/upgrades/treeOfLife/regeneration.webp",
        imgR: "/images/upgrades/treeOfLife/regenerationR.webp",
        name: "Regeneration",
        hotkey: "Q",
        description: "The &/units/Elven Worker& health regenerates ^+3%^ life per second."
    },
    {
        img: "/images/upgrades/treeOfLife/wildGrowth.webp",
        imgR: "/images/upgrades/treeOfLife/wildGrowthR.webp",
        name: "Wild Growth",
        hotkey: "W",
        description: "Allows you to build structures without a #Gold Mine#."
    },
    {
        img: "/images/upgrades/treeOfLife/techCenter.webp",
        imgR: "/images/upgrades/treeOfLife/techCenterR.webp",
        name: "Tech Center",
        hotkey: "E",
        description: "Replace the #Tree Of Technology# with the #Tech Center#.<br>The #Tech Center# has ^2x2^ size and is built ^+33%^ faster.<br><span class='text-danger'>All player owned #Tree Of Technology# are destroyed and refunded when you choose this talent.</span>"
    },
    {
        img: "/images/upgrades/treeOfLife/barracks.webp",
        imgR: "/images/upgrades/treeOfLife/barracksR.webp",
        name: "Barracks",
        hotkey: "R",
        description: "Replace the #Tree Of War# with the #Barracks#.<br>The #Barracks# has ^2x2^ size and is built ^+33%^ faster.<br><span class='text-danger'>All player owned #Tree Of War# are destroyed and refunded when you choose this talent.</span>"
    },
    {
        img: "/images/upgrades/treeOfLife/persistence.webp",
        imgR: "/images/upgrades/treeOfLife/persistenceR.webp",
        name: "Persistence",
        hotkey: "A",
        description: "Your next revive is free and without death penalty (doesn't take a life).<br><span class='text-danger'>If you are dead when you select this talent, then it takes effect immediately but the charge is consumed.</span>"
    },
    {
        img: "/images/upgrades/treeOfLife/savior.webp",
        imgR: "/images/upgrades/treeOfLife/saviorR.webp",
        name: "Savior",
        hotkey: "S",
        description: "When resurrecting other players ^30%^ of the gold you send is also added to their bonus pool and reduced from the cost of their next revive."
    },
    {
        img: "/images/upgrades/treeOfLife/trickery.webp",
        imgR: "/images/upgrades/treeOfLife/trickeryR.webp",
        name: "Trickery",
        hotkey: "D",
        description: "Reduce the &/units/Elven Worker& abilities cooldown by ^-15%^.<br>You also respawn with ^50%^ of your maximum mana when returning to the map after a resurection."
    },
    {
        img: "/images/upgrades/treeOfLife/naturalBond.webp",
        imgR: "/images/upgrades/treeOfLife/naturalBondR.webp",
        name: "Natural Bond",
        hotkey: "F",
        description: "Reduce resurection time by ^-50%^.<br>Spawn a free #Owl Scout# when you return to the map after resurrecting."
    },
    {
        img: "/images/upgrades/treeOfLife/shatter.webp",
        imgR: "/images/upgrades/treeOfLife/shatterR.webp",
        name: "Shatter",
        hotkey: "Z",
        description: "The &/unitsElven Worker& deals ^+1^ additional damage per hit to destructible objects."
    },
    {
        img: "/images/upgrades/treeOfLife/resurrection.webp", //TODO ADD FROM GAME
        imgR: "/images/upgrades/treeOfLife/resurrection.webp", //TODO ADD FROM GAME
        name: "Resurrection",
        hotkey: "V",
        description: "Revive your &/units/Elven Worker& for 0 gold after 20 seconds." //TODO ADD FROM GAME
    }
];

const spellBook = [
    //TODO
]

const buildings = [
    {
        img: "/images/buildings/goldMine.webp",
        imgR: "/images/buildings/goldMineR.webp",
        name: "Gold Mine",
        hotkey: "G",
        feed: "0-3",
        stats: {
            "Health": 40,
        },
        description: "Entangle a &/buildings/Gold Mine& so that the &/units/Elven Worker& can harvest gold.<p>@This structure feeds gold after the ^10^ minute mark.@</p>",
    },
    {
        img: "/images/buildings/blocker/blocker.webp",
        imgR: "/images/buildings/blocker/blockerR.webp",
        name: "Blocker",
        hotkey: "B",
        gold: 8,
        additionalUpgrades: true,
        hasRequires: true,
        feed: "3-6",
        description: "The &/buildings/Blocker& has ^80^ health and can be used to wall off sections of the map to restrict the mobility of the opposing team.<p>You can use the blocker as a ruler to measure the distance between objects. If there is ^1^ blocker space between any obstacle either horizontally, vertically or diagonally the enemy cannot walk in.</p>",
        stats: {
            "Health": 80,
        },
        upgrades: [
            {
                img: "/images/buildings/blocker/blocker.webp",
                imgR: "/images/buildings/blocker/blockerR.webp",
                hotkey: "U",
                gold: 6,
                feed: "6-12",
                name: "Big Blocker",
                requires: "&/buildings/treeOfTechnology#Architecture& *1*",
                description: `Upgrade &/buildings/Blocker& to &/buildings/Blocker#Big Blocker&<ul><li>Health: 80 -> ^154^ (^+74^)</li><li>Feed: 3-6 -> @6-12@</li></ul>`
            },
            {
                img: "/images/buildings/blocker/stoneBlocker.webp",
                imgR: "/images/buildings/blocker/stoneBlockerR.webp",
                hotkey: "U",
                gold: 8,
                feed: "9-18",
                name: "Stone Blocker",
                description: "Upgrade &/buildings/Blocker#Big Blocker& to &/buildings/Blocker#Stone Blocker&<ul><li>Health: 154 -> ^264^ (^+110^)</li><li>Feed: 6-12 -> @9-18@</li></ul>"
            },
            {
                img: "/images/buildings/blocker/redStoneBlocker.webp",
                imgR: "/images/buildings/blocker/redStoneBlockerR.webp",
                hotkey: "U",
                gold: 13,
                feed: "14-28",
                name: "Red Stone Blocker",
                description: "Upgrade &/buildings/Blocker#Stone Blocker& to &/buildings/Blocker#Red Stone Blocker&<ul><li>Health: 264 -> ^455^ (^+191^)</li><li>Feed: 9-18 -> @14-28@</li></ul>"
            },
            {
                img: "/images/buildings/blocker/crystalBlocker.webp",
                imgR: "/images/buildings/blocker/crystalBlockerR.webp",
                hotkey: "U",
                gold: 19,
                feed: "22-44",
                name: "Crystal Blocker",
                description: "Upgrade &/buildings/Blocker#Red Stone Blocker& to &/buildings/Blocker#Crystal Blocker&<ul><li>Health: 455 -> ^756^ (^+301^)</li><li>Feed: 14-28 -> @22-44@</li></ul>"
            },
            {
                img: "/images/buildings/blocker/magicBlocker.webp",
                imgR: "/images/buildings/blocker/magicBlockerR.webp",
                hotkey: "U",
                gold: 26,
                feed: "32-64",
                name: "Magic Blocker",
                description: "Upgrade &/buildings/Blocker#Crystal Blocker& to &/buildings/Blocker#Magic Blocker&<ul><li>Health: 756 -> ^1200^ (^+444^)</li><li>Feed: 22-44 -> @32-64@</li></ul>"
            },
        ]
    },
    {
        img: "/images/buildings/treeOfWar.webp",
        imgR: "/images/buildings/treeOfWarR.webp",
        name: "Tree Of War",
        hotkey: "R",
        gold: 30,
        feed: "12-24",
        stats: {
            "Health": 40,
        },
        description: "A structure that can train and upgrade units. Build this near structure behind upgraded blockers or inside a strong base to get more time to produce an army.",
        upgrades: treeOfWarUpgradesArray,
    },
    {
        img: "/images/buildings/treeOfTechnology.webp",
        imgR: "/images/buildings/treeOfTechnologyR.webp",
        name: "Tree Of Technology",
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
        img: "/images/buildings/treeOfLife.webp",
        imgR: "/images/buildings/treeOfLifeR.webp",
        name: "Tree Of Life",
        description: "A structure that can unlock talents. It's located in the top-left corner of the map.",
        offersUpgrades: treeOfLifeUpgrades
    },
    {
        img: "/images/buildings/magicTower.webp",
        imgR: "/images/buildings/magicTowerR.webp",
        name: "Magic Tower",
        requires: "&/buildings/treeOfTechnology#Architecture& *1*",
        description: "A balanced tower with moderate damage output, range and attack speed.",
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
        additionalUpgrades: true,
        upgrades: [
            //TODO
        ]
    },
    {
        img: "/images/buildings/fireTower.webp",
        imgR: "/images/buildings/fireTowerR.webp",
        name: "Fire Tower",
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
        additionalUpgrades: true,
        upgrades: [
            //TODO
        ],
        abilities: [
            //TODO
        ]
    },
    {
        img: "/images/buildings/earthTower.webp",
        imgR: "/images/buildings/earthTowerR.webp",
        name: "Earth Tower",
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
        additionalUpgrades: true,
        upgrades: [
            //TODO
        ],
    },
    {
        img: "/images/buildings/frostTower.webp",
        imgR: "/images/buildings/frostTowerR.webp",
        name: "Frost Tower",
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
        additionalUpgrades: true,
        upgrades: [
            //TODO
        ],
        abilities: [
            //TODO
        ]
    },
    {
        img: "/images/buildings/lightningTower.webp",
        imgR: "/images/buildings/lightningTowerR.webp",
        name: "Lightning Tower",
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
        additionalUpgrades: true,
        upgrades: [
            //TODO
        ],
        abilities: [
            //TODO
        ]
    },
]; //TODO check if other buildings in game

export function buildingPage(ctx, next) {
    const selectedBuildingName = ctx.params.name;

    let selectedBuilding;

    if (selectedBuildingName)
        selectedBuilding = buildings.find(building => rmvSpc(building.name.toLowerCase()) === selectedBuildingName.toLowerCase());

    const buildingAbilitiesTable = (abilities) => html``;

    const buildingUpgradesTable = (upgrades) => html`
        <h4 class="text-yellow mt-3">Upgrades</h4>
        <table class="table table-striped table-hover mb-0 w-auto" data-bs-theme="dark">
            <thead>
                <th class="text-center">Classic</th>
                <th class="text-center">Reforged</th>
                <th class="text-center">Name</th>
                <th class="text-center">Hotkey</th>
                <th class="text-center">Gold cost</th>
                <th>Description</th>
            </thead>
            <tbody>
                ${upgrades.map(upgrade => {
        return html`
                    <tr id=${rmvSpc(upgrade.name)}>
                        <td class="text-center"><img src="${upgrade.img}" class="abilityImage"></td>
                        <td class="text-center"><img src="${upgrade.imgR}" class="abilityImage"></td>
                        <td class="text-center">${unsafeHTML(markers(upgrade.name))}</td>
                        <td class="text-center">(${upgrade.hotkey})</td>
                        <td class="text-center"><span class="text-yellow">${upgrade.gold}g</span></td>
                        <td>${unsafeHTML(markers(upgrade.description))}</td>
                    </tr>`})}
                    </tbody>
        </table>
    `;

    const buildingUpgradesSeparatedTable = (upgrades) => html`
        <h4 class="text-yellow mt-3">Upgrades</h4>
        <div>
            ${upgrades.map(mainUpgrade => {
        return html`
            <div id=${rmvSpc(mainUpgrade.name)} class="mb-5">
                <h4 class="mt-3">${mainUpgrade.name} ${mainUpgrade.hotkey ? html`(<span class="text-purple">${mainUpgrade.hotkey}</span>)` : ""}</h4>
                ${mainUpgrade.description ? html`<p>${unsafeHTML(markers(mainUpgrade.description))}</p>` : ""}
                <table class="table table-striped table-hover mb-0 w-auto" data-bs-theme="dark">
                    <tr>
                        <th class="text-center">Level</th>
                        ${mainUpgrade.upgrades.map(upgrade => html`
                            <td id=${rmvSpc(mainUpgrade.name) + upgrade.lvl} class="text-center">${upgrade.lvl}</td>
                        `)}
                    </tr>
                    <tr>
                        <th class="text-center">Icons</th>
                        ${mainUpgrade.upgrades.map(upgrade => html`
                            <td class="text-center">
                                <img src="${upgrade.img}" class="upgradeImage">
                                ${upgrade.imgR ? html`<img src="${upgrade.imgR}" class="upgradeImage">` : ""}
                            </td>
                        `)}
                    </tr>
                    <tr>
                        <th class="text-center">Gold</th>
                        ${mainUpgrade.upgrades.map(upgrade => html`
                            <td class="text-center text-yellow">${upgrade.gold}g</td>
                        `)}
                    </tr>
                    ${mainUpgrade.hasRequires ? html`
                        <tr>
                            <th class="text-center">Requires</th>
                            ${mainUpgrade.upgrades.map(upgrade => html`
                                ${upgrade.requires ? html`<td class="text-center">${unsafeHTML(markers(upgrade.requires))}</td>` : html`<td></td>`}
                            `)}
                        </tr>
                    ` : ""}
                    <tr>
                        <th>Description</th>
                        ${mainUpgrade.upgrades.map(upgrade => html`
                            <td>
                                ${upgrade.changes.map(element => html`
                                    <a href=${element.type ? `/${element.type}/${rmvSpc(element.name)}` : ""}>${element.name}</a>
                                    <ul>
                                        ${element.stats.map(stat => html`
                                            <li>${stat.name}: ${stat.hasOwnProperty('old') ? `${stat.old} -> ` : ""}<span class="text-yellow">${stat.new}</span> ${stat.parenthesesVal ? html`(<span class="text-yellow">${stat.parenthesesVal}</span>)` : ""} ${stat.description ? unsafeHTML(markers(stat.description)) : ""}</li>
                                        `)}
                                    </ul>
                                `)}
                            </td>
                        `)}
                    </tr>
                </table>
            </div>
            `})}
        </div>
    `;

    const buildingTemplate = (building) => html`
        <div class="d-flex align-items-center gap-3 mb-3 justify-content-center">
            <img class="mainImg" src="${building.img}" class="buildingImage" title="Classic Image"/>
            <img class="mainImg" src="${building.imgR}" class="buildingImage" title="Reforged Image"/>
            <h1 class="text-blue">${building.name} ${building.hotkey ? html`<span>(<span class="hotkey">${building.hotkey}</span>)</span>` : ""}</h1>
        </div>
        <div class="d-flex flex-row align-items-start gap-5 mb-5">
            <div class="statsContainer border border-warning">
                <h4 class="text-yellow text-center">Stats</h4>
                <table class="ws-nowrap table table-striped table-hover w-auto mb-0" data-bs-theme="dark">
                    <tbody>
                        ${building.gold ? html`
                            <tr>
                                <th>Gold cost</th>
                                <td class="text-center"><span class="text-yellow">${building.gold + "g"}</span></td>
                            </tr>
                        ` : ""}
                        ${building.supply ? html`
                            <tr>
                                <th>Supply cost</th>
                                <td class="text-center">${building.supply}</td>
                            </tr>
                        ` : ""}
                        ${building.feed ? html`
                            <tr>
                                <th>Feed</th>
                                <td class="text-center"><span class="text-danger">${building.feed}</span></td>
                            </tr>
                        ` : ""}
                        ${building.stats ? Object.entries(building.stats).map(([name, value] = entry) => html`
                            <tr>
                                <th>${name}</th>
                                <td class="text-center">${value}</td>
                            </tr>
                        `) : ""}
                    </tbody>
                </table>
            </div>
            <div>
                <div class="description mb-3">
                    <h4 class="text-yellow">Description</h4>
                        ${unsafeHTML(markers(building.description))}
                    </div>
                <div>
                    <h4 class="text-yellow">Tips</h4> 
                    <!-- TODO add tips later on -->
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco!
                </div>
            </div>
        </div>
        ${building.abilities ? buildingAbilitiesTable(building.abilities) : ""}
        ${building.upgrades ? buildingUpgradesTable(building.upgrades) : ""}
        ${building.upgradesSeparated ? buildingUpgradesSeparatedTable(building.upgradesSeparated) : ""}
        ${building.additionalUpgrades ? html`<p class="fw-bold text-green fs-5 mt-5">This building can get additional upgrades for health, damage, etc. from the <a href="/buildings/TreeOfTechnology">Tree Of Technology</a>!</p>` : ""}
    `;

    const allTemplates = () => html`
        <div id = "buildingsContainer" >
            <h3>Buildings</h3>
            <p>Select building to view information about it.</p>
            <div class="d-flex flex-wrap gap-5 p-2 mb-5">
                ${buildings.map(building => html`
                    <a href=${`/buildings/${rmvSpc(building.name)}`} class="border-0 bg-transparent p-0 d-flex flex-column align-items-center fw-bold text-blue">
                        <img src="${building.img}" class="buildingImage" title=${building.name}>${building.name}
                    </a>
                `)}
            </div>
            ${selectedBuilding ? buildingTemplate(selectedBuilding) : ""}
        </div>
    `;

    render(allTemplates(), container);
    next();
}