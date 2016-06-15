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
      });
  }
});
