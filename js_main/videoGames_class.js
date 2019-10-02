/* **************************************************************************************
    This file defines objects of video games for the website.
***************************************************************************************** */
 
const games = [
    {
        id: 1,
        name: "Monster Hunter Generations Ultimate",
    },
    {
        id: 2,
        name: "Tetris 99",
    },
    {
        id: 3,
        name: "Super Smash Bros. Ultimate",
    },
    {
        id: 4,
        name: "Pokemon: Let's Go, Pikachu!",
    },
    {
        id: 5,
        name: "Path of Exile",
    },
    {
        id: 6,
        name: "Attack on Titan / A.O.T. Wings of Freedom",
    }
]

const systems = [
    {
        id: 1,
        name: "Nintendo Switch",
        gamesID: [1, 2, 3, 4]
    },
    {
        id: 2,
        name: "PC",
        gamesID: [5, 6]
    },
]

// A chart that displays the amount of video games for each category of
// different video game systems.
const collectionChart = function(systems) {
    // Get data for chart, for each video game system
    var nintendoSwitch = systems.find(x => x.id === 1).gamesID.length;
    var pc = systems.find(x => x.id === 2).gamesID.length;

    // Make and append Chart
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
