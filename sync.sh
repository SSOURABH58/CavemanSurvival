#!/bin/bash

# Caveman Survival - Instance Sync Script
# Use this script to push your latest local code (KubeJS scripts, configs, mods)
# directly into your active launcher instance folder for fast testing!

DEFAULT_TARGET="/Users/sourabhsoni/Documents/curseforge/minecraft/Instances/Caveman Dev alpha"
TARGET_DIR="${1:-$DEFAULT_TARGET}"

if [ ! -d "$TARGET_DIR" ]; then
    echo "❌ Error: Directory '$TARGET_DIR' does not exist!"
    echo "Make sure your CurseForge instance is created and named correctly."
    exit 1
fi

echo "🚀 Syncing Caveman Survival modpack to:"
echo "   $TARGET_DIR"

# Sync kubejs folder
if [ -d "kubejs" ]; then
    echo "📦 Syncing kubejs scripts..."
    mkdir -p "$TARGET_DIR/kubejs"
    rsync -av --delete kubejs/ "$TARGET_DIR/kubejs/"
fi

# Sync mods folder
if [ -d "mods" ]; then
    echo "🧩 Syncing mods..."
    mkdir -p "$TARGET_DIR/mods"
    rsync -av --delete mods/ "$TARGET_DIR/mods/"
fi

# Sync config folder if present
if [ -d "config" ]; then
    echo "⚙️ Syncing config..."
    mkdir -p "$TARGET_DIR/config"
    rsync -av config/ "$TARGET_DIR/config/"
fi

echo "✅ Sync complete!"
echo "💡 If Minecraft is currently running, run '/kubejs reload' in chat to see script changes instantly!"
