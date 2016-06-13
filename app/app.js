'use strict';

var djlistApp = angular.module('djlistApp', []);

djlistApp.controller('DjListController', function DjListController($scope){
  $scope.songs = [
    { "artist" : "Johnny Pate", "Album" : "Set A Pattern", "title" : "This Guy's In Love With You", "BPM" : 76, "Key" : "C#M", "genre" : "Jazz" },
    { "artist" : "Bryan Ferry", "Album" : "Let's Stick Together", "title" : "2 HB", "BPM" : 76, "Key" : "C#M", "genre" : "Pop" },
    { "artist" : "Ingram", "Album" : "That's All", "title" : "dedication", "BPM" : 76, "Key" : "CM", "genre" : "Soul" }
  ];
});
