function PlayersController() {
    var loading = true;
    var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var playersService = new PlayersService(apiUrl, drawPlayers);


    function ready(playersData) {
        loading = false;
    }

    this.getPlayersByTeam = function (event) {
        event.preventDefault()
        var teamName = (event.target.teamName.value)
        console.log(teamName)
        var players = playersService.getPlayersByTeam(teamName)
        console.log(players)
        drawPlayers(players)
}


    function drawPlayers(players) {
        var playersElem = document.getElementById('playerRoster')
        var template = ''
        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            template += `
            <div class="col-md-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <div class="panel-body text-center">
                            <img src="${player.photo}" class="img-responsive">
                </div>
            <h3>${player.firstname}</h3>
            <h3>${player.pro_team}</h3>
            <h6>${player.position}</h6>
            <button type="submit" class"btn btn-default">Add</button>
            </div>
            </div>
            </div>
            `
        }
        playersElem.innerHTML = template
    }

    
}

// this.addPlayer = function addPlayer(event) {
//     event.preventDefault()
//     var form = event.target
//     playersService.addPlayer
// }

