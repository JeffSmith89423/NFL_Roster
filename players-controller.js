function PlayersController(){
    var loading = true; //Start the spinner
    var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var playerService = new PlayersService(apiUrl, ready);
    
    function ready(playersData){
        loading = false; //stop the spinner
        
        
        //Now that all of our player data is back we can safely setup our bindings for the rest of the view.
    
        
        }
   
   
        function drawPlayers() {
            // WHERE ARE ALL THE AUTOS?
            var players = playersService.getPlayers()
            var template = ''
            for (var i = 0; i < players.length; i++) {
              var player = players[i];
              template += `
                    <div class="col-md-3">
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <h3>${player.firstname}</h3>
                                <h6>${player.position}</h6>
                            </div>
                            <div class="panel-body text-center">
                                <img src="${player.img}" class="img-responsive">
                                <h4>${auto.year} - ${auto.make} ${auto.model}</h4>
                            </div>
                            <div class="panel-footer">
                                <h5>$ ${auto.price}</h5>
                            </div>
                        </div>
                    </div>
                    `
            }
            playersElem.innerHTML = template
          }

    this.addPlayer = function addPlayer(event){
    event.preventDefault()
    var form = event.target
    playersService.addPlayer
    }
                      
}


