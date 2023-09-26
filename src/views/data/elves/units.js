import { spellBookAbilities } from "./spellbook";

export const elvesUnits = [
    {
        img: "/images/elves/units/elvenWorker/elvenWorker.webp",
        imgR: "/images/elves/units/elvenWorker/elvenWorkerR.webp",
        name: "Elven Worker",
        team: "elves",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", //TODO
        treeOfTechnologyUpgrades: true,
        stats: {
            "Damage": 80,
            "Move speed": 250,
            "Health": 20,
            //TODO
        },
        abilities: spellBookAbilities
    },
    {
        img: "/images/elves/units/owlScout/owlScout.webp",
        imgR: "/images/elves/units/owlScout/owlScoutR.webp",
        name: "Owl Scout",
        team: "elves",
        hotkey: "Q",
        gold: 40,
        supply: 2,
        feed: "16-32",
        description: "<p>A flying scout with a large field of vision that can see over cliffs. The &/elves/units/Owl Scout& can be used to spy on the enemy or to help you find safe passages through unexplored terrain.</p>",
        stats: {
            "Vision Range": 600,
            "Move speed": 325,
            "Health": 40
        },
        transformsTo: [
            "Hippogryph",
        ],
        abilities: [
            {
                img: "/images/elves/units/owlScout/abilities/scout.webp", // TODO Change icon, since its a passive icon
                imgR: "/images/elves/units/owlScout/abilities/scoutR.webp",
                name: "Scout",
                hotkey: "C",
                description: "Increases the vision range by ^400^ for ^10^ seconds.",
                cooldown: 75,
            },
            {
                img: "/images/elves/units/hippogryph/hippogryph.webp",
                imgR: "/images/elves/units/hippogryph/hippogryphR.webp",
                name: "Transform to &/elves/units/Hippogryph&",
                hotkey: "M",
                description: "Transforms the &/elves/units/Owl Scout& into a &/elves/units/Hippogryph&.",
                cooldown: 40,
            },
            {
                img: "/images/elves/units/owlScout/abilities/nightVision.webp",
                imgR: "/images/elves/units/owlScout/abilities/nightVisionR.webp",
                name: "Night Vision",
                passive: true,
                description: "Reveal invisible units within ^600^ range.",
            }
        ],
    },
    {
        img: "/images/elves/units/archer/archer.webp",
        imgR: "/images/elves/units/archer/archerR.webp",
        name: "Archer",
        team: "elves",
        hotkey: "W",
        gold: 20,
        supply: 2,
        feed: "8-16",
        treeOfTechnologyUpgrades: true,
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
                img: "/images/elves/units/hippogryphRider/hippogryphRider.webp",
                imgR: "/images/elves/units/hippogryphRider/hippogryphRiderR.webp",
                name: "Mount &/elves/units/Hippogryph&",
                hotkey: "Q",
                description: "The &/elves/units/Archer& mounts the &/elves/units/Hippogryph& - forming a &/elves/units/Hippogryph Rider&.",
            }
        ]
    },
    {
        img: "/images/elves/units/ent/ent.webp",
        imgR: "/images/elves/units/ent/entR.webp",
        name: "Ent",
        team: "elves",
        hotkey: "E",
        gold: 30,
        supply: 3,
        feed: "12-24",
        treeOfTechnologyUpgrades: true,
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
                img: "/images/elves/units/ancient/ancient.webp",
                imgR: "/images/elves/units/ancient/ancientR.webp",
                name: "Transform to &/elves/units/Ancient&",
                hotkey: "Q",
                description: "Transform the &/elves/units/Ent& into an &/elves/units/Ancient&. The &/elves/units/Ancient& is larger, slower and cannot &#Burrow&.",
                cooldown: 20
            },
            {
                img: "/images/elves/units/ent/abilities/burrow.png",
                imgR: "/images/elves/units/ent/abilities/burrow.png",
                name: "Burrow",
                hotkey: "W",
                description: "The &/elves/units/Ent& burrow and becomes invisible.",
                cooldown: 8
            },
            {
                img: "/images/elves/units/ent/abilities/wrath.png",
                imgR: "/images/elves/units/ent/abilities/wrath.png",
                name: "Wrath",
                hotkey: "E",
                description: "Sacrifice the caster to release a projectile that travels in a straight line towards the selected direction. If the projectile collides with a hostile ground unit it will explode, dealing ^50^ to ^200^ damage to the target over ^6^ seconds. The projectile deals more damage the further it travels.<p>@The projectile is destroyed without any effect if it collides with a cliff or neutral object.@</p>",
            },
        ]
    },
    {
        img: "/images/elves/units/druid/druid.webp",
        imgR: "/images/elves/units/druid/druidR.webp",
        name: "Druid",
        team: "elves",
        hotkey: "R",
        gold: 60,
        supply: 3,
        feed: "24-48",
        treeOfTechnologyUpgrades: true,
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
                img: "/images/elves/units/druid/abilities/faerieFire.webp",
                imgR: "/images/elves/units/druid/abilities/faerieFireR.webp",
                name: "Faerie Fire",
                hotkey: "F",
                mana: 50,
                description: "Remove all armor from the target and reveal it for ^5^ seconds. The effect duration is increased for each point of armor removed and can last up to ^15^ seconds in total.",
                cooldown: 15
            },
            {
                img: "/images/elves/units/druid/abilities/blizzard.png",
                imgR: "/images/elves/units/druid/abilities/blizzard.png",
                name: "Blizzard",
                hotkey: "E",
                mana: 35,
                description: "Call down shards of ice that deal up to ^400^ damage and reduce move speed by up to ^60%^ over ^8^ seconds. The damage and slow ramp up over time.<br><br><p>@The damage stack if layered, but not the slow.@</p>",
                cooldown: 4
            },
            {
                img: "/images/elves/units/druid/abilities/cleanse.webp",
                imgR: "/images/elves/units/druid/abilities/cleanseR.webp",
                name: "Cleanse",
                hotkey: "D",
                mana: 75,
                description: "Dispel most magical effects within ^200^ range that are harmful to allies or beneficial to enemies. This effect remains on the target for ^1^ second.",
                cooldown: 120
            },
            {
                img: "/images/elves/units/druid/abilities/drainMana.webp",
                imgR: "/images/elves/units/druid/abilities/drainManaR.webp",
                name: "Drain Mana",
                hotkey: "W",
                mana: 6,
                description: "Drain up to ^20^ mana over ^8^ seconds from the target and give it to the caster. The user must be within ^700^ range of the target to maintain the effect.",
                cooldown: 12
            },
            {
                img: "/images/elves/units/druid/abilities/healingRain.webp",
                imgR: "/images/elves/units/druid/abilities/healingRainR.webp",
                name: "Healing Rain",
                hotkey: "T",
                mana: 100,
                description: "Create a healing rain that restores ^100%^ life to allied units and structures within ^400^ range over ^20^ seconds.",
                cooldown: 180
            },
            {
                img: "/images/elves/units/druid/abilities/slumber.webp",
                imgR: "/images/elves/units/druid/abilities/slumberR.webp",
                name: "Slumber",
                hotkey: "R",
                mana: 75,
                description: "Sleep the target for ^4^ seconds. Sleeping units wake up if they take damage.",
                cooldown: 10
            }
        ]
    },
    {
        img: "/images/elves/units/hippogryph/hippogryph.webp",
        imgR: "/images/elves/units/hippogryph/hippogryphR.webp",
        name: "Hippogryph",
        team: "elves",
        description: "<p>@This unit is not trainable!@</p><p>$Morphs from &/elves/units/Owl Scout&.$</p>The hippogryph is a ferocious flying predator that weakens the target by reducing its move speed. They are most effective when used in large packs to chase down injured foes or to kill isolated enemies.",
        feed: "16-32",
        treeOfTechnologyUpgrades: true,
        stats: {
            "Attack Damage": 4,
            "Attack Speed": 1.0,
            "Attack Range": 750,
            "Move speed": 300,
            "Health": 50
        },
        transformsTo: [
            "Owl Scout",
            "Hippogryph Rider"
        ],
        abilities: [
            {
                img: "/images/elves/units/hippogryph/abilities/deepWounds.webp",
                imgR: "/images/elves/units/hippogryph/abilities/deepWoundsR.webp",
                name: "Deep Wounds",
                description: "Attacks deal ^100%^ extra damage as true damage to orcs and reduce the targets move speed by ^2%^ for ^4^ seconds. The slow is stackable, but are limited to one stack per unit.",
                passive: true,
            },
            {
                img: "/images/elves/units/owlScout/owlScout.webp",
                imgR: "/images/elves/units/owlScout/owlScoutR.webp",
                name: "Transform to &/elves/units/Owl Scout&",
                hotkey: "M",
                description: "Transforms the &/elves/units/Hippogryph& into an &/elves/units/Owl Scout&.",
                cooldown: 40,
            },
            {
                img: "/images/elves/units/hippogryphRider/hippogryphRider.webp",
                imgR: "/images/elves/units/hippogryphRider/hippogryphRiderR.webp",
                name: "Take &/elves/units/Archer&",
                hotkey: "Q",
                description: "The hippogryph rider is a flying ranged attacker with high mobility. It can be used to defend large bases, to harass the enemy from a distance and to chase down isolated or injured foes.",
            }
        ]
    },
    {
        img: "/images/elves/units/hippogryphRider/hippogryphRider.webp",
        imgR: "/images/elves/units/hippogryphRider/hippogryphRiderR.webp",
        name: "Hippogryph Rider",
        description: "<p>@This unit is not trainable!@</p><p>$Morphs from combining &/elves/units/Hippogryph& and &/elves/units/Archer&.$</p>The hippogryph rider is a flying ranged attacker with high mobility. It can be used to defend large bases, to harass the enemy from a distance and to chase down isolated or injured foes.",
        feed: "24-48",
        team: "elves",
        stats: {
            "Attack Damage": 20,
            "Attack Speed": 1.0,
            "Attack Range": 750,
            "Move speed": 300,
            "Health": 40
        },
    },
    {
        img: "/images/elves/units/ancient/ancient.webp",
        imgR: "/images/elves/units/ancient/ancientR.webp",
        name: "Ancient",
        team: "elves",
        feed: "", //TODO
        description: "<p>@This unit is not trainable!@</p><p>$Morphs from &/elves/units/Ent&.$</p><p>The &/elves/units/Ancient& is larger than the &/elves/units/Ent&, making it the perfect unit to trap your enemies. He is also slower and cannot &/elves/units/Ent#Burrow&.</p>",
        transformsTo: [
            "Ent"
        ],
        stats: {
            "Attack Damage": 18,
            "Attack Speed": 2.0,
            "Attack Range": 128,
            "Move speed": 190, // TODO CHANGE
            "Health": 50
        },
        abilities: [
            {
                img: "/images/elves/units/ent/ent.webp",
                imgR: "/images/elves/units/ent/entR.webp",
                name: "Transform to &/elves/units/Ent&",
                hotkey: "Q",
                description: "Transform the &/elves/units/Ancient& into an &/elves/units/Ent&.",
                cooldown: 20
            },
            {
                img: "/images/elves/units/ent/abilities/wrath.png",
                imgR: "/images/elves/units/ent/abilities/wrath.png",
                name: "Wrath",
                hotkey: "E",
                description: "Sacrifice the caster to release a projectile that travels in a straight line towards the selected direction. If the projectile collides with a hostile ground unit it will explode, dealing ^50^ to ^200^ damage to the target over ^6^ seconds. The projectile deals more damage the further it travels.<p>@The projectile is destroyed without any effect if it collides with a cliff or neutral object.@</p>",
            },
        ]
    },
];