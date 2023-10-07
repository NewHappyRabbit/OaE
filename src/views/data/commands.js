export const commands = {
    "global": [
        {
            name: "Give gold to a player",
            command: "-give (Player Number) (Amount)",
        },
        {
            name: "Give all your gold to a player",
            command: "-ga (Player Number)",
        },
        {
            name: "Give resurrection gold to a player",
            command: "-r (Player Number)",
        },
        {
            name: "Start a vote to kick a player",
            command: "-votekick (Player Number)",
        },
        {
            name: "Enable/Disable full shared control to specific player",
            command: "-fs (Player Number)",
        },
        {
            name: "Enable/Disable full shared control to all allies",
            command: "-fs"
        },
        {
            name: "Enable/Disable friendly fire (allies can attack your units)",
            command: "-ff"
        },
        {
            name: "Remove all messages from the screen",
            command: "-clear OR press ESC"
        },
        {
            name: "Zoom in/out",
            command: "-zoom (1500-2000)"
        },
        {
            name: "List all players and their feed %",
            command: "-players"
        },
        {
            name: "Show/Hide spellbook",
            command: "-sb OR press F2"
        },
        {
            name: "Toggle auto-hide on/off for the spellbook",
            command: "-sbh"
        },
        {
            name: "Display available skill points",
            command: "-sp"
        },
        {
            name: "Display gold in bonus pool",
            command: "-bp"
        },
        {
            name: "Display Gold per minute",
            command: "-gpm"
        },
        {
            name: "Display gold sent",
            command: "-gs"
        },
    ],
    "elves": [
        {
            name: "Display building placements for bases",
            command: "-marker"
        },
        {
            name: "List total gold harvested by all allied players",
            command: "-gm"
        },
        {
            name: "Enable/Disable Blocker cap display",
            command: "-bc"
        },
    ],
    "orcs": [
        {
            name: "List total gold collected by allied players",
            command: "-pg"
        },
        {
            name: "List total gold earned from different sources",
            command: "-ag"
        },
    ],
    "observers": [
        {
            name: "Enable/Disable vision over the entire map",
            command: "-fw"
        },
        {
            name: "View the match from a player's perspective",
            command: "-pov (Player Number)"
        },
        {
            name: "Make the camera follow a player",
            command: "-follow (Player Number)"
        },
        {
            name: "Zoom in/out",
            command: "-zoom (1500-3000)"
        },
        {
            name: "Reset the camera",
            command: "-cr"
        },
    ]
}