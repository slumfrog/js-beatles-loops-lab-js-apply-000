function theBeatlesPlay(musicians, instruments){
  var empty = []
  for (var i=0; i < musicians.length; i++) {
    empty.unShift(musicians[i] + " plays " + instruments[i])
  }
  return empty
}

