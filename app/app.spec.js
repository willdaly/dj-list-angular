describe('djlistApp', function(){
  beforeEach(module('djlistApp'));
  it('should create a songs model with 3 songs', inject(function($controller){
    var scope = {};
    var ctrl = $controller('DjListController', {$scope: scope});
    expect(scope.songs.length).toBe(3);
  }));
});
