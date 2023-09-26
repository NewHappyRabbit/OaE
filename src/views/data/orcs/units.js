import { spellBookAbilities } from "./spellbook";

export const orcsUnits = [
    {
        img: "/images/orcs/units/grunt/grunt.webp",
        imgR: "/images/orcs/units/grunt/gruntR.webp",
        name: "Grunt",
        team: "orcs",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", //TODO
        stats: {
            "Damage": 14,
            "Move speed": "N/A", //TODO Check
            "Health": 3000,
            //TODO
        },
        abilities: spellBookAbilities
    },
    {
        img: "/images/orcs/units/shaman/shaman.webp",
        imgR: "/images/orcs/units/shaman/shamanR.webp",
        name: "Shaman",
        team: "orcs",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", //TODO
        stats: {
            "Damage": 15,
            "Attack speed": 1.8,
            "Attack range": 130,
            "Move speed": 270,
            "Health": 4500
        },
        // abilities //TODO Only the ones for this unit (not spellbook)
    },
    {
        img: "/images/orcs/units/tracker/tracker.webp",
        imgR: "/images/orcs/units/tracker/trackerR.webp",
        name: "Tracker",
        team: "orcs",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", //TODO
        stats: {
            "Damage": 15,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 4500
        },
        // abilities //TODO Only the ones for this unit (not spellbook)
    },
    {
        img: "/images/orcs/units/tauren/tauren.webp",
        imgR: "/images/orcs/units/tauren/taurenR.webp",
        name: "Tauren",
        team: "orcs",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", //TODO
        stats: {
            "Damage": 16,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 240,
            "Health": 6000
        },
        // abilities //TODO Only the ones for this unit (not spellbook)
    },
    {
        img: "/images/orcs/units/medic/medic.webp",
        imgR: "/images/orcs/units/medic/medicR.webp",
        name: "Medic",
        team: "orcs",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", //TODO
        stats: {
            "Damage": 15,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 5000
        },
        // abilities //TODO Only the ones for this unit (not spellbook)
    },
    {
        img: "/images/orcs/units/inventor/inventor.webp",
        imgR: "/images/orcs/units/inventor/inventorR.webp",
        name: "Inventor",
        team: "orcs",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", //TODO
        stats: {
            "Damage": 15,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 5000
        },
        // abilities //TODO Only the ones for this unit (not spellbook)
    },
    {
        img: "/images/orcs/units/berserker/berserker.webp",
        imgR: "/images/orcs/units/berserker/berserkerR.webp",
        name: "Berserker",
        team: "orcs",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", //TODO
        stats: {
            "Damage": 16,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 6000
        },
        // abilities //TODO Only the ones for this unit (not spellbook)
    },
    //TODO Add the other (the ones you can upgrade to later)
];