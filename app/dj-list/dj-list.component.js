'use strict';

angular.
  module('djList').
    component('djList', {
    templateUrl: 'dj-list/dj-list.template.html',
    controller: function DjListController($http) {
      var self = this;
      self.orderProp = "bpm";
      $http.get('songs/songs.json').then(function(response){
        self.songs = response.data;
        var lowestBPM = Math.min.apply(Math, self.songs.map(function(song){return song.bpm}));
        var highestBPM = Math.max.apply(Math, self.songs.map(function(song){return song.bpm}));
        self.bpmSlider = {
          min: lowestBPM,
          max: highestBPM,
          options: {
            floor: lowestBPM,
            ceil: highestBPM
          } //options
        }; //bpmSlider
      }); //http.get
  } //controller
}); //component
