/* **************************************************************************************
    This file defines objects of video games for the website.
    http://api.steampowered.com/<interface name>/<method name>/v<version>/?key=63B898D6B2D02752674CEF0A592A82A5&format=<format>

    Get all player Achievements
    https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=440&key=63B898D6B2D02752674CEF0A592A82A5&steamid=76561198004122242
    Get Owned Games
    http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=63B898D6B2D02752674CEF0A592A82A5&steamid=76561198004122242&format=json
    Get Schema For Game
    http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=63B898D6B2D02752674CEF0A592A82A5&appid=4000
***************************************************************************************** */

var collectionChartData = $.getJSON('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=63B898D6B2D02752674CEF0A592A82A5&steamid=76561198004122242&format=json', function(data) {
    return data;
});

// A chart that displays the amount of video games for each category of
// different video game systems.
const collectionChart = function(data) {
    // Get data for chart, for each video game system
    var pc = data.response.game_count;

    // Make and append Chart
    var canvas = "<canvas id='collectionChart' width='400' height='200'></canvas>";
    $("#primary-collectionChart").append(canvas);

    var ctx = $("#collectionChart");

    var chart = new Chart(ctx,  {
        type: 'bar',
        data: {
            labels: ['PC'],
            datasets: [{
                data: [pc],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
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
