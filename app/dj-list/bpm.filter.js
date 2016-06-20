angular.
  module('djList').
  filter('bpm', function(){
    return function(songs, lowBPM, highBPM){
      var result = [];
      for (var i = 0; i < songs.length; i++ ){ //TypeError: Cannot read property 'length' of undefined
        var song = songs[i];
        if ( song.bpm >= lowBPM && song.bpm <= highBPM) {
          result.push(song);
        } //conditional
      }//for loop
      return result;
    } //return function
  });
