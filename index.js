var i = 0

function theBeatlesPlay(musicians, instruments){
  var empty = []
  for (var i=0; i < musicians.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i])
  }
  return empty
}

function johnLennonFacts(facts) {
  while(facts()) {
  console.log(facts.push + " !!!")
  }
}

cats.push('Willy');