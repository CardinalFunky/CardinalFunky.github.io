/**
 * This file contains hard-coded data of video games and their information.
 * Each video game will have an: 
 * "id", "name", "picture", "own", "wishlist", "completed"
 * 
 * "id" => The key
 * "name" => The name of the video game
 * "picture" => The picture of the video game
 * "owned" => A boolean that tells me if I own the video game
 * "wishlist" => A boolean that tells me if this game is on my wishlist
 * "completed" => A boolean that tells me if I have completed this video game
 * "amount_paid" => The amount of money I paid for the game
 */

const videoGames = [
    {
        "id": 1,
        "name": "Attack on Titan / A.O.T. Wings of Freedom",
        "picture": "https://steamcdn-a.akamaihd.net/steam/apps/449800/header.jpg?t=1550182918",
        "owned": true,
        "wishlist": false,
        "completed": true,
        "amount_paid": 32.28
    },
    {
        "id": 2,
        "name": "Open World Game: the Open World Game",
        "picture": "https://steamcdn-a.akamaihd.net/steam/apps/1144110/header.jpg?t=1575677298",
        "owned": true,
        "wishlist": false,
        "completed": true,
        "amount_paid": 0
    }
];