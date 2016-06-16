angular.
  module('playList').
      component('playList', {
        template: 'here are the playlists',
        controller: ['$routeParams',
          function PlayListController($routeParams) {
            this.playlistId = $routeParams.playlistId;
          }
        ]
});
