// Caveman Survival Rules Script

// 1. Remove Supernatural Mobs (Undead, Monsters, Spiders, Creepers)
EntityEvents.spawned(event => {
    const entityType = event.entity.type;
    
    // List of supernatural / undead / monster mobs to banish from the prehistoric world
    const bannedMobs = [
        'minecraft:zombie',
        'minecraft:skeleton',
        'minecraft:creeper',
        'minecraft:spider',
        'minecraft:cave_spider',
        'minecraft:enderman',
        'minecraft:witch',
        'minecraft:phantom',
        'minecraft:drowned',
        'minecraft:husk',
        'minecraft:stray',
        'minecraft:zombie_villager',
        'minecraft:slime',
        'minecraft:wither_skeleton'
    ];
    
    if (bannedMobs.includes(entityType)) {
        event.cancel();
    }
});

// 2. Raw Meat Illness & Mandatory Cooking Penalty
ItemEvents.foodEaten(event => {
    const item = event.item.id;
    
    // Check if player ate raw meat or raw fish
    const isRaw = item.includes('raw_') || 
                  item.includes('mutton') && !item.includes('cooked') ||
                  item.includes('porkchop') && !item.includes('cooked') ||
                  item.includes('beef') && !item.includes('cooked') ||
                  item.includes('chicken') && !item.includes('cooked');

    if (isRaw) {
        // Inflict severe raw meat sickness: Nausea, Poison, and Hunger debuff
        event.player.potionEffects.add('minecraft:nausea', 240, 1);   // 12 seconds blurred vision
        event.player.potionEffects.add('minecraft:hunger', 400, 1);   // 20 seconds hunger drain
        event.player.potionEffects.add('minecraft:poison', 160, 0);   // 8 seconds stomach pain
        
        event.player.setStatusMessage(Text.red("You feel violently sick from eating raw meat! Cooking over a fire is mandatory."));
    }
});

console.log("CavemanSurvival: Supernatural mob removal & raw meat sickness rules loaded successfully.");
