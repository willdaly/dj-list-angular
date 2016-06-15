'use strict';

describe('djList', function(){
  beforeEach(module('djList'));

  describe('DjListController', function(){
    var ctrl;
    beforeEach(inject(function($componentController){
      ctrl = $componentController('djList');
    }));

    it('should create a songs model with 6935 songs', inject(function($componentController){
      expect(ctrl.songs.length).toBe(6935);
    }));
    it('should set a default value for the `orderProp` model', function(){
      expect(ctrl.orderProp).toBe('bpm');
    });
  }); //describe controller
}); //describe djList
