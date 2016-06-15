'use strict';

describe('djList', function(){
  beforeEach(module('djList'));

  describe('DjListController', function(){
    var $httpBackend, ctrl;
    beforeEach(inject(function($componentController, _$httpBackend_){
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('songs/songs.json').respond(
      { "artist" : "Brainwash 2000", "album" : "", "title" : "King Of Demos", "bpm" : 87, "key" : "cm", "genre" : "Hip-Hop" },
      { "artist" : "Brainwash 2000", "album" : "", "title" : "Break It Down", "bpm" : 88, "key" : "c#m", "genre" : "Hip-Hop" }
    );
      ctrl = $componentController('djList');
    }));

    it('should create a songs model with 2 songs fetched with `$http`', inject(function($componentController){
      expect(ctrl.songs).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.songs).toEqual([
        { "artist" : "Brainwash 2000", "album" : "", "title" : "King Of Demos", "bpm" : 87, "key" : "cm", "genre" : "Hip-Hop" },
        { "artist" : "Brainwash 2000", "album" : "", "title" : "Break It Down", "bpm" : 88, "key" : "c#m", "genre" : "Hip-Hop" }
      ]);
    }));
    it('should set a default value for the `orderProp` property', function(){
      expect(ctrl.orderProp).toBe('bpm');
    });
  }); //describe controller
}); //describe djList
