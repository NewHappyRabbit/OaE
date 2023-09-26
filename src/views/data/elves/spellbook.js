export const spellBookAbilities = [
    {
        img: "/images/elves/spellbook/regrowth.webp",
        imgR: "/images/elves/spellbook/regrowthR.webp",
        name: "Regrowth",
        hotkey: "Q",
        mana: "40/40/40",
        cooldown: "20/15/10",
        description: "<p>^Level 1^: Restore up to ^150^ life over ^20^ seconds to an allied structure. The healing cannot exceed ^100%^ of the targets max health. %%(Requires &/buildings/treeOfTechnology#Magic& *1*)%%</p><p>^Level 2^: Restore up to ^225^ life over ^20^ seconds to an allied structure. The building also gains ^5^ armor over ^15^ seconds. The healing cannot exceed ^150%^ of the targets max health. %%(Requires &/buildings/treeOfTechnology#Magic& *2*)%%</p><p>^Level 3^: Restore up to ^300^ life over ^20^ seconds to an allied structure. The building also gains ^5^ armor over ^10^ seconds. The healing cannot exceed ^200%^ of the targets max health. If the target is killed by a hostile unit while the armor bonus is maxed, then the area will be covered in vines for ^3^ seconds. Enemies that step on the vines are snared until they expire. %%(Requires &/buildings/treeOfTechnology#Magic& *4*)%%</p>"
    },
    {
        img: "/images/elves/spellbook/watchingOwl.webp",
        imgR: "/images/elves/spellbook/watchingOwlR.webp",
        name: "Watching Owl",
        hotkey: "W",
        mana: "40/35/30",
        cooldown: "60/45/30",
        description: "<p>^Level 1^: Place a watching owl at the selected point that gives vision over ^500^ range for ^60^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *1*)%%</p><p>^Level 2^: Place a watching owl at the selected point that gives vision over ^700^ range for ^90^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *3*)%%</p><p>^Level 3^: Place a watching owl at the selected point that gives vision over ^900^ range for ^120^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *5*)%%</p>"
    },
    {
        img: "/images/elves/spellbook/reverse.webp",
        imgR: "/images/elves/spellbook/reverseR.webp",
        name: "Reverse",
        hotkey: "E",
        mana: "20/20/20",
        cooldown: "60/50/40",
        description: "<p>^Level 1^: Activate to memorize your current position for ^5^ seconds. While active, you can reactivate this ability for ^10^ mana to return to this location. %%(Requires &/buildings/treeOfTechnology#Magic& *1*)%%</p><p>^Level 2^: Activate to memorize your movement patterns for the next ^10^ seconds. You can reactivate this ability for ^7^ mana to teleport back ^3^ seconds in time. You can teleport up to ^4^ times. %%(Requires &/buildings/treeOfTechnology#Magic& *2*)%%</p><p>^Level 3^: Activate to memorize your movement patterns for the next ^15^ seconds. You can reactivate this ability for ^5^ mana to teleport back ^3^ seconds in time. You can teleport up to ^8^ times. %%(Requires &/buildings/treeOfTechnology#Magic& *3*)%%</p>"
    },
    {
        img: "/images/elves/spellbook/restore.webp",
        imgR: "/images/elves/spellbook/restoreR.webp",
        name: "Restore",
        hotkey: "R",
        range: "200/300/400",
        cooldown: "10/8/6",
        description: "<p>^Level 1^: Heal a friendly unit for ^1^ life per point of mana until the target is fully healed or you run out of mana. %%(Requires &/buildings/treeOfTechnology#Magic& *1*)%%</p><p>^Level 2^: Heal a friendly unit for ^1.5^ life per point of mana until the target is fully healed or you run out of mana. The cooldown is reduced to ^4^ seconds when used on a non-worker target. %%(Requires &/buildings/treeOfTechnology#Magic& *2*)%%</p><p>^Level 3^: Heal a friendly unit for ^21.5^ life per point of mana until the target is fully healed or you run out of mana. The cooldown is reduced to ^2^ seconds when used on a non-worker target. %%(Requires &/buildings/treeOfTechnology#Magic& *3*)%%</p>"
    },
    {
        img: "/images/elves/spellbook/freeze.webp",
        imgR: "/images/elves/spellbook/freezeR.webp",
        name: "Freeze",
        hotkey: "A",
        mana: "20/20/20",
        cooldown: "60/45/30",
        description: "<p>^Level 1^: Silence the target and reduce move speed by ^90%^ for ^1^ second. %%(Requires &/buildings/treeOfTechnology#Magic& *1*)%%</p><p>^Level 2^: Deal ^100^ damage and silence the target for ^1^ second. Movement speed is reduced by ^90%^, which fades away over ^2^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *2*)%%</p><p>^Level 3^: Deal ^200^ damage and silence the target for ^1^ second. Movement speed is reduced by ^90%^, which fades away over ^3^ seconds. If the target has less than ^30%^ health, your remaining mana is consumed to deal ^10^ damage per point of mana over over ^3^ seconds. This effect stacks. %%(Requires &/buildings/treeOfTechnology#Magic& *5*)%%</p>"
    },
    {
        img: "/images/elves/spellbook/recycle.webp",
        imgR: "/images/elves/spellbook/recycleR.webp",
        name: "Recycle",
        hotkey: "S",
        mana: "25/15/10",
        cooldown: "", //TODO Check if it has
        description: "<p>^Level 1^: Select a player owned unit or structure to sell. The target takes damage over time until it's killed and up to ^50%^ of the total building cost is returned over ^5^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *1*)%%</p><p>^Level 2^: Select a player owned unit or structure to sell. The target takes damage over time until it's killed and up to ^75%^ of the total building cost is returned over ^4^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *3*)%%</p><p>^Level 13^: Select a player owned unit or structure to sell. The target takes damage over time until it's killed and up to ^100%^ of the total building cost is returned over ^3^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *5*)%%</p>" //TODO Check if unit gives refund
    },
    {
        img: "/images/elves/spellbook/divineShield.png",
        imgR: "/images/elves/spellbook/divineShieldR.png",
        name: "Divine Shield",
        hotkey: "D",
        mana: "50/50/50",
        cooldown: "120/90/60",
        description: "<p>^Level 1^: Activate to make the user invulnerable for ^2^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *1*)%%</p><p>^Level 2^: Activate to make the user invulnerable for ^2.5^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *3*)%%</p><p>^Level 3^: Activate to make the user invulnerable for ^3^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *4*)%%</p>"
    },
    {
        img: "/images/elves/spellbook/possess.webp",
        imgR: "/images/elves/spellbook/possessR.webp",
        name: "Possess",
        hotkey: "F",
        mana: "40/40/40",
        cooldown: "75/60/45",
        description: "<p>^Level 1^: Possess a friendly unit and gradually increase it's move speed by ^12%^ and restore ^10^ mana to the caster and target over ^6^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *1*)%%</p><p>^Level 2^: Possess a friendly unit and gradually increase it's move speed by ^21%^ and restore ^15^ mana to the caster and target over ^8^ seconds. You can also possess a hostile unit to gradually reduce it's move speed by ^15%^ and remove ^15^ mana from the target over ^8^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *3*)%%</p><p>^Level 3^: Possess a friendly unit and gradually increase it's move speed by ^30%^ and restore ^20^ mana to the caster and target over ^10^ seconds. You can also possess a hostile unit to gradually reduce it's move speed by ^30%^ and remove ^20^ mana from the target over ^10^ seconds. If the effect remains for the full duration the target is silenced and unable to hit for ^5^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *5*)%%</p>"
    },
    {
        img: "/images/elves/spellbook/refill.webp",
        imgR: "/images/elves/spellbook/refillR.webp",
        name: "Refill",
        hotkey: "Z",
        mana: "10/8/3 per 1% gold",
        cooldown: "25/10/4 per 1% gold",
        description: "<p>^Level 1^: Select a neutral &/buildings/Gold Mine& and restore up to ^5%^ of the targets original gold value. You cannot restore more than ^20%^ gold per mine. %%(Requires &/buildings/treeOfTechnology#Magic& *2*)%%</p><p>^Level 2^: Select a neutral &/buildings/Gold Mine& and restore up to ^10%^ of the targets original gold value. You cannot restore more than ^20%^ gold per mine. %%(Requires &/buildings/treeOfTechnology#Magic& *3*)%%</p><p>^Level 3^: Select a neutral &/buildings/Gold Mine& and restore up to ^20%^ of the targets original gold value. You cannot restore more than ^20%^ gold per mine. %%(Requires &/buildings/treeOfTechnology#Magic& *5*)%%</p>"
    },
    {
        img: "/images/elves/spellbook/fade.webp",
        imgR: "/images/elves/spellbook/fadeR.webp",
        name: "Fade",
        hotkey: "V",
        mana: "50/50/50",
        cooldown: "90/75/60",
        description: "<p>^Level 1^: Activate to disable unit collision and reduce movement speed by ^40%^ for ^3^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *1*)%%</p><p>^Level 2^: Activate to disable unit collision and reduce movement speed by ^35%^ for ^5^ seconds. After ^2^ seconds delay, the user becomes invisible. %%(Requires &/buildings/treeOfTechnology#Magic& *3*)%%</p><p>^Level 3^: Activate to ^instantly^ become invisible, disable unit collision and reduce movement speed by ^30%^ for ^7^ seconds. %%(Requires &/buildings/treeOfTechnology#Magic& *4*)%%</p>"
    }
];