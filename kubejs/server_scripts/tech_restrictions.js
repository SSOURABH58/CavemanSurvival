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

    // 2. Early Game RLCraft-Style Flint & Plant Fiber Progression:
    // Plant Fiber -> Plant String (via No Tree Punching)
    // Loose Flint + Stone Block -> Flint Shards (Knapping)
    // Flint Shards + Plant String + Stick -> Flint Knife & Flint Hatchet

    // 3. Multi-Step Obsidian Crafting Progression:
    // Crafting Obsidian Equipment requires Obsidian Blocks, Plant String / Leather, and Wooden/Flint Sticks

    // Obsidian Pickaxe
    event.shaped('obsidianequipment:obsidian_pickaxe', [
        'OOO',
        ' L ',
        ' S '
    ], {
        O: 'minecraft:obsidian',
        L: 'minecraft:leather',
        S: 'minecraft:stick'
    });

    // Obsidian Axe
    event.shaped('obsidianequipment:obsidian_axe', [
        'OO ',
        'OL ',
        ' S '
    ], {
        O: 'minecraft:obsidian',
        L: 'minecraft:leather',
        S: 'minecraft:stick'
    });

    // Obsidian Shovel
    event.shaped('obsidianequipment:obsidian_shovel', [
        ' O ',
        ' L ',
        ' S '
    ], {
        O: 'minecraft:obsidian',
        L: 'minecraft:leather',
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

    console.log("CavemanSurvival: RLCraft-style progression & Multi-step Obsidian crafting configured!");
});
