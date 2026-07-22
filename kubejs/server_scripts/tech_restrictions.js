ServerEvents.recipes(event => {
    // Array of materials to restrict
    const restrictedMaterials = ['wooden', 'iron', 'golden', 'diamond', 'netherite'];
    
    // Array of tool and armor types
    const restrictedTypes = ['sword', 'pickaxe', 'axe', 'shovel', 'hoe', 'helmet', 'chestplate', 'leggings', 'boots'];
    
    restrictedMaterials.forEach(material => {
        restrictedTypes.forEach(type => {
            // Remove crafting recipes for all restricted items
            event.remove({ output: `minecraft:${material}_${type}` });
        });
    });

    // Also remove shields, flint and steel if we want to restrict them? 
    // The user wants stone tools only. Let's keep flint and steel or maybe we remove it if they have to use campfire mechanics, 
    // but vanilla flint and steel is fine for now unless specified.
    
    console.log("CavemanSurvival: Restricted advanced technology recipes removed.");
});
