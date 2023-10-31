export const spellBookAbilities = [
    {
        img: "/images/orcs/spellbook/scryer.png",
        imgR: "/images/orcs/spellbook/scryerR.png",
        name: "Scryer",
        hotkey: "W",
        mana: "20/15/10",
        cooldown: "60/30/0",
        description: "<p>^Level 1^: Gain vision over ^600^ radius for ^6^ seconds and reveal invisible units. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p><p>^Level 2^: Gain vision over ^600^ radius for ^8^ seconds and reveal invisible units. The effect persists on workers for up to ^3^ seconds after leaving the area. %%(Requires &/orcs/buildings/altar#Conjurer& *3*)%%</p><p>^Level 3^: Gain vision over ^600^ radius for ^10^ seconds and reveal invisible units. The effect persists on workers for up to ^5^ seconds after leaving the area. All &/elves/units/ElvenWorker#Watching Owl&*s* in the region are dispelled. %%(Requires &/orcs/buildings/altar#Conjurer& *5*)%%</p>"
    },
    {
        img: "/images/orcs/spellbook/corruption.webp",
        imgR: "/images/orcs/spellbook/corruptionR.webp",
        name: "Corruption",
        hotkey: "E",
        mana: "20/15/10",
        cooldown: "40/20/2",
        description: "<p>^Level 1^: Spawn a seed of corruption that activates after ^12^ seconds delay, making the area unbuildable for up to ^60^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p><p>^Level 2^: Spawn a seed of corruption that activates after ^10^ seconds delay, making the area unbuildable for up to ^90^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *3*)%%</p><p>^Level 3^: Spawn a seed of corruption that activates after ^8^ seconds delay, making the area unbuildable for up to ^120^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *5*)%%</p>"
    },
    {
        img: "/images/orcs/spellbook/haunt.webp",
        imgR: "/images/orcs/spellbook/hauntR.webp",
        name: "Haunt",
        hotkey: "R",
        mana: "40/40/40",
        cooldown: "60/45/40",
        description: "<p>^Level 1^: Summon a spirit with ^500^ vision and ^100^ health and order it to haunt a neutral &/elves/buildings/Gold Mine&. Haunted gold mines cannot be mined from while the spirit is present. This effect lasts for ^60^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p><p>^Level 2^: Summon a spirit with ^500^ vision and ^500^ health and order it to haunt a neutral &/elves/buildings/Gold Mine&. Haunted gold mines cannot be mined from while the spirit is present. This effect lasts for ^90^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *2*)%%</p><p>^Level 3^: Summon a spirit with ^500^ vision and ^1000^ health and order it to haunt a neutral &/elves/buildings/Gold Mine&. Haunted gold mines cannot be mined from, the area becomes unbuildable and up to ^50^ gold is removed from the mine while the spirit is present. This effect lasts for ^120^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *4*)%%</p>"
    },
    {
        img: "/images/orcs/spellbook/turret.webp",
        imgR: "/images/orcs/spellbook/turretR.webp",
        name: "Turret",
        hotkey: "S",
        mana: "50/50/50",
        cooldown: "30/15/0",
        description: "<p>^Level 1^: Place a turret with ^2^ health at the selected point that activates after ^5^ seconds. Active turrets can attack blockers within ^500^ radius, dealing ^10^ damage per hit. The turret lats up to ^60^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *2*)%%</p><p>^Level 2^: Place a turret with ^3^ health at the selected point that activates after ^5^ seconds. Active turrets can attack blockers within ^500^ radius, dealing ^15^ damage per hit. If no targets are found, the turret will become invisible. The turret lats up to ^90^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *3*)%%</p><p>^Level 3^: Place a turret with ^4^ health at the selected point that activates after ^5^ seconds. Active turrets can attack blockers within ^500^ radius, dealing ^20^ damage per hit. The turrets attack rate is increased by ^50%^ over ^90^ seconds. If no targets are found, the turret will become invisible. The turret lats up to ^120^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *5*)%%</p>"
    },
    {
        img: "/images/orcs/spellbook/ghost.png",
        imgR: "/images/orcs/spellbook/ghost.png",
        name: "Ghost",
        hotkey: "D",
        mana: "20/20/20",
        cooldown: "60/45/30",
        description: "<p>^Level 1^: While active the caster has no unit collision, but is unable to attack or cast spells. This effect lasts for a minimum of ^2^ seconds or until the caster can be placed. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p><p>^Level 2^: While active the caster has no unit collision, and moves ^20%^ faster, but is unable to attack or cast spells. This effect lasts for a minimum of ^3^ seconds or until the caster can be placed. %%(Requires &/orcs/buildings/altar#Conjurer& *3*)%%</p><p>^Level 3^: While active the caster has no unit collision, and moves ^40%^ faster, but is unable to attack or cast spells. This effect lasts for a minimum of ^4^ seconds or until the caster can be placed. %%(Requires &/orcs/buildings/altar#Conjurer& *3*)%%</p>"
    },
    {
        img: "/images/orcs/spellbook/dart.webp",
        imgR: "/images/orcs/spellbook/dartR.webp",
        name: "Dart",
        hotkey: "F",
        mana: "35/35/35",
        cooldown: "60/45/30",
        description: "<p>^Level 1^: Fire a poisoned in the selected direction. If the projectile collides with a hostile ground unit it deals ^10^ damage over ^10^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *2*)%%</p><p>^Level 2^: Fire a poisoned in the selected direction. If the projectile collides with a hostile ground unit it deals ^25^ damage over ^10^ seconds. If the projectile travels further than ^200^ range the targets move speed is reduced up to ^40%^ based on the total distance traveled, for a maximum of ^3^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *3*)%%</p><p>^Level 3^: Fire a poisoned in the selected direction. If the projectile collides with a hostile ground unit it deals ^40^ damage over ^10^ seconds. If the projectile travels further than ^200^ range the targets move speed is reduced up to ^80%^ based on the total distance traveled, for a maximum of ^4^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *4*)%%</p>"
    }
];