import { spellBookAbilities } from "./spellbook";
import { altarUpgrades } from "./buildings";

const shamanSpells = [
    {
        img: "/images/orcs/units/farseer.webp",
        imgR: "/images/orcs/units/farseerR.webp",
        name: "Far Seer (Morph 2)",
        description: "Replace the &/orcs/units/Shaman& with the &/orcs/units/Far Seer&",
        gold: 200
    },
    {
        img: "/images/orcs/units/shaman/abilities/stormshield.webp",
        imgR: "/images/orcs/units/shaman/abilities/stormshieldR.webp",
        name: "Storm Shield",
        hotkey: "Q",
        mana: "35",
        cooldown: "90/60",
        gold: 50,
        description: "<p>^Level 1^: Activate to make the caster immune to spell and magic damage for ^3/5^ seconds. While active, harmful single target spells used on the caster are blocked.</p><p>^Counter^ - for ^0.5^ seconds after activation, harmful single target spells used against the caster are countered. Successful counters within this time window give the caster ^20/40%^ attack rate and ^10/20%^ move speed for ^8/8^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p>",
    },
    {
        img: "/images/orcs/units/shaman/abilities/lightning.webp",
        imgR: "/images/orcs/units/shaman/abilities/lightningR.webp",
        name: "Lightning",
        hotkey: "E",
        mana: "25",
        cooldown: "20/15",
        gold: 75,
        description: "<p>^Level 1^: Channel for ^1.5/1^ seconds to fire a lightning bolt in the selected direction. If the lightning hits a hostile ground unit it deals ^100%^ damage of the casters attack value as physical damage, workers take ^50%^ damage instead. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p><p>@The bolt cannot pierce through structures or cliffs.@</p>"
    },
    {
        img: "/images/orcs/units/shaman/abilities/firestorm.webp",
        imgR: "/images/orcs/units/shaman/abilities/firestormR.webp",
        name: "Firestorm",
        hotkey: "R",
        mana: "50",
        cooldown: "150/120",
        gold: 75,
        description: "<p>^Level 1^: Channel for ^3^ seconds to summon a firestorm. While channeling, the storm gradually expands outwards from the center, covering an area of up to ^300/500^ radius and increase the total storm duration up to ^30^ seconds.</p><p>Enemies in the region take ^2/5^ damage per seconds while the storm is active. Blockers take ^4x^ damage. Workers cannot be harmed by this effect. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p><p>@If you stop channeling after a successful summon, then the storm will remain at it's current size.@</p>"
    },
    {
        img: "/images/orcs/units/shaman/abilities/destruction.webp",
        imgR: "/images/orcs/units/shaman/abilities/destructionR.webp",
        name: "Destruction",
        gold: "20/40/60/80",
        passive: true,
        description: "<p>^Level 1^: Increase unit damage by ^+20%^.</p><p>^Level 2^: Increase unit damage by ^+20%^.</p><p>^Level 3^: Increase unit damage by ^+20%^.</p><p>^Level 4^: Increase unit damage by ^+20%^. %%(Requires &/orcs/buildings/Morph& *2*)%%</p><p>^Level 4^: Increase unit damage by ^+20%^.</p><p>@This bonus does not apply to *Structures* or &/elves/units/Elven Worker&.@</p>"
    },
    {
        img: "/images/orcs/units/shaman/abilities/electrocute.webp",
        imgR: "/images/orcs/units/shaman/abilities/electrocuteR.webp",
        name: "Electrocute",
        gold: "40/60",
        passive: true,
        description: "<p>^Level 1^: Worker kills within ^1500^ range of the shaman increase attack damage by ^1^, stacking up to ^5^ times.</p><p>@All stacks are lost if your character is killed.@</p><p>^Level 2^: Worker kills within ^1500^ range of the shaman increase attack damage by ^2^, stacking up to ^5^ times. %%(Requires &/orcs/buildings/Morph& *2*)%%</p><p>@All stacks are lost if your character is killed.@</p>"
    },
    {
        img: "/images/orcs/units/shaman/abilities/revelation.webp",
        imgR: "/images/orcs/units/shaman/abilities/revelationR.webp",
        name: "Revelation",
        passive: true,
        gold: "60",
        description: "<p>Allow the user to see over cliffs within ^500^ radius. The vision range is increased to ^1000^ when stationary for ^6^ seconds or more, but decreases again if you move.</p><p>@This effect is disabled for ^5^ seconds if the character takes damage.@</p>"
    }
]; //DONE

const trackerSpells = [
]; //TODO

const taurenSpells = [
]; //TODO

const medicSpells = [
]; //TODO

const inventorSpells = [
]; //TODO

const berserkerSpells = [
]; //TODO

export const orcsUnits = [
    {
        img: "/images/orcs/units/grunt/grunt.webp",
        imgR: "/images/orcs/units/grunt/gruntR.webp",
        name: "Grunt",
        team: "orcs",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", //TODO
        stats: {
            "Damage": 14,
            "Attack speed": 1.5,
            "Attack range": 270,
            "Move speed": "N/A", //TODO Check
            "Health": 3000,

        },
        abilities: spellBookAbilities,
        altarUpgrades: altarUpgrades,
    },
    {
        img: "/images/orcs/units/shaman/shaman.webp",
        imgR: "/images/orcs/units/shaman/shamanR.webp",
        name: "Shaman",
        team: "orcs",
        description: "<p>Replace the &/orcs/units/Grunt& with &/orcs/units/Shaman&.</p><p>A spell-caster and short-ranged attacker. The shaman can snipe exposed targets, roam and protect allies from traps. But he is vulnerable to physical damage and require solid positioning to stay alive and to score kills. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p>", //TODO
        stats: {
            "Damage": 15,
            "Attack speed": 1.8,
            "Attack range": 130,
            "Move speed": 270,
            "Health": 4500
        },
        abilities: shamanSpells,
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

    //TODO Morphs 2: Farseer, ...
];