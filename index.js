function theBeatlesPlay(musicians, instruments){
  var empty = []
  for (var i=0 ; i < musicians.length; i++) {
    empty.push(empty[i]) + " plays " + instruments[i]  
  }
  return empty
}


function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}
