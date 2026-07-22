ServerEvents.recipes(event => {
    // Advanced tech materials to strictly restrict/prohibit
    const restrictedMaterials = ['iron', 'golden', 'diamond', 'netherite'];
    const restrictedTypes = ['sword', 'pickaxe', 'axe', 'shovel', 'hoe', 'helmet', 'chestplate', 'leggings', 'boots'];
    
    // 1. Remove recipes for forbidden high-tech tools & armor
    restrictedMaterials.forEach(material => {
        restrictedTypes.forEach(type => {
            event.remove({ output: `minecraft:${material}_${type}` });
        });
    });

    // Remove anvil, blast furnace, enchanting table to keep primitive era
    event.remove({ output: 'minecraft:anvil' });
    event.remove({ output: 'minecraft:blast_furnace' });
    event.remove({ output: 'minecraft:enchanting_table' });

    // 2. Clear Tool Progression Path:
    // Tier 1: Wooden Tools (Allowed)
    // Tier 2: Stone Tools (Allowed)
    // Tier 3: Obsidian Tools (Apex Primitive Tier)

    // Ensure Obsidian Tool crafting is straightforward with Obsidian Blocks and Sticks
    // Obsidian Pickaxe
    event.shaped('obsidianequipment:obsidian_pickaxe', [
        'OOO',
        ' S ',
        ' S '
    ], {
        O: 'minecraft:obsidian',
        S: 'minecraft:stick'
    });

    // Obsidian Axe
    event.shaped('obsidianequipment:obsidian_axe', [
        'OO ',
        'OS ',
        ' S '
    ], {
        O: 'minecraft:obsidian',
        S: 'minecraft:stick'
    });

    // Obsidian Shovel
    event.shaped('obsidianequipment:obsidian_shovel', [
        ' O ',
        ' S ',
        ' S '
    ], {
        O: 'minecraft:obsidian',
        S: 'minecraft:stick'
    });

    // Obsidian Sword
    event.shaped('obsidianequipment:obsidian_sword', [
        ' O ',
        ' O ',
        ' S '
    ], {
        O: 'minecraft:obsidian',
        S: 'minecraft:stick'
    });

    // Obsidian Hoe
    event.shaped('obsidianequipment:obsidian_hoe', [
        'OO ',
        ' S ',
        ' S '
    ], {
        O: 'minecraft:obsidian',
        S: 'minecraft:stick'
    });

    console.log("CavemanSurvival: Wood -> Stone -> Obsidian progression path configured successfully!");
});
