'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('DjList Application', function() {
  describe('djList', function(){
    beforeEach(function(){
      browser.get('index.html');
    });
    it('should filter the dj list as a user types into the search box', function(){
      var djList = element.all(by.repeater('song in $ctrl.songs'));
      var query = element(by.model('$ctrl.query'));
      expect(djList.count()).toBe(3);
      query.sendKeys('Johnny');
      expect(djList.count()).toBe(1);
      query.clear();
      query.sendKeys("That's all");
      expect(djList.count()).toBe(1);
    });
  });
});
