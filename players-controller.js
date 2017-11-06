function PlayersController() {
    var loading = true;
    var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var playerService = new PlayersService(apiUrl, ready);

    var playersElem = document.getElementById('teamName')

    function ready(playersData) {
        loading = false;
    }

    this.getPlayersByTeam = function (event){
        event.preventDefault()
var teamName = (event.target.teamName.value)
        console.log(teamName)
        playerService.getPlayersByTeam(teamName)
    }
    
    
    function drawPlayers() {
        debugger
        var player = playersService.getPlayersByTeam() 
        var template = ''
        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            template += `
            <div class="col-md-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <div class="panel-body text-center">
                            <img src="${players.photo}" class="img-responsive">
                </div>
            <h3>${players.firstname}</h3>
            <h3>${players.pro_team}</h3>
            <h6>${players.position}</h6>
            </div>
            </div>
            </div>
            `
        }
        playersElem.innerHTML = template
    } 
    
    this.addPlayer = function addPlayer(event) {
        event.preventDefault()
        var form = event.target
        playersService.addPlayer
    }
    // drawPlayers()
}


