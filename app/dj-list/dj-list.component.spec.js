'use strict';

describe('djList', function(){
  beforeEach(module('djList'));

  describe('DjListController', function(){
    it('should create a songs model with 3 songs', inject(function($componentController){
      var ctrl = #componentController('djList');
      expect(ctrl.songs.length).toBe(3);
    }));
  });
});
