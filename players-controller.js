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
    this.getPlayersByPosition = function (event) {
        event.preventDefault()
        var position = (event.target.position.value)
        console.log(position)
        var players = playersService.getPlayersByPosition(position)
        console.log(players)
        drawPlayers(players)
    }
    this.getPlayersByName = function (event) {
        // event.preventDefault()
        var firstname = (event.target.firstname.value)
        console.log(firstname)
        var players = playersService.getPlayersByName(firstname)
        console.log(players)
        drawPlayers(players)
    }
    this.getMyTeam = function (event) {
var players = playersService.getMyTeam()
drawMyTeam()
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
            <button type="submit" class="btn btn-default" onclick="app.controllers.playersController.addPlayer(${player.id})">Add</button>
            </div>
            </div>
            </div>
            `
        }
        playersElem.innerHTML = template
    }

    function drawMyTeam(players) {
        console.log("test")
    //    var players = getMyPlayer()                           //add functionality here with a get my player function
        var myPlayersElem = document.getElementById('myTeam')
               
        var template = ''
        for (var i = 0; i < player.length; i++) {
            var player = player[i];
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
            <button type="submit" class"btn btn-default">Remove</button>
            </div>
            </div>
            </div>
            `
        }
       console.log("test2")
        myPlayersElem.innerHTML = template
        console.log("test3")
    }
    this.addPlayer = function addPlayer(id) {
        var players = playersService.addPlayer(id)
         playersService.addPlayer(id)
        getmyplayers()
        drawMyTeam()
    }
    this.removePlayer = function removePlayer(id) {
        playersService.removePlayer(id)
        drawPlayers()
    }


}

// this.addPlayer = function addPlayer(event) {
//     event.preventDefault()
//     var form = event.target
//     playersService.addPlayer
// }

