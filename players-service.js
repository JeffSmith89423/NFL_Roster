var PlayersService = function (endpointUri, callback) {
    var playersData = [];
    var myTeam = [];
    console.log(myTeam)

    this.getPlayersByTeam = function (teamName) {
        return playersData.filter(function (player) {
            if (player.pro_team === teamName) {
                return true;
            }
        });
    }
    this.getMyTeam = function (){
        debugger
        return JSON.parse(JSON.stringify(myTeam))
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
    this.addPlayer = function addPlayer(id) {
        for (var i = 0; i < playersData.length; i++) {
            var player = playersData[i];
            if (player.id == id) {
                myTeam.push(player)
            }
        }
    }

    this.removePlayer = function removePlayer(id) {
        for (var j = 0; j < myTeam.length; j++) {
            var player = myTeam[j];
            if (player.id == id) {
                myTeam.splice(j, 1)
            }
        }
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
    loadPlayersData();
} 