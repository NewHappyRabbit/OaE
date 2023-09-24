import { html, render } from 'lit-html'
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { container } from '../app';
import { markers, rmvSpc } from '../utilities';

export const allUnits = {
    "ElvenWorker": {
        img: "/images/units/elvenWorker/elvenWorker.webp",
        imgR: "/images/units/elvenWorker/elvenWorkerR.webp",
        name: "Elven Worker",
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
    "OwlScout": {
        img: "/images/units/owlScout/owlScout.webp",
        imgR: "/images/units/owlScout/owlScoutR.webp",
        name: "Owl Scout",
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
    "Archer": {
        img: "/images/units/archer/archer.webp",
        imgR: "/images/units/archer/archerR.webp",
        name: "Archer",
        hotkey: "W",
        gold: 20,
        supply: 2,
        feed: "8-16",
        additionalUpgrades: true,
        description: "<p>^Requires &/buildings/treeOfTechnology#Architecture 1& upgrade to train.^</p><p>A ranged attacker with low health and damage. Archers are best used as a support unit to increase the damage output of a base. Put your archers behind upgraded blockers and enable hold position to prevent them from chasing the enemy.</p>",
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
    "Ent": {
        img: "/images/units/ent/ent.webp",
        imgR: "/images/units/ent/entR.webp",
        name: "Ent",
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
    "Druid": {
        img: "/images/units/druid/druid.webp",
        imgR: "/images/units/druid/druidR.webp",
        name: "Druid",
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
    "Hippogryph": {
        img: "/images/units/hippogryph/hippogryph.webp",
        imgR: "/images/units/hippogryph/hippogryphR.webp",
        name: "Hippogryph",
        description: "<p>@This unit is not trainable!@</p><p>$Morphs from &/units/Owl Scout&.$</p>The hippogryph is a ferocious flying predator that weakens the target by reducing its move speed.They are most effective when used in large packs to chase down injured foes or to kill isolated enemies.",
        feed: "16-32",
        stats: {
            "Attack Damage": 20,
            "Attack Speed": 1.0,
            "Attack Range": 750,
            "Move speed": 300,
            "Health": 40
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
    "HippogryphRider": {
        img: "/images/units/hippogryphRider/hippogryphRider.webp",
        imgR: "/images/units/hippogryphRider/hippogryphRiderR.webp",
        name: "Hippogryph Rider",
        description: "<p>@This unit is not trainable!@</p><p>$Morphs from combining &/units/Hippogryph& and &/units/Archer&.$</p>The hippogryph rider is a flying ranged attacker with high mobility. It can be used to defend large bases, to harass the enemy from a distance and to chase down isolated or injured foes.",
        feed: "24-48",
        stats: {
            "Attack Damage": 20,
            "Attack Speed": 1.0,
            "Attack Range": 750,
            "Move speed": 300,
            "Health": 40
        },
    }
}; // TODO ADD Ancient

export const treeOfWarUpgrades = {
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
            description: `&/units/Owl Scout& <ul><li>Vision range: 750 -> ^900^ (^+150^)</li><li>Move speed: 325 -> ^406.25^ (^+25%^)</li></ul>*Scout* ability<ul><li>Duration: 10 -> ^15^ seconds (^+5 seconds^)</li><li>Cooldown: 75 -> ^45^ seconds (^-30 seconds^)</li></ul>`,
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

const treeOfTechnologyUpgrades = {
    //TODO add descriptions like magic
    "Speed": {
        hotkey: "Q",
        upgrades: [
            {
                img: "/images/upgrades/treeOfTechnology/speed/speed1.webp",
                imgR: "/images/upgrades/treeOfTechnology/speed/speed1R.webp",
                description: "&/units/Elven Worker& <ul><li>Move speed: 250 -> ^262^ (^+12^)</li></ul>",
                // description: "Increases the movement speed of your #Elven Worker# by ^12^.",
                gold: 20,
                lvl: 1
            },
            {
                img: "/images/upgrades/treeOfTechnology/speed/speed2.webp",
                imgR: "/images/upgrades/treeOfTechnology/speed/speed2R.webp",
                description: "&/units/Elven Worker& <ul><li>Move speed: 262 -> ^274^ (^+12^)</li></ul>",
                gold: 50,
                lvl: 2
            },
            {
                img: "/images/upgrades/treeOfTechnology/speed/speed3.png",
                imgR: "/images/upgrades/treeOfTechnology/speed/speed3.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Move speed: 274 -> ^286^ (^+12^)</li></ul>",
                gold: 80,
                lvl: 3
            },
            {
                img: "/images/upgrades/treeOfTechnology/speed/speed4.png",
                imgR: "/images/upgrades/treeOfTechnology/speed/speed4.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Move speed: 286 -> ^298^ (^+12^)</li></ul>",
                gold: 110,
                lvl: 4
            },
            {
                img: "/images/upgrades/treeOfTechnology/speed/speed5.png",
                imgR: "/images/upgrades/treeOfTechnology/speed/speed5.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Move speed: 298 -> ^310^ (^+12^)</li></ul>",
                gold: 140,
                lvl: 5
            }
        ]
    },
    "Life": {
        hotkey: "W",
        upgrades: [
            {
                img: "/images/upgrades/treeOfTechnology/life/life1.png",
                imgR: "/images/upgrades/treeOfTechnology/life/life1.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Health: 20 -> ^26^ (^+6^)</li></ul>",
                // description: "Increases the health points of your #Elven Worker# by ^6^.",
                gold: 80,
                lvl: 1
            },
            {
                img: "/images/upgrades/treeOfTechnology/life/life2.png",
                imgR: "/images/upgrades/treeOfTechnology/life/life2.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Health: 26 -> ^32^ (^+6^)</li></ul>",
                gold: 100,
                lvl: 2
            },
            {
                img: "/images/upgrades/treeOfTechnology/life/life3.png",
                imgR: "/images/upgrades/treeOfTechnology/life/life3.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Health: 32 -> ^38^ (^+6^)</li></ul>",
                gold: 120,
                lvl: 3
            },
            {
                img: "/images/upgrades/treeOfTechnology/life/life4.png",
                imgR: "/images/upgrades/treeOfTechnology/life/life4.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Health: 38 -> ^44^ (^+6^)</li></ul>",
                gold: 140,
                lvl: 4
            },
            {
                img: "/images/upgrades/treeOfTechnology/life/life5.png",
                imgR: "/images/upgrades/treeOfTechnology/life/life5.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Health: 44 -> ^50^ (^+6^)</li></ul>",
                gold: 160,
                lvl: 5
            }
        ]
    },
    "Magic": {
        hotkey: "E",
        description: "You can use skill points in the &/buildings/Spell Book& (%F2%)",
        upgrades: [
            {
                img: "/images/upgrades/treeOfTechnology/magic.png",
                imgR: "/images/upgrades/treeOfTechnology/magic.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Skill points: 0 -> ^2^ (^+2^)</li><li>Mana regeneration: ^+0.4^/second</li><li>Max mana: 0 -> ^100^ (^+100^)</li></ul>",
                gold: 50,
                lvl: 1
            },
            {
                img: "/images/upgrades/treeOfTechnology/magic.png",
                imgR: "/images/upgrades/treeOfTechnology/magic.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Skill points: 2 -> ^4^ (^+2^)</li><li>Mana regeneration: ^+0.1^/second</li></ul>",
                gold: 125,
                lvl: 2
            },
            {
                img: "/images/upgrades/treeOfTechnology/magic.png",
                imgR: "/images/upgrades/treeOfTechnology/magic.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Skill points: 4 -> ^6^ (^+2^)</li><li>Mana regeneration: ^+0.1^/second</li></ul>",
                gold: 200,
                lvl: 3
            },
            {
                img: "/images/upgrades/treeOfTechnology/magic.png",
                imgR: "/images/upgrades/treeOfTechnology/magic.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Skill points: 6 -> ^8^ (^+2^)</li><li>Mana regeneration: ^+0.1^/second</li></ul>",
                gold: 275,
                lvl: 4
            },
            {
                img: "/images/upgrades/treeOfTechnology/magic.png",
                imgR: "/images/upgrades/treeOfTechnology/magic.png", //TODO CHECK
                description: "&/units/Elven Worker& <ul><li>Skill points: 8 -> ^10^ (^+2^)</li><li>Mana regeneration: ^+0.1^/second</li></ul>",
                gold: 350,
                lvl: 5
            },
        ]
    },
    "Nourishment": {
        hotkey: "R",
        upgrades: [
            {
                img: "/images/upgrades/treeOfTechnology/nourishment.png",
                imgR: "/images/upgrades/treeOfTechnology/nourishment.png",
                description: "Increase #structures# regeneration rate by ^+0.6^ per second.<br>Buildings start construction with extra ^10%^ health.<br>Buildings gain ^+2^ armor. <div class='text-danger'>(Extra health and armor disappear 2 seconds after construction finishes!)</div>",
                gold: 50,
                lvl: 1
            },
            {
                img: "/images/upgrades/treeOfTechnology/nourishment.png",
                imgR: "/images/upgrades/treeOfTechnology/nourishment.png",
                description: "Increase #structures# regeneration rate by ^+0.7^ per second.<br>Buildings start with extra ^30%^ health.<br>Buildings gain ^+5^ armor. <div class='text-danger'>(Extra health and armor disappear 2 seconds after construction finishes!)</div>",
                gold: 100,
                lvl: 2
            },
            {
                img: "/images/upgrades/treeOfTechnology/nourishment.png",
                imgR: "/images/upgrades/treeOfTechnology/nourishment.png",
                description: "Increase #structures# regeneration rate by ^+0.7^ per second.<br>Buildings start with extra ^50%^ health.<br>Buildings gain ^+10^ armor. <div class='text-danger'>(Extra health and armor disappear 2 seconds after construction finishes!)</div>",
                gold: 150,
                lvl: 3
            },
        ]
    },
    "Architecture": {
        hotkey: "A",
        upgrades: [
            {
                img: "/images/upgrades/treeOfTechnology/architecture/architecture1.webp",
                imgR: "/images/upgrades/treeOfTechnology/architecture/architecture1R.webp",
                description: "#Supply Cap#: 8 (^+5^)<br>#Blocker#: 6 (^+2^)",
                // description: "Increase your #Supply Cap# count by ^5^.<br>Increase #Blocker# count by ^2^",
                gold: 50,
                lvl: 1
            },
            {
                img: "/images/upgrades/treeOfTechnology/architecture/architecture2.webp",
                imgR: "/images/upgrades/treeOfTechnology/architecture/architecture2R.webp",
                description: "#Supply Cap#: 12 (^+4^)<br>#Blocker#: 8 (^+2^)<br>#Elven Worker#<ul><li>Damage: 135 (^+55^)</li><li>Range: ^+50^</li><li>Attack speed: ^+15%^</li></ul>",
                // description: "Increase your #Supply Cap# count by ^4^.<br>Increase #Blocker# count by ^2^<br>Increase #Elven Worker# damage by ^55^, range by ^50^ and attack speed by ^15%^",
                gold: 150,
                lvl: 2
            },
            {
                img: "/images/upgrades/treeOfTechnology/architecture/architecture3.webp",
                imgR: "/images/upgrades/treeOfTechnology/architecture/architecture3R.webp",
                description: "#Supply Cap#: 18 (^+6^)<br>#Blocker#: 10 (^+2^)<br>#Elven Worker#<ul><li>Damage: 190 (^+55^)</li><li>Range: ^+50^</li><li>Attack speed: ^+15%^</li></ul>",
                // description: "Increase your #Supply Cap# count by ^6^.<br>Increase #Blocker# count by ^2^<br>Increase #Elven Worker# damage by ^55^, range by ^50^ and attack speed by ^15%^",
                gold: 250,
                lvl: 3
            },
            {
                img: "/images/upgrades/treeOfTechnology/architecture/architecture4.webp",
                imgR: "/images/upgrades/treeOfTechnology/architecture/architecture4R.webp",
                description: "#Supply Cap#: 24 (^+6^)<br>#Blocker#: 12 (^+2^)<br>#Elven Worker#<ul><li>Damage: 245 (^+55^)</li><li>Range: ^+50^</li><li>Attack speed: ^+15%^</li></ul>",
                // description: "Increase your #Supply Cap# count by ^6^.<br>Increase #Blocker# count by ^2^<br>Increase #Elven Worker# damage by ^55^, range by ^50^ and attack speed by ^15%^",
                gold: 350,
                lvl: 4
            },
            {
                img: "/images/upgrades/treeOfTechnology/architecture/architecture5.webp",
                imgR: "/images/upgrades/treeOfTechnology/architecture/architecture5R.webp",
                description: "#Supply Cap#: 28 (^+4^)<br>#Blocker#: 15 (^+3^)<br>#Elven Worker#<ul><li>Damage: 300 (^+55^)</li><li>Range: ^+50^</li><li>Attack speed: ^+15%^</li></ul>",
                // description: "Increase your #Supply Cap# count by ^4^.<br>Increase #Blocker# count by ^3^<br>Increase #Elven Worker# damage by ^55^, range by ^50^ and attack speed by ^15%^",
                gold: 450,
                lvl: 5
            },
        ]
    },
    "Armor": {
        hotkey: "S",
        upgrades: [
            {
                img: "/images/upgrades/treeOfTechnology/armor.webp",
                imgR: "/images/upgrades/treeOfTechnology/armorR.webp",
                description: "#Elven Worker# <ul><li>Armor: 3 (^+3^)</li></ul>",
                gold: 40,
                lvl: 1
            }
        ]
    },
    "Tenacity": {
        hotkey: "D",
        upgrades: [
            {
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity1.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity1R.webp",
                description: "#Ent# <ul><li>Damage: 25 (^+7^)</li><li>Health: 67 (^+17^)</li></ul>#Druid# <ul><li>Damage: 51 (^+9^)</li><li>Health: 46 (^+6^)</li></ul>",
                // description: "Increase #Ent# damage by ^7^ and health by ^17^.<br>Increase #Druid# damage by ^9^ and health by ^6^.",
                gold: 55,
                lvl: 1
            },
            {
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity2.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity2R.webp",
                description: "#Ent# <ul><li>Damage: 32 (^+7^)</li><li>Health: 84 (^+17^)</li><li>Armor: 2 (^+2^)</li></ul>#Druid# <ul><li>Damage: 60 (^+9^)</li><li>Health: 52 (^+6^)</li><li>Mana: 75 (^+25^)</li><li>Armor: 2 (^+2^)</li></ul>",
                // description: "Increase #Ent# damage by ^7^ and health by ^17^.<br>Increase #Druid# damage by ^9^, health by ^6^ and mana by ^25^.",
                gold: 65,
                lvl: 2
            },
            {
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity3.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity3R.webp",
                description: "#Ent# <ul><li>Damage: 39 (^+7^)</li><li>Health: 84 (^+17^)</li></ul>#Druid# <ul><li>Damage: 60 (^+9^)</li><li>Health: 52 (^+6^)</li></ul>",
                gold: 75,
                lvl: 3
            },
            {
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity4.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity4R.webp",
                description: "#Ent# <ul><li>Damage: 76 (^+7^)</li><li>Health: 101 (^+17^)</li></ul>#Druid# <ul><li>Damage: 69 (^+9^)</li><li>Health: 58 (^+6^)</li><li>Mana: 100 (^+25^)</li></ul>",
                gold: 85,
                lvl: 4
            },
            {
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity5.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity5R.webp",
                description: "#Ent# <ul><li>Damage: 83 (^+7^)</li><li>Health: 118 (^+17^)</li></ul>#Druid# <ul><li>Damage: 78 (^+9^)</li><li>Health: 64 (^+6^)</li></ul>",
                gold: 95,
                lvl: 5
            },
            {
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity6.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity6R.webp",
                description: "#Ent# <ul><li>Damage: 90 (^+7^)</li><li>Health: 135 (^+17^)</li></ul>#Druid# <ul><li>Damage: 87 (^+9^)</li><li>Health: 70 (^+6^)</li><li>Mana: 125 (^+25^)</li></ul>",
                gold: 105,
                lvl: 6
            },
            {
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity7.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity7R.webp",
                description: "#Ent# <ul><li>Damage: 97 (^+7^)</li><li>Health: 152 (^+17^)</li></ul>#Druid# <ul><li>Damage: 96 (^+9^)</li><li>Health: 76 (^+6^)</li></ul>",
                gold: 115,
                lvl: 7
            },
            {
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity8.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity8R.webp",
                description: "#Ent# <ul><li>Damage: 104 (^+7^)</li><li>Health: 169 (^+17^)</li></ul>#Druid# <ul><li>Damage: 105 (^+9^)</li><li>Health: 82 (^+6^)</li><li>Mana: 150 (^+25^)</li></ul>",
                gold: 125,
                lvl: 8
            },
            {
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity9.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity9R.webp",
                description: "#Ent# <ul><li>Damage: 111 (^+7^)</li><li>Health: 186 (^+17^)</li></ul>#Druid# <ul><li>Damage: 114 (^+9^)</li><li>Health: 88 (^+6^)</li></ul>",
                gold: 135,
                lvl: 9
            },
            {
                img: "/images/upgrades/treeOfTechnology/tenacity/tenacity10.webp",
                imgR: "/images/upgrades/treeOfTechnology/tenacity/tenacity10R.webp",
                description: "#Ent# <ul><li>Damage: 118 (^+7^)</li><li>Health: 203 (^+17^)</li><li>Attack speed: ^+25%^</li></ul>#Druid# <ul><li>Damage: 123 (^+9^)</li><li>Health: 94 (^+6^)</li><li>Attack speed: ^+25%^</li></ul>",
                gold: 145,
                lvl: 10
            },
        ]
    },
    "Construction": {
        hotkey: "F",
        upgrades: [
            {
                img: "/images/upgrades/treeOfTechnology/construction.webp",
                imgR: "/images/upgrades/treeOfTechnology/constructionR.webp",
                description: "#Magic Tower# <ul><li>Damage: 18 (^+4^)</li><li>Health: 28 (^+8^)</li></ul>#Fire Tower# <ul><li>Damage: 16 (^+4^)</li><li>Health: 28 (^+8^)</li></ul>#Earth Tower# <ul><li>Damage: 18 (^+4^)</li><li>Health: 28 (^+8^)</li></ul>#Frost Tower# <ul><li>Damage: 48 (^+16^)</li><li>Health: 28 (^+8^)</li></ul>#Lightning Tower# <ul><li>Damage: 89 (^+24^)</li><li>Health: 28 (^+8^)</li></ul>",
                // description: "Increase #Magic Tower# damage by ^4^ and health by ^8^<br>Increase #Fire Tower# damage by ^4^ and health by ^8^<br>Increase #Earth Tower# damage by ^4^ and health by ^8^<br>Increase #Frost Tower# damage by ^16^ and health by ^8^<br>Increase #Lightning Tower# damage by ^24^ and health by ^8^",
                gold: 55,
                lvl: 1
            },
            {
                img: "/images/upgrades/treeOfTechnology/construction.webp",
                imgR: "/images/upgrades/treeOfTechnology/constructionR.webp",
                description: "#Magic Tower# <ul><li>Damage: 22 (^+4^)</li><li>Health: 36 (^+8^)</li><li>Armor: 5 (^+5^)</li></ul>#Fire Tower# <ul><li>Damage: 20 (^+4^)</li><li>Health: 36 (^+8^)</li><li>Armor: 5 (^+5^)</li></ul>#Earth Tower# <ul><li>Damage: 22 (^+4^)</li><li>Health: 36 (^+8^)</li><li>Armor: 5 (^+5^)</li></ul>#Frost Tower# <ul><li>Damage: 64 (^+16^)</li><li>Health: 36 (^+8^)</li><li>Armor: 5 (^+5^)</li></ul>#Lightning Tower# <ul><li>Damage: 113 (^+24^)</li><li>Health: 36 (^+8^)</li><li>Armor: 5 (^+5^)</li></ul>",
                gold: 65,
                lvl: 2
            },
            {
                img: "/images/upgrades/treeOfTechnology/construction.webp",
                imgR: "/images/upgrades/treeOfTechnology/constructionR.webp",
                description: "#Magic Tower# <ul><li>Damage: 26 (^+4^)</li><li>Health: 44 (^+8^)</li></ul>#Fire Tower# <ul><li>Damage: 24 (^+4^)</li><li>Health: 44 (^+8^)</li></ul>#Earth Tower# <ul><li>Damage: 26 (^+4^)</li><li>Health: 44 (^+8^)</li></ul>#Frost Tower# <ul><li>Damage: 80 (^+16^)</li><li>Health: 44 (^+8^)</li></ul>#Lightning Tower# <ul><li>Damage: 137 (^+24^)</li><li>Health: 44 (^+8^)</li></ul>",
                gold: 75,
                lvl: 3
            },
            {
                img: "/images/upgrades/treeOfTechnology/construction.webp",
                imgR: "/images/upgrades/treeOfTechnology/constructionR.webp",
                description: "#Magic Tower# <ul><li>Damage: 30 (^+4^)</li><li>Health: 52 (^+8^)</li><li>Mana regeneration: 0.5 (^+0.3^) per second</li></ul>#Fire Tower# <ul><li>Damage: 28 (^+4^)</li><li>Health: 52 (^+8^)</li><li>Mana regeneration: 0.5 (^+0.3^) per second</li></ul>#Earth Tower# <ul><li>Damage: 30 (^+4^)</li><li>Health: 52 (^+8^)</li><li>Mana regeneration: 0.5 (^+0.3^) per second</li></ul>#Frost Tower# <ul><li>Damage: 96 (^+16^)</li><li>Health: 52 (^+8^)</li><li>Mana regeneration: 0.5 (^+0.3^) per second</li></ul>#Lightning Tower# <ul><li>Damage: 161 (^+24^)</li><li>Health: 52 (^+8^)</li><li>Mana regeneration: 0.5 (^+0.3^) per second</li></ul>",
                gold: 85,
                lvl: 4
            },
            {
                img: "/images/upgrades/treeOfTechnology/construction.webp",
                imgR: "/images/upgrades/treeOfTechnology/constructionR.webp",
                description: "#Magic Tower# <ul><li>Damage: 34 (^+4^)</li><li>Health: 60 (^+8^)</li></ul>#Fire Tower# <ul><li>Damage: 32 (^+4^)</li><li>Health: 60 (^+8^)</li></ul>#Earth Tower# <ul><li>Damage: 34 (^+4^)</li><li>Health: 60 (^+8^)</li></ul>#Frost Tower# <ul><li>Damage: 112 (^+16^)</li><li>Health: 60 (^+8^)</li></ul>#Lightning Tower# <ul><li>Damage: 185 (^+24^)</li><li>Health: 60 (^+8^)</li></ul>",
                gold: 95,
                lvl: 5
            },
            {
                img: "/images/upgrades/treeOfTechnology/construction.webp",
                imgR: "/images/upgrades/treeOfTechnology/constructionR.webp",
                description: "All #Towers# build ^66%^ faster and upgrade ^50%^ faster.<br>#Magic Tower# <ul><li>Damage: 38 (^+4^)</li><li>Health: 68 (^+8^)</li></ul>#Fire Tower# <ul><li>Damage: 36 (^+4^)</li><li>Health: 68 (^+8^)</li></ul>#Earth Tower# <ul><li>Damage: 38 (^+4^)</li><li>Health: 68 (^+8^)</li></ul>#Frost Tower# <ul><li>Damage: 128 (^+16^)</li><li>Health: 68 (^+8^)</li></ul>#Lightning Tower# <ul><li>Damage: 209 (^+24^)</li><li>Health: 68 (^+8^)</li></ul>",
                gold: 105,
                lvl: 6
            },
            {
                img: "/images/upgrades/treeOfTechnology/construction.webp",
                imgR: "/images/upgrades/treeOfTechnology/constructionR.webp",
                description: "#Magic Tower# <ul><li>Damage: 42 (^+4^)</li><li>Health: 76 (^+8^)</li></ul>#Fire Tower# <ul><li>Damage: 40 (^+4^)</li><li>Health: 76 (^+8^)</li></ul>#Earth Tower# <ul><li>Damage: 42 (^+4^)</li><li>Health: 76 (^+8^)</li></ul>#Frost Tower# <ul><li>Damage: 144 (^+16^)</li><li>Health: 76 (^+8^)</li></ul>#Lightning Tower# <ul><li>Damage: 233 (^+24^)</li><li>Health: 76 (^+8^)</li></ul>",
                gold: 115,
                lvl: 7
            },
            {
                img: "/images/upgrades/treeOfTechnology/construction.webp",
                imgR: "/images/upgrades/treeOfTechnology/constructionR.webp",
                description: "#Magic Tower# <ul><li>Damage: 46 (^+4^)</li><li>Health: 84 (^+8^)</li><li>Max mana: X (^+100%^)</li></ul>#Fire Tower# <ul><li>Damage: 44 (^+4^)</li><li>Health: 84 (^+8^)</li><li>Max mana: X (^+100%^)</li></ul>#Earth Tower# <ul><li>Damage: 46 (^+4^)</li><li>Health: 84 (^+8^)</li><li>Max mana: X (^+100%^)</li></ul>#Frost Tower# <ul><li>Damage: 160 (^+16^)</li><li>Health: 84 (^+8^)</li><li>Max mana: X (^+100%^)</li></ul>#Lightning Tower# <ul><li>Damage: 257 (^+24^)</li><li>Health: 84 (^+8^)</li><li>Max mana: X (^+100%^)</li></ul>", //TODO Check mana for each tower and edit
                gold: 125,
                lvl: 8
            },
            {
                img: "/images/upgrades/treeOfTechnology/construction.webp",
                imgR: "/images/upgrades/treeOfTechnology/constructionR.webp",
                description: "#Magic Tower# <ul><li>Damage: 50 (^+4^)</li><li>Health: 92 (^+8^)</li></ul>#Fire Tower# <ul><li>Damage: 48 (^+4^)</li><li>Health: 92 (^+8^)</li></ul>#Earth Tower# <ul><li>Damage: 50 (^+4^)</li><li>Health: 92 (^+8^)</li></ul>#Frost Tower# <ul><li>Damage: 176 (^+16^)</li><li>Health: 92 (^+8^)</li></ul>#Lightning Tower# <ul><li>Damage: 281 (^+24^)</li><li>Health: 92 (^+8^)</li></ul>",
                gold: 135,
                lvl: 9
            },
            {
                img: "/images/upgrades/treeOfTechnology/construction.webp",
                imgR: "/images/upgrades/treeOfTechnology/constructionR.webp",
                description: "Reduce spell damage to all #towers# by ^100%^.<br>#Magic Tower# <ul><li>Damage: 54 (^+4^)</li><li>Health: 100 (^+8^)</li></ul>#Fire Tower# <ul><li>Damage: 52 (^+4^)</li><li>Health: 100 (^+8^)</li></ul>#Earth Tower# <ul><li>Damage: 54 (^+4^)</li><li>Health: 100 (^+8^)</li></ul>#Frost Tower# <ul><li>Damage: 192 (^+16^)</li><li>Health: 100 (^+8^)</li></ul>#Lightning Tower# <ul><li>Damage: 305 (^+24^)</li><li>Health: 100 (^+8^)</li></ul>",
                gold: 145,
                lvl: 10
            },
        ]
    },
    "Leadership": {
        hotkey: "Z",
        upgrades: [
            {
                img: "/images/upgrades/treeOfTechnology/leadership/leadership1.png",
                imgR: "/images/upgrades/treeOfTechnology/leadership/leadership1.png",
                description: "Increase #Archer# damage by ^4^ and health by ^2^.<br>Increase #Hippogryph# damage by ^1^ and health by ^13^.<br>Increase #Hippogryph Rider# damage by ^7^ and health by ^6^.",
                gold: 55,
                lvl: 1
            },
            {
                img: "/images/upgrades/treeOfTechnology/leadership/leadership2.png",
                imgR: "/images/upgrades/treeOfTechnology/leadership/leadership2.png",
                description: "Increase #Archer#, #Hippogryph# and #Hippogryph Rider# life regeneration by ^0.2^ per second.<br>Increase #Archer# damage by ^4^ and health by ^2^.<br>Increase #Hippogryph# damage by ^1^ and health by ^13^.<br>Increase #Hippogryph Rider# damage by ^7^ and health by ^6^.",
                gold: 65,
                lvl: 2
            },
            {
                img: "/images/upgrades/treeOfTechnology/leadership/leadership3.png",
                imgR: "/images/upgrades/treeOfTechnology/leadership/leadership3.png",
                description: "Increase #Archer# damage by ^4^ and health by ^2^.<br>Increase #Hippogryph# damage by ^1^ and health by ^13^.<br>Increase #Hippogryph Rider# damage by ^7^ and health by ^6^.",
                gold: 75,
                lvl: 3
            },
            {
                img: "/images/upgrades/treeOfTechnology/leadership/leadership4.png",
                imgR: "/images/upgrades/treeOfTechnology/leadership/leadership4.png",
                description: "Increase #Archer#, #Hippogryph# and #Hippogryph Rider# movement speed by ^10%^ per second.<br>Increase #Archer# damage by ^4^ and health by ^2^.<br>Increase #Hippogryph# damage by ^1^ and health by ^13^.<br>Increase #Hippogryph Rider# damage by ^7^ and health by ^6^.",
                gold: 85,
                lvl: 4
            },
            {
                img: "/images/upgrades/treeOfTechnology/leadership/leadership5.png",
                imgR: "/images/upgrades/treeOfTechnology/leadership/leadership5.png",
                description: "Increase #Archer# damage by ^4^ and health by ^2^.<br>Increase #Hippogryph# damage by ^1^ and health by ^13^.<br>Increase #Hippogryph Rider# damage by ^7^ and health by ^6^.",
                gold: 95,
                lvl: 5
            },
            {
                img: "/images/upgrades/treeOfTechnology/leadership/leadership6.png",
                imgR: "/images/upgrades/treeOfTechnology/leadership/leadership6.png",
                description: "Increase #Archer#, #Hippogryph# and #Hippogryph Rider# armor by ^2^.<br>Increase #Archer# damage by ^4^ and health by ^2^.<br>Increase #Hippogryph# damage by ^1^ and health by ^13^.<br>Increase #Hippogryph Rider# damage by ^7^ and health by ^6^.",
                gold: 105,
                lvl: 6
            },
            {
                img: "/images/upgrades/treeOfTechnology/leadership/leadership7.png",
                imgR: "/images/upgrades/treeOfTechnology/leadership/leadership7.png",
                description: "Increase #Archer# damage by ^4^ and health by ^2^.<br>Increase #Hippogryph# damage by ^1^ and health by ^13^.<br>Increase #Hippogryph Rider# damage by ^7^ and health by ^6^.",
                gold: 115,
                lvl: 7
            },
            {
                img: "/images/upgrades/treeOfTechnology/leadership/leadership8.png",
                imgR: "/images/upgrades/treeOfTechnology/leadership/leadership8.png",
                description: "Increase #Archer#, #Hippogryph# and #Hippogryph Rider# movement speed by ^15%^.<br>Increase #Archer# damage by ^4^ and health by ^2^.<br>Increase #Hippogryph# damage by ^1^ and health by ^13^.<br>Increase #Hippogryph Rider# damage by ^7^ and health by ^6^.",
                gold: 125,
                lvl: 8
            },
            {
                img: "/images/upgrades/treeOfTechnology/leadership/leadership9.png",
                imgR: "/images/upgrades/treeOfTechnology/leadership/leadership9.png",
                description: "Increase #Archer# damage by ^4^ and health by ^2^.<br>Increase #Hippogryph# damage by ^1^ and health by ^13^.<br>Increase #Hippogryph Rider# damage by ^7^ and health by ^6^.",
                gold: 135,
                lvl: 9
            },
            {
                img: "/images/upgrades/treeOfTechnology/leadership/leadership10.png",
                imgR: "/images/upgrades/treeOfTechnology/leadership/leadership10.png",
                description: "Increase #Archer#, #Hippogryph# and #Hippogryph Rider# armor by ^3^.<br>Increase #Archer# damage by ^4^ and health by ^2^.<br>Increase #Hippogryph# damage by ^1^ and health by ^13^.<br>Increase #Hippogryph Rider# damage by ^7^ and health by ^6^.",
                gold: 145,
                lvl: 10
            },
        ]
    } //TODO DO THIS LIKE ABOVE (WITH UL INSTEAD OF FULL DESCRIPTION)
};

const treeOfLifeUpgrades = [
    {
        img: "/images/upgrades/treeOfLife/regeneration.webp",
        imgR: "/images/upgrades/treeOfLife/regenerationR.webp",
        name: "Regeneration",
        hotkey: "Q",
        description: "The #Elven Worker# health regenerates ^+3%^ life per second."
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
        description: "When resurrecting other players ^30%^ of the gold you send is also added to their bouns pool and reduced from the cost of their next revive."
    },
    {
        img: "/images/upgrades/treeOfLife/trickery.webp",
        imgR: "/images/upgrades/treeOfLife/trickeryR.webp",
        name: "Trickery",
        hotkey: "D",
        description: "Reduce the #Elven Worker# abilities cooldown by ^-15%^.<br>You also respawn with ^50%^ of your maximum mana when returning to the map after a resurection."
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
        description: "The #Elven Worker# deals ^+1^ additional damage per hit to destructible objects."
    },
    {
        img: "/images/upgrades/treeOfLife/resurrection.webp", //TODO ADD FROM GAME
        imgR: "/images/upgrades/treeOfLife/resurrection.webp", //TODO ADD FROM GAME
        name: "Resurrection",
        hotkey: "V",
        description: "Revive your #Elven Worker# for 0 gold after 20 seconds." //TODO ADD FROM GAME
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
        stats: [
            {
                name: "Health",
                value: "40"
            }
        ],
        description: "Entangle a &/buildings/Gold Mine& so that the &/units/Elven Worker& can harvest gold.<p>@This structure feeds gold after the ^10^ minute mark.@</p>",
    },
    {
        img: "/images/buildings/blocker/blocker.webp",
        imgR: "/images/buildings/blocker/blockerR.webp",
        name: "Blocker",
        hotkey: "B",
        gold: 8,
        additionalUpgrades: true,
        feed: "3-6",
        description: "The &/buildings/Blocker& has ^80^ health and can be used to wall off sections of the map to restrict the mobility of the opposing team.<p>You can use the blocker as a ruler to measure the distance between objects. If there is ^1^ blocker space between any obstacle either horizontally, vertically or diagonally the enemy cannot walk in.</p>",
        stats: [
            {
                name: "Health",
                value: "80"
            },
        ],
        upgrades: [
            {
                img: "/images/buildings/blocker/blocker.webp",
                imgR: "/images/buildings/blocker/blockerR.webp",
                hotkey: "U",
                gold: 6,
                feed: "6-12",
                name: "Big Blocker",
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
        description: "Example description",
        gold: 0,
        supply: 0,
        additionalUpgrades: true,
        upgrades: [
            /* magicTower: {
            
                },
                magicTower: {
            
                },
                fireTower: {
            
                },
                earthTower: {
            
                },
                frostTower: {
            
                },
                lightningTower: {
            
                } */
        ]
    },
    {
        name: "Spell Book",
        //TODO
    }
]; //TODO check if other buildings in game


//TODO Make every upgrade like buildings/blocker (instead of Health: 80 (+12), do it like Health: 80 -> 92 (+12)

export function buildingPage(ctx) {
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
            ${Object.entries(upgrades).map(([key, value] = entry) => {
        return html`
            <div class="mb-5">
                <h4 class="mt-3">${key} ${value.hotkey ? html`(<span class="text-purple">${value.hotkey}</span>)` : ""}</h4>
                ${value.description ? html`<p>${unsafeHTML(markers(value.description))}</p>` : ""}
                <table class="table table-striped table-hover mb-0 w-auto" data-bs-theme="dark">
                    <tr>
                        <th class="text-center">Level</th>
                        ${value.upgrades.map(upgrade => html`
                        <td class="text-center">${upgrade.lvl}</td>
                        `)}
                    </tr>
                    <tr>
                        <th class="text-center">Icons</th>
                        ${value.upgrades.map(upgrade => html`
                        <td class="text-center">
                            <img src="${upgrade.img}" class="upgradeImage">
                            <img src="${upgrade.imgR}" class="upgradeImage">
                        </td>
                        `)}
                    </tr>
                    <tr>
                        <th class="text-center">Gold</th>
                        ${value.upgrades.map(upgrade => html`
                        <td class="text-center text-yellow">${upgrade.gold}g</td>
                        `)}
                    </tr>
                    <tr>
                        <th>Description</th>
                        ${value.upgrades.map(upgrade => html`
                        <td>${unsafeHTML(markers(upgrade.description))}</td>
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
        <div class="d-flex flex-row gap-5 mb-5">
            <div class="border border-warning">
                <h4 class="text-yellow text-center">Stats</h4>
                <table class="ws-nowrap table table-striped table-hover w-auto mb-0" data-bs-theme="dark">
                    <tbody>
                        <tr>
                            ${building.gold ? html`
                                <th>Gold cost</th>
                                <td class="text-center"><span class="text-yellow">${building.gold + "g"}</span></td>
                            ` : ""}
                        </tr>
                        <tr>
                            <th>Building feed</th>
                            <td class="text-center"><span class="text-danger">${building.feed}</span></td>
                        </tr>
                        ${building.stats ? building.stats.map(stat => html`
                            <tr>
                                <th>${stat.name}</th>
                                <td class="text-center">${stat.value}</td>
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
        <div class="p-3" id = "buildingsContainer" >
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
}