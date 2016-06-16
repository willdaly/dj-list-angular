angular.
  module('djlistApp').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!');
        $routeProvider.
          when('/songs', {
            template: '<dj-list></dj-list>'
          }).
          when('/playlists/:playlistId', {
            template: '<play-list></play-list>'
          }).
          otherwise('/songs');
      }
]);
