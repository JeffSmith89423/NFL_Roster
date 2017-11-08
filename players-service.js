var PlayersService = function (endpointUri, callback) {
    var playersData = [];

    // var filteredPlayers = playersData.filter(function (players) {
    //     if (playersData.pro_team === "SF") {
    //         return true;
    //     }
    // });


    // function Player(firstname, position, pro_team)
    //  this.firstname = firstname
    //  this.position = position
    //  this.pro_team = pro_team

    this.getPlayersByTeam = function (teamName) {
        return playersData.filter(function (player) {
            if (player.pro_team === teamName) {
                return true;
            }
        });
    }

    

    this.getPlayersByPosition = function (position) {
        return playersData.filter(function (player) {
            if (player.position === position) {
                return true;
            }
        });
    }

    this.getPlayersByName = function (firstname) {
        return playersData.filter(function (player) {
            if (player.firstname === firstname) {
                return true;
            }
        });
    }

    this.addToMyTeam = function () {

    }

    this.removeFromMyTeam = function () {

    }

    function loadPlayersData() {



        var localData = localStorage.getItem('playersData');
        if (localData) {
            playersData = JSON.parse(localData);
            console.log(playersData)
            return callback(playersData);

        }

        var url = "https://bcw-getter.herokuapp.com/?url=";
        var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
        var apiUrl = url + encodeURIComponent(endpointUri);

        $.getJSON(apiUrl, function (data) {
            playersData = data.body.players;
            console.log('Player Data Ready')
            console.log('Writing Player Data to localStorage')
            localStorage.setItem('playersData', JSON.stringify(playersData))
            console.log('Finished Writing Player Data to localStorage')
            callback(playersData)
        });
    }
    loadPlayersData(); //call the function above every time we create a new service
} 