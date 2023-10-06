import { spellBookAbilities } from "./spellbook";
import { altarUpgrades } from "./buildings";

const shamanAbilities = [
    {
        img: "/images/orcs/units/farseer.webp",
        imgR: "/images/orcs/units/farseerR.webp",
        name: "Far Seer (Morph 2)",
        description: "Replace the &/orcs/units/Shaman& with the &/orcs/units/Far Seer&.",
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
        description: "Activate to make the caster immune to spell and magic damage for ^3/5^ seconds. While active, harmful single target spells used on the caster are blocked.</p><p>^Counter^ - for ^0.5^ seconds after activation, harmful single target spells used against the caster are countered. Successful counters within this time window give the caster ^20/40%^ attack rate and ^10/20%^ move speed for ^8/8^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%",
    },
    {
        img: "/images/orcs/units/shaman/abilities/lightning.png",
        imgR: "/images/orcs/units/shaman/abilities/lightning.png",
        name: "Lightning",
        hotkey: "E",
        mana: "25",
        cooldown: "20/15",
        gold: 75,
        description: "Channel for ^1.5/1^ seconds to fire a lightning bolt in the selected direction. If the lightning hits a hostile ground unit it deals ^100%^ damage of the casters attack value as physical damage, workers take ^50%^ damage instead. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%<p>@The bolt cannot pierce through structures or cliffs.@</p>"
    },
    {
        img: "/images/orcs/units/shaman/abilities/firestorm.webp",
        imgR: "/images/orcs/units/shaman/abilities/firestormR.webp",
        name: "Firestorm",
        hotkey: "R",
        mana: "50",
        cooldown: "150/120",
        gold: 75,
        description: "<p>Channel for ^3^ seconds to summon a firestorm. While channeling, the storm gradually expands outwards from the center, covering an area of up to ^300/500^ radius and increase the total storm duration up to ^30^ seconds.</p><p>Enemies in the region take ^2/5^ damage per seconds while the storm is active. Blockers take ^4x^ damage. Workers cannot be harmed by this effect. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p><p>@If you stop channeling after a successful summon, then the storm will remain at it's current size.@</p>"
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
];

const trackerAbilities = [
    {
        img: "/images/orcs/units/hunter.webp",
        imgR: "/images/orcs/units/hunterR.webp",
        name: "Hunter (Morph 2)",
        description: "Replace the &/orcs/units/Tracker& with the &/orcs/units/Hunter&.",
        gold: 200
    },
    {
        img: "/images/orcs/units/tracker/abilities/doubleganger.webp",
        imgR: "/images/orcs/units/tracker/abilities/doublegangerR.webp",
        name: "Doubleganger",
        hotkey: "Q",
        mana: "50",
        cooldown: "120/90",
        gold: 75,
        description: "Summon a clone that lasts for ^120/180^ seconds and deals ^50/100%^ of the casters damage. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%",
    },
    {
        img: "/images/orcs/units/tracker/abilities/ensnare.webp",
        imgR: "/images/orcs/units/tracker/abilities/ensnareR.webp",
        name: "Ensnare",
        hotkey: "E",
        mana: "25",
        cooldown: "30/20",
        gold: 50,
        description: "Throw a net in the selected direction. Enemies hit by the net are immobilized for ^2/3^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%"
    },
    {
        img: "/images/orcs/units/tracker/abilities/trail.png",
        imgR: "/images/orcs/units/tracker/abilities/trail.png",
        name: "Trail",
        hotkey: "R",
        mana: 35,
        cooldown: "60/45",
        gold: 75,
        description: "When in motion you create a trail for the next ^10^ seconds. You have vision over the trail and allied units that stick to it have their move speed increased by ^15/30%^ and are dispelled from most slow effects. The trail lasts for ^60/90^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%"
    },
    {
        img: "/images/orcs/units/tracker/abilities/huntingParty.png",
        imgR: "/images/orcs/units/tracker/abilities/huntingParty.png",
        name: "Hunting Party",
        passive: true,
        gold: 75,
        description: "When the hunter is within ^1500^ range of a dying worker, allied players within this area gain ^5%^ additional move speed for ^7^ seconds and restore ^10^ mana to the healing ward for each allied player in range. This effect stacks up to ^4^ times."
    },
    {
        img: "/images/orcs/units/tracker/abilities/strider.webp",
        imgR: "/images/orcs/units/tracker/abilities/striderR.webp",
        name: "Strider",
        passive: true,
        gold: "40/100",
        description: "<p>^Level 1^: Increase move speed by ^25^ over ^60^ seconds.</p><p>^Level 2^: Increase move speed by ^55^ over ^60^ seconds. If you are at maximum stacks when you lose this bonus, then you gain ^10^ armor for ^6^ seconds. %%Requires &/orcs/buildings/Morph& *2*%%</p><p>@This bonus resets if you take damage.@</p>"
    },
    {
        img: "/images/orcs/units/tracker/abilities/precision.webp",
        imgR: "/images/orcs/units/tracker/abilities/precisionR.webp",
        name: "Precision",
        passive: true,
        gold: "20/40/60/80/100",
        description: "<p>^Level 1^: Increase unit damage by ^+20%^.</p><p>^Level 2^: Increase unit damage by ^+20%^.</p><p>^Level 3^: Increase unit damage by ^+20%^.</p><p>^Level 4^: Increase unit damage by ^+20%^. %%(Requires &/orcs/buildings/Morph& *2*)%%</p><p>^Level 5^: Increase unit damage by ^+20%^.</p><p>@This bonus does not apply to *Structures* or &/elves/units/Elven Worker&@</p>"
    },
];

const taurenAbilities = [
    {
        img: "/images/orcs/units/taurenchieftain.webp",
        imgR: "/images/orcs/units/taurenchieftainR.webp",
        name: "Tauren Chieftain (Morph 2)",
        description: "Replace the &/orcs/units/Tauren& with the &/orcs/units/Tauren Chieftain&.",
        gold: 200
    },
    {
        img: "/images/orcs/units/tauren/abilities/rampage.webp",
        imgR: "/images/orcs/units/tauren/abilities/rampageR.webp",
        name: "Rampage",
        hotkey: "Q",
        mana: 50,
        cooldown: "90/60",
        gold: 75,
        description: "Activate to enter a rampage that increases your attack speed by up to ^30/50%^ over ^8^ seconds and regenerate up to ^30/40%^ of your max health over ^40/60^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%<p>@Every time the caster moves, the attack speed bonus resets and the total effect duration is reduced.@</p>"
    },
    {
        img: "/images/orcs/units/tauren/abilities/barrier.png",
        imgR: "/images/orcs/units/tauren/abilities/barrier.png",
        name: "Barrier",
        hotkey: "E",
        mana: 35,
        gold: 75,
        cooldown: "150/120",
        description: "Create a protective field that lasts for ^60/90^ seconds. Allies within the field have their armor increased from ^1^ to ^8/15^ over ^30/60^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%<p>@Units that leave the area lose all stacks.@</p>"
    },
    {
        img: "/images/orcs/units/tauren/abilities/pulverize.webp",
        imgR: "/images/orcs/units/tauren/abilities/pulverizeR.webp",
        name: "Pulverize",
        hotkey: "R",
        mana: 25,
        gold: 50,
        cooldown: "300/300",
        description: "Destroy a *Natural Blocker* to gain access to a new passage. This ability has ^1/2^ charges. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%"
    },
    {
        img: "/images/orcs/units/tauren/abilities/demolish.webp",
        imgR: "/images/orcs/units/tauren/abilities/demolishR.webp",
        name: "Demolish",
        passive: true,
        gold: "30/45/60/75/90",
        description: "<p>^Level 1^: Increase damage to structures by ^10%^.</p><p>^Level 2^: Increase damage to structures by ^15%^.</p><p>^Level 3^: Increase damage to structures by ^20%^.</p><p>^Level 4^: Increase damage to structures by ^25%^. %%Requires &/orcs/buildings/Morph& *2*%%</p><p>^Level 5^: Increase damage to structures by ^30%^.</p>"
    },
    {
        img: "/images/orcs/units/tauren/abilities/timber.webp",
        imgR: "/images/orcs/units/tauren/abilities/timberR.webp",
        name: "Timber",
        passive: true,
        gold: 75,
        description: "&/elves/buildings/Blocker& kills restore ^2%^ of your total health per blocker level. If the blocker is upgraded, your max health is permanently increased by ^200^, stacking up to ^50^ times."
    }
];

const medicAbilities = [
    {
        img: "/images/orcs/units/witchdoctor.webp",
        imgR: "/images/orcs/units/witchdoctorR.webp",
        name: "Witch Doctor (Morph 2)",
        description: "Replace the &/orcs/units/Medic& with the &/orcs/units/Witch Doctor&.",
        gold: 200
    },
    {
        img: "/images/orcs/units/medic/abilities/proxyward.webp",
        imgR: "/images/orcs/units/medic/abilities/proxywardR.webp",
        name: "Proxy Ward",
        hotkey: "Q",
        mana: 35,
        cooldown: "60/40",
        gold: 75,
        description: "Place a proxy ward with ^3/5^ hit points that activates after ^8/6^ seconds delay. When active, transfer up to ^10/20%^ mana from the healing ward to the proxy ward and use it to heal allies within ^300^ range. This effect lasts for ^90/120^ seconds, or until the ward runs out of mana. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%<p>@When the proxy ward expires or is killed, all remaining mana is returned to the healing ward.@</p>"
    },
    {
        img: "/images/orcs/units/medic/abilities/dispel.webp",
        imgR: "/images/orcs/units/medic/abilities/dispelR.webp",
        name: "Dispel",
        hotkey: "R",
        mana: 50,
        cooldown: "120/90",
        gold: 75,
        description: "Dispel most magical effects within ^200^ range that are harmful to allies or beneficial to enemies. This effect triggers ^3^ times over ^2^ seconds and persists on the target for ^1^ second. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%"
    },
    {
        img: "/images/orcs/units/medic/abilities/soullink.webp",
        imgR: "/images/orcs/units/medic/abilities/soullinkR.webp",
        name: "Soul Link",
        hotkey: "E",
        mana: 25,
        cooldown: "90/60",
        gold: 50,
        description: "Swap the health percentage of the caster and the target. After ^3/5^ seconds a secondary swap occurs, reversing the effect. The caster must stay within ^1500/2000^ range of the target to maintain the effect. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%"
    },
    {
        img: "/images/orcs/units/medic/abilities/witchcraft.webp",
        imgR: "/images/orcs/units/medic/abilities/witchcraftR.webp",
        name: "Witchcraft",
        passive: true,
        gold: "15/30/45/60",
        description: "<p>^Level 1^: Increase max mana by ^+25^ and mana regeneration by ^+0.125^/second. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p><p>^Level 2^: Increase max mana by ^+25^ and mana regeneration by ^+0.125^/second.</p><p>^Level 3^: Increase max mana by ^+25^ and mana regeneration by ^+0.125^/second. %%(Requires &/orcs/buildings/Morph& *2*)%%</p><p>^Level 4^: Increase max mana by ^+25^ and mana regeneration by ^+0.125^/second.</p>"
    },
    {
        img: "/images/orcs/units/medic/abilities/decay.webp",
        imgR: "/images/orcs/units/medic/abilities/decayR.webp",
        name: "Decay",
        passive: true,
        gold: "50/75",
        description: "<p>^Level 1^: Attacks prevent hostile units and structures from being healed over ^4^ seconds.</p><p>^Level 2^: Attacks prevent hostile units and structures from being healed over ^8^ seconds. %%(Requires &/orcs/buildings/Morph& *2*)%%</p>"
    }
];

const inventorAbilities = [
    {
        img: "/images/orcs/units/engineer.webp",
        imgR: "/images/orcs/units/engineerR.webp",
        name: "Engineer (Morph 2)",
        description: "Replace the &/orcs/units/Inventor& with the &/orcs/units/Engineer&.",
        gold: 200
    },
    {
        img: "/images/orcs/units/inventor/abilities/warpgate.webp",
        imgR: "/images/orcs/units/inventor/abilities/warpgateR.webp",
        name: "Warp Gate",
        hotkey: "Q",
        mana: 35,
        cooldown: "45/30",
        gold: 75,
        description: "Create a portal with ^3/5^ health at your current location that activates after a ^5^ second delay. When active, it will link up to any other active portal that you own. The portal lasts for ^90/120^ seconds, or until it is killed.<p>Allied players can use the portal to teleport between the two portal locations, or to return back to the *Healing Ward* if no other portal is found. A unit cannot teleport more than once every ^5^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p>"
    },
    {
        img: "/images/orcs/units/inventor/abilities/vortex.png",
        imgR: "/images/orcs/units/inventor/abilities/vortex.png",
        name: "Vortex",
        hotkey: "R",
        mana: 50,
        cooldown: "120/90",
        gold: 75,
        description: "Channel for ^4^ seconds to summon a vortex at the selected location. Enemies that enter the vortex have their move speed reduced by ^80%^ and if they remain in the area for ^3/2^ seconds, they disappear and are trapped in another dimension for up to ^15/20^ seconds.<p>When the vortex expires, all trapped units will reappear and enemies within ^200^ range are stunned for ^3^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p>"
    },
    {
        img: "/images/orcs/units/inventor/abilities/visionward.webp",
        imgR: "/images/orcs/units/inventor/abilities/visionwardR.webp",
        name: "Vision Ward",
        hotkey: "E",
        mana: 25,
        cooldown: "90/60",
        gold: 50,
        description: "Place a vision ward with ^2/4^ health at the selected location. The ward vision expands from ^600^ to ^1000/1400^ range over ^120/60^ seconds. Lasts up to ^180^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%"
    },
    {
        img: "/images/orcs/units/inventor/abilities/energyshield.webp",
        imgR: "/images/orcs/units/inventor/abilities/energyshieldR.webp",
        name: "Energy Shield",
        passive: true,
        gold: 75,
        description: "Increase armor by ^1^ for every ^25^ points of current mana. Up to a maximum of ^6^ bonus armor. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%"
    },
    {
        img: "/images/orcs/units/inventor/abilities/energy.webp",
        imgR: "/images/orcs/units/inventor/abilities/energyR.webp",
        name: "Energy",
        passive: true,
        gold: "15/30/45/60",
        description: "<p>^Level 1^: Increase max mana by ^+25^ and mana regeneration by ^+0.125^/second. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p><p>^Level 2^: Increase max mana by ^+25^ and mana regeneration by ^+0.125^/second.</p><p>^Level 3^: Increase max mana by ^+25^ and mana regeneration by ^+0.125^/second. %%(Requires &/orcs/buildings/Morph& *2*)%%</p><p>^Level 4^: Increase max mana by ^+25^ and mana regeneration by ^+0.125^/second.</p>"
    },
    {
        img: "/images/orcs/units/inventor/abilities/battery.png",
        imgR: "/images/orcs/units/inventor/abilities/battery.png",
        name: "Battery",
        passive: true,
        gold: "50/75",
        description: "<p>^Level 1^: Whenever an enemy within ^600^ radius uses a spell, ^10%^ of the mana cost is stored and added to your current mana pool. After collecting a total of ^50^ mana, the stored energy is consumed to create an energy field around the user. When active, allies within ^500^ range regenerate ^2^ mana per second. This effect lasts for ^15^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p><p>^Level 2^: Whenever an enemy within ^600^ radius uses a spell, ^20%^ of the mana cost is stored and added to your current mana pool. After collecting a total of ^50^ mana, the stored energy is consumed to create an energy field around the user. When active, allies within ^500^ range regenerate ^3^ mana per second. This effect lasts for ^15^ seconds.</p>"
    }
];

const berserkerAbilities = [
    {
        img: "/images/orcs/units/warlord.webp",
        imgR: "/images/orcs/units/warlordR.webp",
        name: "Warlord (Morph 2)",
        description: "Replace the &/orcs/units/Berserker& with the &/orcs/units/Warlord&.",
        gold: 200
    },
    {
        img: "/images/orcs/units/berserker/abilities/guard.webp",
        imgR: "/images/orcs/units/berserker/abilities/guardR.webp",
        name: "Guard",
        hotkey: "Q",
        mana: 50,
        cooldown: "90/60",
        gold: 75,
        description: "Activate to record all incoming damage and heal the caster for ^125/150%^ of the damage taken after ^8/6^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p>"
    },
    {
        img: "/images/orcs/units/berserker/abilities/conquer.webp",
        imgR: "/images/orcs/units/berserker/abilities/conquerR.webp",
        name: "Conquer",
        hotkey: "R",
        mana: 25,
        cooldown: "40/30",
        gold: 50,
        description: "Place a banner with ^3/5^ health at your current location that disables the selected tower from performing any actions for the next ^40/60^ seconds. The effect is interrupted if the banner is destroyed. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p>"
    },
    {
        img: "/images/orcs/units/berserker/abilities/menace.webp",
        imgR: "/images/orcs/units/berserker/abilities/menaceR.webp",
        name: "Menace",
        hotkey: "E",
        mana: 35,
        cooldown: "120/90",
        gold: 75,
        description: "Mark the selected worker for ^40/60^ seconds. Allies within ^300^ range of the target have their attack rate increased by ^30/45%^ over ^30/40^ seconds. %%(Requires &/orcs/buildings/altar#Conjurer& *1*)%%</p>"
    },
    {
        img: "/images/orcs/units/berserker/abilities/cleave.webp",
        imgR: "/images/orcs/units/berserker/abilities/cleaveR.webp",
        name: "Cleave",
        passive: true,
        gold: "75/",
        cooldown: 8,
        description: "Upgraded blockers kills increase attack speed by ^20%^ and cause your attacks to deal ^50%^ damage to structures within ^60^ range for the next ^5^ seconds."
    },
    {
        img: "/images/orcs/units/berserker/abilities/ruin.webp",
        imgR: "/images/orcs/units/berserker/abilities/ruinR.webp",
        name: "Ruin",
        passive: true,
        gold: "30/45/60/75/90",
        description: "<p>^Level 1^: Increase damage to structures by ^10%^.</p><p>^Level 2^: Increase damage to structures by ^15%^.</p><p>^Level 3^: Increase damage to structures by ^20%^.</p><p>^Level 4^: Increase damage to structures by ^25%^. %%(Requires &/orcs/buildings/Morph& *2*)%%</p><p>^Level 5^: Increase damage to structures by ^30%^.</p>"
    },
    {
        img: "/images/orcs/units/berserker/abilities/lifesteal.webp",
        imgR: "/images/orcs/units/berserker/abilities/lifestealR.webp",
        name: "Lifesteal",
        passive: true,
        gold: "25/35/45/55/65/75",
        description: "<p>^Level 1^: Normal attacks heal you for ^50%^ of the damage dealt.</p><p>^Level 2^: Normal attacks heal you for ^100%^ of the damage dealt.</p><p>^Level 3^: Normal attacks heal you for ^150%^ of the damage dealt.</p><p>^Level 4^: Normal attacks heal you for ^200%^ of the damage dealt.</p><p>^Level 5^: Normal attacks heal you for ^250%^ of the damage dealt. %%(Requires &/orcs/buildings/Morph& *2*)%%</p><p>^Level 6^: Normal attacks heal you for ^300%^ of the damage dealt.</p>"
    }
];

export const orcsUnits = [
    {
        img: "/images/orcs/units/grunt/grunt.webp",
        imgR: "/images/orcs/units/grunt/gruntR.webp",
        name: "Grunt",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", //TODO
        stats: {
            "Damage": 14,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 3000,

        },
        abilities: spellBookAbilities,
    },
    //Morphs Level 1
    {
        img: "/images/orcs/units/shaman/shaman.webp",
        imgR: "/images/orcs/units/shaman/shamanR.webp",
        name: "Shaman",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "<p>^Replace the &/orcs/units/Grunt& with &/orcs/units/Shaman&.^</p><p>A spell-caster and short-ranged attacker. The shaman can snipe exposed targets, roam and protect allies from traps. But he is vulnerable to physical damage and require solid positioning to stay alive and to score kills.</p>",
        stats: {
            "Damage": 15,
            "Attack speed": 1.8,
            "Attack range": 130,
            "Move speed": 270,
            "Health": 4500
        },
        abilities: shamanAbilities,
    },
    {
        img: "/images/orcs/units/tracker/tracker.webp",
        imgR: "/images/orcs/units/tracker/trackerR.webp",
        name: "Tracker",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "<p>^Replace the &/orcs/units/Grunt& with &/orcs/units/Tracker&.^</p><p>The tracker is a mobile melee attacker that excels at roaming, where he can cover a lot of ground and use various tools to catch his prey. But he is vulnerable to magic damage and may struggle against tower bases.</p>",
        stats: {
            "Damage": 15,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 4500
        },
        abilities: trackerAbilities,
    },
    {
        img: "/images/orcs/units/tauren/tauren.webp",
        imgR: "/images/orcs/units/tauren/taurenR.webp",
        name: "Tauren",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "<p>^Replace the &/orcs/units/Grunt& with &/orcs/units/Tauren&.^</p><p>A slow and durable melee attacker. The tauren has exceptional survival capacity and can apply consistent pressure over long periods of time. He is vulnerable to physical attacks and can easily be outmaneuvered by agile foes.</p>",
        stats: {
            "Damage": 16,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 240,
            "Health": 6000
        },
        abilities: taurenAbilities
    },
    {
        img: "/images/orcs/units/medic/medic.webp",
        imgR: "/images/orcs/units/medic/medicR.webp",
        name: "Medic",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "<p>^Replace the &/orcs/units/Grunt& with &/orcs/units/Medic&.^</p><p>The medic is a flexible support character with abilities that influence both allies and enemies. Positional awareness benefit him greatly and make it easier to stay alive and to assist the team. He is vulnerable to physical damage and may be at risk when played alone.</p>",
        stats: {
            "Damage": 15,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 5000
        },
        abilities: medicAbilities
    },
    {
        img: "/images/orcs/units/inventor/inventor.webp",
        imgR: "/images/orcs/units/inventor/inventorR.webp",
        name: "Inventor",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "<p>^Replace the &/orcs/units/Grunt& with &/orcs/units/Inventor&.^</p><p>A support character that relies on zone control and strategic placement. The inventor has access to many tools that contribute to map control, but his creations are deniable and require maintenance. He is most effective when left undisturbed, but struggles with foes that actively seek out and destroy his inventions. He is vulnerable to magic damage.</p>",
        stats: {
            "Damage": 15,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 5000
        },
        abilities: inventorAbilities
    },
    {
        img: "/images/orcs/units/berserker/berserker.webp",
        imgR: "/images/orcs/units/berserker/berserkerR.webp",
        name: "Berserker",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "<p>^Replace the &/orcs/units/Grunt& with &/orcs/units/Berserker&.^</p><p>The berserker is an offensive pusher with moderate survivability. He is vulnerable to magic damage and may struggle with tower bases.</p>",
        stats: {
            "Damage": 16,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 6000
        },
        abilities: berserkerAbilities
    },
    //Morphs Level 2
    {
        img: "/images/orcs/units/hunter.webp",
        imgR: "/images/orcs/units/hunterR.webp",
        name: "Hunter",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "<p>A level 2 Morph unit, replaces the &/orcs/units/Tracker&.</p>",
        stats: {
            "Damage": 20,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 7000
        },
    },
    {
        img: "/images/orcs/units/farseer.webp",
        imgR: "/images/orcs/units/farseerR.webp",
        name: "Far Seer",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "<p>A level 2 Morph unit, replaces the &/orcs/units/Shaman&.</p>",
        stats: {
            "Damage": 20,
            "Attack speed": 1.8,
            "Attack range": 160,
            "Move speed": 270,
            "Health": 7000
        },
    },
    {
        img: "/images/orcs/units/taurenchieftain.webp",
        imgR: "/images/orcs/units/taurenchieftainR.webp",
        name: "Tauren Chieftain",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "<p>A level 2 Morph unit, replaces the &/orcs/units/Tauren&.</p>",
        stats: {
            "Damage": 20,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 240,
            "Health": 11000
        },
    },
    {
        img: "/images/orcs/units/witchdoctor.webp",
        imgR: "/images/orcs/units/witchdoctorR.webp",
        name: "Witch Doctor",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "<p>A level 2 Morph unit, replaces the &/orcs/units/Medic&.</p>",
        stats: {
            "Damage": 20,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 9000
        },
    },
    {
        img: "/images/orcs/units/engineer.webp",
        imgR: "/images/orcs/units/engineerR.webp",
        name: "Engineer",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "<p>A level 2 Morph unit, replaces the &/orcs/units/Inventor&.</p>",
        stats: {
            "Damage": 20,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 9000
        },
    },
    {
        img: "/images/orcs/units/warlord.webp",
        imgR: "/images/orcs/units/warlordR.webp",
        name: "Warlord",
        team: "orcs",
        type: "units",
        externalUpgrades: [
            {
                name: "Altar",
                url: "/orcs/buildings/altar",
            }
        ],
        description: "<p>A level 2 Morph unit, replaces the &/orcs/units/Berserker&.</p>",
        stats: {
            "Damage": 20,
            "Attack speed": 1.5,
            "Attack range": 92,
            "Move speed": 270,
            "Health": 11000
        },
    }
];