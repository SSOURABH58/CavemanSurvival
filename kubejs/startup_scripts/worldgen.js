WorldgenEvents.remove(event => {
    // Remove underground lava lakes and lava springs
    // This forces the player to find surface lava or volcanoes
    event.removeFeatureById('underground_decoration', 'minecraft:spring_lava_overworld');
    event.removeFeatureById('lakes', 'minecraft:lake_lava');
    
    console.log("CavemanSurvival: Removed underground lava lakes and springs.");
});
