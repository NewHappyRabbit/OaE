export const altarUpgrades = [
    {
        name: "Rage", // Main upgrade category
        hotkey: "Q",
        description: "Increase the movement speed and attack rate of your unit.",
        //TODO
    },
    {
        name: "Weapon",
        hotkey: "W",
        //TODO
    },
    {
        name: "Armor",
        hotkey: "E",
        //TODO I have all the images for the upgrades
    },
    {
        name: "Conjurer",
        hotkey: "R",
        //TODO
    },
    {
        name: "Recover",
        hotkey: "A",
        //TODO
    }
]

export const orcsBuildings = [
    {
        img: "/images/orcs/buildings/altar.webp",
        imgR: "/images/orcs/buildings/altarR.webp",
        name: "Altar",
        description: "*The Altar* is used to research upgrades for your unit. Located in the top-left corner of the map.",
        upgrades: altarUpgrades
        // TODO upgrades: [ conjurer, dmg, ...]
    },
    {
        img: "/images/orcs/buildings/morph.webp",
        imgR: "/images/orcs/buildings/morphR.webp",
        name: "Morph",
        description: "This building is used to morph your unit into a stronger unit with more abilities. Located in the top-left corner of the map.",
        //TODO all morphs price to upg
    }
];