/*
    This file defines the video game collection that will be stored on the website.
*/

// Parameters: 
//      [name] = The name of the video game, 
//      [systems] = A list of video game systems where Cardinal Funky has the game.
//      [genres] = A list of genres for the video game.
class VideoGame {
    constructor(name, systems, genres) {
        this.name = name;
        this.systems = systems;
        this.genres = genres;
    }

    getName() {
        return this.name;
    }

    getSystems() {
        return this.systems;
    }

    getGenres() {
        return this.genres;
    }
}

const videoGames = [
    new VideoGame(
        "Monster Hunter Generation Ultimate",
        ["Nintendo Switch"],
        ["Action", "Role-Playing"]
    ),
    new VideoGame(
        "Tetris 99",
        ["Nintendo Switch"],
        ["Multiplayer", "Puzzle"]
    ),
    new VideoGame(
        "Super Smash Bros. Ultimate",
        ["Nintendo Switch"],
        ["Action", "Fighting", "Multiplayer"]
    ),
    new VideoGame(
        "Pokemon: Let's Go, Pikachu!",
        ["Nintendo Switch"],
        ["Adventure", "RPG", "Multiplayer"]
    ),
    new VideoGame(
        "Path of Exile",
        ["PC", "Steam"],
        ["Action", "Adventure", "Free to Play", "Indie", "Massively Multiplayer", "RPG"]
    ),
    new VideoGame(
        "Attack on Titan / A.O.T. Wings of Freedom",
        ["PC", "Steam"],
        ["Action"]
    ),
    new VideoGame(
        "Shadow Warrior 2",
        ["PC", "Steam"],
        ["Action", "Adventure"]
    ),
    new VideoGame(
        "Undertale",
        ["PC", "Steam"],
        ["Indie", "RPG"]
    ),
    new VideoGame(
        "Vikings - Wolves of Midgard",
        ["PC", "Steam"],
        ["Action", "RPG"]
    ),
    new VideoGame(
        "No Man's Sky",
        ["PC", "GOG Galaxy"],
        ["Adventure", "Action", "Sandbox"]
    ),
    new VideoGame(
        "Neverwinter Nights Diamond",
        ["PC", "GOG Galaxy"],
        ["RPG"]
    ),
    new VideoGame(
        "Ultima™ 4: Quest of the Avatar",
        ["PC", "GOG Galaxy"],
        ["RPG", "Adventure", "Fantasy"]
    ),
    new VideoGame(
        "Battlefield Bad Company 2",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Battlefield 3",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Battlefield 4",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Mass Effect: Andromeda",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Titanfall 2",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Bejeweled 3",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Command & Conquer Red Alert 2 and Yuri's Revenge",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Crusader: No Remorse",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Crysis 2 Maximum Edition",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Dead Space",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Dead Space 3",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Dragon Age II",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Dragon Age Inquisition",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Dragon Age Origins",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Dragon Age: Origins - Ultimate Edition",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Dungeon Keeper",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Jade Empire Special Edition",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Mass Effect",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Mass Effect 2",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Mass Effect 3",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Medal of Honor Pacific Assault",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Nox",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Peggle",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Plants vs. Zombies",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Populous",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Sim City 2000: The Ultimate City Simulator",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Syndicate (1993)",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "The Sims 3",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Theme Hospital",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Titanfall",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Ultima VIII Gold Edition",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Wing Commander III: Heart of the Tiger",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Zuma's Revenge",
        ["PC", "Origin"],
        []
    ),
    new VideoGame(
        "Subnautica",
        ["PC", "Epic Games"],
        []
    ),
    new VideoGame(
        "ABZU",
        ["PC", "Epic Games"],
        []
    ),
    new VideoGame(
        "Fortnite",
        ["PC", "Epic Games"],
        []
    ),
    new VideoGame(
        "City of Brass",
        ["PC", "Epic Games"],
        []
    ),
    new VideoGame(
        "Everything",
        ["PC", "Epic Games"],
        []
    ),
    new VideoGame(
        "Hyper Light Drifter",
        ["PC", "Epic Games", "Twitch"],
        []
    ),
    new VideoGame(
        "Last Day of June",
        ["PC", "Epic Games"],
        []
    ),
    new VideoGame(
        "Metro: 2033 Redux",
        ["PC", "Epic Games"],
        []
    ),
    new VideoGame(
        "Mutant Year Zero Road to Eden",
        ["PC", "Epic Games"],
        []
    ),
    new VideoGame(
        "PixArk",
        ["PC", "Epic Games", "Steam"],
        []
    ),
    new VideoGame(
        "RiME",
        ["PC", "Epic Games"],
        []
    ),
    new VideoGame(
        "Stories Untold",
        ["PC", "Epic Games"],
        []
    ),
    new VideoGame(
        "The End is Nigh",
        ["PC", "Epic Games"],
        []
    ),
    new VideoGame(
        "Transistor",
        ["PC", "Epic Games"],
        []
    ),
    new VideoGame(
        "A Good Snowman Is Hard To Build",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Bomber Crew",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Broforce",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Cosmic Express",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Crossing Souls",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Dear, Esther",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Downwell",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Hotline Miami",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Hotline Miami 2: Wrong Number",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Orwell",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Orwell: Ignorance Is Strength",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Pikuniku",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Republique",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Sokobond",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Strafe",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "The Flame In The Flood",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "The Messenger",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "The Swords of Ditto",
        ["PC", "Twitch"],
        []
    ),
    new VideoGame(
        "Overwatch",
        ["PC", "Blizzard"],
        []
    ),
    new VideoGame(
        "Diablo 3",
        ["PC", "Blizzard"],
        []
    ),
]

const collectionChart = function(games) {
    // Variables
    var nintendoSwitch = 0;
    var pc = 0;

    // Get data for chart
    // Where the game is on the Nintendo Switch
    for(var i = 0; i < games.length; i++) {
        var gameSystems = games[i].systems;

        for(var k = 0; k < gameSystems.length; k++) {
            if(gameSystems[k] == "Nintendo Switch") {
                nintendoSwitch += 1;
            } else if (gameSystems[k] == "PC") {
                pc += 1;
            }
        }
    }

    // Make Chart
    var canvas = "<canvas id='collectionChart' width='400' height='200'></canvas>";
    $("#primary-collectionChart").append(canvas);

    var ctx = $("#collectionChart");

    var chart = new Chart(ctx,  {
        type: 'bar',
        data: {
            labels: ['Nintendo Switch', 'PC'],
            datasets: [{
                data: [nintendoSwitch, pc],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Video Game Collection'
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        userCallback: function(label, index, labels) {
                            // when the floored value is the same as the value we have a whole number
                            if(Math.floor(label) === label) {
                                return label;
                            }
                        },
                    }
                }],
            }
        }
    });

    $("#collectionChart").append(chart)
}
